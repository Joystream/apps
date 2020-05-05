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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bn_js_1 = __importDefault(require("bn.js"));
var MediaTransport_1 = require("./MediaTransport");
var versioned_store_1 = require("@joystream/types/versioned-store");
var EntityCodec_1 = require("@joystream/types/versioned-store/EntityCodec");
var content_working_group_1 = require("@joystream/types/content-working-group");
var Channel_1 = require("./../../schemas/channel/Channel");
var TypeHelpers_1 = require("./../../common/TypeHelpers");
var SimpleCache_1 = require("@polkadot/joy-utils/SimpleCache");
var FIRST_CHANNEL_ID = 1;
var FIRST_CLASS_ID = 1;
var FIRST_ENTITY_ID = 1;
/**
 * There are entities that refer to other entities.
 */
var ClassNamesThatRequireLoadingInternals = [
    'Video',
    'MusicTrack',
    'MusicAlbum'
];
/**
 * There are such group of entities that are safe to cache
 * becase they serve as utility entities.
 * Very unlikely that their values will be changed frequently.
 * Even if changed, this is not a big issue from UI point of view.
 */
var ClassNamesThatCanBeCached = [
    'ContentLicense',
    'CurationStatus',
    'Language',
    'MusicGenre',
    'MusicMood',
    'MusicTheme',
    'PublicationStatus',
    'VideoCategory',
];
var SubstrateTransport = /** @class */ (function (_super) {
    __extends(SubstrateTransport, _super);
    function SubstrateTransport(api) {
        var _this = _super.call(this) || this;
        // Ids of such entities as Language, Video Category, Music Mood, etc
        // will be pushed to this array later in this transport class.
        _this.idsOfEntitiesToKeepInCache = new Set();
        console.log('Create new SubstrateTransport');
        if (!api) {
            throw new Error('Cannot create SubstrateTransport: Substrate API is required');
        }
        else if (!api.isApiReady) {
            throw new Error('Cannot create SubstrateTransport: Substrate API is not ready yet');
        }
        _this.api = api.api;
        var loadChannelsByIds = _this.loadChannelsByIds.bind(_this);
        var loadEntitiesByIds = _this.loadPlainEntitiesByIds.bind(_this);
        var loadClassesByIds = _this.loadClassesByIds.bind(_this);
        _this.channelCache = new SimpleCache_1.SimpleCache('Channel Cache', loadChannelsByIds);
        _this.entityCache = new SimpleCache_1.SimpleCache('Entity Cache', loadEntitiesByIds);
        _this.classCache = new SimpleCache_1.SimpleCache('Class Cache', loadClassesByIds);
        return _this;
    }
    SubstrateTransport.prototype.notImplementedYet = function () {
        throw new Error('Substrate transport: Requested function is not implemented yet');
    };
    /** Content Working Group query. */
    SubstrateTransport.prototype.cwgQuery = function () {
        return this.api.query.contentWorkingGroup;
    };
    /** Versioned Store query. */
    SubstrateTransport.prototype.vsQuery = function () {
        return this.api.query.versionedStore;
    };
    SubstrateTransport.prototype.clearSessionCache = function () {
        console.info("Clear cache of Substrate Transport");
        this.channelCache.clear();
        this.entityCache.clearExcept(this.idsOfEntitiesToKeepInCache);
        // Don't clean Class cache. It's safe to preserve it between transport sessions.
        // this.classCache.clear()
    };
    // Channels (Content Working Group module)
    // -----------------------------------------------------------------
    SubstrateTransport.prototype.nextChannelId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cwgQuery().nextChannelId()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allChannelIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextId, allIds, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nextChannelId()];
                    case 1:
                        nextId = (_a.sent()).toNumber();
                        if (nextId < 1)
                            nextId = 1;
                        allIds = [];
                        for (id = FIRST_CHANNEL_ID; id < nextId; id++) {
                            allIds.push(new content_working_group_1.ChannelId(id));
                        }
                        return [2 /*return*/, allIds];
                }
            });
        });
    };
    SubstrateTransport.prototype.loadChannelsByIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var channelTuples;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cwgQuery().channelById.multi(ids)];
                    case 1:
                        channelTuples = _a.sent();
                        return [2 /*return*/, channelTuples.map(function (tuple, i) {
                                var channel = tuple[0];
                                var id = TypeHelpers_1.asChannelId(ids[i]);
                                var plain = Channel_1.ChannelCodec.fromSubstrate(id, channel);
                                return __assign(__assign({}, plain), { rewardEarned: new bn_js_1.default(0), contentItemsCount: 0 });
                            })];
                }
            });
        });
    };
    SubstrateTransport.prototype.allChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allChannelIds()];
                    case 1:
                        ids = _a.sent();
                        return [4 /*yield*/, this.channelCache.getOrLoadByIds(ids)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.getValidationConstraint = function (constraintName) {
        return __awaiter(this, void 0, void 0, function () {
            var constraint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cwgQuery()[constraintName]()];
                    case 1:
                        constraint = _a.sent();
                        return [2 /*return*/, {
                                min: constraint.min.toNumber(),
                                max: constraint.max.toNumber()
                            }];
                }
            });
        });
    };
    SubstrateTransport.prototype.channelValidationConstraints = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, handle, title, description, avatar, banner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getValidationConstraint('channelHandleConstraint'),
                            this.getValidationConstraint('channelTitleConstraint'),
                            this.getValidationConstraint('channelDescriptionConstraint'),
                            this.getValidationConstraint('channelAvatarConstraint'),
                            this.getValidationConstraint('channelBannerConstraint')
                        ])];
                    case 1:
                        _a = _b.sent(), handle = _a[0], title = _a[1], description = _a[2], avatar = _a[3], banner = _a[4];
                        return [2 /*return*/, {
                                handle: handle,
                                title: title,
                                description: description,
                                avatar: avatar,
                                banner: banner
                            }];
                }
            });
        });
    };
    // Classes (Versioned Store module)
    // -----------------------------------------------------------------
    SubstrateTransport.prototype.nextClassId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vsQuery().nextClassId()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allClassIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextId, allIds, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nextClassId()];
                    case 1:
                        nextId = (_a.sent()).toNumber();
                        allIds = [];
                        for (id = FIRST_CLASS_ID; id < nextId; id++) {
                            allIds.push(new versioned_store_1.ClassId(id));
                        }
                        return [2 /*return*/, allIds];
                }
            });
        });
    };
    SubstrateTransport.prototype.loadClassesByIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vsQuery().classById.multi(ids)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allClasses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allClassIds()];
                    case 1:
                        ids = _a.sent();
                        return [4 /*yield*/, this.classCache.getOrLoadByIds(ids)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.getEntityCodecResolver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var classes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.entityCodecResolver) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.allClasses()];
                    case 1:
                        classes = _a.sent();
                        this.entityCodecResolver = new EntityCodec_1.EntityCodecResolver(classes);
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.entityCodecResolver];
                }
            });
        });
    };
    SubstrateTransport.prototype.classNamesToIdSet = function (classNames) {
        return __awaiter(this, void 0, void 0, function () {
            var classNameToIdMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.classIdByNameMap()];
                    case 1:
                        classNameToIdMap = _a.sent();
                        return [2 /*return*/, new Set(classNames
                                .map(function (name) {
                                var classId = classNameToIdMap[name];
                                return classId ? classId.toString() : undefined;
                            })
                                .filter(function (classId) { return typeof classId !== 'undefined'; }))];
                }
            });
        });
    };
    // Entities (Versioned Store module)
    // -----------------------------------------------------------------
    SubstrateTransport.prototype.nextEntityId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vsQuery().nextEntityId()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allEntityIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextId, allIds, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nextEntityId()];
                    case 1:
                        nextId = (_a.sent()).toNumber();
                        allIds = [];
                        for (id = FIRST_ENTITY_ID; id < nextId; id++) {
                            allIds.push(new versioned_store_1.EntityId(id));
                        }
                        return [2 /*return*/, allIds];
                }
            });
        });
    };
    SubstrateTransport.prototype.loadEntitiesByIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ids || ids.length === 0)
                            return [2 /*return*/, []];
                        return [4 /*yield*/, this.vsQuery().entityById.multi(ids)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // TODO try to cache this func
    SubstrateTransport.prototype.loadPlainEntitiesByIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var entities, cacheClassIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadEntitiesByIds(ids)];
                    case 1:
                        entities = _a.sent();
                        return [4 /*yield*/, this.classNamesToIdSet(ClassNamesThatCanBeCached)];
                    case 2:
                        cacheClassIds = _a.sent();
                        entities.forEach(function (e) {
                            if (cacheClassIds.has(e.class_id.toString())) {
                                _this.idsOfEntitiesToKeepInCache.add(e.id.toString());
                            }
                        });
                        return [4 /*yield*/, this.toPlainEntitiesAndResolveInternals(entities)];
                    case 3: 
                    // Next logs are usefull for debug:
                    // console.log('cacheClassIds', cacheClassIds)
                    // console.log('idsOfEntitiesToKeepInCache', this.idsOfEntitiesToKeepInCache)
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allPlainEntities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allEntityIds()];
                    case 1:
                        ids = _a.sent();
                        return [4 /*yield*/, this.entityCache.getOrLoadByIds(ids)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.findPlainEntitiesByClassName = function (className) {
        return __awaiter(this, void 0, void 0, function () {
            var res, clazz, allIds, filteredEntities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = [];
                        return [4 /*yield*/, this.classByName(className)];
                    case 1:
                        clazz = _a.sent();
                        if (!clazz) {
                            console.warn("No class found by name '" + className + "'");
                            return [2 /*return*/, res];
                        }
                        return [4 /*yield*/, this.allEntityIds()];
                    case 2:
                        allIds = _a.sent();
                        return [4 /*yield*/, this.entityCache.getOrLoadByIds(allIds)];
                    case 3:
                        filteredEntities = (_a.sent())
                            .filter(function (entity) { return clazz.id.eq(entity.classId); });
                        console.log("Found " + filteredEntities.length + " plain entities by class name '" + className + "'");
                        return [2 /*return*/, filteredEntities];
                }
            });
        });
    };
    SubstrateTransport.prototype.toPlainEntitiesAndResolveInternals = function (entities) {
        return __awaiter(this, void 0, void 0, function () {
            var loadEntityById, loadChannelById, entityCodecResolver, loadableClassIds, convertions, _i, entities_1, entity, classIdStr, codec, loadInternals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loadEntityById = this.entityCache.getOrLoadById.bind(this.entityCache);
                        loadChannelById = this.channelCache.getOrLoadById.bind(this.channelCache);
                        return [4 /*yield*/, this.getEntityCodecResolver()];
                    case 1:
                        entityCodecResolver = _a.sent();
                        return [4 /*yield*/, this.classNamesToIdSet(ClassNamesThatRequireLoadingInternals)];
                    case 2:
                        loadableClassIds = _a.sent();
                        convertions = [];
                        for (_i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
                            entity = entities_1[_i];
                            classIdStr = entity.class_id.toString();
                            codec = entityCodecResolver.getCodecByClassId(entity.class_id);
                            if (!codec) {
                                console.warn("No entity codec found by class id: " + classIdStr);
                                continue;
                            }
                            loadInternals = loadableClassIds.has(classIdStr);
                            convertions.push(codec.toPlainObject(entity, {
                                loadInternals: loadInternals,
                                loadEntityById: loadEntityById,
                                loadChannelById: loadChannelById
                            }));
                        }
                        return [2 /*return*/, Promise.all(convertions)];
                }
            });
        });
    };
    // Load entities by class name:
    // -----------------------------------------------------------------
    SubstrateTransport.prototype.featuredContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('FeaturedContent')];
                    case 1:
                        arr = _a.sent();
                        return [2 /*return*/, arr && arr.length ? arr[0] : undefined];
                }
            });
        });
    };
    SubstrateTransport.prototype.allMediaObjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('MediaObject')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allVideos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('Video')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allMusicTracks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('MusicTrack')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allMusicAlbums = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('MusicAlbum')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allContentLicenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('ContentLicense')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allCurationStatuses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('CurationStatus')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allLanguages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('Language')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allMusicGenres = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('MusicGenre')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allMusicMoods = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('MusicMood')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allMusicThemes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('MusicTheme')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allPublicationStatuses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('PublicationStatus')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubstrateTransport.prototype.allVideoCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findPlainEntitiesByClassName('VideoCategory')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SubstrateTransport;
}(MediaTransport_1.MediaTransport));
exports.SubstrateTransport = SubstrateTransport;
//# sourceMappingURL=SubstrateTransport.js.map