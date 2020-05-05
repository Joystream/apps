"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var lodash_1 = __importDefault(require("lodash"));
var with_1 = require("@polkadot/react-api/with");
var translate_1 = __importDefault(require("../translate"));
var DiscoveryProvider_1 = require("../DiscoveryProvider");
var semantic_ui_react_1 = require("semantic-ui-react");
var MediaPlayerView_1 = require("./MediaPlayerView");
function newCancelSource() {
    return axios_1.default.CancelToken.source();
}
function InnerComponent(props) {
    var _this = this;
    var contentId = props.contentId, api = props.api, discoveryProvider = props.discoveryProvider;
    var _a = react_1.useState(), error = _a[0], setError = _a[1];
    var _b = react_1.useState(), resolvedAssetUrl = _b[0], setResolvedAssetUrl = _b[1];
    var _c = react_1.useState(), contentType = _c[0], setContentType = _c[1];
    var _d = react_1.useState(newCancelSource()), cancelSource = _d[0], setCancelSource = _d[1];
    react_1.useEffect(function () {
        resolveAsset();
        return function () {
            cancelSource.cancel();
        };
    }, [contentId.encode()]);
    var resolveAsset = function () { return __awaiter(_this, void 0, void 0, function () {
        var rids, allRelationships, readyProviders, stakedActors, provider, assetUrl, err_1, response, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setError(undefined);
                    setCancelSource(newCancelSource());
                    return [4 /*yield*/, api.query.dataObjectStorageRegistry.relationshipsByContentId(contentId)];
                case 1:
                    rids = _a.sent();
                    return [4 /*yield*/, Promise.all(rids.map(function (id) { return api.query.dataObjectStorageRegistry.relationships(id); }))];
                case 2:
                    allRelationships = _a.sent();
                    readyProviders = allRelationships.filter(function (r) { return r.isSome; }).map(function (r) { return r.unwrap(); })
                        .filter(function (r) { return r.ready; })
                        .map(function (r) { return r.storage_provider; });
                    // runtime doesn't currently guarantee unique set
                    readyProviders = lodash_1.default.uniqBy(readyProviders, function (provider) { return provider.toString(); });
                    if (!readyProviders.length) {
                        setError(new Error('No Storage Providers found storing this content'));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, api.query.actors.actorAccountIds()];
                case 3:
                    stakedActors = _a.sent();
                    readyProviders = lodash_1.default.intersectionBy(stakedActors, readyProviders, function (provider) { return provider.toString(); });
                    console.log("Found " + readyProviders.length + " providers ready to serve content: " + readyProviders);
                    // shuffle to spread the load
                    readyProviders = lodash_1.default.shuffle(readyProviders);
                    _a.label = 4;
                case 4:
                    if (!readyProviders.length) return [3 /*break*/, 12];
                    provider = readyProviders.shift();
                    if (!provider)
                        return [3 /*break*/, 4];
                    assetUrl = void 0;
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, discoveryProvider.resolveAssetEndpoint(provider, contentId.encode(), cancelSource.token)];
                case 6:
                    assetUrl = _a.sent();
                    return [3 /*break*/, 8];
                case 7:
                    err_1 = _a.sent();
                    if (axios_1.default.isCancel(err_1)) {
                        return [2 /*return*/];
                    }
                    else {
                        return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 8];
                case 8:
                    _a.trys.push([8, 10, , 11]);
                    console.log('Check URL of resolved asset:', assetUrl);
                    return [4 /*yield*/, axios_1.default.head(assetUrl, { cancelToken: cancelSource.token })];
                case 9:
                    response = _a.sent();
                    setContentType(response.headers['content-type'] || 'video/video');
                    setResolvedAssetUrl(assetUrl);
                    return [2 /*return*/];
                case 10:
                    err_2 = _a.sent();
                    if (axios_1.default.isCancel(err_2)) {
                        return [2 /*return*/];
                    }
                    else {
                        if (!err_2.response || (err_2.response.status >= 500 && err_2.response.status <= 504)) {
                            // network connection error
                            discoveryProvider.reportUnreachable(provider);
                        }
                        // try next provider
                        return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 11];
                case 11: return [3 /*break*/, 4];
                case 12:
                    setError(new Error('Unable to reach any provider serving this content'));
                    return [2 /*return*/];
            }
        });
    }); };
    console.log('Content id:', contentId.encode());
    console.log('Resolved asset URL:', resolvedAssetUrl);
    if (error) {
        return (react_1.default.createElement(semantic_ui_react_1.Message, { error: true, className: 'JoyMainStatus' },
            react_1.default.createElement(semantic_ui_react_1.Message.Header, null, "Error loading media content"),
            react_1.default.createElement("p", null, error.toString()),
            react_1.default.createElement("button", { className: 'ui button', onClick: resolveAsset }, "Try again")));
    }
    if (!resolvedAssetUrl) {
        return react_1.default.createElement("em", null, "Resolving media content...");
    }
    var playerProps = __assign(__assign({}, props), { contentType: contentType, resolvedAssetUrl: resolvedAssetUrl });
    return react_1.default.createElement(MediaPlayerView_1.MediaPlayerView, __assign({}, playerProps));
}
exports.MediaPlayerWithResolver = with_1.withMulti(InnerComponent, translate_1.default, DiscoveryProvider_1.withDiscoveryProvider);
//# sourceMappingURL=MediaPlayerWithResolver.js.map