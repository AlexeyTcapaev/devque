import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth/index'
import users from './modules/users/index'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      config: {
        api_hostname: null
      }
    },

    modules: {
      auth: auth,
      users: users
    },

    actions: {},

    mutations: {},

    getters: {}
  })
}
