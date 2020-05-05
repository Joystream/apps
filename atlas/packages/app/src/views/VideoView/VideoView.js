"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("components");
var router_1 = require("@reach/router");
function VideoViewComponent(_a) {
    var video = _a.video, channel = _a.channel;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.GenericSection, null,
            react_1.default.createElement(components_1.VideoPlayer, { src: video.src, poster: video.poster })),
        react_1.default.createElement(components_1.GenericSection, { topDivider: true, title: video.title, className: "video-details" },
            react_1.default.createElement(components_1.ChannelSummary, { isPublic: channel.isPublic, img: channel.img, name: channel.name, isVerified: channel.isVerified, description: video.description, size: "default", onClick: function () { return router_1.navigate("/channels/" + channel.name); } })),
        react_1.default.createElement(components_1.GenericSection, { topDivider: true, title: "Video details", className: "video-details-table" },
            react_1.default.createElement(components_1.DetailsTable, { details: video.details }))));
}
function VideoView(_a) {
    var videos = _a.videos, channels = _a.channels;
    var params = router_1.useParams();
    var video = Object.values(videos).flat()[params.idx];
    var channel = channels[video.channel];
    return react_1.default.createElement(VideoViewComponent, { video: video, channel: channel });
}
exports.default = VideoView;
//# sourceMappingURL=VideoView.js.map