"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("@polkadot/joy-utils/index");
var versioned_store_1 = require("@joystream/types/versioned-store");
var MusicTrack_1 = require("./../../schemas/music/MusicTrack");
var MusicAlbum_1 = require("./../../schemas/music/MusicAlbum");
var Video_1 = require("./../../schemas/video/Video");
var ContentLicense_1 = require("./../../schemas/general/ContentLicense");
var CurationStatus_1 = require("./../../schemas/general/CurationStatus");
var FeaturedContent_1 = require("./../../schemas/general/FeaturedContent");
var Language_1 = require("./../../schemas/general/Language");
var MediaObject_1 = require("./../../schemas/general/MediaObject");
var MusicGenre_1 = require("./../../schemas/music/MusicGenre");
var MusicMood_1 = require("./../../schemas/music/MusicMood");
var MusicTheme_1 = require("./../../schemas/music/MusicTheme");
var PublicationStatus_1 = require("./../../schemas/general/PublicationStatus");
var VideoCategory_1 = require("./../../schemas/video/VideoCategory");
var MediaDropdownOptions_1 = require("./../../common/MediaDropdownOptions");
var ChannelHelpers_1 = require("./../../channels/ChannelHelpers");
exports.EntityCodecByClassNameMap = {
    ContentLicense: ContentLicense_1.ContentLicenseCodec,
    CurationStatus: CurationStatus_1.CurationStatusCodec,
    FeaturedContent: FeaturedContent_1.FeaturedContentCodec,
    Language: Language_1.LanguageCodec,
    MediaObject: MediaObject_1.MediaObjectCodec,
    MusicAlbum: MusicAlbum_1.MusicAlbumCodec,
    MusicGenre: MusicGenre_1.MusicGenreCodec,
    MusicMood: MusicMood_1.MusicMoodCodec,
    MusicTheme: MusicTheme_1.MusicThemeCodec,
    MusicTrack: MusicTrack_1.MusicTrackCodec,
    PublicationStatus: PublicationStatus_1.PublicationStatusCodec,
    Video: Video_1.VideoCodec,
    VideoCategory: VideoCategory_1.VideoCategoryCodec,
};
function insensitiveEq(text1, text2) {
    var prepare = function (txt) { return txt.replace(/[\s]+/mg, '').toLowerCase(); };
    return prepare(text1) === prepare(text2);
}
var MediaTransport = /** @class */ (function (_super) {
    __extends(MediaTransport, _super);
    function MediaTransport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sessionId = 0;
        return _this;
    }
    MediaTransport.prototype.clearSessionCache = function () { };
    MediaTransport.prototype.openSession = function () {
        this.sessionId++;
        console.info("Open transport session no. " + this.sessionId);
    };
    MediaTransport.prototype.closeSession = function () {
        this.clearSessionCache();
        console.info("Close transport session no. " + this.sessionId);
    };
    MediaTransport.prototype.session = function (operation) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof operation !== 'function') {
                            throw new Error('Operation is not a function');
                        }
                        this.openSession();
                        return [4 /*yield*/, operation()];
                    case 1:
                        res = _a.sent();
                        this.closeSession();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    MediaTransport.prototype.channelById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allChannels()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .find(function (x) { return id && id.eq(x.id); })];
                }
            });
        });
    };
    MediaTransport.prototype.channelsByAccount = function (accountId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allChannels()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(function (x) { return accountId && accountId.eq(x.roleAccount); })];
                }
            });
        });
    };
    MediaTransport.prototype.classByName = function (className) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allClasses()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .find(function (x) { return className === versioned_store_1.unifyClassName(x.name); })];
                }
            });
        });
    };
    MediaTransport.prototype.classIdByNameMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var map_1, classes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.cachedClassIdByNameMap) return [3 /*break*/, 2];
                        map_1 = {};
                        return [4 /*yield*/, this.allClasses()];
                    case 1:
                        classes = _a.sent();
                        classes.forEach(function (c) {
                            var className = versioned_store_1.unifyClassName(c.name);
                            map_1[className] = c.id;
                        });
                        this.cachedClassIdByNameMap = map_1;
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.cachedClassIdByNameMap];
                }
            });
        });
    };
    MediaTransport.prototype.topVideo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, topVideoId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.featuredContent()];
                    case 1:
                        content = _b.sent();
                        topVideoId = content === null || content === void 0 ? void 0 : content.topVideo;
                        if (!!topVideoId) return [3 /*break*/, 2];
                        _a = undefined;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.videoById(new versioned_store_1.EntityId(topVideoId))];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                }
            });
        });
    };
    MediaTransport.prototype.featuredVideos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, videoIds, videos;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.featuredContent()];
                    case 1:
                        content = _a.sent();
                        videoIds = ((content === null || content === void 0 ? void 0 : content.featuredVideos) || []);
                        return [4 /*yield*/, Promise.all(videoIds.map(function (id) {
                                return _this.videoById(new versioned_store_1.EntityId(id));
                            }))];
                    case 2:
                        videos = _a.sent();
                        return [2 /*return*/, videos.filter(function (x) { return x !== undefined; })];
                }
            });
        });
    };
    MediaTransport.prototype.featuredAlbums = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, albumIds, albums;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.featuredContent()];
                    case 1:
                        content = _a.sent();
                        albumIds = ((content === null || content === void 0 ? void 0 : content.featuredAlbums) || []);
                        return [4 /*yield*/, Promise.all(albumIds.map(function (id) {
                                return _this.musicAlbumById(new versioned_store_1.EntityId(id));
                            }))];
                    case 2:
                        albums = _a.sent();
                        return [2 /*return*/, albums.filter(function (x) { return x !== undefined; })];
                }
            });
        });
    };
    MediaTransport.prototype.videosByChannelId = function (channelId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allVideos()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(function (x) { return channelId && channelId.eq(x.channelId); })];
                }
            });
        });
    };
    MediaTransport.prototype.videosByAccount = function (accountId) {
        return __awaiter(this, void 0, void 0, function () {
            var accountChannels, accountChannelIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.channelsByAccount(accountId)];
                    case 1:
                        accountChannels = _a.sent();
                        accountChannelIds = new Set(accountChannels.map(function (x) { return x.id; }));
                        return [4 /*yield*/, this.allVideos()];
                    case 2: return [2 /*return*/, (_a.sent())
                            .filter(function (x) { return x.channelId && accountChannelIds.has(x.channelId); })];
                }
            });
        });
    };
    MediaTransport.prototype.mediaObjectById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allMediaObjects()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .find(function (x) { return id && id.eq(x.id); })];
                }
            });
        });
    };
    MediaTransport.prototype.videoById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allVideos()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .find(function (x) { return id && id.eq(x.id); })];
                }
            });
        });
    };
    MediaTransport.prototype.musicTrackById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allMusicTracks()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .find(function (x) { return id && id.eq(x.id); })];
                }
            });
        });
    };
    MediaTransport.prototype.musicAlbumById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allMusicAlbums()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .find(function (x) { return id && id.eq(x.id); })];
                }
            });
        });
    };
    MediaTransport.prototype.allPublicChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allChannels()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(ChannelHelpers_1.isPublicChannel)];
                }
            });
        });
    };
    MediaTransport.prototype.allVideoChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allChannels()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(ChannelHelpers_1.isVideoChannel)];
                }
            });
        });
    };
    MediaTransport.prototype.allPublicVideoChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allVideoChannels()];
                    case 1: return [2 /*return*/, (_a.sent())
                            .filter(ChannelHelpers_1.isPublicChannel)
                            .sort(function (x) { return -1 * x.id; })];
                }
            });
        });
    };
    MediaTransport.prototype.latestPublicVideoChannels = function (limit) {
        if (limit === void 0) { limit = 6; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allPublicVideoChannels()];
                    case 1: return [2 /*return*/, (_a.sent()).slice(0, limit)];
                }
            });
        });
    };
    MediaTransport.prototype.allPublicVideos = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var idOfPublicPS, idsOfCuratedCS, isPublicAndNotCurated;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.allPublicationStatuses()];
                    case 1:
                        idOfPublicPS = (_a = (_b.sent())
                            .find(function (x) {
                            return insensitiveEq(x.value, 'Public');
                        })) === null || _a === void 0 ? void 0 : _a.id;
                        return [4 /*yield*/, this.allCurationStatuses()];
                    case 2:
                        idsOfCuratedCS = (_b.sent())
                            .filter(function (x) {
                            return insensitiveEq(x.value, 'Under review') ||
                                insensitiveEq(x.value, 'Removed');
                        }).map(function (x) { return x.id; });
                        isPublicAndNotCurated = function (video) {
                            var _a;
                            var isPublic = video.publicationStatus.id === idOfPublicPS;
                            var isNotCurated = idsOfCuratedCS.indexOf(((_a = video.curationStatus) === null || _a === void 0 ? void 0 : _a.id) || -1) < 0;
                            var isPubChannel = video.channel ? ChannelHelpers_1.isPublicChannel(video.channel) : true;
                            return isPublic && isNotCurated && isPubChannel;
                        };
                        return [4 /*yield*/, this.allVideos()];
                    case 3: return [2 /*return*/, (_b.sent())
                            .filter(isPublicAndNotCurated)
                            .sort(function (x) { return -1 * x.id; })];
                }
            });
        });
    };
    MediaTransport.prototype.latestPublicVideos = function (limit) {
        if (limit === void 0) { limit = 12; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allPublicVideos()];
                    case 1: return [2 /*return*/, (_a.sent()).slice(0, limit)];
                }
            });
        });
    };
    MediaTransport.prototype.mediaObjectClass = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.classByName('MediaObject')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MediaTransport.prototype.videoClass = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.classByName('Video')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MediaTransport.prototype.musicTrackClass = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.classByName('MusicTrack')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MediaTransport.prototype.musicAlbumClass = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.classByName('MusicAlbum')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MediaTransport.prototype.allInternalEntities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, this.allContentLicenses()];
                    case 1:
                        _a.contentLicenses = _b.sent();
                        return [4 /*yield*/, this.allCurationStatuses()];
                    case 2:
                        _a.curationStatuses = _b.sent();
                        return [4 /*yield*/, this.allLanguages()];
                    case 3:
                        _a.languages = _b.sent();
                        return [4 /*yield*/, this.allMusicGenres()];
                    case 4:
                        _a.musicGenres = _b.sent();
                        return [4 /*yield*/, this.allMusicMoods()];
                    case 5:
                        _a.musicMoods = _b.sent();
                        return [4 /*yield*/, this.allMusicThemes()];
                    case 6:
                        _a.musicThemes = _b.sent();
                        return [4 /*yield*/, this.allPublicationStatuses()];
                    case 7:
                        _a.publicationStatuses = _b.sent();
                        return [4 /*yield*/, this.allVideoCategories()];
                    case 8: return [2 /*return*/, (_a.videoCategories = _b.sent(),
                            _a)];
                }
            });
        });
    };
    MediaTransport.prototype.dropdownOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = MediaDropdownOptions_1.MediaDropdownOptions.bind;
                        return [4 /*yield*/, this.allInternalEntities()];
                    case 1:
                        res = new (_a.apply(MediaDropdownOptions_1.MediaDropdownOptions, [void 0, _b.sent()]))();
                        //console.log('Transport.dropdownOptions', res)
                        return [2 /*return*/, res];
                }
            });
        });
    };
    return MediaTransport;
}(index_1.Transport));
exports.MediaTransport = MediaTransport;
//# sourceMappingURL=MediaTransport.js.map