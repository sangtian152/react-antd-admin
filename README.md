[![OSCS Status](https://www.oscs1024.com/platform/badge/sangtian152/react-antd-admin.svg?size=small)](https://www.murphysec.com/dr/pwwIsvdJWILGxdeRUG)
![GitHub](https://img.shields.io/github/license/sangtian152/react-antd-admin)


# 简介

[react-antd-admin](https://sangtian152.github.io/react-antd-admin/) 是一个基于 `React` 和 `Ant Design` 的后台管理系统模板。内置用户登录/登出，动态路由，权限校验，用户管理等典型的业务模型。

如果感觉项目中满满的`Vue`气息，幸勿见怪。因为...

部分逻辑参考了 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/) ，这是一个基于 `Vue` 和 `ElementUI` 的优秀的后台管理系统模板，向大佬致敬！ 

至于为什么参考[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/)，因为... 

我的主技术栈一直是 `Vue`，只是最近入坑了 `React` 

对于 `React` ，四舍五入约等于小白，难免有些许不足之处，欢迎指正。

- [在线预览](https://sangtian152.github.io/react-antd-admin/)

# 技术栈
  - react v18.2
  - react-redux v8.0
  - react-router-dom v6.3
  - @reduxjs/toolkit v1.8
  - antd v4.22
  - axios v0.27
  - 其他依赖
    - @sangtian152/html2pdf  `html生成pdf`  [github地址](https://github.com/sangtian152/html2pdf) [gitee地址](https://gitee.com/sangtian152/html2pdf)
    - @sangtian152/watermark `图片加水印` [github地址](https://github.com/sangtian152/watermark) [gitee地址](https://gitee.com/sangtian152/watermark)

```tip
html2pdf和watermark，也是自己造的轮子，在这里给自己宣传一下，哈哈。

纯js实现，不依赖其他框架，不管你是react还是Vue亦或是Angular，都可以放心使用
```

# 功能

```bash
- 登录 / 注销

- 权限验证
  - 页面权限
  - 路由权限

- 全局功能
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 错误页面
  - 404

```

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ config                 # 全局配置
│   │   ├─ menuConfig.js      # 导航菜单配置
│   ├─ store                  # 全局 store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ views                  # views 所有页面
│   ├─ App.jsx                # 入口页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.jsx               # 源码入口
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
└── package.json              # package.json
```

# 安装

```shell
# 克隆项目
git clone https://github.com/sangtian152/react-antd-admin.git

# 进入项目目录
cd react-antd-admin

# 安装依赖
npm install

# 切换淘宝源，解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm start
```

启动完成后会自动打开浏览器访问 [http://localhost:3000](http://localhost:3000)


# 鼓励作者

开源不易，如果对你有用，请给个star！
