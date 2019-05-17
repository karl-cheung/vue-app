# actions

```js
import api from '@/api'
import { queryCurrentUser } from '@/services/user'

export const queryUser = async ({ commit }) => {
  const res = await queryCurrentUser()
  if (res.code === api.code) {
    commit('receiveUser', res.items)
  }
}
```