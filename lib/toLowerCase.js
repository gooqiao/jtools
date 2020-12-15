"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowerCase = void 0;
const _toUpperCase_1 = require("./_toUpperCase");
function toLowerCase(jsonObj) {
    return _toUpperCase_1.transformFirstKey(jsonObj, false, 'lowercase');
}
exports.toLowerCase = toLowerCase;
