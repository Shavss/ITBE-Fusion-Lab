# DEV / DEMO / TEST SHOWCASE

This file documents the ongoing development of new features as well as testing of existing ones for future releases.

For a full list of changes, please refer to the [change logs](CHANGES.md).

For a full list of all releases, please refer to the [release announcements](RELEASES.md).

Many of the following demos were introduced from [this page](https://collab.dvb.bayern/display/TUMgisproject/Online+Demo+Collection).

Employed version: **2.0.0-dev**.

## Symbols used

In this document, the following symbols are used:

+ [ ] Pending test

+ [x] Test OK

:x: Problem

:heavy_check_mark: All tests done

## :earth_africa: Base Web Client > :point_right: Web client without any layers :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html)

## :earth_africa: Base Web Client > :point_right: Terrain Bavaria DTM :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.141633&lo=11.580329&h=1377.45&hd=272.19&p=-62.11&r=360&&tr=name%3DBavaria%2520DTM%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fbvv3d21.bayernwolke.de%252F3d-data%252Flatest%252Fterrain%252F&sw=showOnStart%3Dfalse)

+ [x] Insert a terrain layer
+ [x] Display the terrain layer
+ [x] Delete the terrain layer
+ [x] Reinsert after delete
+ [x] Reimport using generated URL

## :earth_africa: Base Web Client > :point_right: WMS Bavaria DOP 80

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.141287&lo=11.585618&h=35931.217&hd=360&p=-90&r=0&&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fgeoservices.bayern.de%252Fwms%252Fv2%252Fogc_dop80_oa.cgi%253F%26name%3DBavaria%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop80c%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&sw=showOnStart%3Dfalse)

:x: WMS dataset currently not available/working

## :earth_africa: Base Web Client > :point_right: WMS Bavaria DOP 40 :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.141287&lo=11.585618&h=35931.217&hd=360&p=-90&r=0&&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fgeoservices.bayern.de%252Fod%252Fwms%252Fdop%252Fv1%252Fdop40%253F%26name%3DBavaria%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop40c%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&sw=showOnStart%3Dfalse)

+ [x] Insert a WMS layer
+ [x] Display the WMS layer
+ [x] Delete the WMS layer
+ [x] Reinsert after delete
+ [x] Reimport using generated URL

## :earth_africa: Base Web Client > :point_right: WMS Bavaria DOP 20 :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.141287&lo=11.585618&h=35931.217&hd=360&p=-90&r=0&&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fgeoservices.bayern.de%252Fod%252Fwms%252Fdop%252Fv1%252Fdop20%253F%26name%3DBavaria%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop20c%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&sw=showOnStart%3Dfalse)

+ [x] Insert a WMS layer
+ [x] Display the WMS layer
+ [x] Delete the WMS layer
+ [x] Reinsert after delete
+ [x] Reimport using generated URL

## :earth_africa: Base Web Client > :point_right: WMTS USGS Shaded Relief :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=34.253513&lo=22.289328&h=8221190.152&hd=360&p=-89.87&r=0&&bm=imageryType%3Dwmts%26url%3Dhttps%253A%252F%252Fbasemap.nationalmap.gov%252Farcgis%252Frest%252Fservices%252FUSGSShadedReliefOnly%252FMapServer%252FWMTS%26name%3DUSGS%2520Shaded%2520Relief%2520(via%2520WMTS)%26iconUrl%3D%26tooltip%3D%26layers%3DUSGSShadedReliefOnly%26tileStyle%3Ddefault%26tileMatrixSetId%3Ddefault028mm%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&sw=showOnStart%3Dfalse)

+ [x] Insert a WMTS layer
+ [x] Display the WMTS layer
+ [x] Delete the WMTS layer
+ [x] Reinsert after delete
+ [x] Reimport using generated URL

## :earth_africa: Base Web Client > :point_right: WMTS Bavaria DOP :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.132231&lo=11.569072&h=10363.664&hd=0&p=-90&r=0&&bm=imageryType%3Dwmts%26url%3Dhttps%253A%252F%252Fwmtsod1.bayernwolke.de%252Fwmts%252Fby_dop%252F%257BTileMatrixSet%257D%252F%257BTileMatrix%257D%252F%257BTileCol%257D%252F%257BTileRow%257D%26name%3DBavaria%2520WMTS%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop%26tileStyle%3Ddefault%26tileMatrixSetId%3Dsmerc%26additionalParameters%3D%26proxyUrl%3D&sw=showOnStart%3Dfalse)

+ [x] Insert a WMTS layer
+ [x] Display the WMTS layer
+ [x] Delete the WMTS layer
+ [x] Reinsert after delete
+ [x] Reimport using generated URL

## :earth_africa: Base Web Client > :point_right: WMTS NRW DOP

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=50.957708&lo=6.967279&h=27940.672&hd=360&p=-90&r=0&&bm=imageryType%3Dwmts%26url%3Dhttps%253A%252F%252Fwww.wmts.nrw.de%252Fgeobasis%252Fwmts_nw_dop%252Ftiles%252Fnw_dop%252F%257BTileMatrixSet%257D%252F%257BTileMatrix%257D%252F%257BTileCol%257D%252F%257BTileRow%257D%26name%3DNRW%2520WMTS%26iconUrl%3D%26tooltip%3D%26layers%3Dnw_dop%26tileStyle%3Ddefault%26tileMatrixSetId%3DEPSG_3857_16%26additionalParameters%3D%26proxyUrl%3D&sw=showOnStart%3Dfalse)

:x: WMTS dataset currently not available/working

