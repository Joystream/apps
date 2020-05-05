"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BgImg_1 = require("../common/BgImg");
var ChannelPreview_1 = require("./ChannelPreview");
function ChannelHeader(props) {
    var channel = props.channel;
    var banner = channel.banner;
    return (react_1.default.createElement("div", { className: 'ChannelHeader' },
        banner && react_1.default.createElement(BgImg_1.BgImg, { className: 'ChannelCover', url: banner }),
        react_1.default.createElement(ChannelPreview_1.ChannelPreview, { channel: channel, size: 'big', withDescription: true })));
}
exports.ChannelHeader = ChannelHeader;
//# sourceMappingURL=ChannelHeader.js.map