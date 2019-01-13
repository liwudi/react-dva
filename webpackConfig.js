/**
 * Created by mapbar_front on 2018/7/11.
 */
var data = {
  "extraBabelPlugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }]
  ],
  "disableCSSModules": false,
  "proxy": {
    "/api": {
      "target": "http://datainfo.duapp.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  }
}