## :basketball: Cesium 3D Tiles > :point_right: Buildings Bavaria, WMS, Terrain, PostgreSQL/PostgREST :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.136034&lo=11.567686&h=1122.942&hd=7.28&p=-45.67&r=360&l_0=u%3Dhttps%253A%252F%252Fbvv3d21.bayernwolke.de%252F3d-data%252Flatest%252Flod23d%252Ftileset.json%26n%3DBavaria%2520Buildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Fgeomassendaten%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D%26null%3D16&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fgeoservices.bayern.de%252Fod%252Fwms%252Fdop%252Fv1%252Fdop20%253F%26name%3DBavaria%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop20c%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&tr=name%3DBavaria%2520DTM%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fbvv3d21.bayernwolke.de%252F3d-data%252Flatest%252Fterrain%252F&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :basketball: Cesium 3D Tiles > :point_right: Buildings Cologne, WMS, Terrain, OGC Feature API :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2024-04-23T10%3A35%3A37Z&t=3DCityDB-Web-Map-Client&s=false&ts=0&la=50.9222&lo=6.940655&h=898.086&hd=349.28&p=-49.15&r=0&l_0=u%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fbuildings-fly%252Froot.json%26n%3DBasemap.de%2520LOD2%2520Buildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fwww.ldproxy.nrw.de%252Fkataster%252Fcollections%252Fgebaeudebauwerk%252Fitems%26ds%3DOGCFeatureAPI%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fsgx.geodatenzentrum.de%252Fwms_basemapde%26name%3DGDI-DE%2520Webmap%2520Karte%26iconUrl%3Dhttps%253A%252F%252Fgdz.bkg.bund.de%252Fskin%252Ffrontend%252Fbkg%252Fbkg_blau%252Fimages%252Fbkg_logo.svg%26tooltip%3DGDI-DE%2520Webmap%2520Karte%26layers%3Dde_basemapde_web_raster_farbe%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D&tr=name%3DDGM5%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fdgm5-mesh&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :basketball: Cesium 3D Tiles > :point_right: Buildings Cologne, WMS, Terrain, embedded thematic :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2024-04-23T10%3A35%3A37Z&t=3DCityDB-Web-Map-Client&s=false&ts=0&la=50.9222&lo=6.940655&h=898.086&hd=349.28&p=-49.15&r=360&l_0=u%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fbuildings-fly%252Froot.json%26n%3DBasemap.de%2520LOD2%2520Buildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fwww.ldproxy.nrw.de%252Fkataster%252Fcollections%252Fgebaeudebauwerk%252Fitems%26ds%3DEmbedded%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fsgx.geodatenzentrum.de%252Fwms_basemapde%26name%3DGDI-DE%2520Webmap%2520Karte%26iconUrl%3Dhttps%253A%252F%252Fgdz.bkg.bund.de%252Fskin%252Ffrontend%252Fbkg%252Fbkg_blau%252Fimages%252Fbkg_logo.svg%26tooltip%3DGDI-DE%2520Webmap%2520Karte%26layers%3Dde_basemapde_web_raster_farbe%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D&tr=name%3DDGM5%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fdgm5-mesh&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :basketball: Cesium 3D Tiles > :point_right: Buildings Hamburg, WMS, Terrain, OGC Feature API :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2024-04-23T10%3A35%3A37Z&t=3DCityDB-Web-Map-Client&s=false&ts=0&la=53.544272&lo=9.991035&h=1770.099&hd=1.55&p=-72.82&r=0&l_0=u%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fbuildings-fly%252Froot.json%26n%3DBasemap.de%2520LOD2%2520Buildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fapi.hamburg.de%252Fdatasets%252Fv1%252Falkis_vereinfacht%252Fcollections%252FGebaeudeBauwerk%252Fitems%26ds%3DOGCFeatureAPI%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fsgx.geodatenzentrum.de%252Fwms_basemapde%26name%3DGDI-DE%2520Webmap%2520Karte%26iconUrl%3Dhttps%253A%252F%252Fgdz.bkg.bund.de%252Fskin%252Ffrontend%252Fbkg%252Fbkg_blau%252Fimages%252Fbkg_logo.svg%26tooltip%3DGDI-DE%2520Webmap%2520Karte%26layers%3Dde_basemapde_web_raster_farbe%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D&tr=name%3DDGM5%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fdgm5-mesh&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :basketball: Cesium 3D Tiles > :point_right: Buildings Hamburg, WMS, Terrain, embedded thematic :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2024-04-23T10%3A35%3A37Z&t=3DCityDB-Web-Map-Client&s=false&ts=0&la=53.544272&lo=9.991035&h=1770.099&hd=1.55&p=-72.82&r=360&l_0=u%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fbuildings-fly%252Froot.json%26n%3DBasemap.de%2520LOD2%2520Buildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fapi.hamburg.de%252Fdatasets%252Fv1%252Falkis_vereinfacht%252Fcollections%252FGebaeudeBauwerk%252Fitems%26ds%3DEmbedded%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fsgx.geodatenzentrum.de%252Fwms_basemapde%26name%3DGDI-DE%2520Webmap%2520Karte%26iconUrl%3Dhttps%253A%252F%252Fgdz.bkg.bund.de%252Fskin%252Ffrontend%252Fbkg%252Fbkg_blau%252Fimages%252Fbkg_logo.svg%26tooltip%3DGDI-DE%2520Webmap%2520Karte%26layers%3Dde_basemapde_web_raster_farbe%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D&tr=name%3DDGM5%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fdgm5-mesh&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :basketball: Cesium 3D Tiles > :point_right: Buildings Munich, WMS, Terrain, embedded thematic :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2024-04-23T10%3A35%3A37Z&t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.122821&lo=11.504208&h=930.269&hd=2.52&p=-46.06&r=359.81&l_0=u%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fbuildings-fly%252Froot.json%26n%3DBasemap.de%2520LOD2%2520Buildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DEmbedded%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D%26mse%3D&bm=name%3DGDI-DE%2520Webmap%2520Karte%26iconUrl%3Dhttps%253A%252F%252Fgdz.bkg.bund.de%252Fskin%252Ffrontend%252Fbkg%252Fbkg_blau%252Fimages%252Fbkg_logo.svg%26tooltip%3DGDI-DE%2520Webmap%2520Karte%26url%3Dhttps%253A%252F%252Fsgx.geodatenzentrum.de%252Fwms_basemapde%26layers%3Dde_basemapde_web_raster_farbe%26additionalParameters%3D%26proxyUrl%3D&tr=name%3DDGM5%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fweb3d.basemap.de%252Fcesium%252Fdgm5-mesh&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :globe_with_meridians: COLLADA/KML/glTF > :point_right: Streets Bavaria, WMS, Terrain, Google Spreadsheets :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=Ingolstadt_A9&s=false&ts=0&la=48.768575&lo=11.463732&h=916.517&hd=330.05&p=-48.44&r=359.86&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt_A9%252Fkml_roads_A9%252Fkml_roads_A9_collada_MasterJSON.json%26n%3DRoads%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j2lSK82S23oF4JF9Cu9bdY2e4LNl-l1ujzVMXGutjds%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D50%26av%3D200%26null%3D16&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fgeoservices.bayern.de%252Fod%252Fwms%252Fdop%252Fv1%252Fdop20%253F%26name%3DBavaria%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop20c%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&tr=name%3Ddgm%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fbvv3d21.bayernwolke.de%252F3d-data%252Flatest%252Fterrain%252F&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

