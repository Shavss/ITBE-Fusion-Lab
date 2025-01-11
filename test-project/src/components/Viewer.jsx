import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls, PLYLoader } from 'three-stdlib';

const Viewer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, 0, 50);
        const renderer = new THREE.WebGLRenderer({ alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); // Set background to black
        mountRef.current.appendChild(renderer.domElement);

        // Prevent scrolling within the Viewer
        const preventScroll = (event) => {
            event.preventDefault();
        };
        renderer.domElement.addEventListener('wheel', preventScroll);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false; // Disable zooming
        controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.ROTATE, // Orbit with middle mouse button
            RIGHT: THREE.MOUSE.PAN,
        };
        controls.touches = {
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.PAN,
        };

        // Load Point Cloud from .ply file
        const loader = new PLYLoader();
        loader.load('random.ply', (geometry) => {
            console.log('Geometry loaded:', geometry);

            // Compute Bounding Box and Center
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const center = bbox.getCenter(new THREE.Vector3());
            const size = bbox.getSize(new THREE.Vector3());
            console.log('Bounding Box:', bbox);
            console.log('Center:', center);
            console.log('Size:', size);

            // Center the geometry
            geometry.translate(-center.x, -center.y, -center.z);

            // Rotate -90 degrees around the X-axis to align Z-axis with Y-axis
            geometry.rotateX(-Math.PI / 2);

            // Scale to fit [-100, 100] range
            const maxDimension = Math.max(size.x, size.y, size.z);
            const scaleFactor = 200 / maxDimension; // Adjust to fit the scene
            geometry.scale(scaleFactor, scaleFactor, scaleFactor);

            // Points Material with vertexColors
            const material = new THREE.PointsMaterial({
                size: 0.01, // Adjust point size
                vertexColors: true, // Use vertex colors from the file
            });

            // Create and Add Point Cloud
            const pointCloud = new THREE.Points(geometry, material);
            scene.add(pointCloud);

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotate the point cloud to the right (around Y-axis)
                pointCloud.rotation.y += 0.0001;

                controls.update();
                renderer.render(scene, camera);
            };
            animate();
        });

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.domElement.removeEventListener('wheel', preventScroll); // Remove event listener
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Viewer;
