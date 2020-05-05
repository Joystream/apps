"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ChannelAvatar_1 = require("./ChannelAvatar");
var ChannelNameAsLink_1 = require("./ChannelNameAsLink");
exports.ChannelAvatarAndName = function (props) {
    var channel = props.channel;
    return (react_1.default.createElement("div", { className: "ChannelPreview small" },
        react_1.default.createElement(ChannelAvatar_1.ChannelAvatar, { channel: channel, size: 'small' }),
        react_1.default.createElement("div", { className: 'ChannelDetails' },
            react_1.default.createElement("h3", { className: 'ChannelTitle', style: { display: 'block' } },
                react_1.default.createElement(ChannelNameAsLink_1.ChannelNameAsLink, { channel: channel })))));
};
//# sourceMappingURL=ChannelAvatarAndName.js.map