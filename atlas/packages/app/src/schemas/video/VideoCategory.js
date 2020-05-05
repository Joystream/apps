"use strict";
/** This file is generated based on JSON schema. Do not modify. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
var EntityCodec_1 = require("@joystream/types/versioned-store/EntityCodec");
exports.VideoCategoryValidationSchema = Yup.object().shape({
    value: Yup.string()
        .required('This field is required')
        .max(255, 'Text is too long. Maximum length is 255 chars.')
});
var VideoCategoryCodec = /** @class */ (function (_super) {
    __extends(VideoCategoryCodec, _super);
    function VideoCategoryCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VideoCategoryCodec;
}(EntityCodec_1.EntityCodec));
exports.VideoCategoryCodec = VideoCategoryCodec;
function VideoCategoryToFormValues(entity) {
    return {
        value: entity && entity.value || ''
    };
}
exports.VideoCategoryToFormValues = VideoCategoryToFormValues;
exports.VideoCategoryClass = {
    value: {
        "id": "value",
        "name": "Value",
        "description": "Categories for videos.",
        "type": "Text",
        "required": true,
        "maxTextLength": 255
    }
};
//# sourceMappingURL=VideoCategory.js.map