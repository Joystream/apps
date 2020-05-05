"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var util_1 = require("@polkadot/util");
exports.ChannelPreviewStats = function (props) {
    var channel = props.channel;
    var statSize = 'tiny';
    var itemsPublishedLabel = '';
    if (channel.content === 'Video') {
        itemsPublishedLabel = 'Videos';
    }
    else if (channel.content === 'Music') {
        itemsPublishedLabel = 'Music tracks';
    }
    return (react_1.default.createElement("div", { className: 'ChannelStats' },
        react_1.default.createElement("div", null,
            react_1.default.createElement(semantic_ui_react_1.Statistic, { size: statSize },
                react_1.default.createElement(semantic_ui_react_1.Statistic.Label, null, "Reward earned"),
                react_1.default.createElement(semantic_ui_react_1.Statistic.Value, null,
                    util_1.formatNumber(channel.rewardEarned),
                    "\u00A0",
                    react_1.default.createElement("span", { style: { fontSize: '1.5rem' } }, "JOY")))),
        react_1.default.createElement("div", { style: { marginTop: '1rem' } },
            react_1.default.createElement(semantic_ui_react_1.Statistic, { size: statSize },
                react_1.default.createElement(semantic_ui_react_1.Statistic.Label, null, itemsPublishedLabel),
                react_1.default.createElement(semantic_ui_react_1.Statistic.Value, null, util_1.formatNumber(channel.contentItemsCount))))));
};
//# sourceMappingURL=ChannelPreviewStats.js.map