"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntegerKey = exports.isPlainObject = exports.toRawType = exports.toTypeString = exports.objectToString = exports.isPromise = exports.isObject = exports.isSymbol = exports.isString = exports.isFunction = exports.isDate = exports.isSet = exports.isMap = exports.isArray = exports.hasOwn = void 0;
const hasOwnProperty = Object.prototype.hasOwnProperty;
exports.hasOwn = (val, key) => hasOwnProperty.call(val, key);
exports.isArray = Array.isArray;
exports.isMap = (val) => exports.toTypeString(val) === '[object Map]';
exports.isSet = (val) => exports.toTypeString(val) === '[object Set]';
exports.isDate = (val) => val instanceof Date;
exports.isFunction = (val) => typeof val === 'function';
exports.isString = (val) => typeof val === 'string';
exports.isSymbol = (val) => typeof val === 'symbol';
exports.isObject = (val) => val !== null && typeof val === 'object';
exports.isPromise = (val) => {
    return exports.isObject(val) && exports.isFunction(val.then) && exports.isFunction(val.catch);
};
exports.objectToString = Object.prototype.toString;
exports.toTypeString = (value) => exports.objectToString.call(value);
exports.toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return exports.toTypeString(value).slice(8, -1);
};
exports.isPlainObject = (val) => exports.toTypeString(val) === '[object Object]';
exports.isIntegerKey = (key) => exports.isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
