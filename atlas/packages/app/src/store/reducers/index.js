"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var DummyReducer_1 = __importDefault(require("./DummyReducer"));
exports.default = redux_1.combineReducers({
    DummyReducer: DummyReducer_1.default
});
//# sourceMappingURL=index.js.map