/*
 * 3DCityDB-Web-Map-Client
 * http://www.3dcitydb.org/
 * 
 * Copyright 2015 - 2017
 * Chair of Geoinformatics
 * Technical University of Munich, Germany
 * https://www.gis.bgu.tum.de/
 * 
 * The 3DCityDB-Web-Map-Client is jointly developed with the following
 * cooperation partners:
 * 
 * virtualcitySYSTEMS GmbH, Berlin <http://www.virtualcitysystems.de/>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *     
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**-----------------------------------------Separate Line-------------------------------------------------**/

// URL controller
var urlController = new UrlController();

/*---------------------------------  set globe variables  ----------------------------------------*/
// Bing Token for Bing Imagery Layers and Geocoder
// If this is not valid, the Bing Imagery Layers will be removed and the Bing Geocoder will be replaced with OSM Nominatim
var bingToken = urlController.getUrlParaValue('bingToken', window.location.href, CitydbUtil);
if (Cesium.defined(bingToken) && bingToken !== "") {
    new Cesium.BingMapsImageryProvider({
        url: 'https://dev.virtualearth.net',
        key: bingToken,
        mapStyle: Cesium.BingMapsStyle.AERIAL
    });
    new Cesium.BingMapsGeocoderService({
        key: bingToken
    });
}

// Define clock to be animated per default
var clock = new Cesium.Clock({
    shouldAnimate: true
});

// create 3Dcitydb-web-map instance
var shadows = urlController.getUrlParaValue('shadows', window.location.href, CitydbUtil);
var terrainShadows = urlController.getUrlParaValue('terrainShadows', window.location.href, CitydbUtil);

var cesiumViewerOptions = {
    selectedImageryProviderViewModel: Cesium.createDefaultImageryProviderViewModels()[1],
    timeline: true,
    animation: true,
    fullscreenButton: false,
    shadows: (shadows == "true"),
    terrainShadows: parseInt(terrainShadows),
    clockViewModel: new Cesium.ClockViewModel(clock)
}

// If neither Bing Token nor ionToken is present, use the OpenStreetMap Geocoder Nominatim
var ionToken = urlController.getUrlParaValue('ionToken', window.location.href, CitydbUtil);
if (Cesium.defined(ionToken) && ionToken !== "") {
    Cesium.Ion.defaultAccessToken = ionToken;
}
if ((!Cesium.defined(bingToken) || bingToken === "")
    && (!Cesium.defined(ionToken) || ionToken === "")) {
    cesiumViewerOptions.geocoder = new OpenStreetMapNominatimGeocoder();
}

var cesiumViewer = new Cesium.Viewer('cesiumContainer', cesiumViewerOptions);

adjustIonFeatures();

//navigationInitialization('cesiumContainer', cesiumViewer);
cesiumViewer.extend(Cesium.viewerCesiumNavigationMixin, {});

var cesiumCamera = cesiumViewer.scene.camera;
var webMap = new WebMap3DCityDB(cesiumViewer);

// set default input parameter value and bind the view and model
var addLayerViewModel = {
    url: "",
    name: "",
    layerDataType: "",
    layerProxy: false,
    layerClampToGround: false,
    gltfVersion: "",
    thematicDataUrl: "",
    thematicDataSource: "",
    tableType: "",
    // googleSheetsApiKey: "",
    // googleSheetsRanges: "",
    // googleSheetsClientId: "",
    cityobjectsJsonUrl: "",
    minLodPixels: "",
    maxLodPixels: "",
    maxSizeOfCachedTiles: 200,
    maxCountOfVisibleTiles: 200,
    maximumScreenSpaceError: 16
};
Cesium.knockout.track(addLayerViewModel);
Cesium.knockout.applyBindings(addLayerViewModel, document.getElementById('citydb_addlayerpanel'));

var addWmsViewModel = {
    imageryType: "",
    url: "",
    name: "",
    iconUrl: "",
    tooltip: "",
    layers: "",
    tileStyle: "",
    tileMatrixSetId: "",
    additionalParameters: "",
    proxyUrl: "/proxy/"
};
Cesium.knockout.track(addWmsViewModel);
Cesium.knockout.applyBindings(addWmsViewModel, document.getElementById('citydb_addwmspanel'));

var addTerrainViewModel = {
    name: '',
    iconUrl: '',
    tooltip: '',
    url: ''
};
Cesium.knockout.track(addTerrainViewModel);
Cesium.knockout.applyBindings(addTerrainViewModel, document.getElementById('citydb_addterrainpanel'));

var addSplashWindowModel = {
    url: '',
    showOnStart: ''
};
Cesium.knockout.track(addSplashWindowModel);
Cesium.knockout.applyBindings(addSplashWindowModel, document.getElementById('citydb_addsplashwindow'));

// Splash controller
var splashController = new SplashController(addSplashWindowModel);

/*---------------------------------  Load Configurations and Layers  ----------------------------------------*/

initClient();

// Store clicked entities
var clickedEntities = {};

