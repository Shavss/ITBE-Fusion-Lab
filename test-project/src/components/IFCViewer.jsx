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
    background: rgb(242, 240, 237);
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
  const infoRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [hoverInfo, setHoverInfo] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const cleanupRef = useRef(null); // Ref to store cleanup function
  const userToken = localStorage.getItem('token'); // Get user token for requests


  useEffect(() => {
    fetchUnresolvedRequests();
  }, []);

  const fetchUnresolvedRequests = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/maintenance/unresolved", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setComments(data);
      } else {
        console.error("Error fetching unresolved requests:", data.message);
      }
    } catch (error) {
      console.error("Error fetching unresolved requests:", error);
    }
  };

  const submitMaintenanceRequest = async (elementId, elementName, userComment) => {
    try {
      const response = await fetch("http://localhost:5001/api/maintenance/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          elementId,
          elementName,
          comment: userComment,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Add the new request to the list without waiting for re-fetch
        setComments((prev) => [
          ...prev,
          { elementId, elementName, comment: userComment, resolved: false },
        ]);
        alert("Maintenance request submitted successfully!");
      } else {
        alert("Error submitting maintenance request: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting maintenance request:", error);
      alert("Failed to submit maintenance request.");
    }
  };


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create();

    world.scene = new OBC.SimpleScene(components);
    world.renderer = new OBC.SimpleRenderer(components, container);
    world.camera = new OBC.SimpleCamera(components);

    components.init();

    if (world.camera.controls) {
      world.camera.controls.setLookAt(12, 1.6, 8, 0, 1.6, -10);
    }

    world.scene.setup();

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
        const file = await fetch("/test2.ifc");
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        model = await fragmentIfcLoader.load(buffer);
        model.name = "example";
        world.scene.three.add(model);

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (!child.userData.uniqueID) {
              child.userData.uniqueID = child.name || "Unnamed_Group";
            }
            if (!child.userData.name) {
              child.userData.name = child.name || "Unnamed element";
            }
          }
        });

        cleanupRef.current = setupRaycasting(
          components,
          world,
          model,
          submitMaintenanceRequest,
          setHoverInfo
        );

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading IFC model:", error);
        setIsLoading(false);
      }
    }

    loadIfc();

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
      world.scene.three.clear();
      world.renderer.dispose();
      world.camera.dispose();
      fragmentIfcLoader.cleanUp();
    };
  }, []);

  function setupRaycasting(components, world, ifcModel, submitRequest, setHoverInfo) {
    const raycasters = components.get(OBC.Raycasters);
    const raycaster = raycasters.get(world);

    const container = containerRef.current;
    if (!container) return () => {};

    let previousHover = null;
    const defaultMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff" });
    const highlightMaterial = new THREE.MeshStandardMaterial({ color: "#BCF124" });

    function onMouseMove(event) {
      const result = raycaster.castRay(ifcModel.children);
      if (previousHover) {
        if (!result || !(result.object instanceof THREE.Mesh) || result.object !== previousHover) {
          previousHover.material = defaultMaterial;
          previousHover = null;
          setHoverInfo("");
        }
      }

      if (result && result.object instanceof THREE.Mesh) {
        const hoveredMesh = result.object;
        if (hoveredMesh !== previousHover) {
          hoveredMesh.material = highlightMaterial;
          previousHover = hoveredMesh;
          setHoverInfo(`Hovering: ${hoveredMesh.userData.name}\nUUID: ${hoveredMesh.uuid}`);
        }
      }
    }

    function onDoubleClick(event) {
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      raycaster.three.setFromCamera(mouse, world.camera.three);
      const intersects = raycaster.three.intersectObjects(ifcModel.children, true);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        const elementName = clickedMesh.userData.name || "Unnamed element";
        const elementId = clickedMesh.uuid;

        const userComment = prompt(`Add a maintenance request for "${elementName}":`);
        if (userComment) {
          submitRequest(elementId, elementName, userComment);
        }
      }
    }

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("dblclick", onDoubleClick); // Remove double-click listener
   return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("dblclick", onDoubleClick);
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
          </div>
        </div>

        {/* Comments Sidebar */}
        <div className="comments-sidebar">
          <h2>Unresolved maintenance requests</h2>
          {comments.length === 0 && <p>No maintenance requests yet.</p>}
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
              <strong>{comment.elementName}</strong> <em>({comment.elementId})</em>
              <p>{comment.comment}</p>
              <small>Requested by: {comment.requestedBy?.email || "Unknown"}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