##  :soccer: I3S > :point_right: Buildings San Francisco, embedded thematic

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=37.756783&lo=-122.43645&h=160.854&hd=318.53&p=-43.14&r=360&l_0=u%3Dhttps%253A%252F%252Ftiles.arcgis.com%252Ftiles%252Fz2tnIkrLQ2BRzr6P%252Farcgis%252Frest%252Fservices%252FSanFrancisco_3DObjects_1_7%252FSceneServer%252Flayers%252F0%26n%3Di3s%26ld%3Di3s%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DEmbedded%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D%26null%3D16&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [ ] Select and fly to a highlighted object -> Highlighting sometimes disappears due to zooming?
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :dvd: GeoJSON > :point_right: Districts NRW, OGC Feature API :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=50.333235&lo=6.427043&h=4053.567&hd=360&p=-45.06&r=360&l_0=u%3Dhttps%253A%252F%252Fwww.ldproxy.nrw.de%252Fkataster%252Fcollections%252Fflurstueck%252Fitems%253Ff%253Djson%2526bbox%253D6.4%252C50.35%252C6.45%252C50.4%2526limit%253D2000%26n%3DGeoJSON%26ld%3Dgeojson%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fwww.ldproxy.nrw.de%252Fkataster%252Fcollections%252Fflurstueck%252Fitems%26ds%3DOGCFeatureAPI%26tt%3DHorizontal%26gc%3D%26il%3D140%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :dvd: GeoJSON > :point_right: Districts NRW, embedded thematic :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=50.333235&lo=6.427043&h=4053.567&hd=360&p=-45.06&r=360&l_0=u%3Dhttps%253A%252F%252Fwww.ldproxy.nrw.de%252Fkataster%252Fcollections%252Fflurstueck%252Fitems%253Ff%253Djson%2526bbox%253D6.4%252C50.35%252C6.45%252C50.4%2526limit%253D2000%26n%3DGeoJSON%26ld%3Dgeojson%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DEmbedded%26tt%3DHorizontal%26gc%3D%26il%3D140%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: TUM Buildings, LODs, Solar, Vegetation :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.146479&lo=11.568271&h=659.643&hd=343.25&p=-30.38&r=359.94&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichSolarFull%252Fvegetation%252Fmunich_vegetation_collada_MasterJSON.json%26n%3DVegetation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D120%26al%3D1.7976931348623157e%252B308%26ac%3D100%26av%3D50%26null%3D16&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichSolarScenarios%252Flod1_dgm%252Fsolar-bldg-glTF%252Flod1_orgBy_dgm_solar-bldg-glTF_collada_MasterJSON.json%26n%3DBldg%2520LoD1%2520-%2520Terrain%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Fmunich_lod1_dgm%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D120%26al%3D1.7976931348623157e%252B308%26ac%3D100%26av%3D50%26null%3D16&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichSolarScenarios%252Flod1_dgm_vegetation%252Fsolar-bldg-glTF%252Flod1_orgBy_dgm_vegetation_solar-bldg-glTF_collada_MasterJSON.json%26n%3DBldg%2520LoD1%2520-%2520Terrain%252C%2520Vegetation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Fmunich_lod1_dgm_vegetation%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D120%26al%3D1.7976931348623157e%252B308%26ac%3D100%26av%3D50%26null%3D16&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichSolarScenarios%252Flod2_dgm%252Fsolar-bldg-glTF%252Flod2_dgm_solar-bldg-glTF_collada_MasterJSON.json%26n%3DBldg%2520LoD2%2520-%2520Terrain%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Fmunich_lod2_dgm%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D120%26al%3D1.7976931348623157e%252B308%26ac%3D100%26av%3D50%26null%3D16&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichSolarFull%252Fsolar-bldg-glTF%252Fmunich_solar-bldg-glTF_collada_MasterJSON.json%26n%3DBldg%2520LoD2%2520-%2520Terrain%252C%2520Vegetation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Fmunich_full%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D120%26al%3D1.7976931348623157e%252B308%26ac%3D100%26av%3D50%26null%3D16&bm=imageryType%3Dwmts%26url%3Dhttps%253A%252F%252Fwmtsod1.bayernwolke.de%252Fwmts%252Fby_dop%252F%257BTileMatrixSet%257D%252F%257BTileMatrix%257D%252F%257BTileCol%257D%252F%257BTileRow%257D%26name%3DBavaria%2520WMTS%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop%26tileStyle%3Ddefault%26tileMatrixSetId%3Dsmerc%26additionalParameters%3D%26proxyUrl%3D&tr=name%3DDGM1%26iconUrl%3D%26tooltip%3DLDBV%2520-%2520DGM1%26url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fterrain_bay_geomassendaten&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: TUM Lanes, Buildings, Solar, Vegetation :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2024-06-22T11%3A05%3A05Z&t=Munich_LaneModel&s=false&ts=0&la=48.145591&lo=11.570041&h=467.332&hd=333.36&p=-54.52&r=360&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FLaneModel%252Ftum%252Fbuildings_height_zero%252Ftileset.json%26n%3DBuildings%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FLaneModel%252Ftum%252FLaneModel_visexp_textured%252FLaneAreas_TUMclip%252Ftileset.json%26n%3DLane%2520Model%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FLaneModel%252Ftum%252Fvegetation%252Fvegetation_collada_MasterJSON.json%26n%3DVegetation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D50%26av%3D200&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_trafficSpace%252FTUM_trafficSpace_geometry_MasterJSON.json%26n%3DTUM%2520TrafficSpaces%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1JiIJnxpZiKOrCvVittVhPkVjmBEEItRuvGlP5H1BdT4%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D50%26av%3D200&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Buildings Tokyo, Bridges, textured :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?d=2021-04-20T20%3A17%3A07Z&t=3DCityDB-Web-Map-Client&s=false&ts=0&la=35.675426&lo=139.765468&h=241.186&hd=9.53&p=-26.24&r=0.03&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftokyo%252Fbldg%252Fbldg-bldg-solar_collada_MasterJSON.json%26n%3DTokio_Buildings%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Ftokyo_en%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D50%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftokyo%252Fbridges%252Fbridges_collada_MasterJSON.json%26n%3DTokio_Bridges%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D50%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&tr=name%3DDGM%26iconUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fdgm.png%26tooltip%3D%26url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftokyo%252Fterrain&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Buildings Tokyo, Bridges, Solar :heavy_check_mark:

