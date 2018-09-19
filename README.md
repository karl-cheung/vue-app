# vue-app

> 基于 [Vue CLI 3] 快速生成 Vue 项目的初步封装，组装或必要的零件。开箱即用。

## Vue CLI 3 加入的配置

* Vue Router

* ESLint 代码风格 [Standard]

## 追加的依赖清单

```
$ npm install axios vue-axio amfe-flexible mint-ui -S
$ npm install babel-plugin-component node-sass sass-loader -D
```

## 组装

* UI 框架使用 mint-ui 并通过 babel-plugin-component 插件按需引用，不必全局引用

* HTTP 库选择 axios 并通过 vue-axio 集成到 Vue.js 中

  + 设置默认配置，包括但不限于 baseURL、timeout

  + 添加全局拦截器且 Indicator 与 Toast 包含其中

  + 通过请求传递 params ```hide: true``` 实现无 Indicator 请求。(或通过实例化新的 axios 对象)

  + 抽出所有 api 请求 ```@/api/index```

* 集成 css 预处理器 sass 与使用 amfe-flexible 实现可伸缩布局方案

  + 添加 [reset]

  + mixin

    - 加载背景图 2 倍 与 3 倍像素

    - 移动端 1px 边框实现

  + base

    - 基于逻辑分辨率宽度 370 设计图的 s10 ~ s20 (10px ~ 20px) 单位实现

    - 初始化其他 html 标签

    - 添加通用 class

* 路由使用异步加载 ```component: resolve => require(['@/views/Home'], resolve)```

* 目录规范化

  + ```views``` 路由目录，相应静态资源分类至 ```assets``` 下

  + ```components``` 组件目录，相应组件静态资源同目录同级维护。 ```component1.vue``` ```component1/component1-1@2x.png```

  + ```config``` 所有功能插件的初始化目录。

  + ```util```

    - ```util.js``` 工具函数

    - ```filters.js``` 过滤器函数且已全局扩展至 Vue

  + ```assets``` 静态资源目录

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide] and [docs for vue-loader].

## License

The [MIT License].



[Vue CLI 3]: https://cli.vuejs.org/

[Standard]: https://github.com/standard/standard

[guide]: http://vuejs-templates.github.io/webpack/

[docs for vue-loader]: http://vuejs.github.io/vue-loader

[reset]: https://codepen.io/danielfarias/pen/iJecj

[MIT License]: ./LICENSE
