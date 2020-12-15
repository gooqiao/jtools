"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = void 0;
const _toUpperCase_1 = require("./_toUpperCase");
function toUpperCase(jsonObj) {
    return _toUpperCase_1.transformFirstKey(jsonObj, false, 'uppercase');
}
exports.toUpperCase = toUpperCase;
