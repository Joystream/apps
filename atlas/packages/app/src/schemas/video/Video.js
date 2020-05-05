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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
var EntityCodec_1 = require("@joystream/types/versioned-store/EntityCodec");
var moment_1 = __importDefault(require("moment"));
exports.VideoValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('This field is required')
        .max(255, 'Text is too long. Maximum length is 255 chars.'),
    thumbnail: Yup.string()
        .required('This field is required')
        .max(255, 'Text is too long. Maximum length is 255 chars.'),
    description: Yup.string()
        .required('This field is required')
        .max(4000, 'Text is too long. Maximum length is 4000 chars.'),
    firstReleased: Yup.string()
        .required('This field is required')
        .test('valid-date', 'Invalid date. Valid date formats are yyyy-mm-dd or yyyy-mm or yyyy.', function (val) {
        return moment_1.default(val).isValid();
    }),
    attribution: Yup.string()
        .max(255, 'Text is too long. Maximum length is 255 chars.')
});
var VideoCodec = /** @class */ (function (_super) {
    __extends(VideoCodec, _super);
    function VideoCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VideoCodec;
}(EntityCodec_1.EntityCodec));
exports.VideoCodec = VideoCodec;
function VideoToFormValues(entity) {
    var _a, _b, _c, _d, _e, _f;
    return {
        title: entity && entity.title || '',
        thumbnail: entity && entity.thumbnail || '',
        description: entity && entity.description || '',
        language: entity && ((_a = entity.language) === null || _a === void 0 ? void 0 : _a.id) || 0,
        firstReleased: entity && moment_1.default(entity.firstReleased * 1000).format('YYYY-MM-DD') || '',
        category: entity && ((_b = entity.category) === null || _b === void 0 ? void 0 : _b.id) || 0,
        link: entity && entity.link || [],
        object: entity && ((_c = entity.object) === null || _c === void 0 ? void 0 : _c.id) || 0,
        publicationStatus: entity && ((_d = entity.publicationStatus) === null || _d === void 0 ? void 0 : _d.id) || 0,
        curationStatus: entity && ((_e = entity.curationStatus) === null || _e === void 0 ? void 0 : _e.id) || 0,
        explicit: entity && entity.explicit || false,
        license: entity && ((_f = entity.license) === null || _f === void 0 ? void 0 : _f.id) || 0,
        attribution: entity && entity.attribution || '',
        channelId: entity && entity.channelId || 0
    };
}
exports.VideoToFormValues = VideoToFormValues;
exports.VideoClass = {
    title: {
        "id": "title",
        "name": "Title",
        "description": "The title of the video",
        "type": "Text",
        "required": true,
        "maxTextLength": 255
    },
    thumbnail: {
        "id": "thumbnail",
        "name": "Thumbnail",
        "description": "URL to video thumbnail: NOTE: Should be an https link to an image of ratio 16:9, ideally 1280 pixels wide by 720 pixels tall, with a minimum width of 640 pixels, in JPEG or PNG format.",
        "required": true,
        "type": "Text",
        "maxTextLength": 255
    },
    description: {
        "id": "description",
        "name": "Description",
        "description": "Information about the video.",
        "required": true,
        "type": "Text",
        "maxTextLength": 4000
    },
    language: {
        "id": "language",
        "name": "Language",
        "description": "The main language used in the video.",
        "required": true,
        "type": "Internal",
        "classId": "Language"
    },
    firstReleased: {
        "id": "firstReleased",
        "name": "First Released",
        "description": "When the video was first released",
        "required": true,
        "type": "Int64"
    },
    category: {
        "id": "category",
        "name": "Category",
        "description": "The category of the video.",
        "type": "Internal",
        "classId": "Video Category"
    },
    link: {
        "id": "link",
        "name": "Link",
        "description": "A link to the creators page.",
        "type": "TextVec",
        "maxItems": 5,
        "maxTextLength": 255
    },
    object: {
        "id": "object",
        "name": "Object",
        "description": "The entityId of the object in the data directory.",
        "type": "Internal",
        "classId": "Media Object"
    },
    publicationStatus: {
        "id": "publicationStatus",
        "name": "Publication Status",
        "description": "The publication status of the video.",
        "required": true,
        "type": "Internal",
        "classId": "Publication Status"
    },
    curationStatus: {
        "id": "curationStatus",
        "name": "Curation Status",
        "description": "The publication status of the video set by the a content curator on the platform.",
        "type": "Internal",
        "classId": "Curation Status"
    },
    explicit: {
        "id": "explicit",
        "name": "Explicit",
        "description": "Indicates whether the video contains explicit material.",
        "required": true,
        "type": "Bool"
    },
    license: {
        "id": "license",
        "name": "License",
        "description": "The license of which the video is released under.",
        "required": true,
        "type": "Internal",
        "classId": "Content License"
    },
    attribution: {
        "id": "attribution",
        "name": "Attribution",
        "description": "If the License requires attribution, add this here.",
        "type": "Text",
        "maxTextLength": 255
    },
    channelId: {
        "id": "channelId",
        "name": "Channel Id",
        "description": "Id of the channel this video is published to.",
        "type": "Uint64"
    }
};
//# sourceMappingURL=Video.js.map