function initClient() {
    // adjust cesium navigation help popup for splash window
    splashController.insertSplashInfoHelp();
    // read splash window from url
    splashController.getSplashWindowFromUrl(window.location.href, urlController, jQuery, CitydbUtil, Cesium);

    // init progress indicator gif
    document.getElementById('loadingIndicator').style.display = 'none';

    // webMap events
    webMap.activateViewChangedEvent(true);
    webMap.registerMouseEventHandlers(cesiumViewer);

    // add Copyrights, TUM, 3DCityDB or more...
    var creditDisplay = cesiumViewer.scene.frameState.creditDisplay;

    var citydbCreditLogo = new Cesium.Credit('<a href="https://www.3dcitydb.org/" target="_blank"><img src="https://3dcitydb.org/3dcitydb/fileadmin/public/logos/3dcitydb_logo.png" title="3DCityDB"></a>', true);
    creditDisplay.addStaticCredit(citydbCreditLogo);

    var tumCreditLogo = new Cesium.Credit('<a href="https://www.asg.ed.tum.de/en/gis/" target="_blank">© 2024 Chair of Geoinformatics, TU Munich</a>', true);
    creditDisplay.addStaticCredit(tumCreditLogo);

    // activate debug mode
    var debugStr = urlController.getUrlParaValue('debug', window.location.href, CitydbUtil);
    if (debugStr == "true") {
        cesiumViewer.extend(Cesium.viewerCesiumInspectorMixin);
        cesiumViewer.cesiumInspector.viewModel.dropDownVisible = false;
    }

    // set title of the web page
    var titleStr = urlController.getUrlParaValue('title', window.location.href, CitydbUtil);
    if (titleStr) {
        document.title = titleStr;
    }

    // It's an extended Geocoder widget which can also be used for searching object by its gmlid.
    cesiumViewer.geocoder.viewModel._searchCommand.beforeExecute.addEventListener(function (info) {
        var callGeocodingService = info.args[0];
        if (callGeocodingService != true) {
            var gmlId = cesiumViewer.geocoder.viewModel.searchText;
            info.cancel = true;
            cesiumViewer.geocoder.viewModel.searchText = "Searching now.......";
            zoomToObjectById(gmlId, function () {
                cesiumViewer.geocoder.viewModel.searchText = gmlId;
            }, function () {
                cesiumViewer.geocoder.viewModel.searchText = gmlId;
                cesiumViewer.geocoder.viewModel.search.call(this, true);
            });
        }
    });

    // inspect the status of the showed and cached tiles	
    inspectTileStatus();

    // display current infos of active layer in the main menu
    observeActiveLayer();

    // Zoom to desired camera position and load layers if encoded in the url...	
    Promise.resolve(zoomToDefaultCameraPosition()).then(function (info) {
        var layers = urlController.getLayersFromUrl(
            window.location.href,
            CitydbUtil,
            CitydbKmlLayer,
            Cesium3DTilesDataLayer,
            CitydbI3SLayer,
            CitydbGeoJSONLayer,
            Cesium
        );
        loadLayerGroup(layers);

        var basemapConfigString = urlController.getUrlParaValue('basemap', window.location.href, CitydbUtil);
        if (basemapConfigString) {
            var viewMoModel = Cesium.queryToObject(Object.keys(Cesium.queryToObject(basemapConfigString))[0]);
            for (key in viewMoModel) {
                addWmsViewModel[key] = viewMoModel[key];
            }
            addWebMapServiceProvider();
        }

        var cesiumWorldTerrainString = urlController.getUrlParaValue('cesiumWorldTerrain', window.location.href, CitydbUtil);
        if (cesiumWorldTerrainString === "true") {
            // if the Cesium World Terrain is given in the URL --> activate, else other terrains
            cesiumViewer.terrainProvider = Cesium.createWorldTerrain();
            var baseLayerPickerViewModel = cesiumViewer.baseLayerPicker.viewModel;
            baseLayerPickerViewModel.selectedTerrain = baseLayerPickerViewModel.terrainProviderViewModels[1];
        } else {
            var terrainConfigString = urlController.getUrlParaValue('terrain', window.location.href, CitydbUtil);
            if (terrainConfigString) {
                var viewMoModel = Cesium.queryToObject(Object.keys(Cesium.queryToObject(terrainConfigString))[0]);
                for (key in viewMoModel) {
                    addTerrainViewModel[key] = viewMoModel[key];
                }
                addTerrainProvider();
            }
        }

        // Visually highlight toggle buttons
        handleToggleButton("toggleShadowButton", cesiumViewer.shadows);
        handleToggleButton("toggleTerrainShadowButton", cesiumViewer.terrainShadows);

        // Adjust GUI based on given values
        layerDataTypeDropdownOnchange();
        thematicDataSourceAndTableTypeDropdownOnchange();
        imageryTypeDropdownOnchange();
    });

    // jump to a timepoint
    var dayTimeStr = urlController.getUrlParaValue('dayTime', window.location.href, CitydbUtil);
    if (dayTimeStr) {
        var julianDate = Cesium.JulianDate.fromIso8601(decodeURIComponent(dayTimeStr));
        var clock = cesiumViewer.cesiumWidget.clock;
        clock.currentTime = julianDate;
        clock.shouldAnimate = false;
    }

    // add a calendar picker in the timeline using the JS library flatpickr
    var clockElement = document.getElementsByClassName("cesium-animation-blank")[0];
    flatpickr(clockElement, {
        enableTime: true,
        defaultDate: new Date(new Date().toUTCString().substr(0, 25)), // force flatpickr to use UTC
        enableSeconds: true,
        time_24hr: true,
        clickOpens: false
    });
    clockElement.addEventListener("change", function () {
        var dateValue = clockElement.value;
        var cesiumClock = cesiumViewer.clock;
        cesiumClock.shouldAnimate = false; // stop the clock
        cesiumClock.currentTime = Cesium.JulianDate.fromIso8601(dateValue.replace(" ", "T") + "Z");
        // update timeline also
        var cesiumTimeline = cesiumViewer.timeline;
        var lowerBound = Cesium.JulianDate.addHours(cesiumViewer.clock.currentTime, -12, new Object());
        var upperBound = Cesium.JulianDate.addHours(cesiumViewer.clock.currentTime, 12, new Object());
        cesiumTimeline.updateFromClock(); // center the needle in the timeline
        cesiumViewer.timeline.zoomTo(lowerBound, upperBound);
        cesiumViewer.timeline.resize();
    });
    clockElement.addEventListener("click", function () {
        if (clockElement._flatpickr.isOpen) {
            clockElement._flatpickr.close();
        } else {
            clockElement._flatpickr.open();
        }
    });
    cesiumViewer.timeline.addEventListener("click", function () {
        clockElement._flatpickr.setDate(new Date(Cesium.JulianDate.toDate(cesiumViewer.clock.currentTime).toUTCString().substr(0, 25)));
    })

    // Bring the cesium navigation help popup above the compass
    var cesiumNavHelp = document.getElementsByClassName("cesium-navigation-help")[0];
    cesiumNavHelp.style.zIndex = 99999;

    // If the web client has a layer, add an onclick event to the home button to fly to this layer
    var cesiumHomeButton = document.getElementsByClassName("cesium-button cesium-toolbar-button cesium-home-button")[0];
    cesiumHomeButton.onclick = function () {
        zoomToDefaultCameraPosition();
    }
}

function observeActiveLayer() {
    var observable = Cesium.knockout.getObservable(webMap, '_activeLayer');

    observable.subscribe(function (selectedLayer) {
        if (Cesium.defined(selectedLayer)) {
            document.getElementById(selectedLayer.layerId).childNodes[0].checked = true;

            updateAddLayerViewModel(selectedLayer);
        }
    });

    function updateAddLayerViewModel(selectedLayer) {
        addLayerViewModel.url = selectedLayer.url;
        addLayerViewModel.name = selectedLayer.name;
        addLayerViewModel.layerDataType = selectedLayer.layerDataType;
        addLayerViewModel.layerProxy = selectedLayer.layerProxy;
        addLayerViewModel.layerClampToGround = selectedLayer.layerClampToGround;
        addLayerViewModel.gltfVersion = selectedLayer.gltfVersion;
        addLayerViewModel.thematicDataUrl = selectedLayer.thematicDataUrl;
        addLayerViewModel.thematicDataSource = selectedLayer.thematicDataSource;
        addLayerViewModel.tableType = selectedLayer.tableType;
        // addLayerViewModel.googleSheetsApiKey = selectedLayer.googleSheetsApiKey;
        // addLayerViewModel.googleSheetsRanges = selectedLayer.googleSheetsRanges;
        // addLayerViewModel.googleSheetsClientId = selectedLayer.googleSheetsClientId;
        addLayerViewModel.cityobjectsJsonUrl = selectedLayer.cityobjectsJsonUrl;
        addLayerViewModel.minLodPixels = selectedLayer.minLodPixels;
        addLayerViewModel.maxLodPixels = selectedLayer.maxLodPixels;
        addLayerViewModel.maxSizeOfCachedTiles = selectedLayer.maxSizeOfCachedTiles;
        addLayerViewModel.maxCountOfVisibleTiles = selectedLayer.maxCountOfVisibleTiles;
        addLayerViewModel.maximumScreenSpaceError = selectedLayer.maximumScreenSpaceError;
    }
}

