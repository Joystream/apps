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
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_dplayer_1 = __importDefault(require("react-dplayer"));
var react_aplayer_1 = __importDefault(require("react-aplayer"));
var with_1 = require("@polkadot/react-api/with");
var translate_1 = __importDefault(require("../translate"));
var ChannelHelpers_1 = require("../channels/ChannelHelpers");
var MyMembershipContext_1 = require("@polkadot/joy-utils/MyMembershipContext");
var PLAYER_COMMON_PARAMS = {
    lang: 'en',
    autoplay: true,
    theme: '#2185d0'
};
function Player(props) {
    var video = props.video, url = props.resolvedAssetUrl, _a = props.contentType, contentType = _a === void 0 ? 'video/video' : _a;
    var cover = video.thumbnail;
    var prefix = contentType.substring(0, contentType.indexOf('/'));
    var _b = react_1.useState(), player = _b[0], setPlayer = _b[1];
    var onPlayerCreated = function (newPlayer) {
        console.log('onPlayerCreated:', newPlayer);
        setPlayer(newPlayer);
    };
    var destroyPlayer = function () {
        if (!player)
            return;
        console.log('Destroy the current player');
        player.pause();
        player.destroy();
        setPlayer(undefined);
    };
    react_1.useEffect(function () {
        return function () {
            destroyPlayer();
        };
    }, [url]);
    if (prefix === 'video') {
        var video_1 = { url: url, name: name, pic: cover };
        return react_1.default.createElement(react_dplayer_1.default, __assign({ video: video_1 }, PLAYER_COMMON_PARAMS, { loop: false, onLoad: onPlayerCreated }));
    }
    else if (prefix === 'audio') {
        var audio = { url: url, name: name, cover: cover };
        return react_1.default.createElement(react_aplayer_1.default, __assign({ audio: audio }, PLAYER_COMMON_PARAMS, { loop: 'none', onInit: onPlayerCreated }));
    }
    return react_1.default.createElement("em", null,
        "Unsupported type of content: ",
        contentType);
}
function InnerComponent(props) {
    var video = props.video, url = props.resolvedAssetUrl;
    var dataObjectOpt = props.dataObjectOpt, channel = props.channel;
    if (!dataObjectOpt || dataObjectOpt.isNone) {
        return null;
    }
    // TODO extract and show the next info from dataObject:
    // {"owner":"5GSMNn8Sy8k64mGUWPDafjMZu9bQNX26GujbBQ1LeJpNbrfg","added_at":{"block":2781,"time":1582750854000},"type_id":1,"size":3664485,"liaison":"5HN528fspu4Jg3KXWm7Pu7aUK64RSBz2ZSbwo1XKR9iz3hdY","liaison_judgement":1,"ipfs_content_id":"QmNk4QczoJyPTAKdfoQna6KhAz3FwfjpKyRBXAZHG5djYZ"}
    var myAccountId = MyMembershipContext_1.useMyMembership().myAccountId;
    var iAmOwner = ChannelHelpers_1.isAccountAChannelOwner(channel, myAccountId);
    return (react_1.default.createElement("div", { className: 'PlayBox' },
        react_1.default.createElement(Player, __assign({}, props, { key: url })),
        react_1.default.createElement("div", { className: 'ContentHeader' },
            react_1.default.createElement("a", { className: 'ui button outline DownloadBtn', href: url + "?download" },
                react_1.default.createElement("i", { className: 'cloud download icon' }),
                " Download"),
            iAmOwner &&
                react_1.default.createElement(react_router_dom_1.Link, { to: "/media/videos/" + video.id + "/edit", className: 'ui button', style: { float: 'right' } },
                    react_1.default.createElement("i", { className: 'pencil alternate icon' }),
                    "Edit"),
            react_1.default.createElement("h1", null, video.title))));
}
exports.MediaPlayerView = with_1.withMulti(InnerComponent, translate_1.default, with_1.withCalls(['query.dataDirectory.dataObjectByContentId',
    { paramName: 'contentId', propName: 'dataObjectOpt' }]));
//# sourceMappingURL=MediaPlayerView.js.map