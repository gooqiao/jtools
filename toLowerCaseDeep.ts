import { transformFirstKey } from './_toUpperCase';

export function toLowerCaseDeep(jsonObj: N | N[]) {
  return transformFirstKey(jsonObj, true, 'lowercase');
}