function adjustIonFeatures() {
    // If ion token is not available, remove Cesium World Terrain from the Terrain Providers
    if (!Cesium.defined(ionToken) || ionToken === "") {
        var terrainProviders = cesiumViewer.baseLayerPicker.viewModel.terrainProviderViewModels;
        i = 0;
        while (i < terrainProviders.length) {
            if (terrainProviders[i].name.indexOf("Cesium World Terrain") !== -1) {
                //terrainProviders[i]._creationCommand.canExecute = false;
                terrainProviders.remove(terrainProviders[i]);
            } else {
                i++;
            }
        }

        // Set default imagery to an open-source terrain
        cesiumViewer.baseLayerPicker.viewModel.selectedTerrain = terrainProviders[0];
        console.warn("Due to invalid or missing ion access token from user, Cesium World Terrain has been removed. Please enter your ion access token using the URL-parameter \"ionToken=<your-token>\" and refresh the page if you wish to use ion features.");

        // Cesium ion uses Bing Maps by default -> no need to insert Bing token if an ion token is already available

        // If neither Bing Token nor ion access token is present, remove Bing Maps from the Imagery Providers
        if (!Cesium.defined(bingToken) || bingToken === "") {
            var imageryProviders = cesiumViewer.baseLayerPicker.viewModel.imageryProviderViewModels;
            var i = 0;
            while (i < imageryProviders.length) {
                if (imageryProviders[i].name.indexOf("Bing Maps") !== -1) {
                    //imageryProviders[i]._creationCommand.canExecute = false;
                    imageryProviders.remove(imageryProviders[i]);
                } else {
                    i++;
                }
            }

            // Set default imagery to ESRI World Imagery
            cesiumViewer.baseLayerPicker.viewModel.selectedImagery = imageryProviders[0];

            // Disable auto-complete of OSM Geocoder due to OSM usage limitations
            // see https://operations.osmfoundation.org/policies/nominatim/#unacceptable-use
            cesiumViewer._geocoder._viewModel.autoComplete = false;

            console.warn("Due to invalid or missing Bing access token from user, all Bing Maps have been removed. Please enter your Bing Maps API token using the URL-parameter \"bingToken=<your-token>\" and refresh the page if you wish to use Bing Maps.");
        } else {
            console.error("A Bing token has been detected. This requires an ion token to display the terrain correctly. Please either remove the Bing token in the URL to use the default terrain and imagery, or insert an ion token in addition to the existing Bing token to use Cesium World Terrain and Bing Maps.")
            CitydbUtil.showAlertWindow("OK", "Error loading terrain", "A Bing token has been detected. This requires an ion token to display the terrain correctly. Please either remove the Bing token in the URL to use the default terrain and imagery, or insert an ion token in addition to the existing Bing token to use Cesium World Terrain and Bing Maps. Please refer to <a href='https://github.com/3dcitydb/3dcitydb-web-map/releases/tag/v1.9.0' target='_blank'>https://github.com/3dcitydb/3dcitydb-web-map/releases/tag/v1.9.0</a> for more information.");
        }
    }
}

/*---------------------------------  methods and functions  ----------------------------------------*/

function inspectTileStatus() {
    setInterval(function () {
        var cachedTilesInspector = document.getElementById('citydb_cachedTilesInspector');
        var showedTilesInspector = document.getElementById('citydb_showedTilesInspector');
        var layers = webMap._layers;
        var numberOfshowedTiles = 0;
        var numberOfCachedTiles = 0;
        var numberOfTasks = 0;
        var tilesLoaded = true;
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (layers[i].active) {
                if (layer instanceof CitydbKmlLayer) {
                    numberOfshowedTiles += Object.keys(layers[i].citydbKmlTilingManager.dataPoolKml).length;
                    numberOfCachedTiles += Object.keys(layers[i].citydbKmlTilingManager.networklinkCache).length;
                    numberOfTasks = numberOfTasks + layers[i].citydbKmlTilingManager.taskNumber;
                } else if (layer instanceof Cesium3DTilesDataLayer) {
                    numberOfshowedTiles += layer._tileset._selectedTiles.length;
                    numberOfCachedTiles += layer._tileset._statistics.numberContentReady;
                    tilesLoaded = layer._tileset._tilesLoaded;
                } else if (layer instanceof CitydbI3SLayer) {
                    for (var i = 0; i < layer._i3sProvider._layers.length; i++) {
                        var iLayer = layer._i3sProvider.layers[i];
                        numberOfshowedTiles += iLayer._tileset._selectedTiles.length;
                        numberOfCachedTiles += iLayer._tileset._statistics.numberContentReady;
                        tilesLoaded += iLayer._tileset._tilesLoaded;
                    }
                }
            }
        }
        showedTilesInspector.innerHTML = 'Number of showed Tiles: ' + numberOfshowedTiles;
        cachedTilesInspector.innerHTML = 'Number of cached Tiles: ' + numberOfCachedTiles;

        var loadingTilesInspector = document.getElementById('citydb_loadingTilesInspector');
        if (numberOfTasks > 0 || !tilesLoaded) {
            loadingTilesInspector.style.display = 'block';
        } else {
            loadingTilesInspector.style.display = 'none';
        }
    }, 200);
}

let highlightedIdObjects = {};

function listHighlightedObjects() {
    const highlightingListElement = document.getElementById("citydb_highlightinglist");

    emptySelectBox(highlightingListElement, function () {
        highlightedIdObjects = webMap.getAllHighlightedObjects();
        for (let key in highlightedIdObjects) {
            var option = document.createElement("option");
            option.text = key;
            option.value = key;
            highlightingListElement.add(option);
        }
        highlightingListElement.selectedIndex = 0;
    });
}

let hiddenIdObjects = {};

function listHiddenObjects() {
    const hidddenListElement = document.getElementById("citydb_hiddenlist");

    emptySelectBox(hidddenListElement, function () {
        hiddenIdObjects = webMap.getAllHiddenObjects();
        for (let key in hiddenIdObjects) {
            var option = document.createElement("option");
            option.text = key;
            option.value = key;
            hidddenListElement.add(option);
        }
        hidddenListElement.selectedIndex = 0;
    });
}

function emptySelectBox(selectElement, callback) {
    for (var i = selectElement.length - 1; i >= 0; i--) {
        selectElement.remove(1);
    }

    callback();
}

function flyToHighlightedObject() {
    flyToObject(true);
}

function flyToHiddenObject() {
    flyToObject(false);
}

function flyToObject(highlighted) {
    let object;
    if (highlighted) {
        let listElement = document.getElementById("citydb_highlightinglist");
        const selectedValue = listElement.value;
        object = highlightedIdObjects[selectedValue];
    } else {
        let listElement = document.getElementById("citydb_hiddenlist");
        const selectedValue = listElement.value;
        object = hiddenIdObjects[selectedValue];
    }

    // flyTo function only executes for shown entities
    // -> hidden entities will not be flown to
    // -> store camera position when entites were clicked
    if (object instanceof Cesium.Entity) {
        cesiumViewer.camera.flyToBoundingSphere(object._storedBoundingSphere, {
            offset: object._storedHeadingPitchRange
        });
    } else if (object instanceof Cesium.Cesium3DTileFeature) {
        cesiumViewer.camera.flyToBoundingSphere(object._storedBoundingSphere, {
            orientation: object._storedOrientation
        });
    }
}

function saveLayerSettings() {
    var activeLayer = webMap.activeLayer;
    applySaving('url', activeLayer);
    applySaving('name', activeLayer);
    applySaving('layerDataType', activeLayer);
    applySaving('layerProxy', activeLayer);
    applySaving('layerClampToGround', activeLayer);
    applySaving('gltfVersion', activeLayer);
    applySaving('thematicDataUrl', activeLayer);
    applySaving('thematicDataSource', activeLayer);
    applySaving('tableType', activeLayer);
    // applySaving('googleSheetsApiKey', activeLayer);
    // applySaving('googleSheetsRanges', activeLayer);
    // applySaving('googleSheetsClientId', activeLayer);
    applySaving('cityobjectsJsonUrl', activeLayer);
    applySaving('minLodPixels', activeLayer);
    applySaving('maxLodPixels', activeLayer);
    applySaving('maxSizeOfCachedTiles', activeLayer);
    applySaving('maxCountOfVisibleTiles', activeLayer);
    applySaving('maximumScreenSpaceError', activeLayer);
    console.log(activeLayer);

    // Update Data Source
    thematicDataSourceAndTableTypeDropdownOnchange();

    // update GUI:
    var nodes = document.getElementById('citydb_layerlistpanel').childNodes;
    for (var i = 0; i < nodes.length; i += 3) {
        const layerOption = nodes[i];
        if (layerOption.id === activeLayer.layerId) {
            layerOption.childNodes[2].innerHTML = activeLayer.name;
        }
    }

    document.getElementById('loadingIndicator').style.display = 'block';
    Promise.resolve(activeLayer.reActivate()).then((result) => {
        document.getElementById('loadingIndicator').style.display = 'none';
        webMap.clearSelectedObjects();
    }, (error) => {
        CitydbUtil.showAlertWindow("OK", "Error", error.message);
        document.getElementById('loadingIndicator').style.display = 'none';
        webMap.clearSelectedObjects();
    });

    function applySaving(propertyName, activeLayer) {
        var newValue = addLayerViewModel[propertyName];
        if (propertyName === 'maxLodPixels' && newValue == -1) {
            newValue = Number.MAX_VALUE;
        }
        if (Array.isArray(newValue)) {
            activeLayer[propertyName] = newValue[0];
        } else {
            activeLayer[propertyName] = newValue;
        }
    }
}

