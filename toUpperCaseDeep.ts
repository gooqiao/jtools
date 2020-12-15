import { transformFirstKey } from './_toUpperCase';

export function toUpperCaseDeep(jsonObj: N | N[]) {
  return transformFirstKey(jsonObj, true, 'uppercase');
}
