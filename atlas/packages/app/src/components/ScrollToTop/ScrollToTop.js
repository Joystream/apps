"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ScrollToTop = function (_a) {
    var children = _a.children, location = _a.location;
    react_1.useEffect(function () { return window.scrollTo(0, 0); }, [location.pathname]);
    return children;
};
exports.default = ScrollToTop;
//# sourceMappingURL=ScrollToTop.js.map