[Demo Link](https://3dcitydb.org/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=35.672454&lo=139.765624&h=517.929&hd=358.98&p=-39.35&r=360&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftokyo%252Fbldg-solar%252Fbldg-bldg-solar_collada_MasterJSON.json%26n%3DBldg-solar%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fbsvr.gis.lrg.tum.de%252Fpostgrest%252Ftokyo_solar%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D200%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftokyo%252Fbridges%252Fbridges_collada_MasterJSON.json%26n%3DBridges%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D200%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&tr=name%3DDGM%26iconUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fdgm.png%26tooltip%3D%26url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftokyo%252Fterrain&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Buildings Hamburg, Roads, Bridges, textured :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=Hamburg&s=false&ts=0&la=53.541944&lo=9.981145&h=318.782&hd=18.52&p=-48.35&r=0.09&l_0=u%3Dhttps%253A%252F%252Fdaten-hamburg.de%252Fgdi3d%252Fdatasource-data%252FBrueckenflaechen_HH%252Ftileset.json%26n%3DHH_Bridges%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fhamburg_TAVF%252FHH_roads_3D_v1%252FHH_roads_3D_collada_MasterJSON.json%26n%3DHH_Roads%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1ArMIufnP5Cie272YAa2x1BWZlcuCWN_NYovmptdN0b0%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D50%26av%3D200&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fhamburg_TAVF%252FHH_markings_3D%252FHH_markings_3D_collada_MasterJSON.json%26n%3DHH_Markings%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D50%26av%3D200&l_3=u%3Dhttps%253A%252F%252Fdaten-hamburg.de%252Fgdi3d%252Fdatasource-data%252FLoD3_tex20cm_Area1%252Ftileset.json%26n%3DHH_Buildings%253ALOD3_area1%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_4=u%3Dhttps%253A%252F%252Fdaten-hamburg.de%252Fgdi3d%252Fdatasource-data%252FLoD3_tex20cm_Area4%252Ftileset.json%26n%3DHH_Buildings%253ALOD3_area4%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_5=u%3Dhttps%253A%252F%252Fdaten-hamburg.de%252Fgdi3d%252Fdatasource-data%252FStrassenbaumkataster_Sommerbaeume%252Ftileset.json%26n%3DHH_Vegetation%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_6=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fhamburg_TAVF%252FHH_cityfurniture_absolute_heights%252Ftileset.json%26n%3DHH_CityFurniture%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1kiu5kYECYMzJHX2DXG_fBRtN-5VUIzBcK1Xby846GLQ%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&tr=name%3DHH_dgm%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fdaten-hamburg.de%252Fgdi3d%252Fdatasource-data%252FGelaende%252F&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Lane Models Munich Sonnenstr., Buildings, Vegetation :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=Munich_Lane_Modell_Sonnenstrasse_Nord&s=false&ts=0&la=48.136087&lo=11.564843&h=201.333&hd=10.5&p=-40.8&r=0.05&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-sonnenstrasse%252Fgltf_sonnenstrasse_lanemodel_colored%252Fgltf_sonnenstrasse_lanemodel_colored_collada_MasterJSON.json%26n%3DLane_Modell%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1O-KE7y2Laua07W55-7cLGRVTBmyWvX71S1H9ebN3fgw%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-sonnenstrasse%252Fgltf_lod2_height_0%252Fgltf_lod2_height_0_collada_MasterJSON.json%26n%3DBuilding%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1gQqMGaEjXxO0kRfDTDsXVEJsm7Gi0b0w65e4GgPIU1M%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-sonnenstrasse%252Fgltf_vegetation_0%252Fgltf_vegetation_0_collada_MasterJSON.json%26n%3DTrees%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-sonnenstrasse%252Fgltf_sonnenstrasse_markings_0%252Fgltf_sonnenstrasse_markings_0_collada_MasterJSON.json%26n%3DMarkings%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-sonnenstrasse%252Fgltf_poles_0%252Fgltf_poles_0_collada_MasterJSON.json%26n%3DPoles%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1O-KE7y2Laua07W55-7cLGRVTBmyWvX71S1H9ebN3fgw%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_5=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-sonnenstrasse%252Fgltf_trees_0%252Fgltf_trees_3D_collada_MasterJSON.json%26n%3DTrees_3D%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1D9y6ECod7ZY2-aBGy4wuAHC5m43baV_1L2OFMJ7vED4%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&bm=name%3Dluftbild%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fgeoportal.muenchen.de%252Fgeoserver%252Fgsm%252Fows%253Fservice%253DWMS%2526request%253DGetMap%2526crs%253DEPSG%253A4326%2526dpiMode%253D7%2526format%253Dimage%252Fpng%2526layers%253Dluftbild%26layers%3Dluftbild%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Streets Munich Frankfurter Ring, Vegetation, Traffic Signs :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=Munich_Frankfurter_Ring_trafficSim&s=false&ts=0&la=48.186629&lo=11.586&h=684.514&hd=325.85&p=-47.23&r=359.84&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_building_textured%252Fkml_building_textured_collada_MasterJSON.json%26n%3DBuilding%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1d1HZcdKGe-0_r195ScnSViFAmMC_sk7bpvklfjQIQg8%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252FtrafficSim%252Ffrankfurter_ring_trafficSim_bridge_slope.czml%26n%3DtrafficSim%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichSolarFull%252Fvegetation%252Fmunich_vegetation_collada_MasterJSON.json%26n%3DVegetation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Ffr_point_cloud%252Ftileset.json%26n%3DPointcloud%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dfalse%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D%26null%3D16&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_frankfurter_ring_trees%252Fkml_frankfurter_ring_tree_collada_MasterJSON.json%26n%3DTrees%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1EnpXGeFmfPF353Vml3yaLQ6uttsuGIHM5o441vU4Y30%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_5=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_frankfurter_ring_signs%252Fkml_fr_signs_collada_MasterJSON.json%26n%3DSigns%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F13x-2m_9LkfEb6XSkTr13qOjWnLCc3Vqdn4yJXfXgmcE%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_6=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_frankfurter_ring_poles_arc%252Fkml_frankfurter_ring_poles_arc_collada_MasterJSON.json%26n%3DPoles%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_7=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_frankfurter_ring_lantern%252Fkml_lantern_collada_MasterJSON.json%26n%3DLantern%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_8=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_frankfurter_ring_trafficlights%252Fkml_trafficlights_collada_MasterJSON.json%26n%3DTrafficLights%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_9=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_frankfurter_ring_texture%252Fkml_frankfurter_ring_texture_collada_MasterJSON.json%26n%3DRoad%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1TJdTdjTkylDnoe2FlQLiZIDheux5eD9sibGwvrZyllY%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&l_10=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fmuc-frankfurter-ring%252Fkml_bridge_2%252Fkml_bridge_2_collada_MasterJSON.json%26n%3DBridge%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1ORCU1-LLBa3tcIYUr-Yd6JFaN0_k7NGyw-B4rX0KGN4%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200%26null%3D16&bm=imageryType%3Dwms%26url%3Dhttps%253A%252F%252Fgeoservices.bayern.de%252Fod%252Fwms%252Fdop%252Fv1%252Fdop20%253F%26name%3Dby_dop20c%26iconUrl%3D%26tooltip%3D%26layers%3Dby_dop20c%26tileStyle%3D%26tileMatrixSetId%3D%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&tr=name%3Ddgm%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fbvv3d21.bayernwolke.de%252F3d-data%252Flatest%252Fterrain%252F&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information
+ [x] CZML simulation

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Streets Ingolstadt, generated from OpenDRIVE :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=Ingolstadt_CityGML_Demo&s=false&ts=0&la=48.778398&lo=11.433917&h=63.775&hd=28.85&p=-33.19&r=0.11&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252FIngolstadt%252Fingolstadt_streetspace_1%252Fingolstadt_streetspace_1_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Transportation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1fnRZyUjsfqOEoYbEHrf0jn2gM3tKZq2Av-y0laUv8qo%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_marking_2d%252Fkml_marking_2d_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Marking%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1Tbm5ByY_EkcNLR03-KWMBXuZ15ady0eGfATlJJyDubc%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_building_lod2_textured%252Fkml_building_lod2_textured_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Building%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1VE5SJ_36Wwpyk1gyYuB-2BHob-Uynvy7XAYNrGbthRc%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_trafficsigns%252Fkml_ingolstadt_trafficsigns_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_TrafficSigns%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1ZSqsEebEeRl-kmPg7B85wy43PPkiW5gy-6EYG9-JKE4%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fingolstadt_trees_3%252Fingolstadt_trees_3_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Trees%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1eVaAwL6oMPBos5K_VBBAfxyh8NSwuxxm-A_wc3-S05w%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_5=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_poles%252Fkml_ingolstadt_poles_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Poles%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_6=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_trafficlights%252Fkml_ingolstadt_trafficlights_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_TrafficLights%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F12Kez_zYqIbEn2b7kmOI1BQrLcNLd2mRa5A7P9g0vx2w%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_7=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_streetlantern%252Fkml_ingolstadt_streetlantern_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_StreetLantern%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_8=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_trafficlight_pole%252Fkml_ingolstadt_trafficlight_pole_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_TrafficLightPoles%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_9=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_structures%252Fkml_ingolstadt_structures_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Structures%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_10=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_transportation_textured%252Fkml_ingolstadt_transportation_textured_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Transportation_textured%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1fnRZyUjsfqOEoYbEHrf0jn2gM3tKZq2Av-y0laUv8qo%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Streets Ingolstadt, generated from OpenDRIVE :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=Ingolstadt_CityGML_Demo&s=false&ts=0&la=48.778271&lo=11.433966&h=69.365&hd=19.56&p=-30.75&r=0.07&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252FIngolstadt%252Fingolstadt_streetspace_1%252Fingolstadt_streetspace_1_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Transportation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1fnRZyUjsfqOEoYbEHrf0jn2gM3tKZq2Av-y0laUv8qo%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_marking_2d%252Fkml_marking_2d_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Marking%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1Tbm5ByY_EkcNLR03-KWMBXuZ15ady0eGfATlJJyDubc%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_building_lod2_textured%252Fkml_building_lod2_textured_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Building%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1VE5SJ_36Wwpyk1gyYuB-2BHob-Uynvy7XAYNrGbthRc%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_trafficsigns%252Fkml_ingolstadt_trafficsigns_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_TrafficSigns%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1ZSqsEebEeRl-kmPg7B85wy43PPkiW5gy-6EYG9-JKE4%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fingolstadt_trees_3%252Fingolstadt_trees_3_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Trees%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1eVaAwL6oMPBos5K_VBBAfxyh8NSwuxxm-A_wc3-S05w%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_5=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_poles%252Fkml_ingolstadt_poles_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Poles%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_6=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_trafficlights%252Fkml_ingolstadt_trafficlights_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_TrafficLights%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F12Kez_zYqIbEn2b7kmOI1BQrLcNLd2mRa5A7P9g0vx2w%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_7=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_streetlantern%252Fkml_ingolstadt_streetlantern_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_StreetLantern%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_8=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_trafficlight_pole%252Fkml_ingolstadt_trafficlight_pole_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_TrafficLightPoles%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_9=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fkml_ingolstadt_structures%252Fkml_ingolstadt_structures_collada_MasterJSON.json%26n%3DIngolstadt_CityGML_Structures%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: LOD3 Streets Ingolstadt, Buildings, generated from OpenDRIVE :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=Ingolstadt_CityGML_LoD3_Demo&shadows=false&terrainShadows=0&latitude=48.76260236962909&longitude=11.422930929500357&height=4.125219776773144&heading=160.38529241793196&pitch=-3.6663241843833143&roll=0.0641857421725928&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fingolstadt_lod3%252Fkml_ingolstadt_trafficareas%252Fkml_ingolstadt_trafficareas_collada_MasterJSON.json%26name%3DIngolstadt_CityGML_TrafficArea%26active%3Dtrue%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fingolstadt_lod3%252Fkml_ingolstadt_auxiliarytrafficareas%252Fkml_ingolstadt_auxiliarytrafficareas_collada_MasterJSON.json%26name%3DIngolstadt_CityGML_AuxiliaryTrafficArea%26active%3Dtrue%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt_2%255Ckml_building_lod3_ingolstadt_neu%252Fkml_building_lod3_ingolstadt_collada_MasterJSON.json%26name%3DIngolstadt_CityGML_Building_LoD3%26active%3Dtrue%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fingolstadt_lod3%252Fkml_ingolstadt_sections%252Fkml_ingolstadt_sections_collada_MasterJSON.json%26name%3DIngolstadt_CityGML_Section%26active%3Dfalse%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fingolstadt%252Fingolstadt_lod3%252Fkml_ingolstadt_intersection%252Fkml_ingolstadt_intersection_collada_MasterJSON.json%26name%3DIngolstadt_CityGML_Intersection%26active%3Dfalse%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: LOD3 Streets Numazu, Buildings, Project PLATEAU

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?d=2023-10-27T17%3A05%3A23Z&t=PLATEAU_Numazu&s=false&ts=0&la=35.095046&lo=138.857466&h=38.583&hd=18.76&p=-12.62&r=0.06&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fplateau%252Fnumazu%252Froad%252Froad_collada_MasterJSON.json%26n%3DRoad%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1ySWCrCJQqcLbwuRPxyvXh4oTMR-xoocjRb8ieDt7WeY%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fplateau%252Fnumazu%252Fmarking%252Fmarking_collada_MasterJSON.json%26n%3DMarking%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1pVvnIjwhSUTnW_vxgXR1XJ6dso8KvBOInxCGfyvg1Kk%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fplateau%252Fnumazu%252Fhole%252Fhole_collada_MasterJSON.json%26n%3DHole%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fplateau%252Fnumazu%252FCityFurniture%252Ftileset.json%26n%3DCityFurniture%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1cYG5WI95hs8Qtt8Y893VCfGPRFi7v3A-qnolTvUzBLU%252Fedit%253Fusp%253Dsharing%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fplateau%252Fnumazu%252Fvegetation%252FSolitaryVegetationObject%252Ftileset.json%26n%3DVegetation%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dfalse%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_5=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fplateau%252Fnumazu%252Fbuilding_lod3%252Ftileset.json%26n%3DBuilding%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&sw=showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [ ] Highlight single and multiple objects -> Some (textured) buildings have no/invisible highlighting on hover
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: LOD3 TUM Buildings, Streets, Project TUM2TWIN

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=tum2twin&s=false&ts=0&la=48.146631&lo=11.569777&h=701.398&hd=323.05&p=-37.61&r=0&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-playground%252Flod3_textured%252Ftileset.json%26n%3DBuildings%2520LOD3%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FmunichCenter%252Fvegetation-glTF%252Fvege_collada_MasterJSON.json%26n%3DVegetation%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D120%26al%3D1.7976931348623157e%252B308%26ac%3D50%26av%3D200&l_2=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum_clearancespace%252Fpointcloud%252Ftileset.json%26n%3DPointcloud%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dfalse%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_3=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-playground%252Flod2_without_lod3%252Ftileset.json%26n%3DBuildings%2520LOD2%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_4=u%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-playground%252Froadrunner_height_texture%252Ftileset.json%26n%3DRoads%26ld%3DCesium%25203D%2520Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&bm=name%3Dluftbild%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fgeoportal.muenchen.de%252Fgeoserver%252Fgsm%252Fows%253Fservice%253DWMS%2526request%253DGetMap%2526crs%253DEPSG%253A4326%2526dpiMode%253D7%2526format%253Dimage%252Fpng%2526layers%253Dluftbild%26layers%3Dluftbild%26additionalParameters%3D%26proxyUrl%3D%252Fproxy%252F&tr=name%3Dterrain%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-playground%252Fterrain&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [ ] Highlight single and multiple objects -> Some (textured) buildings have no/invisible highlighting on hover
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Vienna LOD1 Buildings, Streets :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?t=Vienna_CityModel&s=false&ts=0&la=48.214497&lo=16.389639&h=783.76&hd=352.98&p=-65.56&r=359.94&l_0=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fwien%252Froads%252Fvienna_roads_gltf_collada_MasterJSON.json%26n%3DVienna_Roads%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fwien%252Fkml_building_lod1_wien%252Fkml_building_lod1_wien_collada_MasterJSON.json%26n%3DVienna_Buildings%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D125%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&sw=)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: TUM Traffic Spaces, Buildings :heavy_check_mark:

