import { parse } from 'qs'

// 查询地址栏参数值
export function getPageQuery() {
  return parse(window.location.href.split('?')[1])
}