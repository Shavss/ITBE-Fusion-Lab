import { useState } from "react";

const MapViewer = () => {
  const cityDbSceneLink = "../../3dcitydb-web-map-master-bearbeitung/3dwebclient/index.html";
  //const cityDbSceneLink = "https://webmapclient-113575478716.us-central1.run.app/3dwebclient/index.html";
  const arcGisSceneLink = "https://tu-muenchen.maps.arcgis.com/apps/webappviewer3d/index.html?id=dca3455341f645dfa6fc157ef1a55239";

  const [viewerSrc, setViewerSrc] = useState(cityDbSceneLink);

  return (
    <div style={{ textAlign: "center", padding: "20px", position: "relative" }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
        backgroundColor: "#f0f0f0",
        position: "relative",
        marginTop: "50px"
      }}>
        <iframe id="mapViewer" src={viewerSrc} title="Map Viewer" loading="lazy" style={{ width: "100%", height: "100%", border: "none" }}></iframe>
      </div>
      <div style={{
        position: "absolute",
        top: "50%",
        right: "20px",  // Align to the right
        display: "flex",
        flexDirection: "column",  // Stack vertically
        alignItems: "stretch",  // Ensures equal width
        gap: "10px",  // Adds space between buttons
        transform: "translateY(-50%)",
        pointerEvents: "none",
        }}>
        <button
            style={{
            width: "180px",  // Ensures equal width
            height: "50px",  // Ensures equal height
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "#303336",
            color: "white",
            borderRadius: "5px",
            pointerEvents: "auto"
            }}
            onClick={() => setViewerSrc(cityDbSceneLink)}
        >
            Investigate Fusion
        </button>
        <button
            style={{
            width: "180px",  // Same width as above
            height: "50px",  // Same height as above
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "#303336",
            color: "white",
            borderRadius: "5px",
            pointerEvents: "auto"
            }}
            onClick={() => setViewerSrc(arcGisSceneLink)}
        >
            Investigate Analyses
        </button>
        </div>


      
    </div>
  );
};

export default MapViewer;