[Demo Link](https://3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=TUM_TrafficSpaces_Demo&shadows=false&terrainShadows=0&latitude=48.146704304522174&longitude=11.568444567729504&height=109.24374138697007&heading=347.30598385282934&pitch=-43.29684117171245&roll=359.9420533694946&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_TrafficArea%252FTUM_TrafficArea_collada_MasterJSON.json%26name%3DTUM_TrafficArea%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_trafficSpace%252FTUM_trafficSpace_geometry_MasterJSON.json%26name%3DTUM_TrafficSpace%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1JiIJnxpZiKOrCvVittVhPkVjmBEEItRuvGlP5H1BdT4%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_building%252FTUM_building_collada_MasterJSON.json%26name%3DTUM_Building_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1GMNdPpx5ujDLWLdou6kobuibwxJHQCxFAiEPBFb7L5w%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-vegetation%252Ftum-vegetation_collada_MasterJSON.json%26name%3DTUM_Vegetation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_auxiliaryTrafficArea%252FTUM_auxiliaryTrafficArea_collada_MasterJSON.json%26name%3DTUM_AuxiliaryTrafficArea%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_5=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_auxiliaryTrafficSpace%252FTUM_auxiliaryTrafficSpace_geometry_MasterJSON.json%26name%3DTUM_AuxiliaryTrafficSpace%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_6=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_bike_lanes%252FTUM_bike_lanes_footprint_MasterJSON.json%26name%3DTUM_bike_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_7=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_car_lanes%252FTUM_car_lanes_footprint_MasterJSON.json%26name%3DTUM_car_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_8=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_pedestrian_lanes%252FTUM_pedestrian_lanes_footprint_MasterJSON.json%26name%3DTUM_pedestrian_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: TUM Traffic Areas, Buildings :heavy_check_mark:

[Demo Link](https://3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=TUM_TrafficSpaces_Demo&shadows=false&terrainShadows=0&latitude=48.146704304522174&longitude=11.568444567729504&height=109.24374138697007&heading=347.30598385282934&pitch=-43.29684117171245&roll=359.9420533694946&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_TrafficArea%252FTUM_TrafficArea_collada_MasterJSON.json%26name%3DTUM_TrafficArea%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_trafficSpace%252FTUM_trafficSpace_geometry_MasterJSON.json%26name%3DTUM_TrafficSpace%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1JiIJnxpZiKOrCvVittVhPkVjmBEEItRuvGlP5H1BdT4%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_building%252FTUM_building_collada_MasterJSON.json%26name%3DTUM_Building_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1GMNdPpx5ujDLWLdou6kobuibwxJHQCxFAiEPBFb7L5w%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-vegetation%252Ftum-vegetation_collada_MasterJSON.json%26name%3DTUM_Vegetation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_auxiliaryTrafficArea%252FTUM_auxiliaryTrafficArea_collada_MasterJSON.json%26name%3DTUM_AuxiliaryTrafficArea%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_5=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_auxiliaryTrafficSpace%252FTUM_auxiliaryTrafficSpace_geometry_MasterJSON.json%26name%3DTUM_AuxiliaryTrafficSpace%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_6=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_bike_lanes%252FTUM_bike_lanes_footprint_MasterJSON.json%26name%3DTUM_bike_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_7=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_car_lanes%252FTUM_car_lanes_footprint_MasterJSON.json%26name%3DTUM_car_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_8=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_pedestrian_lanes%252FTUM_pedestrian_lanes_footprint_MasterJSON.json%26name%3DTUM_pedestrian_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: TUM Traffic Lines, Buildings :heavy_check_mark:

[Demo Link](https://3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=TUM_TrafficSpaces_Demo&shadows=false&terrainShadows=0&latitude=48.146704304522174&longitude=11.568444567729504&height=109.24374138697007&heading=347.30598385282934&pitch=-43.29684117171245&roll=359.9420533694946&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_TrafficArea%252FTUM_TrafficArea_collada_MasterJSON.json%26name%3DTUM_TrafficArea%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_trafficSpace%252FTUM_trafficSpace_geometry_MasterJSON.json%26name%3DTUM_TrafficSpace%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1JiIJnxpZiKOrCvVittVhPkVjmBEEItRuvGlP5H1BdT4%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_building%252FTUM_building_collada_MasterJSON.json%26name%3DTUM_Building_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1GMNdPpx5ujDLWLdou6kobuibwxJHQCxFAiEPBFb7L5w%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-vegetation%252Ftum-vegetation_collada_MasterJSON.json%26name%3DTUM_Vegetation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_auxiliaryTrafficArea%252FTUM_auxiliaryTrafficArea_collada_MasterJSON.json%26name%3DTUM_AuxiliaryTrafficArea%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_5=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation%252FTUM_auxiliaryTrafficSpace%252FTUM_auxiliaryTrafficSpace_geometry_MasterJSON.json%26name%3DTUM_AuxiliaryTrafficSpace%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_6=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_bike_lanes%252FTUM_bike_lanes_footprint_MasterJSON.json%26name%3DTUM_bike_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_7=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_car_lanes%252FTUM_car_lanes_footprint_MasterJSON.json%26name%3DTUM_car_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_8=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_Streetspace%252FTUM_pedestrian_lanes%252FTUM_pedestrian_lanes_footprint_MasterJSON.json%26name%3DTUM_pedestrian_lanes%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects -> Traffic lines without highlighting
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: TUM Traffic Spaces, Buildings, TrueDOP20 :heavy_check_mark:

[Demo Link](https://3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=TUM_Streetspace_Demo_textured&shadows=false&terrainShadows=0&latitude=48.14620565618091&longitude=11.568248586473178&height=186.88491934457545&heading=355.6526816702481&pitch=-48.43357011676891&roll=359.97805785824437&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_building_LoD2_textured%252FTUM_Building_textured_collada_MasterJSON.json%26name%3DTUM_Building_LoD2_textured%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1GMNdPpx5ujDLWLdou6kobuibwxJHQCxFAiEPBFb7L5w%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTUM_transportation_textured%252Fkml_transportation_TUM_textured_collada_MasterJSON.json%26name%3DTUM_Transportation_LoD2_textured%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1j9emFAkNtS9ROo_0cEagNMev2uluMBcVI_VoaE2j97Y%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftum-vegetation%252Ftum-vegetation_collada_MasterJSON.json%26name%3DTUM_Vegetation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: NYC Streets, Buildings :heavy_check_mark:

[Demo Link](https://www.3dcitydb.org/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?title=NYC_Detailed_Road_Model&shadows=false&terrainShadows=0&latitude=40.74324791682301&longitude=-73.98788672934239&height=393.81226291204905&heading=212.81661879694923&pitch=-54.90142422275025&roll=359.82142819822883&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FEntrance1%252FEntrance1_collada_MasterJSON.json%26name%3DParking_Lot_Entrance%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1-3JFVBB16ZY2heG6a1eJi6W1rEPo5FEPuKQ469G-hxA%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FParking_Lot1%252FParking_Lot1_collada_MasterJSON.json%26name%3DParking_Lot%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1A-907mG66x_Ry1s3T0k5cBLVi7Xo4ijrezHoqVGkDe0%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FMedian_Grass%252FMedian_Grass_collada_MasterJSON.json%26name%3DGrass_Area%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1rhjSQwkgky74jTe1jDJlHIiQB6_sFiX-LJ5ZEpbhLtY%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FSidewalk1%252FSidewalk1_collada_MasterJSON.json%26name%3DSidewalk%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1GIcPNoMLAyPJVtVbNE3-_0Tiu1Xjr1Fj09tY2QPPA2s%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FMedian_Painted1%252FMedian_Painted1_collada_MasterJSON.json%26name%3DRoad_Marking%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1fd-xnvIoAPvJjzRwRTuGogKgJX08nDDyym184t02avo%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_5=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FIntersection1%252FIntersection1_collada_MasterJSON.json%26name%3DIntersection%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1DL1TpKUcOfSmcaqfJ-iB6rHBW2TQJkYLvl2sg6FGes4%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_6=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FRoadbed1%252FRoadbed1_collada_MasterJSON.json%26name%3DRoadbed%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F13U0NRWyRjjaAOlsIHvhtKFYNSUUpmseBKAzr4ei-954%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_7=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FPlaza1%252FPlaza_collada_MasterJSON.json%26name%3DPlaza%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1qkO0qgrfnP8tbuiJhz2I5ydX-lR1CCZl-wyxbXdcjvk%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_8=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FCurb%252FCurb_collada_MasterJSON.json%26name%3DCurb%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1fNljJXfTFkAiDMFncGUYhse8R_CQ1Vo_HeNWRP_fijU%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_9=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FTrack%252FTrack_collada_MasterJSON.json%26name%3DTrack%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dfalse%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1Z9PIPrFQY5tudHOqczsPjfIN29XfCrtXez2rtgpto7g%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_10=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FTraffic_Islands%252FTraffic_Islands_collada_MasterJSON.json%26name%3DDividing_Strips%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1qXPJ1ezPV04RNONpOBlJYm7JE_8I_Q8ho-bJLdXlqlc%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_11=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FNYC-Model-20170501%252FBuilding_gltf%252FBuilding_gltf_collada_MasterJSON.json%26name%3DBuildings%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1DbkMUSYW_YlE48MUxH5fak56uaCL8QXNrBgEr0gfuCY%26cityobjectsJsonUrl%3D%26minLodPixels%3D125%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dtrue)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: NYC Streets, Buildings, Solar :heavy_check_mark:

[Demo Link](https://www.3dcitydb.org/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?title=Manhattan_Solar_Potential_Demo&shadows=false&terrainShadows=0&latitude=40.74376291111547&longitude=-73.98825169927005&height=536.2218171263468&heading=211.0638244871956&pitch=-59.003177051480215&roll=359.8103188243277&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_building_original%252Fnyc_building_original_collada_MasterJSON.json%26name%3DNYC%2520Buildings%26active%3Dfalse%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_building_original%252Fnyc_building_original.json%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_street_original%252Fnyc_street_original_collada_MasterJSON.json%26name%3DNYC%2520Streets%26active%3Dfalse%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_street_original%252Fnyc_street_original.json%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_solar_building%252Fnyc_solar_building_collada_MasterJSON.json%26name%3DNYC%2520Buildings%2520(Solar)%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Ffusiontables.google.com%252FDataSource%253Fdocid%253D1k3XQq8X2wmccRE2xFYTb8VglkdSx_kSH63Gmn-mK%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_solar_building%252Fnyc_solar_building.json%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_solar_street%252Fnyc_solar_street_collada_MasterJSON.json%26name%3DNYC%2520Streets%2520(Solar)%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Ffusiontables.google.com%252FDataSource%253Fdocid%253D17VIvDhLSOOwMd5fWAAPFbGsRZe6Qx_4n4SvveajY%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fsunpot-nyc-street%252Fnyc_solar_street%252Fnyc_solar_street.json%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object -> Fusiontables (deprecated) were used

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Grafing Traffic Simulations

[Demo Link](https://www.3dcitydb.org/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?title=Grafing_near_Munich_Traffic_Simulation&shadows=false&terrainShadows=0&latitude=48.04573825376668&longitude=11.966930276447522&height=30.206652166610038&heading=245.3071184351577&pitch=-24.548391116909492&roll=359.8089378958422&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTheresa%252FKML%252Ftransportation2citygml_collada_MasterJSON.json%26name%3DTransportation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D1r1nE2ih6r83hJzt65ZyI8B4B7vzR9ckQH-XmeyH9%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTheresa%252FKML%252Ftransportation2citygml.json%26minLodPixels%3D120%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTheresa%252FKML%252Fsignals2citygml_collada_MasterJSON.json%26name%3DSignals%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D1H6EsTosik8LEweAk-CikiDdWX418_7NyItv16bwf%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTheresa%252FKML%252Fsignals2citygml.json%26minLodPixels%3D120%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTheresa%252FKML%252Fobjects2citygml_collada_MasterJSON.json%26name%3DObjects%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D1XB0KCY8qXM6GWpKFnwhef7FVfUIKJaJ1umWbsk63%26cityobjectsJsonUrl%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FTheresa%252FKML%252Fobjects2citygml.json%26minLodPixels%3D120%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftraffic-grafing%252FSim6minLSA.czml%26name%3DVerkehrssimulation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D120%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fmydata%252FGrafing_Demo%252FGrafing_Buildings_2016-04-28_Textures_ScaleFactor_1.0%252FGrafing_Buildings_collada_MasterJSON.json%26name%3DBuildings%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3D%26cityobjectsJsonUrl%3D%26minLodPixels%3D50%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information
+ [ ] CZML simulation -> Vehicles orientation rotated by 90 degrees

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object -> Fusiontables (deprecated) were used

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: CityGML and OpenDRIVE Grafing, Traffic Simulation

[Demo Link](https://3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=Grafing_CityGML_Demo&shadows=false&terrainShadows=0&latitude=48.044786640755994&longitude=11.96616818443124&height=141.680954180839&heading=2.1740016787565626&pitch=-64.12308341485138&roll=0.016751920662850174&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fgrafing_transportation%252Fkml_grafing_TrafficAreas%252Fkml_grafing_TrafficAreas_collada_MasterJSON.json%26name%3DGrafing_CityGML_TrafficAreas%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1aRIHMNWJHjavYEYvcjAQqLEkekWFFaqpNbwJkQuKeaY%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fmydata%252FGrafing_Demo%252FGrafing_Buildings_2016-04-28_Textures_ScaleFactor_1.0%252FGrafing_Buildings_collada_MasterJSON.json%26name%3DGrafing_CityGML_Buildings%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FGrafing-Test-20170208%252Flod0Network%252Flod0Newtork_footprint_MasterJSON.json%26name%3DGrafing_OpenDrive_Referenceline%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fgrafing_transportation%252Fkml_grafing_sections%252Fkml_grafing_sections_geometry_MasterJSON.json%26name%3DGrafing_CityGML_Sections%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fgrafing_transportation%252Fkml_grafing_intersections%252Fkml_grafing_intersections_geometry_MasterJSON.json%26name%3DGrafing_CityGML_Intersections%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dfalse%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_5=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fgrafing_transportation%252Fkml_grafing_markings%252Fkml_grafing_markings_collada_MasterJSON.json%26name%3DGrafing_CityGML_Markings%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_6=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Ftraffic-grafing%252FSim6minLSA.czml%26name%3DGrafing_TraffiicSimulation%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information
+ [ ] CZML simulation -> Vehicles orientation rotated by 90 degrees

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Melbourne LOD2 Streets, Buildings :heavy_check_mark:

[Demo Link](https://www.3dcitydb.org/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=Melbourne_Streetspace_LoD2&shadows=false&terrainShadows=0&latitude=-37.808172850916705&longitude=144.96510794314432&height=443.4330303601941&heading=9.896470830181748&pitch=-74.89240010024886&roll=359.87863005263307&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Carriageway_LoD2%252FMelbourne_Carriageway_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Carriageway_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1sw1Lh9m1DTJotSa8Bbr4BKHQF9WkseRmeAjsS2ypVWw%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Footpath_LoD2%252FMelbourne_Footpath_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Footpath_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F15igWEPL_Hicfu1t29ryzSsPa593h48uYwgDp9sy4pAY%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_2=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Median_LoD2%252FMelbourne_Median_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Median_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1b7jpctmo2mPAh0cyZ_WpGipr9Ea2klRRJVTos7spJ4E%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_3=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Kerb_LoD2%252FMelbourne_Kerb_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Kerb_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1KOI0fZx9y1AsCPpFAxF2OK7clnrHaSu069AN4GoIVKs%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_4=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Parking_Bay_LoD2%252FMelbourne_Parking_Bay_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Parking_Bay_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1tGuB2_Ckt14Fq6ws6b2_gldTob4tF_JeFxPpFj8adLk%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_5=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Road_Channel_LoD2%252FMelbourne_Road_Channel_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Road_Channel_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1Y2gAOvFa2B3_dg24ptrzH0V3k5n3bUNn7UgRJ2V9jFE%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_6=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD2%252FMelbourne_Tramway_LoD2%252FMelbourne_Tramway_LoD2_geometry_MasterJSON.json%26name%3DMelbourne_Tramway_LoD2%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F146HHsN82mpNzAr6g6CAXQCMBLupGeaGwmvfsOT1oQQc%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_7=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Building_LoD1%252FMelbourne_Building_LoD1_collada_MasterJSON.json%26name%3DMelbourne_Building_LoD1%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fdocs.google.com%252Fspreadsheets%252Fd%252F1vAfXUTi6YbgHh1SvfmkPGjMNgPALKKATqcyqbg9SyXs%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dtrue)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Melbourne LOD1 Streets, Buildings :heavy_check_mark:

[Demo Link](https://www.3dcitydb.org/3dcitydb-web-map/2.0.0-dev/3dwebclient/index.html?title=Melbourne_Streetspace_LoD1&shadows=false&terrainShadows=0&latitude=-37.81011251757671&longitude=144.9631999448069&height=656.2681691357357&heading=7.505459775427195&pitch=-59.50883495500552&roll=359.9523173380835&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Streetspace_LoD1%252FMelboune_Streetspace_LoD1_geometry_MasterJSON.json%26name%3DMelbourne_Streetspace_LoD1%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D1.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D1it5kP2V1yAHnzMyvxbgWqKdYKNqY27pquDK_8u19%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&layer_1=url%3Dhttps%253A%252F%252Fwww.3dcitydb.org%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252FMelbourne%252FMelbourne_Building_LoD1%252FMelbourne_Building_LoD1_collada_MasterJSON.json%26name%3DMelbourne_Building_LoD1%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3Dhttps%253A%252F%252Fwww.google.com%252Ffusiontables%252FDataSource%253Fdocid%253D14wGFcpPSVRtqsOG8aMhGjUAjOhuVtxjk7C-NmysA%26cityobjectsJsonUrl%3D%26minLodPixels%3D100%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object -> Fusiontables (deprecated) were used

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps

## :milky_way: Mixed Layers > :point_right: Washington D.C. Streets :heavy_check_mark:

[Demo Link](https://www.3dcitydb.net/3dcitydb-web-map/2.0.0-dev/3dwebclient/?title=Washington_Road_Demo&shadows=false&terrainShadows=0&latitude=38.889078957501305&longitude=-77.03700093391359&height=1006.8315445658836&heading=1.6544813327191306&pitch=-49.66103584894631&roll=0.008414778094956044&layer_0=url%3Dhttps%253A%252F%252Fwww.3dcitydb.net%252F3dcitydb%252Ffileadmin%252Fpublic%252F3dwebclientprojects%252Fwashington_demo%252Fkml_transportation_example%252Fkml_washington_transportation_example_collada_MasterJSON.json%26name%3DWashington_Road%26layerDataType%3DCOLLADA%252FKML%252FglTF%26gltfVersion%3D2.0%26active%3Dtrue%26spreadsheetUrl%3D%26thematicDataSource%3DGoogleSheets%26tableType%3DHorizontal%26cityobjectsJsonUrl%3D%26minLodPixels%3D0%26maxLodPixels%3D1.7976931348623157e%252B308%26maxSizeOfCachedTiles%3D200%26maxCountOfVisibleTiles%3D200&splashWindow=url%3Dsplash%252FSplashWindow.html%26showOnStart%3Dfalse)

**General information**:

+ [x] Display layer information in toolbox
+ [x] Responsive display/switch of layer information

**3D layer handling**:

+ [x] Activate layers
+ [x] Deactivate layers
+ [x] Remove layers
+ [x] Reinsert layers

**Highlighting and hiding**:

+ [x] Highlight single and multiple objects
+ [x] List highlighted objects
+ [x] Select and fly to a highlighted object
+ [x] Hide single and multiple objects
+ [x] List hidden objects
+ [x] Select and fly to a hidden object
+ [x] Show all hidden objects
+ [x] Clear highlighting

**Thematic data**:

+ [x] Info table for a clicked object

**Screenshot and print**:

+ [x] Create screenshot
+ [x] Print current view

**Enabling and disabling shadows**:

+ [x] Enable shadows
+ [x] Enable shadows first, then enable terrain shadows
+ [x] Enable terrain shadows without enabling shadows
+ [x] Disable terrain shadows
+ [x] Disable terrain shadows first, then disable shadows
+ [x] Disable shadows without disabling terrain shadows

**Display in external maps**:

+ [x] Open in Google StreetView
+ [x] Open in OpenStreetMap
+ [x] Open in BingMaps ObliqueView
+ [x] Open in DualMaps
