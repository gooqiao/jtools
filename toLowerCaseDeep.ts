import { transformFirstKey } from "./_toUpperCase";

export default function toLowerCaseDeep(jsonObj: N | N[]) {
  return transformFirstKey(jsonObj, true, "lowercase");
}
