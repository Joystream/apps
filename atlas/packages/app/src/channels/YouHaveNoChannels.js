"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
function YouHaveNoChannels(props) {
    var _a = props.suspended, suspended = _a === void 0 ? false : _a;
    var renderSuspendedAlert = function () { return (react_1.default.createElement(semantic_ui_react_1.Message, { compact: true, error: true, icon: 'warning sign', header: 'Channel Creation Suspended', content: 'Please try again later', className: 'JoyInlineMsg' })); };
    var renderCreateButton = function () { return (react_1.default.createElement(react_router_dom_1.Link, { to: "/media/channels/new" },
        react_1.default.createElement(semantic_ui_react_1.Message, { compact: true, success: true, icon: 'plus circle', header: 'Create Channel', content: 'and start publishing', className: 'JoyInlineMsg CreateBtn' }))); };
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { style: { marginTop: '2rem', marginBottom: '.5rem' } }, "Build your following on Joystream"),
        react_1.default.createElement("p", { style: { marginBottom: '2rem' } }, "A channel is a way to organize related content for the benefit of both the publisher and the audience."),
        suspended
            ? renderSuspendedAlert()
            : renderCreateButton());
}
exports.YouHaveNoChannels = YouHaveNoChannels;
//# sourceMappingURL=YouHaveNoChannels.js.map