import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import Stats from "stats.js";

const panelStyle = `
  .camera-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9999; 
  }
  
  /* Example style for a small info overlay */
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
  }
`;

const IFCViewer = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const infoRef = useRef(null);

  // We'll store a "hoverInfo" (string or object) to display in an overlay
  const [hoverInfo, setHoverInfo] = useState("");

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
    world.renderer = new OBC.SimpleRenderer(components, container);
    world.camera = new OBC.OrthoPerspectiveCamera(components);

    // Enable shadows, etc. (Same as your snippet)
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
        const file = await fetch("/dummy.ifc");
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        model = await fragmentIfcLoader.load(buffer);
        model.name = "example";
        world.scene.three.add(model);

        markMeshShadows(model);

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

        // 4) Once model loaded, set up RAYCASTING
        setupRaycasting(components, world, model);

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
     * 5) RAYCASTING + Hover Logic
     ********************************************************/
    let previousHover = null;
    let originalMaterials = null;

    function setupRaycasting(components, world, ifcModel) {
      
      const raycasters = components.get(OBC.Raycasters);
      const raycaster = raycasters.get(world);
    
      // We'll do mouse hover on the container
      const container = containerRef.current; 
      if (!container) return;  // Just a safety check
    
      let previousHover = null;    // The mesh we are currently highlighting
    
      // We'll define a default material and a highlight material
      const defaultMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff" });
      const highlightMaterial = new THREE.MeshStandardMaterial({ color: "#BCF124" });
    
      container.addEventListener("mousemove", onMouseMove);
    
      function onMouseMove() {
        const result = raycaster.castRay(ifcModel.children);
      
        // Revert old highlight if needed, same as before
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
      
        // If there's no new mesh, we're done
        if (!result || !(result.object instanceof THREE.Mesh)) {
          return;
        }
      
        const hoveredMesh = result.object;
      
        // If it’s a new mesh, highlight and show some info
        if (hoveredMesh !== previousHover) {
          hoveredMesh.material = highlightMaterial;
          previousHover = hoveredMesh;
      
          // 1) Retrieve name from userData (if available)
          const elementName = hoveredMesh.userData.name || "Unnamed element";
      
          // 2) Display it in the popup along with the UUID
          setHoverInfo(`Hovering element: ${elementName}\nUUID: ${hoveredMesh.uuid}`);
        }
        // if it’s still the same mesh, do nothing => keep highlight & popup
      }
    }
    

    // 6) Cleanup on unmount
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
  }, [setHoverInfo]);

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

/************************************************
 * Hover highlighting helpers
 ************************************************/

/** 
 * Clones the material(s) of a mesh so we can revert later.
 */
function cloneMaterials(mesh) {
  const origMats = mesh.material;
  if (Array.isArray(origMats)) {
    return origMats.map((m) => m.clone());
  } else {
    return [origMats.clone()];
  }
}

/**
 * Reverts a mesh to its original materials
 */
function restoreMaterial(mesh, originalMats) {
  if (!originalMats) return;
  if (Array.isArray(mesh.material)) {
    mesh.material.forEach((m) => m.dispose());
    mesh.material = originalMats;
  } else {
    mesh.material.dispose();
    mesh.material = originalMats[0];
  }
}

/**
 * Simple highlight effect: set the material color to bright yellow
 */
function highlightMesh(mesh) {
  const mat = mesh.material;
  if (Array.isArray(mat)) {
    // If multiple materials, just change them all
    mat.forEach((m) => {
      m.color.set("#ffff00"); // yellow
    });
  } else {
    mat.color.set("#ffff00");
  }
}

export default IFCViewer;
