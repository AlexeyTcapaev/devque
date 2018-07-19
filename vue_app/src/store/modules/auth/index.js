import Vue from 'vue'
import cookies from 'js-cookie'

import {
  loginUser,
  logoutUser,
  getAuthUser,
  refreshToken
} from '@/api/index'

const auth = {
  namespaced: true,

  state: {
    token: null,
    expires_at: null,
    user: {}
  },

  actions: {
    login: ({commit, dispatch, state}, user) => {
      // console.log('Авторизация')
      return new Promise((resolve, reject) => {
        loginUser(user).then(response => {
          // console.log('Получен ответ')
          commit('setToken', response.data)
          dispatch('auth').then(() => resolve(), error => reject(error))
        }, error => {
          reject(error)
        })
      })
    },
    logout: ({commit, getters}, router) => {
      if (getters.isAuth()) logoutUser()
      commit('setToken', null)
      commit('setUser', {})
      router.push({ name: 'login' })
    },
    refresh: ({commit, dispatch}, router) => {
      // console.log('Запуск обновления токена')
      return refreshToken().then(response => {
        commit('setToken', response.data)
        // dispatch('auth')
        // console.log('Успешное завершение обновления токена')
      }).catch(() => {
        // console.log('Неуспешное завершение обновления токена')
        commit('setToken', null)
        dispatch('logout', router)
      })
    },
    auth: ({commit}) => {
      // console.log('Запрашиваем пользователя')
      return getAuthUser().then(response => {
        // console.log('Получили пользователя')
        commit('setUser', response.data)
      })
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user
      // console.log('Записали пользователя')
    },
    setToken(state, data) {
      if (data) {
        if (process.env.VUE_ENV === 'client') {
          cookies.set('token', data.access_token, {domain: location.hostname})
          cookies.set('expires_at', data.expires_in * 1000 + new Date().getTime(), {domain: location.hostname})
        }
        state.expires_at = data.expires_in * 1000 + new Date().getTime()
        state.token = data.access_token
        Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token
      } else {
        if (process.env.VUE_ENV === 'client') {
          cookies.remove('token')
          cookies.remove('expires_at')
        }
        state.expires_at = null
        state.token = null
      }
    }
  },

  getters: {
    auth: state => () => state.user,
    token: state => () => state.token,
    expires_at: state => () => state.expires_at - Date.now(),
    isAuth: state => () => !!state.user && !!state.token && !!state.expires_at,
  }
}

export default auth
