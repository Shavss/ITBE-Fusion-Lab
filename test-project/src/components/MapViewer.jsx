import React from 'react';

const MapViewer = () => {
    // Scene link with predefined parameters

    //const cesiumIonToken = 'YOUR_CESIUM_ION_TOKEN';
   // const bingMapsToken = 'YOUR_BING_MAPS_TOKEN';
    
    const sceneLink = 'http://ppaiasok.eastus.azurecontainer.io:8000/3dwebclient/?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.149285&lo=11.529715&h=263.612&hd=232.95&p=-26.62&r=359.83&l_0=u%3Dhttp%253A%252F%252Fppaiasok.eastus.azurecontainer.io%253A8000%252Fdata%252FPPA%252FPPA%252520CITYGML_geometry_MasterJSON.json%26n%3DPPA%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D1.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D200%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttp%253A%252F%252Fppaiasok.eastus.azurecontainer.io%253A8000%252Fdata%252Ftileset%252Ftileset.json%26n%3Dpc%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&bm=name%3Dsemantic%26iconUrl%3D%26tooltip%3D%26url%3Dhttp%253A%252F%252F20.84.23.71%253A8080%252FPPA%252Fwms%253Fservice%253DWMS%2526version%253D1.1.0%2526request%253DGetMap%2526layers%253Dthemtic%26layers%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&sw='
        
    //'/3dcitydb-web-map-2.0.0/3dwebclient/index.html?title=NYC_Demo&shadows=false&terrainShadows=0&latitude=40.743374788566506&longitude=-73.98774263868869&height=329.68334866393064&heading=212.94068327361515&pitch=-48.25628003176494&roll=359.9999849535638&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fmydata%252FCesium_NYC_Demo%252FNYK_Building_Extruded%252FNYK_Building_Extruded_MasterJSON_NoJSONP.json%26name%3DNYC_Buildings%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D1ivFBfqsnkv5OlvkQUybgfOSjIz_u9_98_mmJVUss%2523rows%253Aid%253D1%26cityobjectsJsonUrl%3D%26minLodPixels%3D140%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D50%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fmydata%252FCesium_NYC_Demo%252FNYK_Street_Footprint%252FNYK_Street_Footprint_MasterJSON_NoJSONP.json%26name%3DNYC_Streets%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252Fdata%253Fdocid%253D1qLk_S4yxma0MI1LmISc8DdLn_NdhrFb784Mwizas%2523rows%253Aid%253D1%26cityobjectsJsonUrl%3D%26minLodPixels%3D140%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D50%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fmydata%252FCesium_NYC_Demo%252FNYK_Landuse_Footprint%252FNYK_Landuse_Footprint_MasterJSON_NoJSONP.json%26name%3DNYC_Lots%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252Fdata%253Fdocid%253D1cdvru7oiJIm0Us4Lgt-KYndNvGYcHjefYaTK_nK4%2523rows%253Aid%253D1%26cityobjectsJsonUrl%3D%26minLodPixels%3D140%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D50%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dtrue';
   

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
