const u = window.navigator.userAgent
const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
const isWx = u.indexOf('MicroMessenger') !== -1
const isAp = u.indexOf('AlipayClient') !== -1

export default {
  v: 'v1.0.0',
  isIos,
  isAndroid,
  isWx,
  isAp,
  code: 0,
}
