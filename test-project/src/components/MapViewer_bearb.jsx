//import React from 'react';

const MapViewer = () => {
    // Scene link with predefined parameters
    const sceneLink =
        '/3dcitydb-web-map-2.0.0/examples/kmlPostPacketHalleGelaende01/index.html';
   

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: '#f0f0f0', // Optional: background color
            }}
        >
            <iframe
                src={sceneLink}
                style={{
                    width: '70%',
                    height: '70%',
                    border: 'none',
                }}
                title="3D Web Map Viewer"
            ></iframe>
        </div>
    );
};

export default MapViewer;
