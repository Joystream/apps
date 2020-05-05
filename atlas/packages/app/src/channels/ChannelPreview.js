"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_markdown_1 = __importDefault(require("react-markdown"));
var semantic_ui_react_1 = require("semantic-ui-react");
var ChannelAvatar_1 = require("./ChannelAvatar");
var ChannelHelpers_1 = require("./ChannelHelpers");
var ChannelHelpers_2 = require("./ChannelHelpers");
var MyMembershipContext_1 = require("@polkadot/joy-utils/MyMembershipContext");
var joy_utils_1 = require("@polkadot/joy-utils/");
var CurationPanel_1 = require("./CurationPanel");
var ChannelNameAsLink_1 = require("./ChannelNameAsLink");
exports.ChannelPreview = function (props) {
    var myAccountId = MyMembershipContext_1.useMyMembership().myAccountId;
    var channel = props.channel, size = props.size, _a = props.withSubtitle, withSubtitle = _a === void 0 ? true : _a, withDescription = props.withDescription;
    var subtitle;
    var icon;
    if (ChannelHelpers_2.isMusicChannel(channel)) {
        subtitle = 'Music channel',
            icon = 'music';
    }
    else if (ChannelHelpers_2.isVideoChannel(channel)) {
        subtitle = 'Video channel';
        icon = 'film';
    }
    var visibilityIcon = 'eye';
    var visibilityColor = 'green';
    var visibilityText = 'Public';
    if (!ChannelHelpers_1.isPublicChannel(channel)) {
        visibilityIcon = 'eye slash';
        visibilityColor = 'orange';
        visibilityText = 'Unlisted';
    }
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "ChannelPreview " + (size || '') },
            react_1.default.createElement(ChannelAvatar_1.ChannelAvatar, { channel: channel, size: size }),
            react_1.default.createElement("div", { className: 'ChannelDetails' },
                react_1.default.createElement("h3", { className: 'ChannelTitle', style: { display: 'block' } },
                    react_1.default.createElement(ChannelNameAsLink_1.ChannelNameAsLink, { channel: channel, style: { marginRight: '1rem' } }),
                    react_1.default.createElement(CurationPanel_1.CurationPanel, { channel: channel }),
                    ChannelHelpers_2.isAccountAChannelOwner(channel, myAccountId) &&
                        react_1.default.createElement("div", { style: { float: 'right' } },
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/media/channels/" + channel.id + "/edit", className: 'ui button basic', style: { marginRight: '1rem' } },
                                react_1.default.createElement("i", { className: 'icon pencil' }),
                                "Edit"),
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/media/channels/" + channel.id + "/upload", className: 'ui button basic primary' },
                                react_1.default.createElement("i", { className: 'icon upload' }),
                                "Upload ",
                                channel.content))),
                react_1.default.createElement("div", { className: 'ChannelSubtitle' },
                    withSubtitle && subtitle &&
                        react_1.default.createElement("span", { style: { marginRight: '1rem' } },
                            icon && react_1.default.createElement("i", { className: "icon " + icon }),
                            subtitle),
                    react_1.default.createElement(semantic_ui_react_1.Label, { basic: true, color: visibilityColor, style: { marginRight: '1rem' } },
                        react_1.default.createElement(semantic_ui_react_1.Icon, { name: visibilityIcon }),
                        visibilityText),
                    channel.curationStatus !== 'Normal' &&
                        react_1.default.createElement(semantic_ui_react_1.Label, { basic: true, color: 'red' },
                            react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'dont' }),
                            "Channel ",
                            channel.curationStatus,
                            ' ',
                            react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'question circle outline', size: 'small' })),
                    ChannelHelpers_2.isVerifiedChannel(channel) &&
                        react_1.default.createElement(semantic_ui_react_1.Label, { basic: true, color: 'blue' },
                            react_1.default.createElement("i", { className: 'icon checkmark' }),
                            "Verified")),
                withDescription && joy_utils_1.nonEmptyStr(channel.description) &&
                    react_1.default.createElement(react_markdown_1.default, { className: 'JoyMemo--full ChannelDesc', source: channel.description, linkTarget: '_blank' }))));
};
//# sourceMappingURL=ChannelPreview.js.map