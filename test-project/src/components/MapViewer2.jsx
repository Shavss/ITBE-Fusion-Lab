import React from "react";

const MapViewer = () => {
  // Replace with your actual map link if needed
  const cityDbSceneLink =
    "http://ppaiasok.eastus.azurecontainer.io:8000/3dwebclient/?t=3DCityDB-Web-Map-Client...";

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
