import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Indicator, Toast } from 'mint-ui'
import api from '@/api'

Vue.use(VueAxios, axios)

// 1.baseURL

function pathRewrite(params) {
  return process.env.NODE_ENV === 'production'
    ? params.prefix + params.v
    : params.proxy + params.prefix + params.v
}

// baseURL 将被放在 url 前面，除非 url 是绝对的
// 为 axios 的实例设置 baseURL 来传递相对 url 是很方便的
// 开发环境可选择设置代理前缀( /server 对应 proxyTable 中的键名)
// 接口前缀 prefix 与 版本号 v 不是必须的，你可以将 server 对象里面的对应的键值置为空
// 不需要代理方案或者使用切换 Host 等方案，将 proxy 键值置为空

// 多个不同的 request 请求配置
const server = {
  proxy: '/server',
  prefix: '/api',
  v: '/v1',
}
const server2 = {
  proxy: '/server2',
  prefix: '/api2',
  v: '/v1',
}
const server3 = {
  proxy: '/server3',
  prefix: '/api3',
  v: '/v1',
}

// 若是不需要提供的 baseURL 功能，你可以直接注释下一行
axios.defaults.baseURL = pathRewrite(server)

// 2.其他配置

// 载入接口正常返回时的状态码
const code = api.code

// 设置请求超时时间
axios.defaults.timeout = 6000

// 3.拦截器

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 请求可以通过config { hide: true } = params 不打开 Indicator
    if (config.params && !config.params.hide) {
      Indicator.open()
    }
    return config
  }, function (error) {
    // 对请求错误做些什么
    Indicator.close()
    Toast('请求错误')
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    // 对响应数据做点什么
    Indicator.close()
    if (res.data.code !== code) {
      Toast(res.data.message)
    }
    return res
  }, function (error) {
    // 对响应错误做点什么
    Indicator.close()
    Toast('响应错误')
    return Promise.reject(error)
  }
)

// 4.request 服务

// 以下暴露多个不同 request 服务，建议项目通过 vuex 管理数据派发事件时选择以下方法
// 反之推荐使用直接注入到 vue 实例上的 this.axios 方法

function createRequest(data, url, option) {
  return axios({
    baseURL: pathRewrite(data),
    url,
    ...option,
  })
}

export function requestMock(url, option) {
  return axios({
    url,
    ...option,
  })
}

export function request(url, option) {
  return createRequest(server, url, option)
}

export function request2(url, option) {
  return createRequest(server2, url, option)
}

export function request3(url, option) {
  return createRequest(server3, url, option)
}

// 5.附加

/*
 * 你还可以通过 axios.create 来创建自定义实例，使不同实例拥有不同的配置
 * const instance = axios.create({
 *    baseURL: 'https://vincheung.github.io',
 * });
 * instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
*/
