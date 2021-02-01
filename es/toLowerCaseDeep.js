import { transformFirstKey } from "./_toUpperCase";
export default function toLowerCaseDeep(jsonObj) {
    return transformFirstKey(jsonObj, true, "lowercase");
}
