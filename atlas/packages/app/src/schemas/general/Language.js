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
exports.LanguageValidationSchema = Yup.object().shape({
    value: Yup.string()
        .required('This field is required')
        .max(2, 'Text is too long. Maximum length is 2 chars.')
});
var LanguageCodec = /** @class */ (function (_super) {
    __extends(LanguageCodec, _super);
    function LanguageCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LanguageCodec;
}(EntityCodec_1.EntityCodec));
exports.LanguageCodec = LanguageCodec;
function LanguageToFormValues(entity) {
    return {
        value: entity && entity.value || ''
    };
}
exports.LanguageToFormValues = LanguageToFormValues;
exports.LanguageClass = {
    value: {
        "id": "value",
        "name": "Value",
        "description": "Language code following the ISO 639-1 two letter standard.",
        "type": "Text",
        "required": true,
        "maxTextLength": 2
    }
};
//# sourceMappingURL=Language.js.map