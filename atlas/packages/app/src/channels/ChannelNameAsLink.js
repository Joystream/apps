"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.ChannelNameAsLink = function (props) {
    var channel = props.channel, className = props.className, style = props.style;
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/media/channels/" + channel.id, className: className, style: style }, channel.title || channel.handle));
};
//# sourceMappingURL=ChannelNameAsLink.js.map