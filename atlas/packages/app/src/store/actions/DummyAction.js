"use strict";
// This is just a placeholder. It should be used as a guideline and then deleted.
Object.defineProperty(exports, "__esModule", { value: true });
var DummyTypes_1 = require("./../types/DummyTypes");
exports.AddDummy = function (dummy) { return ({
    type: DummyTypes_1.ADD_DUMMY_ACTION,
    dummy: dummy
}); };
exports.RemoveDummy = function (id) { return ({
    type: DummyTypes_1.REMOVE_DUMMY_ACTION,
    id: id
}); };
//# sourceMappingURL=DummyAction.js.map