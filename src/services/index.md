# index

```js
import { stringify } from 'qs'
import { request, request2, request3, requestMock } from './axios'

export function mockFake(params) {
  return requestMock(`/mock/data${stringify(params)}`)
}

export function requestText(params) {
  return request('/text', {
    params,
  })
}

export function request2Text(params) {
  return request2('/text2', {
    method: 'POST',
    data: stringify(params),
  })
}

export function request3Text(params) {
  return request3('/text3', {
    method: 'POST',
    params: params.params,
    data: stringify(params.data),
  })
}

export function queryList() {
  return request('/query/list')
}

export function queryListFake() {
  const res = {
    code: 0,
    items: {
      list: [1, 2, 3, 4, 5, 6, 7],
    },
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(res), 700)
  })
}
```