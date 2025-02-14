import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "@thatopen/components";

const IFCViewerSimple = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize OBC components
    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);

    // Create the world with SimpleScene, SimpleCamera, and SimpleRenderer
    const world = worlds.create();

    // Set up the scene, renderer, and camera
    world.scene = new OBC.SimpleScene(components);
    world.renderer = new OBC.SimpleRenderer(components, container);
    world.camera = new OBC.SimpleCamera(components);

    components.init();

    // Configure camera position and target
    if (world.camera.controls) {
      world.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);
    }

    // Set up the scene
    world.scene.setup();

    // Add a grid to the scene
    const grids = components.get(OBC.Grids);
    grids.create(world);

    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    // Configure the IFC loader
    fragmentIfcLoader.settings.wasm = {
      path: "https://unpkg.com/web-ifc@0.0.66/",
      absolute: true,
    };
    fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;

    let model = null;

    // Load the IFC file
    async function loadIfc() {
      try {
        const file = await fetch("/test2.ifc"); // Ensure the path is correct
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        model = await fragmentIfcLoader.load(buffer);
        model.name = "example";

        // Add the model to the scene
        world.scene.three.add(model);

        setIsLoading(false); // Hide loading spinner
        animate(); // Start rendering
      } catch (error) {
        console.error("Error loading IFC model:", error);
        setIsLoading(false); // Hide spinner even on error
      }
    }

    loadIfc();

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      world.renderer.render(world.scene.three, world.camera.three);
    }

    // Cleanup function
    return () => {
      world.renderer.dispose();
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
    <div ref={containerRef} style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Loading Spinner */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              border: "8px solid #f3f3f3",
              borderTop: "8px solid #3498db",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default IFCViewerSimple;
