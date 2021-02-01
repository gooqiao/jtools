import uploadToOSS from "../uploadToOSS";
import { readFileSync } from "fs";

describe("upload file to oss", () => {
  it("upload img call oss put", async () => {
    try {
      var debug = { hello: "world" };
      var blob = new Blob([JSON.stringify(debug, null, 2)], {
        type: "application/json",
      });

      const file = new File([blob], "hello.json");
      const res = await uploadToOSS(
        [{ name: "jjj.json", size: 83, type: "json" }],
        0
      );
    } catch (error) {
      expect(error.message).toEqual(
        "Must provide String/Buffer/ReadableStream for put."
      );
    }

    // const data = readFileSync("/Users/ming/code/jtools/uploadToOSS.ts", "utf8");
    // const res = await uploadToOSS([data], 0);
  });
});
