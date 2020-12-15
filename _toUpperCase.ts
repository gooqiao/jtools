import { isArray, isObject } from './_utils';

export function transformFirstKey(
  jsonObj: N | N[],
  deep: boolean = false,
  type: 'uppercase' | 'lowercase'
) {
  if (isArray(jsonObj)) {
    for (const item of jsonObj) {
      transformFirstKey(item, deep, type);
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      const firstKey = key.substring(0, 1);
      const newKey =
        (type === 'uppercase'
          ? firstKey.toUpperCase()
          : firstKey.toLowerCase()) + key.substring(1);

      jsonObj[newKey] = jsonObj[key];
      if (deep && isObject(jsonObj[newKey])) {
        transformFirstKey(jsonObj[newKey], deep, type);
      }
      delete jsonObj[key];
    }
  }
  return jsonObj;
}
