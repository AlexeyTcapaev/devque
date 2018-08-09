import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {

  },
  getters: {

  },
  strict: process.env.NODE_ENV !== "production",
  mutations: {

  },
  actions: {

  }
});
const routes = [{
  name: "main",
  path: "/",
  component: App
}];
export const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
