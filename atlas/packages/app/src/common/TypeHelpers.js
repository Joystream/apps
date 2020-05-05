"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bn_js_1 = __importDefault(require("bn.js"));
var content_working_group_1 = require("@joystream/types/content-working-group");
var versioned_store_1 = require("@joystream/types/versioned-store");
function canBeId(id) {
    return id instanceof bn_js_1.default || typeof id === 'number' || typeof id === 'string';
}
function asChannelId(id) {
    if (id instanceof content_working_group_1.ChannelId) {
        return id;
    }
    else if (canBeId(id)) {
        return new content_working_group_1.ChannelId(id);
    }
    else {
        throw new Error("Not supported format for Channel id: " + id);
    }
}
exports.asChannelId = asChannelId;
function asEntityId(id) {
    if (id instanceof versioned_store_1.EntityId) {
        return id;
    }
    else if (canBeId(id)) {
        return new versioned_store_1.EntityId(id);
    }
    else {
        throw new Error("Not supported format for Entity id: " + id);
    }
}
exports.asEntityId = asEntityId;
function asClassId(id) {
    if (id instanceof versioned_store_1.ClassId) {
        return id;
    }
    else if (canBeId(id)) {
        return new versioned_store_1.ClassId(id);
    }
    else {
        throw new Error("Not supported format for Class id: " + id);
    }
}
exports.asClassId = asClassId;
//# sourceMappingURL=TypeHelpers.js.map