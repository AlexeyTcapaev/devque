import Vue from 'vue'
// Изначальный компонент
import App from 'layouts/app'
// Библиотека для http-запросов
import axios from 'axios'
import VueAxios from 'vue-axios'
// Локальное хранилище
import {
  createStore
} from 'store/index'
// Маршрутизация
import {
  createRouter
} from 'router/index'
// Плагин для отслеживания информации о роуте в хранилище
import {
  sync
} from 'vuex-router-sync'

// Библиотека различных компонентов https://vuetifyjs.com/ru/
import Vuetify from 'vuetify'
import '@/assets/stylus/main.styl'

import Toast from './components/toast'

Vue.prototype.$toast = Toast

Vue.use(Vuetify, {
  theme: {
    primary: '#6fb8e9'
  }
})

// Костыль для axios, иначе ошибка не передается дальше
axios.interceptors.response.use(response => response, error => {
  let nerror = {};
  Object.assign(nerror, error);
  return Promise.reject(nerror);
});
Vue.use(VueAxios, axios)

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(ssrContext) {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)
  Vue.router = router

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })

  app.initApp = () => {
    app.axios.defaults.baseURL = 'http://' + (process.env.API_HOST_DOCKER || process.env.API_HOST) + '/api'
    console.log(process.env.API_HOST_DOCKER || process.env.API_HOST)
    console.log(store.state.auth.token)
    if (store.state.auth.token) {
      app.axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.auth.token
    }
    app.$router.beforeEach((to, from, next) => {

      if (app.$store.state.auth.expires_at &&
        store.state.auth.expires_at - Date.now() < 50 * 60 * 1000 &&
        (to.name !== 'login' || from.name !== 'login')) {
        if (process.env.VUE_ENV === 'client') app.$bar.start()
        app.$store.dispatch('auth/refresh', app.$router)
      }
      if (!app.$store.getters['auth/auth']()) store.dispatch('auth/auth')

      if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log('need auth')
        console.log(app.$store.getters['auth/isAuth']())
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!app.$store.getters['auth/isAuth']()) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        } else {
          next()
        }
      } else {
        next() // make sure to always call next()!
      }
    })
  }

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    router,
    store
  }
}
