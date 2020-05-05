"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ViewVideoChannel_1 = require("./ViewVideoChannel");
var ViewMusicChannel_1 = require("./ViewMusicChannel");
var VideoPreview_1 = require("../video/VideoPreview");
var ChannelHelpers_1 = require("./ChannelHelpers");
function ViewChannel(props) {
    var channel = props.channel, _a = props.videos, videos = _a === void 0 ? [] : _a, _b = props.albums, albums = _b === void 0 ? [] : _b, _c = props.tracks, tracks = _c === void 0 ? [] : _c;
    if (!channel) {
        return react_1.default.createElement("em", null, "Channel is not found");
    }
    if (ChannelHelpers_1.isVideoChannel(channel)) {
        var previews = VideoPreview_1.toVideoPreviews(videos);
        return react_1.default.createElement(ViewVideoChannel_1.ViewVideoChannel, { channel: channel, videos: previews });
    }
    else if (ChannelHelpers_1.isMusicChannel(channel)) {
        return react_1.default.createElement(ViewMusicChannel_1.ViewMusicChannel, { channel: channel, albums: albums, tracks: tracks });
    }
    else {
        return react_1.default.createElement("em", null,
            "Unsupported channel type: ",
            channel.content);
    }
}
exports.ViewChannel = ViewChannel;
//# sourceMappingURL=ViewChannel.js.map