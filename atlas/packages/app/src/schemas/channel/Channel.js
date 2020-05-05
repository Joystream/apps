"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
function textValidation(constraint) {
    if (!constraint) {
        return Yup.string();
    }
    var min = constraint.min, max = constraint.max;
    return Yup.string()
        .min(min, "Text is too short. Minimum length is " + min + " chars.")
        .max(max, "Text is too long. Maximum length is " + max + " chars.");
}
exports.buildChannelValidationSchema = function (constraints) {
    return Yup.object().shape({
        handle: textValidation(constraints === null || constraints === void 0 ? void 0 : constraints.handle).required('This field is required'),
        title: textValidation(constraints === null || constraints === void 0 ? void 0 : constraints.title),
        description: textValidation(constraints === null || constraints === void 0 ? void 0 : constraints.description),
        avatar: textValidation(constraints === null || constraints === void 0 ? void 0 : constraints.avatar),
        banner: textValidation(constraints === null || constraints === void 0 ? void 0 : constraints.banner)
    });
};
var ChannelCodec = /** @class */ (function () {
    function ChannelCodec() {
    }
    ChannelCodec.fromSubstrate = function (id, sub) {
        return {
            id: id.toNumber(),
            verified: sub.getBoolean('verified'),
            handle: sub.getString('handle'),
            title: sub.getOptionalString('title'),
            description: sub.getOptionalString('description'),
            avatar: sub.getOptionalString('avatar'),
            banner: sub.getOptionalString('banner'),
            content: sub.getEnumAsString('content'),
            owner: sub.getField('owner'),
            roleAccount: sub.getField('role_account'),
            publicationStatus: sub.getEnumAsString('publication_status'),
            curationStatus: sub.getEnumAsString('curation_status'),
            created: sub.getField('created'),
            principalId: sub.getField('principal_id')
        };
    };
    return ChannelCodec;
}());
exports.ChannelCodec = ChannelCodec;
function ChannelToFormValues(entity) {
    return {
        content: entity && entity.content || 'Video',
        handle: entity && entity.handle || '',
        title: entity && entity.title || '',
        description: entity && entity.description || '',
        avatar: entity && entity.avatar || '',
        banner: entity && entity.banner || '',
        publicationStatus: entity && entity.publicationStatus || 'Public'
    };
}
exports.ChannelToFormValues = ChannelToFormValues;
exports.ChannelClass = {
    content: {
        "id": "content",
        "name": "Content",
        "description": "The type of channel.",
        "type": "Text",
        "required": true,
        "maxTextLength": 100
    },
    handle: {
        "id": "handle",
        "name": "Handle",
        "description": "Unique URL handle of channel.",
        "type": "Text",
        "required": true,
        "maxTextLength": 40
    },
    title: {
        "id": "title",
        "name": "Title",
        "description": "Human readable title of channel.",
        "type": "Text",
        "maxTextLength": 100
    },
    description: {
        "id": "description",
        "name": "Description",
        "description": "Human readable description of channel purpose and scope.",
        "type": "Text",
        "maxTextLength": 4000
    },
    avatar: {
        "id": "avatar",
        "name": "Avatar",
        "description": "URL to avatar (logo) iamge: NOTE: Should be an https link to a square image.",
        "type": "Text",
        "maxTextLength": 1000
    },
    banner: {
        "id": "banner",
        "name": "Banner",
        "description": "URL to banner image: NOTE: Should be an https link to a rectangular image, between 1400x1400 and 3000x3000 pixels, in JPEG or PNG format.",
        "type": "Text",
        "maxTextLength": 1000
    },
    publicationStatus: {
        "id": "publicationStatus",
        "name": "Publication Status",
        "description": "The publication status of the channel.",
        "required": true,
        "type": "Internal",
        "classId": "Publication Status"
    }
};
//# sourceMappingURL=Channel.js.map