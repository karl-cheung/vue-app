import api from '@/api'
import { queryList, queryListFake } from '@/services'

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
    if (res.code === api.code) {
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
