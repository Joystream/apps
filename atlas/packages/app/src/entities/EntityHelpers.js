"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var iso_639_1_1 = __importDefault(require("iso-639-1"));
function printExplicit(explicit) {
    return explicit === true ? 'Yes' : 'No';
}
exports.printExplicit = printExplicit;
function printReleaseDate(linuxTimestamp) {
    return !linuxTimestamp ? '' : moment_1.default(linuxTimestamp * 1000).format('YYYY-MM-DD');
}
exports.printReleaseDate = printReleaseDate;
function printLanguage(language) {
    return !language ? '' : iso_639_1_1.default.getName(language.value);
}
exports.printLanguage = printLanguage;
//# sourceMappingURL=EntityHelpers.js.map