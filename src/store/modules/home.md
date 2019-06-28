# home

```js
import { queryList, queryListFake } from '@/services'
import constant from '@/utils/constant'

const { code } = constant

const RECEIVE_LIST = 'RECEIVE_LIST'

const state = {
  list: [],
}

const getters = {
  listHome: state => state.list,
}

const actions = {
  async queryListHome({ commit }) {
    const res = process.env.NODE_ENV === 'production' ? await queryList() : await queryListFake()
    if (res.code === code) {
      commit(RECEIVE_LIST, res.items.list)
    }
  },
}

const mutations = {
  [RECEIVE_LIST](state, list) {
    state.list = list
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
```
