"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iso_639_1_1 = __importDefault(require("iso-639-1"));
var buildOptions = function (entities) {
    return entities.map(function (x) { return ({ key: x.id, value: x.id, text: x.value }); });
};
var buildLanguageOptions = function (entities) {
    return entities.map(function (x) { return ({ key: x.id, value: x.id, text: iso_639_1_1.default.getName(x.value) }); });
};
var MediaDropdownOptions = /** @class */ (function () {
    function MediaDropdownOptions(props) {
        this.languageOptions = buildLanguageOptions(props.languages);
        this.contentLicenseOptions = buildOptions(props.contentLicenses);
        this.curationStatusOptions = buildOptions(props.curationStatuses);
        this.musicGenreOptions = buildOptions(props.musicGenres);
        this.musicMoodOptions = buildOptions(props.musicMoods);
        this.musicThemeOptions = buildOptions(props.musicThemes);
        this.publicationStatusOptions = buildOptions(props.publicationStatuses);
        this.videoCategoryOptions = buildOptions(props.videoCategories);
    }
    MediaDropdownOptions.Empty = new MediaDropdownOptions({
        languages: [],
        contentLicenses: [],
        curationStatuses: [],
        musicGenres: [],
        musicMoods: [],
        musicThemes: [],
        publicationStatuses: [],
        videoCategories: [],
    });
    return MediaDropdownOptions;
}());
exports.MediaDropdownOptions = MediaDropdownOptions;
//# sourceMappingURL=MediaDropdownOptions.js.map