import React from 'react';
import IFCViewer from '../components/IFCViewer'; // Import the IFCViewer component

const IFCViewerPage = () => {
  return (
    <div>
      <h1>IFC 3D Viewer</h1>
      {/* Pass the path to the IFC file */}
      <IFCViewer ifcFilePath="/FL_Export.ifc" /> {/* Assuming the IFC file is in the public folder */}
    </div>
  );
};

export default IFCViewerPage;
