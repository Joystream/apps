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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var router_1 = require("@reach/router");
var components_1 = require("components");
var ChannelHeader_1 = __importDefault(require("./../../components/ChannelHeader"));
function ChannelComponent(_a) {
    var name = _a.name, _b = _a.isPublic, isPublic = _b === void 0 ? true : _b, _c = _a.isVerified, isVerified = _c === void 0 ? false : _c, description = _a.description, banner = _a.banner, videos = _a.videos, img = _a.img;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ChannelHeader_1.default, { name: name, isPublic: isPublic, isVerified: isVerified, description: description, banner: banner, img: img }),
        react_1.default.createElement(components_1.GenericSection, { title: "Videos" },
            react_1.default.createElement(components_1.Grid, { minItemWidth: "250", maxItemWidth: "600", items: videos.map(function (video, idx) { return (react_1.default.createElement(components_1.VideoPreview, { onClick: function () { return router_1.navigate("/videos/" + idx); }, onChannelClick: function () { return router_1.navigate("/channels/" + video.channel); }, key: "title-" + idx, title: video.title, poster: video.poster })); }) }))));
}
function Channel(_a) {
    var videos = _a.videos, channels = _a.channels;
    var params = router_1.useParams();
    var channelVideos = videos[params.channelName];
    var channel = channels[params.channelName];
    return react_1.default.createElement(ChannelComponent, __assign({}, channel, { videos: channelVideos }));
}
exports.default = Channel;
//# sourceMappingURL=ChannelView.js.map