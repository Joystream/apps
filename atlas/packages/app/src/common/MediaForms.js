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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var formik_1 = require("formik");
var JoyForms = __importStar(require("@polkadot/joy-utils/forms"));
var MediaDropdownOptions_1 = require("./MediaDropdownOptions");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
exports.datePlaceholder = 'Date in format yyyy-mm-dd';
function withMediaForm(Component) {
    var LabelledText = JoyForms.LabelledText();
    var LabelledField = JoyForms.LabelledField();
    function MediaText(props) {
        var f = props.field;
        return !f ? null : react_1.default.createElement(LabelledText, __assign({ name: f.id, label: f.name, tooltip: f.description, required: f.required }, props));
    }
    var MediaField = function (props) {
        var f = props.field, _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a, placeholder = props.placeholder, className = props.className, style = props.style, otherProps = __rest(props, ["field", "fieldProps", "placeholder", "className", "style"]);
        var id = f.id;
        var allFieldProps = __assign({ name: id, id: id, placeholder: placeholder, className: className, style: style, disabled: otherProps.isSubmitting }, fieldProps);
        return !f ? null : (react_1.default.createElement(LabelledField, __assign({ name: id, label: f.name, tooltip: f.description, required: f.required }, props),
            react_1.default.createElement(formik_1.Field, __assign({}, allFieldProps))));
    };
    var MediaDropdown = function (props) {
        var f = props.field, _a = props.options, options = _a === void 0 ? [] : _a;
        var id = f.id;
        var value = props.values[id] || '';
        return react_1.default.createElement(MediaField, __assign({}, props, { fieldProps: {
                component: semantic_ui_react_1.Dropdown,
                selection: true,
                search: true,
                options: options,
                value: value,
                onBlur: function (_event, _data) {
                    props.setFieldTouched(id, true);
                },
                onChange: function (_event, data) {
                    props.setFieldValue(id, data.value);
                }
            } }));
    };
    return function (props) {
        var initialValues = props.initialValues, values = props.values, dirty = props.dirty, touched = props.touched, errors = props.errors, isValid = props.isValid, setSubmitting = props.setSubmitting, _a = props.opts, opts = _a === void 0 ? MediaDropdownOptions_1.MediaDropdownOptions.Empty : _a;
        var isFieldChanged = function (field) {
            var fieldName = typeof field === 'string' ? field : field.id;
            return (dirty &&
                touched[fieldName] === true &&
                !isEqual_1.default(values[fieldName], initialValues[fieldName]));
        };
        var onSubmit = function (sendTx) {
            if (isValid) {
                sendTx();
            }
            else {
                console.log('Form is invalid. Errors:', errors);
            }
        };
        var onTxSuccess = function (_txResult) {
            setSubmitting(false);
        };
        var onTxFailed = function (txResult) {
            setSubmitting(false);
            if (txResult === null) {
                // Tx cancelled
                return;
            }
        };
        var allProps = __assign(__assign({}, props), { 
            // Callbacks:
            onSubmit: onSubmit,
            onTxSuccess: onTxSuccess,
            onTxFailed: onTxFailed,
            // Components:
            LabelledText: LabelledText,
            LabelledField: LabelledField,
            MediaText: MediaText,
            MediaField: MediaField,
            MediaDropdown: MediaDropdown,
            // Other
            opts: opts,
            isFieldChanged: isFieldChanged });
        return react_1.default.createElement(Component, __assign({}, allProps));
    };
}
exports.withMediaForm = withMediaForm;
//# sourceMappingURL=MediaForms.js.map