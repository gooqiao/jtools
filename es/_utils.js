const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val, key) => hasOwnProperty.call(val, key);
export const isArray = Array.isArray;
export const isMap = (val) => toTypeString(val) === '[object Map]';
export const isSet = (val) => toTypeString(val) === '[object Set]';
export const isDate = (val) => val instanceof Date;
export const isFunction = (val) => typeof val === 'function';
export const isString = (val) => typeof val === 'string';
export const isSymbol = (val) => typeof val === 'symbol';
export const isObject = (val) => val !== null && typeof val === 'object';
export const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
export const objectToString = Object.prototype.toString;
export const toTypeString = (value) => objectToString.call(value);
export const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
export const isPlainObject = (val) => toTypeString(val) === '[object Object]';
export const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
