import React from 'react';

const MapViewer = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: '#f0f0f0', // Optional: add a background color
            }}
        >
            <iframe
                src="/3dcitydb-web-map-2.0.0/3dwebclient/index.html"
                style={{
                    width: '90%',
                    height: '90%',
                    border: 'none',
                }}
                title="3D Web Map Viewer"
            ></iframe>
        </div>
    );
};

export default MapViewer;