function loadLayerGroup(_layers) {
    if (_layers.length === 0)
        return;

    document.getElementById('loadingIndicator').style.display = 'block';
    _loadLayer(0);

    // Recursive for all layers
    function _loadLayer(index) {
        Promise.resolve(webMap.addLayer(_layers[index], createInfoTable)).then((addedLayer) => {
            console.log(addedLayer);
            var options = getDataSourceControllerOptions(addedLayer);
            addedLayer.dataSourceController = new DataSourceController(addedLayer.thematicDataSource, signInController, options);
            addLayerToList(addedLayer);
            if (index < (_layers.length - 1)) {
                index++;
                _loadLayer(index);
            } else {
                webMap._activeLayer = _layers[0];
                document.getElementById('loadingIndicator').style.display = 'none';

                // show/hide glTF version based on the value of Layer Data Type
                layerDataTypeDropdownOnchange();

                thematicDataSourceAndTableTypeDropdownOnchange();
            }
        }, (error) => {
            CitydbUtil.showAlertWindow("OK", "Error", error.message);
            console.log(error.stack);
            document.getElementById('loadingIndicator').style.display = 'none';
        });
    }
}

function addLayerToList(layer) {
    var radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "dummyradio";
    radio.onchange = function (event) {
        var targetRadio = event.target;
        var layerId = targetRadio.parentNode.id;
        webMap.activeLayer = webMap.getLayerById(layerId);
        // Adjust GUI based on given values
        layerDataTypeDropdownOnchange();
        thematicDataSourceAndTableTypeDropdownOnchange();
        console.log(webMap.activeLayer);
    };

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "id";
    checkbox.checked = layer.active;
    checkbox.onchange = function (event) {
        var checkbox = event.target;
        var layerId = checkbox.parentNode.id;
        var citydbLayer = webMap.getLayerById(layerId);
        if (checkbox.checked) {
            console.log("Layer " + citydbLayer.name + " is visible now!");
            citydbLayer.activate(true);
            webMap.clearSelectedObjects();
        } else {
            console.log("Layer " + citydbLayer.name + " is not visible now!");
            citydbLayer.activate(false);
        }
    };

    var label = document.createElement('label')
    label.appendChild(document.createTextNode(layer.name));

    var layerOption = document.createElement('div');
    layerOption.id = layer.layerId;
    layerOption.appendChild(radio);
    layerOption.appendChild(checkbox);
    layerOption.appendChild(label);

    label.ondblclick = function (event) {
        event.preventDefault();
        var layerId = event.target.parentNode.id;
        var citydbLayer = webMap.getLayerById(layerId);
        citydbLayer.zoomToStartPosition();
    }

    var layerlistpanel = document.getElementById("citydb_layerlistpanel")
    layerlistpanel.appendChild(layerOption);
}

function addEventListeners(layer) {

    function auxClickEventListener(object) {
        var objectId;
        var targetEntity;
        if (layer instanceof CitydbKmlLayer) {
            targetEntity = object.id;
            objectId = targetEntity.name;
        } else if (layer instanceof Cesium3DTilesDataLayer) {
            console.log(object);
            if (!(object._content instanceof Cesium.Batched3DModel3DTileContent))
                return;

            var featureArray = object._content._features;
            if (!Cesium.defined(featureArray))
                return;
            var objectId = featureArray[object._batchId].getProperty("id");
            if (!Cesium.defined(objectId))
                return;

            targetEntity = new Cesium.Entity({
                id: objectId
            });
            cesiumViewer.selectedEntity = targetEntity;
        } else if (layer instanceof CitydbI3SLayer) {
            console.log(object);
            // TODO
        } else if (layer instanceof CitydbGeoJSONLayer) {
            console.log(object);
            // TODO
        }

        // Save this clicked object for later use (such as zooming using ID)
        clickedEntities[objectId] = targetEntity;

        return [objectId, targetEntity];
    }

    layer.registerEventHandler("CLICK", function (object) {
        var res = auxClickEventListener(object);
        createInfoTable(res, layer);
    });

    layer.registerEventHandler("CTRLCLICK", function (object) {
        auxClickEventListener(object);
    });
}

function zoomToDefaultCameraPosition() {
    var deferred = Cesium.defer();
    var latitudeStr = urlController.getUrlParaValue('latitude', window.location.href, CitydbUtil);
    var longitudeStr = urlController.getUrlParaValue('longitude', window.location.href, CitydbUtil);
    var heightStr = urlController.getUrlParaValue('height', window.location.href, CitydbUtil);
    var headingStr = urlController.getUrlParaValue('heading', window.location.href, CitydbUtil);
    var pitchStr = urlController.getUrlParaValue('pitch', window.location.href, CitydbUtil);
    var rollStr = urlController.getUrlParaValue('roll', window.location.href, CitydbUtil);

    if (latitudeStr && longitudeStr && heightStr && headingStr && pitchStr && rollStr) {
        var cameraPostion = {
            latitude: parseFloat(latitudeStr),
            longitude: parseFloat(longitudeStr),
            height: parseFloat(heightStr),
            heading: parseFloat(headingStr),
            pitch: parseFloat(pitchStr),
            roll: parseFloat(rollStr)
        }
        return flyToCameraPosition(cameraPostion);
    } else {
        return zoomToDefaultCameraPosition_expired();
    }

    return deferred;
}

function zoomToDefaultCameraPosition_expired() {
    var deferred = Cesium.defer();
    var cesiumCamera = cesiumViewer.scene.camera;
    var latstr = urlController.getUrlParaValue('lat', window.location.href, CitydbUtil);
    var lonstr = urlController.getUrlParaValue('lon', window.location.href, CitydbUtil);

    if (latstr && lonstr) {
        var lat = parseFloat(latstr);
        var lon = parseFloat(lonstr);
        var range = 800;
        var heading = 6;
        var tilt = 49;
        var altitude = 40;

        var rangestr = urlController.getUrlParaValue('range', window.location.href, CitydbUtil);
        if (rangestr)
            range = parseFloat(rangestr);

        var headingstr = urlController.getUrlParaValue('heading', window.location.href, CitydbUtil);
        if (headingstr)
            heading = parseFloat(headingstr);

        var tiltstr = urlController.getUrlParaValue('tilt', window.location.href, CitydbUtil);
        if (tiltstr)
            tilt = parseFloat(tiltstr);

        var altitudestr = urlController.getUrlParaValue('altitude', window.location.href, CitydbUtil);
        if (altitudestr)
            altitude = parseFloat(altitudestr);

        var _center = Cesium.Cartesian3.fromDegrees(lon, lat);
        var _heading = Cesium.Math.toRadians(heading);
        var _pitch = Cesium.Math.toRadians(tilt - 90);
        var _range = range;
        cesiumCamera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(lon, lat, _range),
            orientation: {
                heading: _heading,
                pitch: _pitch,
                roll: 0
            },
            complete: function () {
                deferred.resolve("fly to the desired camera position");
            }
        });
    } else {
        // default camera postion
        deferred.resolve("fly to the default camera position");
    }
    return deferred;
}

