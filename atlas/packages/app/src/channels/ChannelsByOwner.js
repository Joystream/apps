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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
var YouHaveNoChannels_1 = require("./YouHaveNoChannels");
var ChannelPreview_1 = require("./ChannelPreview");
var TabsAndChannels = function (props) {
    var _a = props.channels, allChannels = _a === void 0 ? [] : _a;
    var _b = react_1.useState(allChannels), channels = _b[0], setChannels = _b[1];
    var videoChannelsCount = 0;
    var musicChannelsCount = 0;
    allChannels.forEach(function (x) {
        if (x.content === 'Video') {
            videoChannelsCount++;
        }
        else if (x.content === 'Music') {
            musicChannelsCount++;
        }
    });
    var panes = [
        { menuItem: "All channels (" + allChannels.length + ")" },
        { menuItem: "Video channels (" + videoChannelsCount + ")" },
        { menuItem: "Music channels (" + musicChannelsCount + ")" }
    ];
    var contentTypeByTabIndex = [undefined, 'Video', 'Music'];
    var switchTab = function (activeIndex) {
        var activeContentType = contentTypeByTabIndex[activeIndex];
        if (activeContentType === undefined) {
            setChannels(allChannels);
        }
        else {
            setChannels(allChannels.filter(function (x) { return x.content === activeContentType; }));
        }
    };
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(semantic_ui_react_1.Tab, { panes: panes, menu: { secondary: true }, style: { display: 'inline-flex', margin: '0 2rem 1rem 0' }, onTabChange: function (_e, data) { return switchTab(data.activeIndex); } }),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/media/channels/new", className: 'ui button' },
            react_1.default.createElement("i", { className: 'icon plus' }),
            "Create Channel"),
        channels.map(function (channel) {
            return react_1.default.createElement(semantic_ui_react_1.Segment, { key: channel.id, padded: true, style: { backgroundColor: '#fff' } },
                react_1.default.createElement(ChannelPreview_1.ChannelPreview, { channel: channel, withDescription: true }));
        }));
};
function ChannelsByOwner(props) {
    var _a = props.suspended, suspended = _a === void 0 ? false : _a, _b = props.channels, channels = _b === void 0 ? [] : _b;
    return react_1.default.createElement("div", { className: 'JoyChannels' }, !channels.length
        ? react_1.default.createElement(YouHaveNoChannels_1.YouHaveNoChannels, { suspended: suspended })
        : react_1.default.createElement(TabsAndChannels, __assign({}, props)));
}
exports.ChannelsByOwner = ChannelsByOwner;
//# sourceMappingURL=ChannelsByOwner.js.map