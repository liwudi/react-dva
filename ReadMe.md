# react-dva项目构建

### 目前我需要做的事：

1、我们的运营后台，是如何构建登录页面的视图的？

### 项目说明

```bash
├── /dist/           # 项目输出目录
├── /piblic/         # 公用打包文件，编译时copy至dist目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 放一些公共资源，比如png图片等
│ ├── /common/       # 放一些公用代码，比如route配置文件
│ ├── /components/   # 组件及UI相关方法
│ ├── /routes/       # 路由组件
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── dynamic.js   # 实现异步组件加载的关键
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
```

### 快速开始

```bash
#开始前请确保没有安装roadhog、webpack到NPM全局目录
npm i 或者 yarn install
```

开发：

```bash
npm run build:dll #第一次npm run dev时需运行此命令，使开发时编译更快
npm run dev
打开 http://localhost:8000
```

```bash
npm run build

将会打包至dist/{version}目录 #package.json里version字段

npm run build:new

将会打包至dist/{version增加1}目录 #package.json里version字段
```

代码检测：

```bash
npm run lint
```

### 代码标准

1，组件规范化。（page层需要连接model层，而普通组件只负责UI层，对于一些业务逻辑，提取到高阶组件层）

2，一套标准化的权限控制系统。

3，前后端分离，合理的MockJS以及代理设置。

4，不错的代码分割功能的实现。嵌套路由的实现。


