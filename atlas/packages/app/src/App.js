"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var router_1 = require("@reach/router");
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("./store"));
var staticData_1 = __importDefault(require("../staticData"));
var ChannelView_1 = __importDefault(require("./views/ChannelView"));
var ExploreView_1 = __importDefault(require("./views/ExploreView"));
var VideoView_1 = __importDefault(require("./views/VideoView"));
var ScrollToTop_1 = __importDefault(require("./components/ScrollToTop"));
var channels = staticData_1.default.channels, videos = staticData_1.default.videos;
function App() {
    return (react_1.default.createElement("main", { className: "main-section" },
        react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
            react_1.default.createElement(router_1.Router, { primary: false },
                react_1.default.createElement(ScrollToTop_1.default, { path: "/" },
                    react_1.default.createElement(ExploreView_1.default, { path: "/", channels: channels, videos: videos }),
                    react_1.default.createElement(ChannelView_1.default, { path: "/channels/:channelName", channels: channels, videos: videos }),
                    react_1.default.createElement(VideoView_1.default, { path: "/videos/:idx", channels: channels, videos: videos }))))));
}
exports.default = App;
//# sourceMappingURL=App.js.map