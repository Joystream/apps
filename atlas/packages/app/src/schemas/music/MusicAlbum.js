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
exports.MusicAlbumValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('This field is required')
        .max(255, 'Text is too long. Maximum length is 255 chars.'),
    artist: Yup.string()
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
    lyrics: Yup.string()
        .max(255, 'Text is too long. Maximum length is 255 chars.'),
    composerOrSongwriter: Yup.string()
        .max(255, 'Text is too long. Maximum length is 255 chars.'),
    attribution: Yup.string()
        .max(255, 'Text is too long. Maximum length is 255 chars.')
});
var MusicAlbumCodec = /** @class */ (function (_super) {
    __extends(MusicAlbumCodec, _super);
    function MusicAlbumCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MusicAlbumCodec;
}(EntityCodec_1.EntityCodec));
exports.MusicAlbumCodec = MusicAlbumCodec;
function MusicAlbumToFormValues(entity) {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
        title: entity && entity.title || '',
        artist: entity && entity.artist || '',
        thumbnail: entity && entity.thumbnail || '',
        description: entity && entity.description || '',
        firstReleased: entity && moment_1.default(entity.firstReleased * 1000).format('YYYY-MM-DD') || '',
        genre: entity && ((_a = entity.genre) === null || _a === void 0 ? void 0 : _a.id) || 0,
        mood: entity && ((_b = entity.mood) === null || _b === void 0 ? void 0 : _b.id) || 0,
        theme: entity && ((_c = entity.theme) === null || _c === void 0 ? void 0 : _c.id) || 0,
        tracks: entity && ((_d = entity.tracks) === null || _d === void 0 ? void 0 : _d.map(function (x) { return x.id; })) || [],
        language: entity && ((_e = entity.language) === null || _e === void 0 ? void 0 : _e.id) || 0,
        link: entity && entity.link || [],
        lyrics: entity && entity.lyrics || '',
        composerOrSongwriter: entity && entity.composerOrSongwriter || '',
        reviews: entity && entity.reviews || [],
        publicationStatus: entity && entity.publicationStatus.id || 0,
        curationStatus: entity && ((_f = entity.curationStatus) === null || _f === void 0 ? void 0 : _f.id) || 0,
        explicit: entity && entity.explicit || false,
        license: entity && ((_g = entity.license) === null || _g === void 0 ? void 0 : _g.id) || 0,
        attribution: entity && entity.attribution || '',
        channelId: entity && entity.channelId || 0
    };
}
exports.MusicAlbumToFormValues = MusicAlbumToFormValues;
exports.MusicAlbumClass = {
    title: {
        "id": "title",
        "name": "Title",
        "description": "The title of the album",
        "type": "Text",
        "required": true,
        "maxTextLength": 255
    },
    artist: {
        "id": "artist",
        "name": "Artist",
        "description": "The artist, composer, band or group that published the album.",
        "type": "Text",
        "required": true,
        "maxTextLength": 255
    },
    thumbnail: {
        "id": "thumbnail",
        "name": "Thumbnail",
        "description": "URL to album cover art thumbnail: NOTE: Should be an https link to a square image, between 1400x1400 and 3000x3000 pixels, in JPEG or PNG format.",
        "required": true,
        "type": "Text",
        "maxTextLength": 255
    },
    description: {
        "id": "description",
        "name": "Description",
        "description": "Information about the album and artist.",
        "required": true,
        "type": "Text",
        "maxTextLength": 4000
    },
    firstReleased: {
        "id": "firstReleased",
        "name": "First Released",
        "description": "When the album was first released",
        "required": true,
        "type": "Int64"
    },
    genre: {
        "id": "genre",
        "name": "Genre",
        "description": "The genre of the album.",
        "type": "Internal",
        "classId": "Music Genre"
    },
    mood: {
        "id": "mood",
        "name": "Mood",
        "description": "The mood of the album.",
        "type": "Internal",
        "classId": "Music Mood"
    },
    theme: {
        "id": "theme",
        "name": "Theme",
        "description": "The theme of the album.",
        "type": "Internal",
        "classId": "Music Theme"
    },
    tracks: {
        "id": "tracks",
        "name": "Tracks",
        "description": "The tracks of the album.",
        "type": "InternalVec",
        "maxItems": 100,
        "classId": "Music Track"
    },
    language: {
        "id": "language",
        "name": "Language",
        "description": "The language of the song lyrics in the album.",
        "required": false,
        "type": "Internal",
        "classId": "Language"
    },
    link: {
        "id": "link",
        "name": "Link",
        "description": "Links to the artist or album site or social media pages.",
        "type": "TextVec",
        "maxItems": 5,
        "maxTextLength": 255
    },
    lyrics: {
        "id": "lyrics",
        "name": "Lyrics",
        "description": "Link to the album tracks lyrics.",
        "type": "Text",
        "maxTextLength": 255
    },
    composerOrSongwriter: {
        "id": "composerOrSongwriter",
        "name": "Composer or songwriter",
        "description": "The composer(s) and/or songwriter(s) of the album.",
        "type": "Text",
        "maxTextLength": 255
    },
    reviews: {
        "id": "reviews",
        "name": "Reviews",
        "description": "Links to reviews of the album.",
        "type": "TextVec",
        "maxItems": 5,
        "maxTextLength": 255
    },
    publicationStatus: {
        "id": "publicationStatus",
        "name": "Publication Status",
        "description": "The publication status of the album.",
        "required": true,
        "type": "Internal",
        "classId": "Publication Status"
    },
    curationStatus: {
        "id": "curationStatus",
        "name": "Curation Status",
        "description": "The publication status of the album set by the a content curator on the platform.",
        "type": "Internal",
        "classId": "Curation Status"
    },
    explicit: {
        "id": "explicit",
        "name": "Explicit",
        "description": "Indicates whether the album contains explicit material.",
        "required": true,
        "type": "Bool"
    },
    license: {
        "id": "license",
        "name": "License",
        "description": "The license of which the album is released under.",
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
        "description": "Id of the channel this music album is published to.",
        "type": "Uint64"
    }
};
//# sourceMappingURL=MusicAlbum.js.map