import { transformFirstKey } from './_toUpperCase';

export function toLowerCase(jsonObj: N | N[]) {
  return transformFirstKey(jsonObj, false, 'lowercase');
}
