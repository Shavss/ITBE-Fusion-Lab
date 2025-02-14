import React, { useEffect, useRef, useState } from "react";
import { Viewer, WebIFCLoaderPlugin } from "@xeokit/xeokit-sdk";
import * as WebIFC from "https://cdn.jsdelivr.net/npm/web-ifc@0.0.66/web-ifc-api.js";
import "./IFCViewer.css"; // External CSS for styling

const IFCViewer = () => {
  const viewerRef = useRef(null); // Reference to Viewer instance
  const [hoverInfo, setHoverInfo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initViewer = async () => {
      const viewer = new Viewer({
        canvasId: "myCanvas",
        transparent: true,
        backgroundColor: [0, 0, 0, 0], // Transparent background
      });

      viewer.camera.eye = [-2.56, 8.38, 8.27];
      viewer.camera.look = [13.44, 3.31, -14.83];
      viewer.camera.up = [0.1, 0.98, -0.14];

      const IfcAPI = new WebIFC.IfcAPI();
      await IfcAPI.SetWasmPath("https://cdn.jsdelivr.net/npm/web-ifc@0.0.66/");
      await IfcAPI.Init();

      const ifcLoader = new WebIFCLoaderPlugin(viewer, {
        WebIFC,
        IfcAPI,
      });

      // Load the IFC model
      const model = ifcLoader.load({
        id: "myModel",
        src: "/test2.ifc", // Path to your IFC file in public directory
        excludeTypes: ["IfcSpace"],
        edges: true,
      });

      model.on("loaded", () => {
        console.log("IFC model loaded successfully!");

        // Jump to the model when it is loaded
        const sceneModel = viewer.scene.models["myModel"];
        if (sceneModel) {
          viewer.cameraFlight.jumpTo(sceneModel);
          console.log("Camera moved to model.");
        } else {
          console.error("Scene model not found.");
        }

        setIsLoading(false); // Hide loading spinner after the model is loaded
      });
    };

    initViewer();
  }, []);

  return (
    <div className="ifc-viewer-container">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {/* Info Overlay */}
      {hoverInfo && <div className="info-overlay">{hoverInfo}</div>}

      {/* Full-Screen Canvas */}
      <canvas id="myCanvas" style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}></canvas>
    </div>
  );
};

export default IFCViewer;
