import { transformFirstKey } from "./_toUpperCase";

export default function toLowerCase(jsonObj: N | N[]) {
  return transformFirstKey(jsonObj, false, "lowercase");
}
