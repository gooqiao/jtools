"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformFirstKey = void 0;
const _utils_1 = require("./_utils");
function transformFirstKey(jsonObj, deep = false, type) {
    if (_utils_1.isArray(jsonObj)) {
        for (const item of jsonObj) {
            transformFirstKey(item, deep, type);
        }
    }
    else if (_utils_1.isObject(jsonObj)) {
        for (var key in jsonObj) {
            const firstKey = key.substring(0, 1);
            const newKey = (type === 'uppercase'
                ? firstKey.toUpperCase()
                : firstKey.toLowerCase()) + key.substring(1);
            jsonObj[newKey] = jsonObj[key];
            if (deep && _utils_1.isObject(jsonObj[newKey])) {
                transformFirstKey(jsonObj[newKey], deep, type);
            }
            delete jsonObj[key];
        }
    }
    return jsonObj;
}
exports.transformFirstKey = transformFirstKey;
