# vue-app

> 基于 [Vue CLI 3] 快速生成 Vue 项目的初步封装，组装或必要的零件。开箱即用。

## Vue CLI 3 加入的配置

+ Vue Router

+ ESLint 代码风格 [Standard]

## 追加的依赖清单

```shell
npm install amfe-flexible axios mint-ui qs vue vue-axios vue-router vuex -S
npm install babel-plugin-component node-sass sass-loader -D
```

## 组装

+ UI 框架使用 mint-ui 并通过 babel-plugin-component 插件按需引用，不必全局引用

+ HTTP 库选择 axios

  + 设定默认配置，包括但不限于 baseURL、timeout

  + 添加全局拦截器且 Indicator 与 Toast 包含其中

  + 通过 vue-axio 注入到 Vue 实例中

  + 导出多个不同服务的 request 请求

+ 可根据需要自行删减 Vuex

  + 规范了中大型项目使用 Vuex 时的目录层次，全局与局部解耦

  + 使用 async / await，使异步流程更加优雅

  + 开发环境添加了热重载

+ 集成 css 预处理器 sass 与使用 amfe-flexible 实现可伸缩布局方案

  + 添加 [reset]

  + mixin

    + 加载背景图 2 倍 与 3 倍像素

    + 移动端 1px 边框实现

  + base

    + 基于逻辑分辨率宽度 370 设计图的 s10 ~ s20 (10px ~ 20px) 单位实现

    + 初始化其他 html 标签

    + 添加通用 class

+ 路由使用异步加载 ```component: resolve => require(['@/views/Home'], resolve)```

+ 目录规范化

  + ```api``` 全局的常量导出

  + ```assets``` 静态资源

    + ```css``` 全局 css

    + ```img``` views 目录下各路由的业务图片资源

    + ```sass``` 全局 sass

  + ```components``` 组件库目录

    + ```component1```

      + ```component1.vue```

      + ```component1-1@2x.png```

  + ```router``` 路由

  + ```services``` request 配置及请求导出

    + ```axios``` request 请求配置

    + ```index``` 业务请求方法的导出

    + ```user``` 全局用户模块从 index 中的抽离

  + ```store``` 状态管理

    + ```index``` 组装模块并导出 store

    + ```actions``` 根级别的 action

    + ```mutations``` 根级别的 mutation

    + ```moudules``` 模块化

  + ```utils```

    + ```util.js``` 工具函数

    + ```filters.js``` 过滤器函数且已全局扩展至 Vue

  + ```views``` 路由目录，相应静态资源分类至 ```assets``` 下

    + ```Home``` Home 页面目录

      + ```Home.vue``` Home 组件

      + ```Banner.vue``` Home 组件的私有子组件

## 初始化

若是已知悉项目组装及使用，这里还提供了一份清除示例代码的精简版本（移除示例代码，只留下功能补充）可供下载使用。

[vue-app]

## Build Setup

``` bash
# install dependencies
npm install

or

yarn install

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

[vue-app]: https://github.com/vincheung/vue-app/blob/master/vue-app.zip
