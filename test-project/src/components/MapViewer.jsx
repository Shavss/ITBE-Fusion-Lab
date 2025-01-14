import React from 'react';

const MapViewer = () => {
    // Scene link with predefined parameters
    const sceneLink =
        '/3dcitydb-web-map-2.0.0/3dwebclient/index.html?title=Vorarlberg_Demo&shadows=false&terrainShadows=0&latitude=47.28109839111052&longitude=9.647423262947102&height=692.0842786443993&heading=41.28813196120646&pitch=-28.277794952314686&roll=0.14400933847950553&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fmydata%252FVorarlberg_Demo%252FVorarlberg_Gebaeude_glTF%252FBuilding_glTF_default_appearance_300m_MasterJSON.json%26name%3DVorarlberg_Buildings%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D0.8%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D1IaFt5TBOP2cIp_x4oFmgXWLyhRHhhZFYHbUdHuZ5%2523rows%253Aid%253D1%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fmydata%252FVorarlberg_Demo%252FVorarlberg_Gebaeude_glTF%252FBuilding_glTF_default_appearance_300m.json%26minLodPixels%3D140%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&terrain=name%3DVorarlberg_DTM%26iconUrl%3Dhttps%253A%252F%252Fcdn.flaggenplatz.de%252Fmedia%252Fcatalog%252Fproduct%252Fall%252F4489b.gif%26tooltip%3DDigital%2520Terrain%2520Model%2520of%2520Vorarlberg%26url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fmydata%252FVorarlberg_Demo%252FVorarlberg_DTM&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dtrue';

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
