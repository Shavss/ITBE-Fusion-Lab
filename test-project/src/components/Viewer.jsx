import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls, PLYLoader } from 'three-stdlib';
import { GUI } from 'lil-gui';
import Stats from "stats.js";

const Viewer = () => {
    const mountRef = useRef(null);
    const statsRef = useRef(null);
    const guiRef = useRef(null);
    const [hoverInfo, setHoverInfo] = useState(null); // State to track hover info

    useEffect(() => {
        let gui; 
        let animationFrameId; 
        const spheres = []; 
        let raycaster; 
        let mouse; 
        let handleMouseMove; 

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
        camera.position.set(0, 0, 50);
        const renderer = new THREE.WebGLRenderer({ alpha: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000); 
        mountRef.current.appendChild(renderer.domElement);

        // Initialize Stats.js
        const stats = new Stats();
        stats.showPanel(0); 
        statsRef.current.appendChild(stats.dom);
        stats.dom.style.position = "absolute"; 
        stats.dom.style.bottom = "50px"; 
        stats.dom.style.left = "10px"; 
        stats.dom.style.zIndex = "1000";

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
        loader.load('random2.ply', (geometry) => {
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const center = bbox.getCenter(new THREE.Vector3());

            geometry.translate(-center.x, -center.y, -center.z);
            geometry.rotateX(-Math.PI / 2);

            const maxDimension = Math.max(...bbox.getSize(new THREE.Vector3()).toArray());
            const scaleFactor = 200 / maxDimension; 
            geometry.scale(scaleFactor, scaleFactor, scaleFactor);

            const material = new THREE.PointsMaterial({
                size: 0.01, 
                vertexColors: true, 
            });

            const pointCloud = new THREE.Points(geometry, material);
            scene.add(pointCloud);
            const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

            // Define custom texts for each sphere
            const customTexts = [
                "1. The hall is the defining focal point of the area.",
                "2. It was built between 1965 and 1969.",
                "3. It was for a long time the largest self-supporting hall made of precast concrete.",
                "4. Today, the hall is used by Deutsche Post.",
                "5. The mail distribution center currently located there is getting a modern new building in the town of Germering, which is currently being built.",
                "6. The hall consists of two three-cell front arches and 24 normal arches.",
                "7. The shell construction of the vault is both the supporting structure and the building shell and does not require an additional roof covering.",
                "8. By developing it into a place for art and culture while preserving the listed industrial monument, the hall will become the pulsating heart of the new city quarter.",
                "9. The integration of old and new will create a new piece of Munich.",
                "Such a place of encounter, exchange and communication will be unique in Germany and will enrich the district, the whole of Munich and Bavaria."
            ];

            // Create random spheres above the point cloud
            for (let i = 0; i < 10; i++) {
                const sphereGeometry = new THREE.SphereGeometry(0.1, 8, 8);
                const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

                const { min, max } = bbox;
                sphere.position.set(
                    THREE.MathUtils.randFloat(-20, 20),
                    11, 
                    THREE.MathUtils.randFloat(min.y, max.y)
                );

                // Assign a custom hover text to each sphere
                sphere.userData.hoverText = customTexts[i] || `Sphere ${i + 1}`;

                spheres.push(sphere);
                scene.add(sphere);
            }

            // Clear existing GUI elements
            if (guiRef.current) {
                while (guiRef.current.firstChild) {
                    guiRef.current.removeChild(guiRef.current.firstChild);
                }
            }

            // GUI for controlling point size
            gui = new GUI({ container: guiRef.current });
            gui.add(material, 'size', 0.001, 0.1).name('Point Size').onChange(() => {
                renderer.render(scene, camera); 
            });

            // Raycaster for detecting mouse hover
            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            handleMouseMove = (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(spheres);

                if (intersects.length > 0) {
                    const sphere = intersects[0].object;
                    const screenPosition = new THREE.Vector3();
                    sphere.getWorldPosition(screenPosition);

                    screenPosition.project(camera);

                    const x = ((screenPosition.x + 1) / 2) * window.innerWidth;
                    const y = (-(screenPosition.y - 1) / 2) * window.innerHeight;

                    // Use the custom hover text instead of the sphere's position
                    setHoverInfo({ position: { x, y }, data: sphere.userData.hoverText });
                } else {
                    setHoverInfo(null); 
                }

                spheres.forEach((sphere) => {
                    if (intersects.find((i) => i.object === sphere)) {
                        sphere.scale.lerp(new THREE.Vector3(5, 5, 5), 0.5);
                    } else {
                        sphere.scale.lerp(new THREE.Vector3(1, 1, 1), 0.5);
                    }
                });
            };

            renderer.domElement.addEventListener('mousemove', handleMouseMove);

            const group = new THREE.Group();
            group.add(pointCloud);
            
            spheres.forEach((sphere) => {
                group.add(sphere);
            });
            
            scene.add(group);
            
            // In the animation loop, rotate the group
            const animate = () => {
                stats.begin();
                group.rotation.y += 0.0001; // Rotate the entire group, including spheres
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
            renderer.domElement.removeEventListener('mousemove', handleMouseMove);

            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }

            // Dispose of all Three.js objects
            spheres.forEach((sphere) => {
                sphere.geometry.dispose();
                sphere.material.dispose();
            });

            if (gui) gui.destroy();
            if (raycaster) raycaster = null;
            if (mouse) mouse = null;
            renderer.dispose();
            scene.clear();
            setHoverInfo(null);

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>

            {/* Hover information */}
            {hoverInfo && (
                <div
                    style={{
                        position: 'absolute',
                        font: 'sans-serif',
                        top: `${hoverInfo.position.y}px`,
                        left: `${hoverInfo.position.x}px`,
                        transform: 'translate(-50%, -100%)',
                        background: 'rgba(0, 0, 0, 0.7)',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        maxWidth: '300px',
                        fontSize: '13px',
                        lineHeight: '23px',
                    }}
                >
                    {hoverInfo.data}
                </div>
            )}

            {/* GUI controls positioned at the bottom-right corner */}
            <div
                ref={guiRef}
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    zIndex: 1000,
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '10px',
                    borderRadius: '8px',
                    color: 'white',
                }}
            ></div>

            {/* Stats positioned slightly higher in the bottom-left corner */}
            <div
                ref={statsRef}
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '10px',
                    zIndex: 1000,
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px',
                    borderRadius: '8px',
                }}
            ></div>
        </div>
    );
};

export default Viewer;
