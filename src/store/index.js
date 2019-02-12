import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import home from './modules/home'

Vue.use(Vuex)

const state = {
  user: {},
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    home,
  },
  strict: debug,
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
    })
  })
}

export default store
