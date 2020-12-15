import { transformFirstKey as _toUpperCase } from './_toUpperCase';

export function toUpperCase(jsonObj: N | N[]) {
  return _toUpperCase(jsonObj, false, 'uppercase');
}
