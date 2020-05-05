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
var Section_1 = __importDefault(require("@polkadot/joy-utils/Section"));
var ChannelHeader_1 = require("./ChannelHeader");
var MusicAlbumPreview_1 = require("../music/MusicAlbumPreview");
var MusicTrackReaderPreview_1 = require("../music/MusicTrackReaderPreview");
var NoContentYet_1 = __importDefault(require("../common/NoContentYet"));
function NoAlbums() {
    return react_1.default.createElement(NoContentYet_1.default, null, "Channel has no music albums yet.");
}
function NoTracks() {
    return react_1.default.createElement(NoContentYet_1.default, null, "Channel has no music tracks yet.");
}
function ViewMusicChannel(props) {
    var channel = props.channel, _a = props.albums, albums = _a === void 0 ? [] : _a, _b = props.tracks, tracks = _b === void 0 ? [] : _b;
    var renderAlbumsSection = function () { return (!albums.length
        ? react_1.default.createElement(NoAlbums, null)
        : react_1.default.createElement(Section_1.default, { title: "Music albums" }, albums.map(function (x) { return react_1.default.createElement(MusicAlbumPreview_1.MusicAlbumPreview, __assign({}, x)); }))); };
    var renderTracksSection = function () { return (!tracks.length
        ? react_1.default.createElement(NoTracks, null)
        : react_1.default.createElement(Section_1.default, { title: "Music tracks" }, tracks.map(function (x) { return react_1.default.createElement(MusicTrackReaderPreview_1.MusicTrackReaderPreview, __assign({}, x)); }))); };
    return react_1.default.createElement("div", { className: 'JoyViewChannel' },
        react_1.default.createElement(ChannelHeader_1.ChannelHeader, { channel: channel }),
        renderAlbumsSection(),
        renderTracksSection());
}
exports.ViewMusicChannel = ViewMusicChannel;
//# sourceMappingURL=ViewMusicChannel.js.map