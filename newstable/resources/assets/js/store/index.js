import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import cart from './cart';
import catalog from './catalog';
<<<<<<< HEAD
import packs from './packs';
=======
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
import * as Cookie from 'js-cookie'
Vue.use(Vuex);


export default new Vuex.Store({

    modules: {
        user,
        cart,
<<<<<<< HEAD
        catalog,
        packs
    },
    getters: {
        State(state) {
            localStorage.setItem('cart', JSON.stringify(state.cart))
            Cookie.set('user', JSON.stringify(state.user, {
                expires: 3,
                secure: true
            }))
=======
        catalog
    },
    getters: {
        State(state) {
            localStorage.setItem('cart', JSON.stringify(state.cart, {
                expires: 3,
                secure: true
            }))
            Cookie.set('user', JSON.stringify(state.user))
>>>>>>> e8dc8d8e05cb1f3c19e54cc9f035b29c4e5c5efd
            
            return state;
        }
    },
    mutations: {
        SetState(state, data) {
            state = data;
        }
    },
    actions: {
        SetState(state, data) {
            state.commit('SetState', data)
        },
    }
})