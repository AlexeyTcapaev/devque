import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import cart from './cart';
import catalog from './catalog';
import * as Cookie from 'js-cookie'
Vue.use(Vuex);


export default new Vuex.Store({

    modules: {
        user,
        cart,
        catalog
    },
    getters: {
        State(state) {
            localStorage.setItem('cart', JSON.stringify(state.cart, {
                expires: 3,
                secure: true
            }))
            Cookie.set('user', JSON.stringify(state.user))
            
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