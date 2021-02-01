import { transformFirstKey } from "./_toUpperCase";
export default function toLowerCase(jsonObj) {
    return transformFirstKey(jsonObj, false, "lowercase");
}
