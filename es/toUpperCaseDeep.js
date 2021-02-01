import { transformFirstKey } from "./_toUpperCase";
export default function toUpperCaseDeep(jsonObj) {
    return transformFirstKey(jsonObj, true, "uppercase");
}
