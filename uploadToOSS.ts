import OSS from "ali-oss";
// 上传文件至阿里云
export default async function uploadFile(
  file: File[] | any,
  index: number
  // callBack: Function,
  // fail: Function
) {
  if (!file[index]) {
    return Promise.reject("暂无文件");
  }

  const client = new OSS({
    region: "oss-cn-shenzhen",
    accessKeyId: "LTAI4G3iww5P1YCKG7mAdnUc",
    accessKeySecret: "suPnZWKm62gDD9mCDEVuxdFxTRIYdT",
    bucket: "tourmind-store",
  });
  // 上传文件
  let fileName = file[index].name;
  let type = file[index].type;
  const size = file[index].size;
  console.log("文件：");
  console.log(file[index]);
  if (!type || type.length === 0) type = "jpg";
  if (!fileName) {
    fileName = "." + type.substring(type.indexOf("/") + 1);
  } else {
    fileName = fileName.substring(fileName.indexOf("."));
  }
  type = type.substring(0, type.indexOf("/"));
  console.log("文件上传type：" + type);
  // 区分不同使用情况做的路径修改
  const path = "admintools/images/";
  //   if (appType === 2) {
  //     path = "applets/superMall/images/";
  //   }
  const name = `${path}${
    Date.parse(new Date().toString()) +
    Math.floor(Math.random() * 10000) +
    fileName
  }`;
  console.log("文件上传：" + name);
  if (size === 0) {
    // fail("当前文件为空文件，请重新选择上传文件");
    return Promise.reject("当前文件为空文件，请重新选择上传文件");
  } else if (size <= 100 * 1048576) {
    try {
      // 小余100MB，直接上传
      const data = await client.put(name, file[index]).then(function (result) {
        console.log("上传成功：" + JSON.stringify(result));
        const resUrl = `https://tourmind-store.oss-cn-shenzhen.aliyuncs.com/${result.name}`;
        return {
          result,
          resUrl,
          type,
        };
      });
      return data;
    } catch (e) {
      return Promise.reject(e);
    }
  } else {
    return Promise.reject("暂不支持100MB以上文件上传");
  }
}