function flyToCameraPosition(cameraPosition) {
    var deferred = Cesium.defer();
    var cesiumCamera = cesiumViewer.scene.camera;
    var longitude = cameraPosition.longitude;
    var latitude = cameraPosition.latitude;
    var height = cameraPosition.height;
    cesiumCamera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
        orientation: {
            heading: Cesium.Math.toRadians(cameraPosition.heading),
            pitch: Cesium.Math.toRadians(cameraPosition.pitch),
            roll: Cesium.Math.toRadians(cameraPosition.roll)
        },
        complete: function () {
            deferred.resolve("fly to the desired camera position");
        }
    });
    return deferred;
}

// Creation of a scene link for sharing with other people..
function showSceneLink() {
    var tokens = {
        ionToken: ionToken,
        bingToken: bingToken
    }
    var sceneLink = urlController.generateLink(
        webMap,
        addWmsViewModel,
        addTerrainViewModel,
        addSplashWindowModel,
        tokens,
        signInController,
        googleClientId,
        splashController,
        cesiumViewer,
        Cesium
    );
    CitydbUtil.showAlertWindow("OK", "Scene Link", '<a href="' + sceneLink + '" style="color:#c0c0c0" target="_blank">' + sceneLink + '</a>');
}

// Clear Highlighting effect of all highlighted objects
function clearHighlight() {
    webMap.clearSelectedObjects();
}

// hide the selected objects
function hideSelectedObjects() {
    webMap.hideSelectedObjects();
}

// show the hidden objects
function showHiddenObjects() {
    webMap.showHiddenObjects();
}

function zoomToObjectById(gmlId, callBackFunc, errorCallbackFunc) {
    gmlId = gmlId.trim();
    var activeLayer = webMap._activeLayer;
    if (Cesium.defined(activeLayer)) {
        var cityobjectsJsonData = activeLayer.cityobjectsJsonData;
        if (!cityobjectsJsonData) {
            if (Cesium.defined(errorCallbackFunc)) {
                errorCallbackFunc.call(this);
            }
        } else {
            var obj = cityobjectsJsonData[gmlId];
        }
        if (obj) {
            var lon = (obj.envelope[0] + obj.envelope[2]) / 2.0;
            var lat = (obj.envelope[1] + obj.envelope[3]) / 2.0;
            flyToMapLocation(lat, lon, callBackFunc);
        } else {
            // TODO
            var thematicDataUrl = webMap.activeLayer.thematicDataUrl;
            webmap._activeLayer.dataSourceController.fetchData(gmlId, function (result) {
                if (!result) {
                    if (Cesium.defined(errorCallbackFunc)) {
                        errorCallbackFunc.call(this);
                    }
                } else {
                    var centroid = result["CENTROID"];
                    if (centroid) {
                        var res = centroid.match(/\(([^)]+)\)/)[1].split(",");
                        var lon = parseFloat(res[0]);
                        var lat = parseFloat(res[1]);
                        flyToMapLocation(lat, lon, callBackFunc);
                    } else {
                        if (Cesium.defined(errorCallbackFunc)) {
                            errorCallbackFunc.call(this);
                        }
                    }
                }
            }, 1000);

            // var promise = fetchDataFromGoogleFusionTable(gmlId, thematicDataUrl);
            // Cesium.when(promise, function (result) {
            //     var centroid = result["CENTROID"];
            //     if (centroid) {
            //         var res = centroid.match(/\(([^)]+)\)/)[1].split(",");
            //         var lon = parseFloat(res[0]);
            //         var lat = parseFloat(res[1]);
            //         flyToMapLocation(lat, lon, callBackFunc);
            //     } else {
            //         if (Cesium.defined(errorCallbackFunc)) {
            //             errorCallbackFunc.call(this);
            //         }
            //     }
            // }, function () {
            //     if (Cesium.defined(errorCallbackFunc)) {
            //         errorCallbackFunc.call(this);
            //     }
            // });
        }
    } else {
        if (Cesium.defined(errorCallbackFunc)) {
            errorCallbackFunc.call(this);
        }
    }
}

function flyToMapLocation(lat, lon, callBackFunc) {
    var cesiumWidget = webMap._cesiumViewerInstance.cesiumWidget;
    var scene = cesiumWidget.scene;
    var camera = scene.camera;
    var canvas = scene.canvas;
    var globe = scene.globe;
    var clientWidth = canvas.clientWidth;
    var clientHeight = canvas.clientHeight;
    camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lon, lat, 2000),
        complete: function () {
            var intersectedPoint = globe.pick(camera.getPickRay(new Cesium.Cartesian2(clientWidth / 2, clientHeight / 2)), scene);
            var terrainHeight = Cesium.Ellipsoid.WGS84.cartesianToCartographic(intersectedPoint).height;
            var center = Cesium.Cartesian3.fromDegrees(lon, lat, terrainHeight);
            var heading = Cesium.Math.toRadians(0);
            var pitch = Cesium.Math.toRadians(-50);
            var range = 100;
            camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range));
            camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
            if (Cesium.defined(callBackFunc)) {
                callBackFunc.call(this);
            }
        }
    })
}

function addNewLayer() {
    var _layers = [];
    var options = {
        url: addLayerViewModel.url.trim(),
        name: addLayerViewModel.name.trim(),
        layerDataType: addLayerViewModel.layerDataType.trim(),
        layerProxy: (addLayerViewModel.layerProxy === true),
        layerClampToGround: (addLayerViewModel.layerClampToGround === true),
        gltfVersion: addLayerViewModel.gltfVersion.trim(),
        thematicDataUrl: addLayerViewModel.thematicDataUrl.trim(),
        thematicDataSource: addLayerViewModel.thematicDataSource.trim(),
        tableType: addLayerViewModel.tableType.trim(),
        // googleSheetsApiKey: addLayerViewModel.googleSheetsApiKey.trim(),
        // googleSheetsRanges: addLayerViewModel.googleSheetsRanges.trim(),
        // googleSheetsClientId: addLayerViewModel.googleSheetsClientId.trim(),
        cityobjectsJsonUrl: addLayerViewModel.cityobjectsJsonUrl.trim(),
        minLodPixels: addLayerViewModel.minLodPixels,
        maxLodPixels: addLayerViewModel.maxLodPixels == -1 ? Number.MAX_VALUE : addLayerViewModel.maxLodPixels,
        maxSizeOfCachedTiles: addLayerViewModel.maxSizeOfCachedTiles,
        maxCountOfVisibleTiles: addLayerViewModel.maxCountOfVisibleTiles,
        maximumScreenSpaceError: addLayerViewModel.maximumScreenSpaceError
    }

    // since Cesium 3D Tiles also require name.json in the URL, it must be checked first
    var layerDataTypeDropdown = document.getElementById("layerDataTypeDropdown");
    if (layerDataTypeDropdown.options[layerDataTypeDropdown.selectedIndex].value === 'Cesium 3D Tiles') {
        _layers.push(new Cesium3DTilesDataLayer(options));
    } else if (layerDataTypeDropdown.options[layerDataTypeDropdown.selectedIndex].value === 'i3s') {
        _layers.push(new CitydbI3SLayer(options));
    } else if (layerDataTypeDropdown.options[layerDataTypeDropdown.selectedIndex].value === 'geojson') {
        _layers.push(new CitydbGeoJSONLayer(options));
    } else if (['kml', 'kmz', 'json', 'czml'].indexOf(CitydbUtil.get_suffix_from_filename(options.url)) > -1) {
        _layers.push(new CitydbKmlLayer(options));
    }

    loadLayerGroup(_layers);
}

