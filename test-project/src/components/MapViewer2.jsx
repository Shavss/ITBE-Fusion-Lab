import React from "react";

const MapViewer = () => {
  // Replace with your actual map link if needed
  const cityDbSceneLink =
    "https://tu-muenchen.maps.arcgis.com/apps/webappviewer3d/index.html?id=dca3455341f645dfa6fc157ef1a55239";

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <iframe
        src={cityDbSceneLink}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Map Viewer"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapViewer;
