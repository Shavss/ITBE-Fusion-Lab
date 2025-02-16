import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function ThreeFusionEmbed() {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F8F8F8");

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const startPosition = new THREE.Vector3(0, 2, 5);
    const endPosition = new THREE.Vector3(-20, 17, -30);
    camera.position.copy(startPosition);

    // Animation config
    let animationInProgress = false;
    const animationDuration = 7000;
    let startTime = null;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.enabled = false; // disabled until animation completes

    // 5. Lights
    // Reusable function to set up directional light
    function setupDirectionalLight(x, y, z) {
      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(x, y, z);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 50;
      dirLight.shadow.camera.left = -10;
      dirLight.shadow.camera.right = 10;
      dirLight.shadow.camera.top = 10;
      dirLight.shadow.camera.bottom = -10;
      scene.add(dirLight);
    }

    setupDirectionalLight(-15, 100, 15);
    setupDirectionalLight(-15, 100, 15);
    setupDirectionalLight(15, 100, 15);
    setupDirectionalLight(-15, 100, -15);

    // 6. Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      "/models/Blender_Fusion_Final.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        scene.add(model);

        // Hide loading spinner and start camera animation
        setLoading(false);
        startAnimation();
      },
      (progress) => {
        // Called during loading
        // Example: console.log(`Loaded ${progress.loaded / progress.total * 100}%`);
      },
      (error) => {
        console.error("Error loading GLTF model:", error);
        setLoading(false);
      }
    );

    // Start camera animation
    function startAnimation() {
      animationInProgress = true;
      startTime = Date.now();
      camera.position.copy(startPosition);
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      if (animationInProgress && startTime !== null) {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        // Easing function
        const ease = (t) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        const easedProgress = ease(progress);

        // Interpolate camera position
        camera.position.lerpVectors(startPosition, endPosition, easedProgress);

        // Interpolate lookAt
        const startLookAt = new THREE.Vector3(0, 0, 0);
        const endLookAt = new THREE.Vector3(0, 5, 0);
        const currentLookAt = new THREE.Vector3();
        currentLookAt.lerpVectors(startLookAt, endLookAt, easedProgress);
        camera.lookAt(currentLookAt);

        // Check if animation finished
        if (progress >= 1) {
          animationInProgress = false;
          controls.enabled = true;
        }
      } else {
        controls.update();
      }

      renderer.render(scene, camera);
    }
    animate();

    // 7. Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="loading-spinner" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
