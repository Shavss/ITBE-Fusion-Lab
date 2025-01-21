import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const BrickWallViewer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(5, 5, 10);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff); // Set background color to white
        mountRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);

        // Grid Helper
        const gridHelper = new THREE.GridHelper(20, 20);
        scene.add(gridHelper);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Dimmer ambient light for subtle brightness
        scene.add(ambientLight);

        // Add directional light for sharper shadows
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight1.position.set(5, 10, 7);
        scene.add(directionalLight1);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight2.position.set(-5, -10, -7);
        scene.add(directionalLight2);

        // Spotlights for highlighting the bricks
        const spotLight = new THREE.SpotLight(0xffffff, 0.8);
        spotLight.position.set(10, 15, 10);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.1;
        spotLight.castShadow = true;
        scene.add(spotLight);

        // Spotlight helper for debugging
        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        scene.add(spotLightHelper);

        const createBrick = (frame, dimensions, brickType, nodeKey) => {
            if (!frame || !frame.point || !frame.xaxis || !frame.yaxis) {
                console.warn(`Invalid frame data for node ${nodeKey}:`, frame);
                return null;
            }

            const { xsize, ysize, zsize } = dimensions;

            // Create the box geometry for the brick
            const geometry = new THREE.BoxGeometry(xsize, ysize, zsize);

            const material = new THREE.MeshStandardMaterial({
                color: brickType === 'full' ? 0xff0000 : 0x00ff00, // Red for full, green for insulated
                roughness: 0.5,
                metalness: 0.3,
            });

            const brick = new THREE.Mesh(geometry, material);

            const zaxis = new THREE.Vector3().crossVectors(
                new THREE.Vector3(...frame.xaxis),
                new THREE.Vector3(...frame.yaxis)
            ).normalize();

            const matrix = new THREE.Matrix4();
            matrix.set(
                frame.xaxis[0], frame.yaxis[0], zaxis.x, frame.point[0],
                frame.xaxis[1], frame.yaxis[1], zaxis.y, frame.point[1],
                frame.xaxis[2], frame.yaxis[2], zaxis.z, frame.point[2],
                0, 0, 0, 1
            );

            brick.applyMatrix4(matrix);

            return brick;
        };

        // Load JSON Data
        fetch('brickwall_2x2_0.015.json') // Update with your JSON path
            .then((response) => response.json())
            .then((json) => {
                const nodes = json.data.graph.node;
                const defaultDimensions = { xsize: 0.235, ysize: 0.11, zsize: 0.07 }; // Standard brick size
                const defaultFrame = {
                    point: [0, 0, 0],
                    xaxis: [1, 0, 0],
                    yaxis: [0, 1, 0],
                }; // Default frame for fallback

                for (const key in nodes) {
                    const node = nodes[key];
                    const { part, brick_type } = node;

                    console.log(`Processing node ${key}:`, node);

                    // Check for shape data
                    let shapeData = part?.data?.attributes?.shape?.data;

                    // Use fallback dimensions if no shape data is available
                    if (!shapeData) {
                        console.warn(`Missing shape data for node ${key}. Using default brick dimensions.`);
                        shapeData = { ...defaultDimensions, frame: defaultFrame };
                    } else if (!shapeData.frame) {
                        console.warn(`Missing frame data for node ${key}. Using default frame.`);
                        shapeData.frame = defaultFrame;
                    }

                    if (shapeData) {
                        const { xsize, ysize, zsize, frame } = shapeData;

                        const brick = createBrick(frame, { xsize, ysize, zsize }, brick_type, key);
                        if (brick) {
                            console.log(`Adding ${brick_type} brick at frame for node ${key}:`, frame);
                            scene.add(brick);
                        } else {
                            console.warn(`Failed to create brick for node ${key}`);
                        }
                    }
                }

                renderer.render(scene, camera);
            })
            .catch((error) => console.error('Error loading JSON:', error));

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        const animate = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default BrickWallViewer;
