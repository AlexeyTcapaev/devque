import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import cart from './cart';
import catalog from './catalog';
import packs from './packs';
import * as Cookie from 'js-cookie'
Vue.use(Vuex);


export default new Vuex.Store({

    modules: {
        user,
        cart,
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