"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var router_1 = require("@reach/router");
var components_1 = require("components");
function ChannelHeader(_a) {
    var img = _a.img, _b = _a.isPublic, isPublic = _b === void 0 ? true : _b, _c = _a.isVerified, isVerified = _c === void 0 ? false : _c, description = _a.description, name = _a.name, banner = _a.banner, channelUrl = _a.channelUrl;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        banner && react_1.default.createElement(components_1.Banner, { src: banner }),
        react_1.default.createElement(components_1.ChannelSummary, { name: name, isPublic: isPublic, isVerified: isVerified, size: "large", img: img, description: description, onClick: function () { return router_1.navigate(channelUrl); } })));
}
exports.default = ChannelHeader;
//# sourceMappingURL=ChannelHeader.js.map