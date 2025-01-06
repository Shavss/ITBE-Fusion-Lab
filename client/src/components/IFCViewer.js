import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as OBC from '@thatopen/components';

const IFCViewer = () => {
  useEffect(() => {
    // Get the container for the 3D scene
    const container = document.getElementById("container");

    // Initialize the components
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

    // Create a cube with Lambert material and add it to the scene
    const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, material);
    world.scene.three.add(cube);

    // Setup the scene and camera controls
    world.scene.setup();
    world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);

    // Cleanup on component unmount
    return () => {
      // Instead of cleanup, manually remove the cube and other objects if necessary
      world.scene.three.remove(cube);
      world.renderer.dispose(); // Clean up the renderer
      world.camera.dispose(); // Clean up the camera
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
