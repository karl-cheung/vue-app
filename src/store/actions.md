# actions

```js
import { queryCurrentUser } from '@/services/user'
import constant from '@/utils/constant'

const { code } = constant

export const queryUser = async ({ commit }) => {
  const res = await queryCurrentUser()
  if (res.code === code) {
    commit('receiveUser', res.items)
  }
}
```
