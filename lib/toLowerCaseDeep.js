"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _toUpperCase_1 = require("./_toUpperCase");
function toLowerCaseDeep(jsonObj) {
    return _toUpperCase_1.transformFirstKey(jsonObj, true, "lowercase");
}
exports.default = toLowerCaseDeep;
