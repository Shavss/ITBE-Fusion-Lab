import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as OBC from '@thatopen/components';
import * as BUI from "@thatopen/ui";  // Add this line to import BUI
import Stats from "stats.js";

const IFCViewer = () => {
  const containerRef = useRef(null); // Reference to the 3D viewer container
  const statsRef = useRef(null); // Reference to stats DOM element

  useEffect(() => {
    // Get the container for the 3D scene using the ref


    const container = containerRef.current;

    // Initialize the components (OBC)
    const components = new OBC.Components();

    // Create a world with simple scene, camera, and renderer
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create();

    // Set up the scene, renderer, and camera
    world.scene = new OBC.SimpleScene(components);
    world.renderer = new OBC.SimpleRenderer(components, container);
    world.camera = new OBC.SimpleCamera(components);

    // Initialize the components
    components.init();

    world.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);
    world.scene.setup();

    const grids = components.get(OBC.Grids);
    grids.create(world);
    world.scene.three.background = null;

    // Initialize the IfcLoader component
    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    // Set up the wasm file path for fragmentIfcLoader
    fragmentIfcLoader.settings.wasm = {
      path: "https://unpkg.com/web-ifc@0.0.66/",
      absolute: true,
    };

    fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;



    let model;

    // Function to load the IFC model
    async function loadIfc() {
      try {
        const file = await fetch('/FL_Export.ifc');
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        // Load the model with the IfcLoader
        model = await fragmentIfcLoader.load(buffer);
        model.name = "example";
        world.scene.three.add(model);
        
        const stats = new Stats();
        stats.showPanel(2);
        statsRef.current.appendChild(stats.dom);  // Append to the stats container within the viewer
        stats.dom.style.left = "10px";
        stats.dom.style.top = "10px";  // Adjust position within the viewer container
        stats.dom.style.zIndex = "100";  // Ensure stats are visible over other elements
        world.renderer.onBeforeUpdate.add(() => stats.begin());
        world.renderer.onAfterUpdate.add(() => stats.end());
        
        // Listen for when the fragments are loaded
        fragments.onFragmentsLoaded.add((loadedModel) => {
          console.log("Model loaded:", loadedModel);
        });
      } catch (error) {
        console.error("Error loading IFC model:", error);
      }
    }

    // Call the function to set up and load the IFC model
    loadIfc();

    fragments.onFragmentsLoaded.add((model) => {
      console.log(model);
    });

    // Clean up on component unmount
    return () => {
      world.scene.three.clear(); // Clear the scene
      world.renderer.dispose();  // Clean up the renderer
      world.camera.dispose();    // Clean up the camera
      fragmentIfcLoader.cleanUp(); // Clean up the IfcLoader

      // If model exists, dispose of it
      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
      }
    };
  }, []);

  return (
    <div>
      <div id="container" ref={containerRef} style={{ width: '100%', height: '500px', position: 'relative' }}>
        {/* Stats will be rendered inside this container */}
        <div ref={statsRef} style={{ position: 'absolute', top: '0px', left: '0px' }}></div>
      </div>
    </div>
  );
};

export default IFCViewer;