function removeSelectedLayer() {
    var layer = webMap.activeLayer;
    if (Cesium.defined(layer)) {
        const layerId = layer.layerId;
        document.getElementById(layerId).remove();
        webMap.removeLayer(layerId);
        // update active layer of the globe webMap
        var webMapLayers = webMap._layers;
        if (webMapLayers.length > 0) {
            webMap.activeLayer = webMapLayers[0];
        } else {
            webMap.activeLayer = undefined;
        }
    }
}

let imageryInserted = false;

function addWebMapServiceProvider() {
    function update(callback) {
        removeImageryProvider();
        callback();
    }

    update(function () {
        const baseLayerPickerViewModel = cesiumViewer.baseLayerPicker.viewModel;
        let iconUrl = addWmsViewModel.iconUrl.trim();
        if (!Cesium.defined(iconUrl) || iconUrl === "") {
            iconUrl = "images/icon_wms.png";
        }

        let providerViewModel;
        if (addWmsViewModel.imageryType === "wms") {
            providerViewModel = new Cesium.ProviderViewModel({
                name: addWmsViewModel.name.trim(),
                iconUrl: iconUrl,
                tooltip: addWmsViewModel.tooltip.trim(),
                creationFunction: function () {
                    return new Cesium.WebMapServiceImageryProvider({
                        url: new Cesium.Resource({
                            url: addWmsViewModel.url.trim(),
                            proxy: addWmsViewModel.proxyUrl.trim().length === 0 ? null : new Cesium.DefaultProxy(addWmsViewModel.proxyUrl.trim())
                        }),
                        layers: addWmsViewModel.layers.trim(),
                        parameters: Cesium.queryToObject(addWmsViewModel.additionalParameters.trim())
                    });
                }
            });
        } else if (addWmsViewModel.imageryType === "wmts") {
            providerViewModel = new Cesium.ProviderViewModel({
                name: addWmsViewModel.name.trim(),
                iconUrl: iconUrl,
                tooltip: addWmsViewModel.tooltip.trim(),
                creationFunction: function () {
                    return new Cesium.WebMapTileServiceImageryProvider({
                        url: new Cesium.Resource({
                            url: addWmsViewModel.url.trim(),
                            proxy: addWmsViewModel.proxyUrl.trim().length === 0 ? null : new Cesium.DefaultProxy(addWmsViewModel.proxyUrl.trim())
                        }),
                        layer: addWmsViewModel.layers.trim(),
                        style: addWmsViewModel.tileStyle.trim(),
                        tileMatrixSetID: addWmsViewModel.tileMatrixSetId.trim()
                    });
                }
            });
        }

        baseLayerPickerViewModel.imageryProviderViewModels.push(providerViewModel);
        baseLayerPickerViewModel.selectedImagery = providerViewModel;
        imageryInserted = true;
    });
}

function removeImageryProvider() {
    if (!imageryInserted) return; // Remove only if inserted by user
    const baseLayerPickerViewModel = cesiumViewer.baseLayerPicker.viewModel;
    const selectedImagery = baseLayerPickerViewModel.selectedImagery;
    baseLayerPickerViewModel.imageryProviderViewModels.remove(selectedImagery);
    baseLayerPickerViewModel.selectedImagery = baseLayerPickerViewModel.imageryProviderViewModels[0];
    imageryInserted = false;
}

function imageryTypeDropdownOnchange() {
    const imageryTypeDropdown = document.getElementById("imageryTypeDropdown");
    const selectedValue = imageryTypeDropdown.options[imageryTypeDropdown.selectedIndex].value;
    if (selectedValue === "wmts") {
        document.getElementById("wmtsStyleRow").style.display = "";
        document.getElementById("wmtsMatrixSetIdRow").style.display = "";
        document.getElementById("additionalParametersRow").display = "none";
    } else {
        document.getElementById("wmtsStyleRow").style.display = "none";
        document.getElementById("wmtsMatrixSetIdRow").style.display = "none";
        document.getElementById("additionalParametersRow").display = "";
    }
    addWmsViewModel["imageryType"] = selectedValue;
}


function addTerrainProvider() {
    function update(callback) {
        removeTerrainProvider();
        callback();
    }

    update(function () {
        let iconUrl = addTerrainViewModel.iconUrl.trim();
        if (!Cesium.defined(iconUrl) || iconUrl === "") {
            iconUrl = "images/icon_terrain.png";
        }
        const baseLayerPickerViewModel = cesiumViewer.baseLayerPicker.viewModel;
        Cesium.CesiumTerrainProvider.fromUrl(addTerrainViewModel.url.trim(), {})
            .then(function (terrainProvider) {
                const demProviderViewModel = new Cesium.ProviderViewModel({
                    name: addTerrainViewModel.name.trim(),
                    iconUrl: iconUrl,
                    tooltip: addTerrainViewModel.tooltip.trim(),
                    creationFunction: function () {
                        return terrainProvider;
                    }
                });
                baseLayerPickerViewModel.terrainProviderViewModels.push(demProviderViewModel);
                baseLayerPickerViewModel.selectedTerrain = demProviderViewModel;
            });
    });
}

let defaultTerrain = undefined;

function removeTerrainProvider() {
    const baseLayerPickerViewModel = cesiumViewer.baseLayerPicker.viewModel;
    const selectedTerrain = baseLayerPickerViewModel.selectedTerrain;
    baseLayerPickerViewModel.terrainProviderViewModels.remove(selectedTerrain);
    if (!Cesium.defined(defaultTerrain)) {
        defaultTerrain = selectedTerrain;
        baseLayerPickerViewModel.selectedTerrain = baseLayerPickerViewModel.terrainProviderViewModels[0];
    } else {
        baseLayerPickerViewModel.selectedTerrain = defaultTerrain;
    }
}

function createScreenshot() {
    cesiumViewer.render();
    const imageUri = cesiumViewer.canvas.toDataURL();
    const imageWin = window.open("");
    imageWin.document.write("<html><head>" +
        "<title>" + imageUri + "</title></head><body>" +
        '<img src="' + imageUri + '"width="100%">' +
        "</body></html>");
    return imageWin;
}

function printCurrentview() {
    const imageWin = createScreenshot();
    imageWin.document.close();
    imageWin.focus();
    imageWin.print();
    // imageWin.close();
}

function toggleShadows() {
    cesiumViewer.shadows = !cesiumViewer.shadows;
    if (!cesiumViewer.shadows) {
        cesiumViewer.shadows = Cesium.ShadowMode.DISABLED;
        if (cesiumViewer.terrainShadows) {
            CitydbUtil.showAlertWindow("OK", "Switching off terrain shadows now", 'Please note that terrain shadows for 3D models will also be switched off.',
                function () {
                    toggleTerrainShadows();
                });
        }
    }
    handleToggleButton("toggleShadowButton", cesiumViewer.shadows);
}

