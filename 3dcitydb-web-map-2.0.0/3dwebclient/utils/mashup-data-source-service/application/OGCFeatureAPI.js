// import * as request from "request-promise-native";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OGCFeatureAPI = /** @class */ (function (_super) {
    __extends(OGCFeatureAPI, _super);

    function OGCFeatureAPI(signInController, options) {
        var _this = _super.call(this, signInController, options) || this;
        _this._idColName = !options.idColName ? "gmlid" : options.idColName;
        return _this;
    }

    OGCFeatureAPI.prototype.responseToKvp = function (response) {
        // response is just a text -> parse to JSON
        if (!Cesium.defined(response)) return [];
        const responseJson = JSON.parse(response);
        const result = new Map();
        const scope = this;

        let properties;
        if (scope._uri.includes("hamburg.de")) {
            const responseFeatures = responseJson["features"];
            if (!Cesium.defined(responseFeatures) || responseFeatures.length !== 1) return [];
            properties = responseFeatures[0]["properties"];
        } else if (scope._uri.includes("nrw.de")) {
            const responseProperties = responseJson["properties"];
            if (!Cesium.defined(responseProperties)) return [];
            properties = responseProperties;
        } else {
            properties = responseJson["properties"];
        }
        for (let key in properties) {
            result[key] = properties[key];
        }
        return result;
    };
    OGCFeatureAPI.prototype.countFromResult = function (res) {
        return res.getSize();
    };
    OGCFeatureAPI.prototype.deleteDataRecordUsingId = function (id) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.fetchIdsFromResult = function (res) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.insertDataRecord = function (record) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.queryUsingIds = function (ids) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.queryUsingNames = function (names, limit) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.queryUsingId = function (gmlid, callback, limit, clickedObject) {
        function tryUrls(urls) {
            return new Promise((resolve, reject) => {
                let i = 0;

                function next() {
                    if (i >= urls.length) {
                        reject(new Error('GMLID not matched'));
                        return;
                    }

                    let req = new XMLHttpRequest();
                    req.open('GET', urls[i]);
                    req.onload = function () {

                        if (req.status === 200 && scope.responseToKvp(req.response).length !== 0) {
                            resolve(req.response);
                        } else {
                            i++;
                            next();
                        }
                    };
                    req.onerror = function () {
                        i++;
                        next();
                    };
                    req.send();
                }

                next();
            });
        }

        // Column names in PostgREST are case-insensitive
        let baseUrl = this._uri;
        baseUrl += baseUrl.endsWith("/") ? "" : "/";
        const gmlidValue = gmlid["value"];
        let urls = [baseUrl + "?id=" + gmlidValue + "&f=json"];
        if (baseUrl.includes("hamburg.de") && gmlidValue.startsWith("DEHH")) {
            // Only for IDs that start with DEHH, not UUID or others (may be surfaces of a building)
            if (baseUrl.includes("GebaeudeBauwerk")) {
                // Hamburg -> append "BL" and use oid
                // e.g.: https://api.hamburg.de/datasets/v1/alkis_vereinfacht/collections/GebaeudeBauwerk/items/?oid=DEHHALKA3AR000BeBL&f=json
                urls.push(baseUrl + "?oid=" + gmlidValue + "BL&f=json");
            } else {
                // e.g.: https://api.hamburg.de/datasets/v1/alkis_vereinfacht/collections/Flurstueck/items/?oid=DEHHALKA3AR000BeBL&f=json
                urls.push(baseUrl + "?oid=" + gmlidValue + "&f=json");
            }
        } else if (baseUrl.includes("nrw.de") && gmlidValue.startsWith("DENW")) {
            // Only for IDs that start with DENW, not UUID or others (may be surfaces of a building)
            if (baseUrl.includes("gebaeudebauwerk")) {
                // NRW -> append "BL" and do not use any id key
                // e.g.: https://www.ldproxy.nrw.de/kataster/collections/gebaeudebauwerk/items/DENW51AL10007kgBBL?f=json
                urls.push(baseUrl + gmlidValue + "BL?f=json");
            } else {
                // e.g.: https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/DENW51AL10007kgBBL?f=json
                urls.push(baseUrl + gmlidValue + "?f=json");
            }
        }

        const scope = this;
        tryUrls(urls)
            .then(response => callback(response))
            .catch(error => console.log('Error:', error.message));

        // TODO use column number instead of column name (such as gmlid here)
    };
    OGCFeatureAPI.prototype.queryUsingTypes = function (types, limit) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.sumFromResultByColIndex = function (res, colIndex) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.sumFromResultByName = function (res, name) {
        // TODO
        return null;
    };
    OGCFeatureAPI.prototype.updateDataRecordUsingId = function (id, newRecord) {
        // TODO
        return null;
    };
    return OGCFeatureAPI;
}(SQLDataSource));
