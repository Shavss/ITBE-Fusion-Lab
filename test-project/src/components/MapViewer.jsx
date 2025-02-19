const MapViewer = () => {
  return (
    <div className="App">
      <h1>3D City Map Viewer</h1>
      <iframe
        src="http://localhost:5001/public/3dcitydb-web-map-master-bearbeitung/3dwebclient/index.html"
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="3D City Map Viewer"
      ></iframe>
    </div>
  );
};

export default MapViewer;
