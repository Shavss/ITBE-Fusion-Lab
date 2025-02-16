import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Adding loading spinner to DOM
const loadingSpinner = document.createElement('div');
loadingSpinner.className = 'loading-spinner';
document.body.appendChild(loadingSpinner);

const canvas = document.getElementById("canvas");

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

// Define start and end positions for camera
const startPosition = new THREE.Vector3(0, 2, 5);
const endPosition = new THREE.Vector3(-20, 17, -30);

// Set camera to start position
camera.position.copy(startPosition);

// Animation configuration
let animationInProgress = false;
const animationDuration = 7000;
let startTime = null;

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// 4. Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;
controls.enabled = false;

// 4. Directional Lights
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(-15, 100, 15); // Light-main 1 position
directionalLight.castShadow = true;

// Optimize shadow settings
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;

scene.add(directionalLight);

// Additional Directional Light
const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight2.position.set(-15, 100, 15); // Light-sec 2 position
directionalLight2.castShadow = true;

// Optimize shadow settings 
directionalLight2.shadow.mapSize.width = 2048;
directionalLight2.shadow.mapSize.height = 2048;
directionalLight2.shadow.camera.near = 0.5;
directionalLight2.shadow.camera.far = 50;
directionalLight2.shadow.camera.left = -10;
directionalLight2.shadow.camera.right = 10;
directionalLight2.shadow.camera.top = 10;
directionalLight2.shadow.camera.bottom = -10;

scene.add(directionalLight2);

// Additional Directional Light
const directionalLight3 = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight3.position.set(15, 100, 15); // Light-sec 3 position
directionalLight3.castShadow = true;

// Optimize shadow settings 
directionalLight3.shadow.mapSize.width = 2048;
directionalLight3.shadow.mapSize.height = 2048;
directionalLight3.shadow.camera.near = 0.5;
directionalLight3.shadow.camera.far = 50;
directionalLight3.shadow.camera.left = -10;
directionalLight3.shadow.camera.right = 10;
directionalLight3.shadow.camera.top = 10;
directionalLight3.shadow.camera.bottom = -10;

scene.add(directionalLight3);

// Additional Directional Light
const directionalLight4 = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight4.position.set(-15, 100, -15); // Light-sec 4 position
directionalLight4.castShadow = true;

// Optimize shadow settings 
directionalLight4.shadow.mapSize.width = 2048;
directionalLight4.shadow.mapSize.height = 2048;
directionalLight4.shadow.camera.near = 0.5;
directionalLight4.shadow.camera.far = 50;
directionalLight4.shadow.camera.left = -10;
directionalLight4.shadow.camera.right = 10;
directionalLight4.shadow.camera.top = 10;
directionalLight4.shadow.camera.bottom = -10;

scene.add(directionalLight4);

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
    
    // Hide loading spinner and start animation
    loadingSpinner.classList.add('hidden');
    startAnimation();
  },
  // Progress callback
  (progress) => {
    
    console.log(`Loading progress: ${(progress.loaded / progress.total) * 100}%`);
  },
  // Error callback
  (error) => {
    console.error('An error occurred while loading the model:', error);
    loadingSpinner.classList.add('hidden');
  }
);


// Function to start animation
function startAnimation() {
  animationInProgress = true;
  startTime = Date.now();
  camera.position.copy(startPosition); 
}

// 7. Animation
function animate() {
  requestAnimationFrame(animate);

  if (animationInProgress && startTime !== null) {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    const ease = function(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
    
    const easedProgress = ease(progress);
    
    // Interpolate camera position
    camera.position.lerpVectors(startPosition, endPosition, easedProgress);
    
    // Look at animation
    const startLookAt = new THREE.Vector3(0, 0, 0);
    const endLookAt = new THREE.Vector3(0, 5, 0);
    const currentLookAt = new THREE.Vector3();
    currentLookAt.lerpVectors(startLookAt, endLookAt, easedProgress);
    camera.lookAt(currentLookAt);
    
    // Check if animation is complete
    if (progress >= 1) {
      animationInProgress = false;
      controls.enabled = true;
    }
  } else {
    controls.update();
  }
  
  renderer.render(scene, camera);
}

// 8. Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();