import { transformFirstKey } from "./_toUpperCase";

export default function toUpperCaseDeep(jsonObj: N | N[]) {
  return transformFirstKey(jsonObj, true, "uppercase");
}
