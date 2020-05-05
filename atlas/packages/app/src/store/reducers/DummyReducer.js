"use strict";
// This is just a placeholder. It should be used as a guideline and then deleted.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DummyTypes_1 = require("./../types/DummyTypes");
var initialState = [];
var DummyReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DummyTypes_1.ADD_DUMMY_ACTION:
            return __spreadArrays(state, [
                action.dummy
            ]);
        case DummyTypes_1.REMOVE_DUMMY_ACTION:
            return state.filter(function (dummy) { return dummy.id !== action.id; });
        default:
            return state;
    }
};
exports.default = DummyReducer;
//# sourceMappingURL=DummyReducer.js.map