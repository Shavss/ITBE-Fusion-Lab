import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls, PLYLoader } from 'three-stdlib';
import { GUI } from 'lil-gui';
import Stats from 'stats.js';

const Viewer = () => {
    const mountRef = useRef(null);
    const statsRef = useRef(null);
    const guiRef = useRef(null);

    useEffect(() => {
        let gui;
        let animationFrameId; // Track the animation frame for cleanup

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, 0, 50);
        const renderer = new THREE.WebGLRenderer({ alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); // Set background to black
        mountRef.current.appendChild(renderer.domElement);

        // Initialize Stats.js
        const stats = new Stats();
        stats.showPanel(0);
        statsRef.current.appendChild(stats.dom);
        stats.dom.style.position = 'absolute';
        stats.dom.style.top = '10px';
        stats.dom.style.left = '10px';
        stats.dom.style.zIndex = '1000';

        // Prevent scrolling within the Viewer
        const preventScroll = (event) => {
            event.preventDefault();
        };
        renderer.domElement.addEventListener('wheel', preventScroll);

        // OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.mouseButtons = {
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.ROTATE,
            RIGHT: THREE.MOUSE.PAN,
        };
        controls.touches = {
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.PAN,
        };

        // Load Point Cloud from .ply file
        const loader = new PLYLoader();
        loader.load('random.ply', (geometry) => {
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const center = bbox.getCenter(new THREE.Vector3());
            geometry.translate(-center.x, -center.y, -center.z);
            geometry.rotateX(-Math.PI / 2);
            const maxDimension = Math.max(...bbox.getSize(new THREE.Vector3()).toArray());
            geometry.scale(200 / maxDimension, 200 / maxDimension, 200 / maxDimension);

            const material = new THREE.PointsMaterial({
                size: 0.01,
                vertexColors: true,
            });

            const pointCloud = new THREE.Points(geometry, material);
            scene.add(pointCloud);

            // GUI for controlling point size
            gui = new GUI({ container: guiRef.current });
            gui.add(material, 'size', 0.001, 0.1).name('Point Size');

            // Animation loop
            const animate = () => {
                stats.begin();
                pointCloud.rotation.y += 0.0001;
                controls.update();
                renderer.render(scene, camera);
                stats.end();
                animationFrameId = requestAnimationFrame(animate);
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
            renderer.domElement.removeEventListener('wheel', preventScroll);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            if (gui) gui.destroy();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>
            <div
                ref={statsRef}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 1000,
                }}
            ></div>
            <div
                ref={guiRef}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000,
                }}
            ></div>
        </div>
    );
};

export default Viewer;
