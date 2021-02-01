import { transformFirstKey as _toUpperCase } from "./_toUpperCase";

export default function toUpperCase(jsonObj: N | N[]) {
  return _toUpperCase(jsonObj, false, "uppercase");
}
