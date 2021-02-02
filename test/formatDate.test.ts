import formatDate from "../formatDate";

describe("date fns", () => {
  it("format date", () => {
    let str = formatDate(new Date(2014, 1, 11), "yyyy-MM-dd");
    expect(str).toEqual("2014-02-11");

    str = formatDate(
      new Date("Tue Feb 02 2021 13:36:35 GMT+0800 (中国标准时间)"),
      "yyyy-MM-dd HH:mm:ss"
    );
    expect(str).toEqual("2021-02-02 13:36:35");

    str = formatDate(new Date("2021-02-02 13:36:35"), "yyyy-MM-dd hh:mm:ss");
    expect(str).toEqual("2021-02-02 01:36:35");
  });
});
