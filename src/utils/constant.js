const u = window.navigator.userAgent
const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
const isWx = u.indexOf('MicroMessenger') !== -1
const isAp = u.indexOf('AlipayClient') !== -1

export default {
  isIos,
  isAndroid,
  isWx,
  isAp,
  v: 'v1.0.0',
  code: 0,
  timeout: 6000,
}
