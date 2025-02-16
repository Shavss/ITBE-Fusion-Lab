// src/components/IFCViewer.jsx

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import Stats from "stats.js";
import * as OBCF from "@thatopen/components-front";

const panelStyle = `
  .camera-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9999; 
  }
  
  /* Style for the info overlay */
  .info-overlay {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 12px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    border-radius: 4px;
    z-index: 9999;
    pointer-events: none;
    white-space: pre-line; /* To preserve line breaks */
  }
  
  /* Style for the comments sidebar */
  .comments-sidebar {
    width: 300px;
    height: 100%;
    overflow-y: auto;
    background: #f0f0f0;
    padding: 10px;
    box-sizing: border-box;
    border-left: 1px solid #ccc;
  }

  .comments-container {
    display: flex;
    width: 100%;
    height: 100vh; /* Full viewport height */
  }

  .viewer-container {
    flex: 1;
    position: relative;
  }

  /* Loader Overlay */
  .loader-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000; /* Ensure it's above viewer content but below Navbar */
  }

  .spinner {
      border: 8px solid #f3f3f3; /* Light grey */
      border-top: 8px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 1s linear infinite;
  }

  @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
  }
`;

const IFCViewer = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const infoRef = useRef(null);

  // Store comments as an array of objects { id, name, comment }
  const [comments, setComments] = useState([]);

  // We'll store a "hoverInfo" (string or object) to display in an overlay
  const [hoverInfo, setHoverInfo] = useState("");

  const [isLoading, setIsLoading] = useState(true); // Loading state

  const cleanupRef = useRef(null); // Ref to store cleanup function

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /********************************************************
     * 1) Initialize ThatOpen Components
     ********************************************************/
    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);

    // 2) Create a ShadowedScene world
    const world = worlds.create();
    world.scene = new OBC.ShadowedScene(components);
    world.renderer = new OBCF.PostproductionRenderer(components, container);
    world.camera = new OBC.OrthoPerspectiveCamera(components);

    // Enable shadows, etc.
    world.renderer.three.shadowMap.enabled = true;
    world.renderer.three.shadowMap.type = THREE.PCFSoftShadowMap;

    world.scene.setup({
      shadows: {
        cascade: 1,
        resolution: 1024
      },
    });
    world.scene.three.background = null;
    components.init();

    world.camera.projection.current = "Perspective";

    // Grid
    const grids = components.get(OBC.Grids);
    const grid = grids.create(world);
    world.scene.distanceRenderer.excludedObjects.add(grid.three);
    world.camera.projection.onChanged.add(() => {
      grid.fade = (world.camera.projection.current === "Perspective");
    });

    /********************************************************
     * 3) IFC / Fragments
     ********************************************************/
    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    fragmentIfcLoader.settings.wasm = {
      path: "https://unpkg.com/web-ifc@0.0.66/",
      absolute: true,
    };
    fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;

    let model = null;

    async function loadIfc() {
      try {
        const file = await fetch("/final_design.ifc"); // Ensure this path is correct
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        model = await fragmentIfcLoader.load(buffer);
        model.name = "example";
        world.scene.three.add(model);

        markMeshShadows(model);

        // Assign uniqueID and name to each mesh
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Assign a unique identifier for the construction group
            if (!child.userData.uniqueID) {
              // Example: Use mesh name or another property
              child.userData.uniqueID = child.name || "Unnamed_Group";
            }

            // Ensure each mesh has a name
            if (!child.userData.name) {
              child.userData.name = child.name || "Unnamed element";
            }
          }
        });

        // Stats
        const stats = new Stats();
        stats.showPanel(2);
        if (statsRef.current) {
          statsRef.current.appendChild(stats.dom);
          stats.dom.style.left = "10px";
          stats.dom.style.top = "10px";
          stats.dom.style.zIndex = "1000";
        }
        world.renderer.onBeforeUpdate.add(() => stats.begin());
        world.renderer.onAfterUpdate.add(() => stats.end());

        //createShadowPlane(world);
        //await world.scene.updateShadows();

        // 4) Once model loaded, set up RAYCASTING
        cleanupRef.current = setupRaycasting(components, world, model, setComments, setHoverInfo);

        // Model has loaded, set isLoading to false
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading IFC model:", error);
        // Optionally, set isLoading to false or show an error message
        setIsLoading(false);
      }
    }
    loadIfc();

    fragments.onFragmentsLoaded.add((loadedModel) => {
      console.log("Fragments loaded:", loadedModel);
    });

    // Update shadows if camera moves
    //world.camera.controls.addEventListener("update", async () => {
    //  await world.scene.updateShadows();
    //});

    // UI Panel
    const panel = createCameraPanel(world, () => model);
    container.appendChild(panel);

    // Cleanup function
    return () => {
      // Remove event listeners added by setupRaycasting
      if (cleanupRef.current) {
        cleanupRef.current();
      }

      if (panel && panel.parentNode) {
        panel.parentNode.removeChild(panel);
      }
      world.scene.three.clear();
      world.renderer.dispose();
      world.camera.dispose();
      fragmentIfcLoader.cleanUp();

      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, []); // Empty dependency array ensures this runs once

  // Function to set up raycasting with cleanup
  function setupRaycasting(components, world, ifcModel, setComments, setHoverInfo) {
    const raycasters = components.get(OBC.Raycasters);
    const raycaster = raycasters.get(world);

    const container = containerRef.current; 
    if (!container) return () => {};

    let previousHover = null;

    const defaultMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff" });
    const highlightMaterial = new THREE.MeshStandardMaterial({ color: "#BCF124" });

    // Event Handlers
    function onMouseMove(event) {
      const result = raycaster.castRay(ifcModel.children);

      if (previousHover) {
        const noMeshOrDifferent =
          !result ||
          !(result.object instanceof THREE.Mesh) ||
          (result.object !== previousHover);

        if (noMeshOrDifferent) {
          previousHover.material = defaultMaterial;
          previousHover = null;
          setHoverInfo("");
        }
      }

      if (!result || !(result.object instanceof THREE.Mesh)) {
        return;
      }

      const hoveredMesh = result.object;

      if (hoveredMesh !== previousHover) {
        hoveredMesh.material = highlightMaterial;
        previousHover = hoveredMesh;

        const elementName = hoveredMesh.userData.name || "Unnamed element";
        setHoverInfo(`Hovering element: ${elementName}\nUUID: ${hoveredMesh.uuid}`);
      }
    }

    function onDoubleClick(event) {
      // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
      const rect = container.getBoundingClientRect();
      const mouseDblClick = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      // Update the raycaster with the camera and mouse position
      raycaster.three.setFromCamera(mouseDblClick, world.camera.three);

      // Intersect only with model's children to exclude ground plane
      const intersectsDbl = raycaster.three.intersectObjects(ifcModel.children, true);

      if (intersectsDbl.length > 0) {
        const clickedMesh = intersectsDbl[0].object;
        const elementName = clickedMesh.userData.name || "Unnamed element";
        const elementUUID = clickedMesh.uuid;

        // Prompt user for a comment
        const userComment = prompt(`Add a comment for "${elementName}":`);
        if (userComment) {
          // Add the comment to the comments state
          setComments((prevComments) => [
            ...prevComments,
            {
              id: elementUUID,
              name: elementName,
              comment: userComment,
            },
          ]);
        }
      }
    }

    // Attach Event Listeners
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("dblclick", onDoubleClick); // Changed from 'click' to 'dblclick'

    // Return Cleanup Function
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("dblclick", onDoubleClick); // Remove double-click listener
    };
  }

  return (
    <div>
      <style>{panelStyle}</style>

      <div className="comments-container">
        {/* 3D Viewer */}
        <div className="viewer-container">
          {/* Info overlay for building data */}
          {hoverInfo && (
            <div className="info-overlay" ref={infoRef}>
              {hoverInfo}
            </div>
          )}

          {/* Loading Overlay */}
          {isLoading && (
            <div className="loader-overlay">
              <div className="spinner"></div>
              {/* Optional: Add a loading message */}
              {/* <div className="loading-text">Loading Model...</div> */}
            </div>
          )}

          <div
            ref={containerRef}
            className="viewer-content"
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div
              ref={statsRef}
              style={{ position: "absolute", top: "0px", left: "0px" }}
            />
          </div>
        </div>

        {/* Comments Sidebar */}
        <div className="comments-sidebar">
          <h2>Comments</h2>
          {comments.length === 0 && <p>No comments yet.</p>}
          {comments.map((comment, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                padding: "5px",
                background: "#fff",
                borderRadius: "4px",
              }}
            >
              <strong>{comment.name}</strong> <em>({comment.id})</em>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/************************************************
 * Shadow code, same as your snippet
 ************************************************/
function markMeshShadows(object3D) {
  object3D.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      let isOpaque = true;
      const mats = Array.isArray(child.material)
        ? child.material
        : [child.material];
      for (const mat of mats) {
        if (mat.opacity < 1) {
          isOpaque = false;
          break;
        }
      }
      if (isOpaque) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    }
  });
}

