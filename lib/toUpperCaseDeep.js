"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _toUpperCase_1 = require("./_toUpperCase");
function toUpperCaseDeep(jsonObj) {
    return _toUpperCase_1.transformFirstKey(jsonObj, true, "uppercase");
}
exports.default = toUpperCaseDeep;