function toggleTerrainShadows() {
    if (cesiumViewer.terrainShadows === Cesium.ShadowMode.ENABLED) {
        cesiumViewer.terrainShadows = Cesium.ShadowMode.DISABLED;
    } else {
        cesiumViewer.terrainShadows = Cesium.ShadowMode.ENABLED;
        if (!cesiumViewer.shadows) {
            CitydbUtil.showAlertWindow("OK", "Switching on terrain shadows now", 'Please note that shadows for 3D models will also be switched on.',
                function () {
                    toggleShadows();
                });
        }
    }
    handleToggleButton("toggleTerrainShadowButton", cesiumViewer.terrainShadows);
}

function handleToggleButton(buttonId, isActivated) {
    const toggleButton = document.getElementById(buttonId);
    if (isActivated) {
        toggleButton.style.backgroundColor = "#4CAF50";
        toggleButton.style.borderColor = "yellow";
    } else {
        toggleButton.style.backgroundColor = "#303336";
        toggleButton.style.borderColor = "#444";
    }
}

// source https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
function isValidUrl(str) {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regexp.test(str);
}

function createInfoTable(res, citydbLayer) {
    const cesiumEntity = res[0];
    cesiumEntity.description = "Loading feature information...";

    const kvp = res[1];

    const selectedThematicDataSource = citydbLayer.dataSourceController.dataSource;

    function getGmlid(kvp) {
        // Search for gmlid in the result, accounting for all key names, case-insensitive
        const keys = ["gmlid", "gml_id", "gml:id", "gml-id", "objectid", "object_id", "object-id", "id"];
        let gmlid = {};
        for (const key in kvp) {
            if (!keys.includes(key.toLowerCase())) continue;
            gmlid["key"] = key;
            gmlid["value"] = kvp[key];
            break;
        }
        return gmlid;
    }

    function displayKvp(kvp, gmlid) {
        if (!Cesium.defined(kvp)) {
            cesiumEntity.description = 'No feature information found';
        } else {
            console.log(kvp);

            // Set title of infotable
            if (cesiumEntity.name !== gmlid["value"] && Cesium.defined(gmlid["value"])) {
                cesiumEntity.name = gmlid["value"];
            }

            // Content to display
            let html = '<table class="cesium-infoBox-defaultTable" style="font-size:10.5pt"><tbody>';
            if (Cesium.defined(gmlid["key"]) && Cesium.defined(gmlid["value"])) {
                html += '<tr><td>' + gmlid["key"] + '</td><td>' + gmlid["value"] + '</td></tr>';
            }
            for (const key in kvp) {
                if (key === gmlid["key"]) continue;
                if (!Cesium.defined(key) || key.trim() === "") continue;
                let iValue = kvp[key];
                // check if this value is a valid URL
                if (isValidUrl(iValue)) {
                    iValue = '<a href="' + iValue + '" target="_blank">' + iValue + '</a>';
                }
                html += '<tr><td>' + key + '</td><td>' + iValue + '</td></tr>';
            }
            html += '</tbody></table>';

            cesiumEntity.description = html;
        }
    }

    let gmlid = getGmlid(kvp);
    if (!Cesium.defined(gmlid) || !Cesium.defined(gmlid["key"]) || !Cesium.defined(gmlid["value"])) {
        gmlid["key"] = "gml_id"; // default
        gmlid["value"] = cesiumEntity.name; // for KML
    }
    const isEmbedded = !(selectedThematicDataSource instanceof GoogleSheets)
        && !(selectedThematicDataSource instanceof PostgreSQL)
        && !(selectedThematicDataSource instanceof OGCFeatureAPI);
    if (isEmbedded) {
        if (Cesium.defined(res[1])) {
            displayKvp(res[1], gmlid); // embedded properties are stored here
        } else {
            cesiumEntity.description = "Could not load embedded thematic data";
        }
    } else {
        var thematicDataUrl = citydbLayer.thematicDataUrl;
        citydbLayer.dataSourceController.fetchData(gmlid, displayKvp, 1000, cesiumEntity);
    }

    // fetchDataFromGoogleFusionTable(gmlid, thematicDataUrl).then(function (kvp) {
    //     console.log(kvp);
    //     var html = '<table class="cesium-infoBox-defaultTable" style="font-size:10.5pt"><tbody>';
    //     for (var key in kvp) {
    //         html += '<tr><td>' + key + '</td><td>' + kvp[key] + '</td></tr>';
    //     }
    //     html += '</tbody></table>';
    //
    //     cesiumEntity.description = html;
    // }).otherwise(function (error) {
    //     cesiumEntity.description = 'No feature information found';
    // });
}

function fetchDataFromGoogleSpreadsheet(gmlid, thematicDataUrl) {
    var kvp = {};
    var deferred = Cesium.defer();

    var spreadsheetKey = thematicDataUrl.split("/")[5];
    var metaLink = 'https://spreadsheets.google.com/feeds/worksheets/' + spreadsheetKey + '/public/full?alt=json-in-script';

    Cesium.jsonp(metaLink).then(function (meta) {
        console.log(meta);
        var feedCellUrl = meta.feed.entry[0].link[1].href;
        feedCellUrl += '?alt=json-in-script&min-row=1&max-row=1';
        Cesium.jsonp(feedCellUrl).then(function (cellData) {
            var feedListUrl = meta.feed.entry[0].link[0].href;
            feedListUrl += '?alt=json-in-script&sq=gmlid%3D';
            feedListUrl += gmlid;
            Cesium.jsonp(feedListUrl).then(function (listData) {
                for (var i = 1; i < cellData.feed.entry.length; i++) {
                    var key = cellData.feed.entry[i].content.$t;
                    var value = listData.feed.entry[0]['gsx$' + key.toLowerCase().replace(/_/g, '')].$t;
                    kvp[key] = value;
                }
                deferred.resolve(kvp);
            }, function (error) {
                deferred.reject(error);
            });
        }, function (error) {
            deferred.reject(error);
        });
    }, function (error) {
        deferred.reject(error);
    });

    return deferred.promise;
}

function fetchDataFromGoogleFusionTable(gmlid, thematicDataUrl) {
    var kvp = {};
    var deferred = Cesium.defer();

    var tableID = urlController.getUrlParaValue('docid', thematicDataUrl, CitydbUtil);
    var sql = "SELECT * FROM " + tableID + " WHERE GMLID = '" + gmlid + "'";
    var apiKey = "AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ";
    var queryLink = "https://www.googleapis.com/fusiontables/v2/query";
    new Cesium.Resource({
        url: queryLink,
        queryParameters: {sql: sql, key: apiKey}
    }).fetch({responseType: 'json'}).then(function (data) {
        console.log(data);
        var columns = data.columns;
        var rows = data.rows;
        for (var i = 0; i < columns.length; i++) {
            var key = columns[i];
            var value = rows[0][i];
            kvp[key] = value;
        }
        console.log(kvp);
        deferred.resolve(kvp);
    }, function (error) {
        deferred.reject(error);
    });
    return deferred.promise;
}