function createShadowPlane(world) {
  const planeGeom = new THREE.PlaneGeometry(50, 50);
  const planeMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const planeMesh = new THREE.Mesh(planeGeom, planeMat);
  planeMesh.rotation.x = -Math.PI / 2;
  planeMesh.position.set(0, -1, 0);
  planeMesh.receiveShadow = true;
  world.scene.three.add(planeMesh);
}

/************************************************
 * Camera Panel code
 ************************************************/
function createCameraPanel(world, getModel) {
  BUI.Manager.init();
  const panel = BUI.Component.create(() => {
    return BUI.html`
      <bim-panel active label="Camera Controls" class="camera-panel">
        <bim-panel-section collapsed label="Controls">
          <bim-dropdown required label="Navigation mode"
            @change="${(ev) => {
              const selected = ev.target.value[0];
              if (
                world.camera.projection.current === "Orthographic" &&
                selected === "FirstPerson"
              ) {
                alert("FirstPerson not compatible with ortho!");
                ev.target.value[0] = world.camera.mode.id;
                return;
              }
              world.camera.set(selected);
            }}">
            <bim-option checked label="Orbit"></bim-option>
            <bim-option label="FirstPerson"></bim-option>
            <bim-option label="Plan"></bim-option>
          </bim-dropdown>

          <bim-dropdown required label="Camera projection"
            @change="${(ev) => {
              const selected = ev.target.value[0];
              if (
                selected === "Orthographic" &&
                world.camera.mode.id === "FirstPerson"
              ) {
                alert("First person not compatible with ortho!");
                ev.target.value[0] = world.camera.projection.current;
                return;
              }
              world.camera.projection.set(selected);
            }}">
            <bim-option checked label="Perspective"></bim-option>
            <bim-option label="Orthographic"></bim-option>
          </bim-dropdown>

          <bim-checkbox label="Allow user input" checked
            @change="${(ev) => {
              world.camera.setUserInput(ev.target.checked);
            }}">
          </bim-checkbox>

          <bim-button label="Fit IFC"
            @click="${() => {
              const model = getModel();
              if (model) {
                world.camera.fit([model]);
              } else {
                alert("Model not loaded yet!");
              }
            }}">
          </bim-button>
        </bim-panel-section>
      </bim-panel>
    `;
  });
  return panel;
}

export default IFCViewer;