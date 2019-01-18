import { stringify } from 'qs'
import { request, request2, request3 } from './axios'

export async function requestText(params) {
  return request(`/text${stringify(params)}`)
}

export async function request2Text(params) {
  return request2('/text2', {
    method: 'POST',
    data: params,
  })
}

export async function request3Text(params) {
  return request3(`/text3${stringify(params)}`, {
    method: 'POST',
    data: stringify(params),
  })
}
