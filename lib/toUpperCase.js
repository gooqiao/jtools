"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _toUpperCase_1 = require("./_toUpperCase");
function toUpperCase(jsonObj) {
    return _toUpperCase_1.transformFirstKey(jsonObj, false, "uppercase");
}
exports.default = toUpperCase;
