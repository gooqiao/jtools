"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntegerKey = exports.isPlainObject = exports.toRawType = exports.toTypeString = exports.objectToString = exports.isPromise = exports.isObject = exports.isSymbol = exports.isString = exports.isFunction = exports.isDate = exports.isSet = exports.isMap = exports.isArray = exports.hasOwn = void 0;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
exports.hasOwn = hasOwn;
exports.isArray = Array.isArray;
const isMap = (val) => exports.toTypeString(val) === '[object Map]';
exports.isMap = isMap;
const isSet = (val) => exports.toTypeString(val) === '[object Set]';
exports.isSet = isSet;
const isDate = (val) => val instanceof Date;
exports.isDate = isDate;
const isFunction = (val) => typeof val === 'function';
exports.isFunction = isFunction;
const isString = (val) => typeof val === 'string';
exports.isString = isString;
const isSymbol = (val) => typeof val === 'symbol';
exports.isSymbol = isSymbol;
const isObject = (val) => val !== null && typeof val === 'object';
exports.isObject = isObject;
const isPromise = (val) => {
    return exports.isObject(val) && exports.isFunction(val.then) && exports.isFunction(val.catch);
};
exports.isPromise = isPromise;
exports.objectToString = Object.prototype.toString;
const toTypeString = (value) => exports.objectToString.call(value);
exports.toTypeString = toTypeString;
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return exports.toTypeString(value).slice(8, -1);
};
exports.toRawType = toRawType;
const isPlainObject = (val) => exports.toTypeString(val) === '[object Object]';
exports.isPlainObject = isPlainObject;
const isIntegerKey = (key) => exports.isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
exports.isIntegerKey = isIntegerKey;
