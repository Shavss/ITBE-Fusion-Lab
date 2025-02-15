// src/components/IFCViewer.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import Stats from "stats.js";
import * as OBF from "@thatopen/components-front";

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
    BUI.Manager.init();
    const viewport = containerRef.current;
    if (!viewport) return;

    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create();
    const sceneComponent = new OBC.SimpleScene(components);
    sceneComponent.setup();
    
    world.scene = sceneComponent;
    
    const rendererComponent = new OBC.SimpleRenderer(components, viewport);
    world.renderer = rendererComponent;
    const cameraComponent = new OBC.SimpleCamera(components);
    world.camera = cameraComponent;
    cameraComponent.controls.setLookAt(0, 0, -2, 0, 0, -4);
    

    world.scene.three.background = new THREE.Color(0xffffff);

    components.init();

    

    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    // Setup IFC loader settings
   
    let model = null;

    async function loadIfc() {
      try {
        const IfcLoader = components.get(OBC.IfcLoader)
        await IfcLoader.setup()
        const file = await fetch("/test2.ifc");
        const buffer = await file.arrayBuffer();
        const typedArray = new Uint8Array(buffer);
        const model = await IfcLoader.load(typedArray);
        world.scene.three.add(model);
        const indexer = components.get(OBC.IfcRelationsIndexer);
        await indexer.process(model);
           
      const baseStyle = { padding: "0.25rem", borderRadius: "0.25rem" };

      const tableDefinition = {
        Entity: (entity) => {
          let style = {};
          if (entity === OBC.IfcCategoryMap[WEBIFC.IFCPROPERTYSET]) {
            style = {
              ...baseStyle,
              backgroundColor: "purple",
              color: "white",
            };
          }
          if (String(entity).includes("IFCWALL")) {
            style = {
              ...baseStyle,
              backgroundColor: "green",
              color: "white",
            };
          }
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${entity}</bim-label>`;
        },
        PredefinedType: (type) => {
          const colors = ["#1c8d83", "#3c1c8d", "#386c19", "#837c24"];
          const randomIndex = Math.floor(Math.random() * colors.length);
          const backgroundColor = colors[randomIndex];
          const style = { ...baseStyle, backgroundColor, color: "white" };
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${type}</bim-label>`;
        },
        NominalValue: (value) => {
          let style = {};
          if (typeof value === "boolean" && value === false) {
            style = { ...baseStyle, backgroundColor: "#b13535", color: "white" };
          }
          if (typeof value === "boolean" && value === true) {
            style = { ...baseStyle, backgroundColor: "#18882c", color: "white" };
          }
          return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;
        },
      };
      

    
      
        const modelID = model.modelID;

        // Traverse each mesh, fetch the IFC type, and store it in userData.name
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const expressID = child.userData.expressID;
            if (expressID !== undefined) {
              // Query the IFC properties
              ifcManager.getItemProperties(modelID, expressID, true).then((props) => {
                if (props && props.type) {
                  // e.g. "IFCWALL", "IFCSLAB"
                  const typeRaw = props.type.replace(/^IFC/i, '');
                  const niceType = typeRaw.charAt(0) + typeRaw.slice(1).toLowerCase();
                  child.userData.name = niceType;
                } else {
                  // Fallback if no type is available
                  child.userData.name = `Element #${expressID}`;
                }
              });
            } else {
              // Fallback if no expressID
              child.userData.name = child.name || "Wall";
            }
          }
        });

        // Setup raycasting and interactivity
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
      // Cleanup on unmount
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
    container.addEventListener("dblclick", onDoubleClick);
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
            </div>
          )}

          <div
            ref={containerRef}
            className="viewer-content"
            style={{ width: "100%", height: "100%", position: "relative" }}
          />
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
              <strong>{comment.elementName}</strong>
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
 * Camera Panel code (unchanged)
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
