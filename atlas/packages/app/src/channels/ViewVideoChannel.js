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
var Section_1 = __importDefault(require("@polkadot/joy-utils/Section"));
var ChannelHeader_1 = require("./ChannelHeader");
var VideoPreview_1 = require("../video/VideoPreview");
var NoContentYet_1 = __importDefault(require("../common/NoContentYet"));
function NoVideosYet() {
    return react_1.default.createElement(NoContentYet_1.default, null, "Channel has no videos yet.");
}
function ViewVideoChannel(props) {
    var channel = props.channel, _a = props.videos, videos = _a === void 0 ? [] : _a;
    var renderVideosSection = function () { return (!videos.length
        ? react_1.default.createElement(NoVideosYet, null)
        : react_1.default.createElement(Section_1.default, { title: "Videos" }, videos.map(function (x) {
            return react_1.default.createElement(VideoPreview_1.VideoPreview, __assign({ key: x.id.toString() }, x, { channel: channel }));
        }))); };
    return react_1.default.createElement("div", { className: 'JoyViewChannel' },
        react_1.default.createElement(ChannelHeader_1.ChannelHeader, { channel: channel }),
        renderVideosSection());
}
exports.ViewVideoChannel = ViewVideoChannel;
//# sourceMappingURL=ViewVideoChannel.js.map