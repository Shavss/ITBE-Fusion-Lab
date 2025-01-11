import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as OBC from '@thatopen/components';

const IFCViewer = () => {
  useEffect(() => {
    // Get the container for the 3D scene
    const container = document.getElementById("container");

    // Initialize the components (OBC)
    const components = new OBC.Components();

    // Create a world with simple scene, camera, and renderer
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create(); // No need for TypeScript-specific annotations

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

    // Initialize the IfcLoader component
    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    fragmentIfcLoader.settings.wasm = {
       path: "https://unpkg.com/web-ifc@0.0.66/",
       absolute: true,
     };

    let model;
    
    async function loadIfc() {
      const file = await fetch('/dummy.ifc');
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      const model = await fragmentIfcLoader.load(buffer);
      model.name = "example";
      world.scene.three.add(model);
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
      ifcLoader.cleanUp();       // Clean up the IfcLoader

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
      <h1>3D IFC Viewer</h1>
      <div id="container" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default IFCViewer;
