"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
function FormTabs(props) {
    var panes = props.panes, errors = props.errors;
    return react_1.default.createElement(semantic_ui_react_1.Tab, { menu: { secondary: true, pointing: true, color: 'blue' }, panes: panes.map(function (tab) {
            var id = tab.id, _a = tab.fields, fields = _a === void 0 ? [] : _a, _b = tab.renderTitle, renderTitle = _b === void 0 ? function () { return id; } : _b, _c = tab.render, render = _c === void 0 ? function () { return null; } : _c;
            var tabErrors = [];
            fields.forEach(function (f) {
                var err = errors[f.id];
                if (err) {
                    tabErrors.push(err);
                }
            });
            // Currently we don't show error counter because it's markup is broken:
            // a red circle with a number is shifted quite far from the right border of its tab.
            var showErrorCounter = false;
            var errCount = tabErrors.length;
            var errTooltip = 'Number of errors on this tab';
            var menuItem = react_1.default.createElement(semantic_ui_react_1.Menu.Item, { key: id },
                renderTitle(),
                showErrorCounter && errCount > 0 &&
                    react_1.default.createElement(semantic_ui_react_1.Label, { color: 'red', circular: true, floating: true, title: errTooltip }, errCount));
            return { menuItem: menuItem, render: render };
        }) });
}
exports.FormTabs = FormTabs;
//# sourceMappingURL=FormTabs.js.map