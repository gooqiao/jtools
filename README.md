# jtools

前端工具库, 放一些项目中常用的通用代码

## 按需加载

babel.config.js 中配置

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "m-jtools",
        "libDir": "es",
        "style": false,
        "camel2Dash": false
      },
      "m-jtools"
    ]
  ]
}
```
