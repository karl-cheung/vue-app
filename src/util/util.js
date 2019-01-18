// 查询地址栏参数值
export function query(param) {
  const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return decodeURIComponent(r[2])
  }
  return null
}
