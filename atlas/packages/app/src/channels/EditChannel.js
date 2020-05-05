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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var formik_1 = require("formik");
var types_1 = require("@polkadot/types");
var TxButton_1 = __importDefault(require("@polkadot/joy-utils/TxButton"));
var utils_1 = require("../utils");
var MediaForms_1 = require("../common/MediaForms");
var Channel_1 = require("../schemas/channel/Channel");
var content_working_group_1 = require("@joystream/types/content-working-group");
var joy_utils_1 = require("@polkadot/joy-utils/");
var MyMembershipContext_1 = require("@polkadot/joy-utils/MyMembershipContext");
var ChannelHelpers_1 = require("./ChannelHelpers");
var InnerForm = function (props) {
    var 
    // React components for form fields:
    MediaText = props.MediaText, MediaDropdown = props.MediaDropdown, LabelledField = props.LabelledField, 
    // Callbacks:
    onSubmit = props.onSubmit, 
    // onTxSuccess,
    onTxFailed = props.onTxFailed, history = props.history, existingId = props.id, entity = props.entity, isFieldChanged = props.isFieldChanged, 
    // Formik stuff:
    values = props.values, dirty = props.dirty, isValid = props.isValid, isSubmitting = props.isSubmitting, setSubmitting = props.setSubmitting, resetForm = props.resetForm;
    var _a = MyMembershipContext_1.useMyMembership(), myAddress = _a.myAddress, myMemberId = _a.myMemberId;
    var avatar = values.avatar;
    var isNew = !entity;
    // if user is not the channel owner don't render the edit form
    // return null
    var onTxSuccess = function (txResult) {
        setSubmitting(false);
        if (!history)
            return;
        var id = existingId
            ? existingId
            : joy_utils_1.findFirstParamOfSubstrateEvent(txResult, 'ChannelCreated');
        console.log('Channel id:', id === null || id === void 0 ? void 0 : id.toString());
        if (id) {
            history.push('/media/channels/' + id.toString());
        }
    };
    var buildTxParams = function () {
        if (!isValid)
            return [];
        // TODO get value from the form:
        var publicationStatus = new content_working_group_1.ChannelPublicationStatus('Public');
        if (!entity) {
            // Create a new channel
            var channelOwner = myMemberId;
            var roleAccount = myAddress;
            var contentType = new content_working_group_1.ChannelContentType(values.content);
            return [
                channelOwner,
                roleAccount,
                contentType,
                new types_1.Text(values.handle),
                joy_utils_1.newOptionalText(values.title),
                joy_utils_1.newOptionalText(values.description),
                joy_utils_1.newOptionalText(values.avatar),
                joy_utils_1.newOptionalText(values.banner),
                publicationStatus
            ];
        }
        else {
            // Update an existing channel
            var updOptText = function (field) {
                return new types_1.Option(content_working_group_1.OptionalText, isFieldChanged(field)
                    ? joy_utils_1.newOptionalText(values[field.id])
                    : null);
            };
            var updHandle = new types_1.Option(types_1.Text, isFieldChanged(Channel_1.ChannelClass.handle)
                ? values[Channel_1.ChannelClass.handle.id]
                : null);
            var updPublicationStatus = new types_1.Option(content_working_group_1.ChannelPublicationStatus, isFieldChanged(Channel_1.ChannelClass.publicationStatus)
                ? new content_working_group_1.ChannelPublicationStatus(values[Channel_1.ChannelClass.publicationStatus.id])
                : null);
            return [
                new content_working_group_1.ChannelId(entity.id),
                updHandle,
                updOptText(Channel_1.ChannelClass.title),
                updOptText(Channel_1.ChannelClass.description),
                updOptText(Channel_1.ChannelClass.avatar),
                updOptText(Channel_1.ChannelClass.banner),
                updPublicationStatus
            ];
        }
    };
    var formFields = function () { return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(MediaText, __assign({ field: Channel_1.ChannelClass.handle }, props)),
        react_1.default.createElement(MediaText, __assign({ field: Channel_1.ChannelClass.title }, props)),
        react_1.default.createElement(MediaText, __assign({ field: Channel_1.ChannelClass.avatar }, props)),
        react_1.default.createElement(MediaText, __assign({ field: Channel_1.ChannelClass.banner }, props)),
        react_1.default.createElement(MediaText, __assign({ field: Channel_1.ChannelClass.description, textarea: true }, props)),
        react_1.default.createElement(MediaDropdown, __assign({}, props, { field: Channel_1.ChannelClass.publicationStatus, options: ChannelHelpers_1.ChannelPublicationStatusDropdownOptions }))); };
    var renderMainButton = function () {
        return react_1.default.createElement(TxButton_1.default, { type: 'submit', size: 'large', isDisabled: !dirty || isSubmitting, label: isNew
                ? 'Create channel'
                : 'Update channel', params: buildTxParams(), tx: isNew
                ? 'contentWorkingGroup.createChannel'
                : 'contentWorkingGroup.updateChannelAsOwner', onClick: onSubmit, txFailedCb: onTxFailed, txSuccessCb: onTxSuccess });
    };
    return react_1.default.createElement("div", { className: 'EditMetaBox' },
        react_1.default.createElement("div", { className: 'EditMetaThumb' }, avatar && react_1.default.createElement("img", { src: avatar, onError: utils_1.onImageError })),
        react_1.default.createElement(formik_1.Form, { className: 'ui form JoyForm EditMetaForm' },
            formFields(),
            react_1.default.createElement(LabelledField, __assign({ style: { marginTop: '1rem' } }, props),
                renderMainButton(),
                react_1.default.createElement(semantic_ui_react_1.Button, { type: 'button', size: 'large', disabled: !dirty || isSubmitting, onClick: function () { return resetForm(); }, content: 'Reset form' }))));
};
exports.EditForm = formik_1.withFormik({
    // Transform outer props into form values
    mapPropsToValues: function (props) {
        var entity = props.entity;
        return Channel_1.ChannelToFormValues(entity);
    },
    validationSchema: function (props) {
        var constraints = props.constraints;
        if (!constraints)
            return null;
        return Channel_1.buildChannelValidationSchema(constraints);
    },
    handleSubmit: function () {
        // do submitting things
    }
})(MediaForms_1.withMediaForm(InnerForm));
exports.default = exports.EditForm;
//# sourceMappingURL=EditChannel.js.map