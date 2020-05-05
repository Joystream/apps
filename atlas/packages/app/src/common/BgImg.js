"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function BgImg(props) {
    var url = props.url, width = props.width, height = props.height, size = props.size, circle = props.circle, className = props.className, style = props.style;
    var fullClass = 'JoyBgImg ' + className;
    var fullStyle = {
        backgroundImage: "url(" + url + ")",
    };
    if (!width || !height) {
        width = size;
        height = size;
    }
    fullStyle = Object.assign(fullStyle, {
        width: width,
        height: height,
        minWidth: width,
        minHeight: height
    });
    if (circle) {
        fullStyle = Object.assign(fullStyle, {
            borderRadius: '50%'
        });
    }
    fullStyle = Object.assign(fullStyle, style);
    return react_1.default.createElement("div", { className: fullClass, style: fullStyle });
}
exports.BgImg = BgImg;
//# sourceMappingURL=BgImg.js.map