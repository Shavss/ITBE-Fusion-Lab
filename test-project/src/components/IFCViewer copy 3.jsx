import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import Stats from "stats.js";
import * as OBCF from "@thatopen/components-front";
// Ensure that PostproductionRenderer is correctly imported if needed
import { PostproductionRenderer } from "@thatopen/components-front"; // Verify export

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
`;

// Helper function to normalize input to an array
const toArray = (items) => {
  if (Array.isArray(items)) return items;
  if (items instanceof Set) return Array.from(items);
  if (items) return [items];
  return [];
};

const IFCViewer = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const infoRef = useRef(null);

  // Store "hoverInfo" to display in an overlay
  const [hoverInfo, setHoverInfo] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /********************************************************
     * 1) Initialize ThatOpen Components
     ********************************************************/
    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);

    // 2) Create a ShadowedScene world with PostproductionRenderer
    const world = worlds.create();
    world.scene = new OBC.ShadowedScene(components);
    
    // Initialize PostproductionRenderer if available, else fallback to SimpleRenderer
    try {
      world.renderer = new PostproductionRenderer(components, container); // Correctly initialized
    } catch (error) {
      console.warn("PostproductionRenderer not found. Falling back to SimpleRenderer.", error);
      world.renderer = new OBC.SimpleRenderer(components, container);
    }
    
    world.camera = new OBC.OrthoPerspectiveCamera(components);

    // Enable shadows
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
        const file = await fetch("/dummy.ifc"); // Ensure this path is correct
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        model = await fragmentIfcLoader.load(buffer);
        model.name = "example";
        world.scene.three.add(model);

        markMeshShadows(model);

        // Verify and assign userData properties if necessary
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Assign unique identifier if not present
            if (!child.userData.uniqueID && child.name) {
              // Replace with actual logic to retrieve unique ID from IFC data
              child.userData.uniqueID = child.name; // Placeholder
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
          stats.dom.style.zIndex = "100";
        }
        world.renderer.onBeforeUpdate.add(() => stats.begin());
        world.renderer.onAfterUpdate.add(() => stats.end());

        createShadowPlane(world);
        await world.scene.updateShadows();

      } catch (error) {
        console.error("Error loading IFC model:", error);
      }
    }
    loadIfc();

    fragments.onFragmentsLoaded.add((loadedModel) => {
      console.log("Fragments loaded:", loadedModel);
    });

    // Update shadows if camera moves
    world.camera.controls.addEventListener("update", async () => {
      await world.scene.updateShadows();
    });

    // UI Panel
    const panel = createCameraPanel(world, () => model);
    container.appendChild(panel);

    /********************************************************
     * 4) Setup Highlighter for Selection and Hover
     ********************************************************/
    const highlighter = components.get(OBCF.Highlighter);
    highlighter.setup({ world });
    highlighter.zoomToSelection = true;

    // Configure Highlighter materials for selection and hover
    highlighter.selectionMaterial = new THREE.MeshBasicMaterial({
      color: 0xbcf124,
      transparent: true,
      opacity: 0.5,
    });

    highlighter.hoverMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000, // Red color for hover
      transparent: true,
      opacity: 0.5,
    });

    /********************************************************
     * 5) Handle Selection Highlight Events
     ********************************************************/
    highlighter.events.select.onHighlight.add(async (selectedObjects) => {
      // Normalize to array
      const objectsArray = toArray(selectedObjects);
      
      if (objectsArray.length === 0) {
        setHoverInfo("");
        return;
      }

      // Retrieve and display IFC properties for selected objects
      const infoPromises = objectsArray.map(async (mesh) => {
        const uniqueID = mesh.userData?.uniqueID; // Using uniqueID instead of expressID
        if (!uniqueID) return null;

        try {
          const props = await fragments.getItemProperties(uniqueID); // Ensure this method supports uniqueID
          const name = props.Name?.value || "Unnamed";
          const guid = props.GlobalId?.value || "N/A";
          const type = props.ObjectType?.value || "Unknown Type";

          return `Name: ${name}\nGUID: ${guid}\nType: ${type}`;
        } catch (err) {
          console.error(`Error fetching properties for uniqueID ${uniqueID}:`, err);
          return `UniqueID: ${uniqueID}\nError fetching properties.`;
        }
      });

      const infos = await Promise.all(infoPromises);
      const validInfos = infos.filter(info => info !== null);
      const combinedInfo = validInfos.join("\n\n");
      setHoverInfo(combinedInfo);
    });

    highlighter.events.select.onClear.add(() => {
      setHoverInfo("");
    });

    /********************************************************
     * 6) Setup Highlighter's Hover Event Listeners
     ********************************************************/
    highlighter.events.hover.onHighlight.add(async (hoveredObjects) => {
      // Normalize to array
      const objectsArray = toArray(hoveredObjects);
      
      if (objectsArray.length === 0) {
        setHoverInfo("");
        return;
      }

      // Retrieve and display IFC properties for hovered objects
      const infoPromises = objectsArray.map(async (mesh) => {
        const uniqueID = mesh.userData?.uniqueID; // Using uniqueID instead of expressID
        if (!uniqueID) return null;

        try {
          const props = await fragments.getItemProperties(uniqueID); // Ensure this method supports uniqueID
          const name = props.Name?.value || "Unnamed";
          const guid = props.GlobalId?.value || "N/A";
          const type = props.ObjectType?.value || "Unknown Type";

          return `Name: ${name}\nGUID: ${guid}\nType: ${type}`;
        } catch (err) {
          console.error(`Error fetching properties for uniqueID ${uniqueID}:`, err);
          return `UniqueID: ${uniqueID}\nError fetching properties.`;
        }
      });

      const infos = await Promise.all(infoPromises);
      const validInfos = infos.filter(info => info !== null);
      const combinedInfo = validInfos.join("\n\n");
      setHoverInfo(combinedInfo);
    });

    highlighter.events.hover.onClear.add(() => {
      setHoverInfo("");
    });

    /********************************************************
     * 7) Cleanup on unmount
     ********************************************************/
    return () => {
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
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <style>{panelStyle}</style>

      {/* Info overlay for building data */}
      {hoverInfo && (
        <div className="info-overlay" ref={infoRef}>
          {hoverInfo}
        </div>
      )}

      <div
        ref={containerRef}
        style={{ width: "100%", height: "90%", position: "relative" }}
      >
        <div
          ref={statsRef}
          style={{ position: "absolute", top: "0px", left: "0px" }}
        />
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
