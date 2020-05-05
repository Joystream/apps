"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var router_1 = require("@reach/router");
var components_1 = require("components");
var TransportContext_1 = require("./../../providers/TransportContext");
var MyMembershipContext_1 = require("@polkadot/joy-utils/MyMembershipContext");
function ExploreView(_a) {
    var _this = this;
    var allVideos = [];
    var allChannels = [];
    var channels = [];
    var transport = TransportContext_1.useTransportContext();
    var _b = MyMembershipContext_1.useMyMembership(), myAddress = _b.myAddress, myMemberId = _b.myMemberId;
    var resolverProps = { transport: transport, myAddress: myAddress, myMemberId: myMemberId };
    var _c = react_1.useState({}), resolvedProps = _c[0], setResolvedProps = _c[1];
    var _d = react_1.useState(false), propsResolved = _d[0], setPropsResolved = _d[1];
    var rerenderDeps = [myAddress];
    react_1.useEffect(function () {
        function doResolveProps() {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('Resolving props of media view');
                            // Transport session allows us to cache loaded channels, entites and classes
                            // during the render of this view:
                            transport.openSession();
                            return [4 /*yield*/, resolveProps(resolverProps)];
                        case 1:
                            data = _a.sent();
                            console.log(data);
                            setResolvedProps(data);
                            transport.closeSession();
                            setPropsResolved(true);
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (!transport) {
            console.error('Transport is not defined');
        }
        else {
            doResolveProps();
        }
    }, rerenderDeps);
    var resolveProps = function (_a) {
        var transport = _a.transport;
        return __awaiter(_this, void 0, void 0, function () {
            var _b, latestVideoChannels, latestVideos, featuredVideos;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            transport.latestPublicVideoChannels(),
                            transport.latestPublicVideos(),
                            transport.featuredVideos()
                        ])];
                    case 1:
                        _b = _c.sent(), latestVideoChannels = _b[0], latestVideos = _b[1], featuredVideos = _b[2];
                        return [2 /*return*/, { featuredVideos: featuredVideos, latestVideos: latestVideos, latestVideoChannels: latestVideoChannels }];
                }
            });
        });
    };
    if (!propsResolved)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.GenericSection, { topDivider: true, title: "Latest Videos", linkText: "All Videos", onLinkClick: function () { } },
            react_1.default.createElement(components_1.Grid, { minItemWidth: "250", items: allVideos.map(function (video, idx) {
                    var channelImg = (channels[video.channel] || "").img;
                    return (react_1.default.createElement(components_1.VideoPreview, { key: video.title + "-" + idx, channelImg: channelImg, channel: video.channel, title: video.title, poster: video.poster, showChannel: true, onClick: function () { return router_1.navigate("videos/" + idx); }, onChannelClick: function () { return router_1.navigate("channels/" + video.channel); } }));
                }) })),
        react_1.default.createElement(components_1.GenericSection, { topDivider: true, title: "Latest video channels", linkText: "All Channels", onLinkClick: function () { } },
            react_1.default.createElement("div", { className: "channel-gallery" }, allChannels.map(function (channel, idx) { return (react_1.default.createElement(components_1.ChannelSummary, { key: channel.name + "-" + idx, img: channel.img, size: "default", name: channel.name, isPublic: channel.isPublic, isVerified: channel.isVerified, onClick: function () { return router_1.navigate("channels/" + channel.name); } })); })))));
}
exports.default = ExploreView;
//# sourceMappingURL=ExploreView.js.map