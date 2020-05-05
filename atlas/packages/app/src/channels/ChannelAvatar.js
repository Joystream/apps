"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var BgImg_1 = require("../common/BgImg");
var utils_1 = require("../utils");
var defaultSizePx = 75;
function sizeToPx(size) {
    switch (size) {
        case 'big': return 100;
        case 'small': return 35;
        case 'default': return defaultSizePx;
        default: return defaultSizePx;
    }
}
function ChannelAvatar(props) {
    var channel = props.channel, _a = props.size, size = _a === void 0 ? 'default' : _a;
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/media/channels/" + channel.id },
        react_1.default.createElement(BgImg_1.BgImg, { className: "ChannelAvatar " + size, url: channel.avatar || utils_1.DEFAULT_THUMBNAIL_URL, size: sizeToPx(size) })));
}
exports.ChannelAvatar = ChannelAvatar;
//# sourceMappingURL=ChannelAvatar.js.map