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
exports.FeaturedContentValidationSchema = Yup.object().shape({
// No validation rules.
});
var FeaturedContentCodec = /** @class */ (function (_super) {
    __extends(FeaturedContentCodec, _super);
    function FeaturedContentCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FeaturedContentCodec;
}(EntityCodec_1.EntityCodec));
exports.FeaturedContentCodec = FeaturedContentCodec;
function FeaturedContentToFormValues(entity) {
    var _a, _b, _c;
    return {
        topVideo: entity && ((_a = entity.topVideo) === null || _a === void 0 ? void 0 : _a.id) || 0,
        featuredVideos: entity && ((_b = entity.featuredVideos) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.id; })) || [],
        featuredAlbums: entity && ((_c = entity.featuredAlbums) === null || _c === void 0 ? void 0 : _c.map(function (x) { return x.id; })) || []
    };
}
exports.FeaturedContentToFormValues = FeaturedContentToFormValues;
exports.FeaturedContentClass = {
    topVideo: {
        "id": "topVideo",
        "name": "Top Video",
        "description": "The video that has the most prominent position(s) on the platform.",
        "type": "Internal",
        "classId": "Video"
    },
    featuredVideos: {
        "id": "featuredVideos",
        "name": "Featured Videos",
        "description": "Videos featured in the Video tab.",
        "type": "InternalVec",
        "maxItems": 6,
        "classId": "Video"
    },
    featuredAlbums: {
        "id": "featuredAlbums",
        "name": "Featured Albums",
        "description": "Music albums featured in the Music tab.",
        "type": "InternalVec",
        "maxItems": 6,
        "classId": "Music Album"
    }
};
//# sourceMappingURL=FeaturedContent.js.map