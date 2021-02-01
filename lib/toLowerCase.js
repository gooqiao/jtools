"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _toUpperCase_1 = require("./_toUpperCase");
function toLowerCase(jsonObj) {
    return _toUpperCase_1.transformFirstKey(jsonObj, false, "lowercase");
}
exports.default = toLowerCase;