function showInExternalMaps() {
    const mapOptionList = document.getElementById('citydb_showinexternalmaps');
    const selectedIndex = mapOptionList.selectedIndex;
    mapOptionList.selectedIndex = 0;

    const selectedEntity = cesiumViewer.selectedEntity;
    if (!Cesium.defined(selectedEntity))
        return;

    const selectedEntityPosition = selectedEntity.position;
    let wgs84OCoordinate;

    let selectedEntityBoundingSphere;
    if (!Cesium.defined(selectedEntityPosition)) {
        selectedEntityBoundingSphere = selectedEntity._storedBoundingSphere; // From Cesium 3D tiles feature
        if (!Cesium.defined(selectedEntityBoundingSphere)) {
            const boundingSphereScratch = new Cesium.BoundingSphere();
            cesiumViewer._dataSourceDisplay.getBoundingSphere(selectedEntity, false, boundingSphereScratch);
            selectedEntityBoundingSphere = boundingSphereScratch;
        }
        wgs84OCoordinate = Cesium.Ellipsoid.WGS84.cartesianToCartographic(selectedEntityBoundingSphere.center);
    } else {
        wgs84OCoordinate = Cesium.Ellipsoid.WGS84.cartesianToCartographic(selectedEntityPosition._value);

    }
    const lat = Cesium.Math.toDegrees(wgs84OCoordinate.latitude);
    const lon = Cesium.Math.toDegrees(wgs84OCoordinate.longitude);
    let mapLink = "";

    switch (selectedIndex) {
        case 1:
            //mapLink = 'https://www.mapchannels.com/dualmaps7/map.htm?lat=' + lat + '&lng=' + lon + '&z=18&slat=' + lat + '&slng=' + lon + '&sh=-150.75&sp=-0.897&sz=1&gm=0&bm=2&panel=s&mi=1&md=0';
            //mapLink = 'https://www.google.com/maps/embed/v1/streetview?location=' + lat + ',' + lon + '&key=' + 'AIzaSyBRXHXasDb8PGOXCfQP7r7xQiAQXo3eIQs';
            //mapLink = 'https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + lat + ',' + lon + '&fov=90&heading=235&pitch=10' + '&key=AIzaSyBRXHXasDb8PGOXCfQP7r7xQiAQXo3eIQs';
            mapLink = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=' + lat + ',' + lon;
            break;
        case 2:
            mapLink = 'https://www.openstreetmap.org/index.html?lat=' + lat + '&lon=' + lon + '&zoom=20';
            break;
        case 3:
            mapLink = 'https://www.bing.com/maps/default.aspx?v=2&cp=' + lat + '~' + lon + '&lvl=19&style=o';
            break;
        case 4:
            mapLink = 'https://www.mapchannels.com/dualmaps7/map.htm?x=' + lon + '&y=' + lat + '&z=16&gm=0&ve=4&gc=0&bz=0&bd=0&mw=1&sv=1&sva=1&svb=0&svp=0&svz=0&svm=2&svf=0&sve=1';
            break;
        default:
        //	do nothing...
    }

    window.open(mapLink);
}

function layerDataTypeDropdownOnchange() {
    const layerDataTypeDropdown = document.getElementById("layerDataTypeDropdown");
    const selectedValue = layerDataTypeDropdown.options[layerDataTypeDropdown.selectedIndex].value;
    if (selectedValue !== "COLLADA/KML/glTF") {
        document.getElementById("gltfVersionDropdownRow").style.display = "none";
        document.getElementById("cityobjectsJsonUrlRow").style.display = "none";
        document.getElementById("minLodPixelsRow").style.display = "none";
        document.getElementById("maxLodPixelsRow").style.display = "none";
        document.getElementById("maxCountOfVisibleTilesRow").style.display = "none";
        document.getElementById("maxSizeOfCachedTilesRow").style.display = "none";
    } else {
        document.getElementById("gltfVersionDropdownRow").style.display = "";
        document.getElementById("cityobjectsJsonUrlRow").style.display = "";
        document.getElementById("minLodPixelsRow").style.display = "";
        document.getElementById("maxLodPixelsRow").style.display = "";
        document.getElementById("maxCountOfVisibleTilesRow").style.display = "";
        document.getElementById("maxSizeOfCachedTilesRow").style.display = "";
    }

    if (["COLLADA/KML/glTF", "geojson"].includes(selectedValue)) {
        document.getElementById("layerProxyAndClampToGround").style.display = "";
    } else {
        document.getElementById("layerProxyAndClampToGround").style.display = "none";
    }

    if (selectedValue !== "Cesium 3D Tiles" && selectedValue !== "i3s") {
        document.getElementById("maximumScreenSpaceError").style.display = "none";
    } else {
        document.getElementById("maximumScreenSpaceError").style.display = "";
    }

    addLayerViewModel["layerDataType"] = selectedValue;
}

function thematicDataSourceAndTableTypeDropdownOnchange() {
    const thematicDataSourceDropdown = document.getElementById("thematicDataSourceDropdown");
    const thematicTableTypeDropdownDiv = document.getElementById("thematicTableTypeDropdownDiv");
    const thematicDataUrlDiv = document.getElementById("thematicDataUrlDiv");
    if (thematicDataSourceDropdown.value === "Embedded") {
        thematicTableTypeDropdownDiv.style.display = "none";
        thematicDataUrlDiv.style = "display: none;";
        addLayerViewModel.tableType = "Horizontal";
        addLayerViewModel.thematicDataUrl = "";
    } else if (thematicDataSourceDropdown.value === "OGCFeatureAPI") {
        thematicTableTypeDropdownDiv.style.display = "none";
        thematicDataUrlDiv.style.display = "";
    } else {
        thematicTableTypeDropdownDiv.style.display = "";
        thematicDataUrlDiv.style.display = "";
    }

    if (webMap && webMap._activeLayer) {
        const selectedThematicDataSource = thematicDataSourceDropdown.options[thematicDataSourceDropdown.selectedIndex].value;
        const tableTypeDropdown = document.getElementById("tableTypeDropdown");
        const selectedTableType = tableTypeDropdown.options[tableTypeDropdown.selectedIndex] == null ? ""
            : tableTypeDropdown.options[tableTypeDropdown.selectedIndex].value;

        addLayerViewModel.thematicDataSource = selectedThematicDataSource;
        addLayerViewModel.tableType = selectedTableType;

        // if (selectedThematicDataSource == "GoogleSheets") {
        //     document.getElementById("rowGoogleSheetsApiKey").style.display = "table-row";
        //     document.getElementById("rowGoogleSheetsRanges").style.display = "table-row";
        //     document.getElementById("rowGoogleSheetsClientId").style.display = "table-row";
        // } else {
        //     document.getElementById("rowGoogleSheetsApiKey").style.display = "none";
        //     document.getElementById("rowGoogleSheetsRanges").style.display = "none";
        //     document.getElementById("rowGoogleSheetsClientId").style.display = "none";
        // }

        // Mashup Data Source Service
        initDataSourceController(selectedThematicDataSource);
    }
}

function initDataSourceController(selectedThematicDataSource) {
    if (!webMap._activeLayer.active) return;
    const options = getDataSourceControllerOptions(webMap._activeLayer);
    webMap._activeLayer.dataSourceController = new DataSourceController(selectedThematicDataSource, signInController, options);
}

function getDataSourceControllerOptions(layer) {
    const dataSourceUri = layer.thematicDataUrl === "" ? layer.url : layer.thematicDataUrl;
    const layerDataTypeDropdown = document.getElementById("layerDataTypeDropdown");
    const options = {
        // name: "",
        // type: "",
        // provider: "",
        uri: dataSourceUri,
        layerType: layerDataTypeDropdown.value,
        tableType: layer.tableType,
        thirdPartyHandler: {
            type: "Cesium",
            handler: layer ? layer._citydbKmlDataSource : undefined
        },
        // ranges: addLayerViewModel.googleSheetsRanges,
        // apiKey: addLayerViewModel.googleSheetsApiKey,
        // clientId: addLayerViewModel.googleSheetsClientId
        clientId: googleClientId ? googleClientId : "",
        proxyPrefix: layer.layerProxy ? CitydbUtil.getProxyPrefix(dataSourceUri) : ""
    };
    return options;
}

// Sign in utilities
var googleClientId = urlController.getUrlParaValue('googleClientId', window.location.href, CitydbUtil);
if (googleClientId) {
    var signInController = new SigninController(googleClientId);
}

// Mobile layouts and functionalities
var mobileController = new MobileController();
