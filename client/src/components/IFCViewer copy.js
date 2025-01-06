import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as OBC from '@thatopen/components';

const IFCViewer = ({ ifcFilePath }) => {
  useEffect(() => {
    // Get the container for the 3D scene
    const container = document.getElementById("container");

    // Initialize the components
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

    // Create and add a cube to the scene
    const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, material);
    world.scene.three.add(cube);

    world.scene.setup(); // Setup the scene
    world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0); // Set camera

    // Now, load the IFC model using IfcLoader
    const ifcLoader = new OBC.IfcLoader(components);

    const loadIFC = async () => {
      try {
        console.log("Attempting to load IFC model...");
        const model = await ifcLoader.load(ifcFilePath); // Load the IFC model
        if (model) {
          console.log("IFC model loaded:", model);
          world.scene.three.add(model); // Add the model to the scene
        } else {
          console.error("Failed to load IFC model.");
        }
      } catch (error) {
        console.error("Error loading IFC model:", error);
      }
    };

    loadIFC(); // Load the IFC model when the component mounts

    return () => {
      // Clean up when the component is unmounted
      if (world.scene.cleanup) {
        world.scene.cleanup(); // Cleanup scene if necessary
      }
    };
  }, [ifcFilePath]); // This effect runs every time `ifcFilePath` changes

  return <div id="container" style={{ height: "100vh" }}></div>; // Container for the viewer
};

export default IFCViewer;
