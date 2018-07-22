import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import cart from './cart';
import catalog from './catalog';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        user,
        cart,
        catalog
    },
    plugins: [createPersistedState()]
})