import React, { useState } from "react";

const MapViewer = () => {
    const [activeViewer, setActiveViewer] = useState("3dcitydb"); // Default to 3D CityDB Viewer

    const cityDbSceneLink = "http://ppaiasok.eastus.azurecontainer.io:8000/3dwebclient/?t=3DCityDB-Web-Map-Client...";
    const arcGisSceneLink = "https://tu-muenchen.maps.arcgis.com/apps/webappviewer3d/index.html?id=dca3455341f645dfa6fc157ef1a55239"; // Replace with your ArcGIS viewer link

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {/* Buttons to Switch Viewers */}
            <div style={{ marginBottom: "10px" }}>
                <button onClick={() => setActiveViewer("3dcitydb")} style={buttonStyle}>
                    Investigate Fusion
                </button>
                <button onClick={() => setActiveViewer("arcgis")} style={buttonStyle}>
                    Investigate Analyses
                </button>
            </div>

            {/* Map Viewer */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "80vh",
                    backgroundColor: "#f0f0f0",
                }}
            >
                <iframe
                    src={activeViewer === "3dcitydb" ? cityDbSceneLink : arcGisSceneLink}
                    style={{ width: "90%", height: "100%", border: "none" }}
                    title="Map Viewer"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

// Button Styles
const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "5px",
};

export default MapViewer;

