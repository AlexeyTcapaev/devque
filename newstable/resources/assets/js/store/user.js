import * as Cookie from 'js-cookie'
export default {
    namespaced: true,
    state: Cookie.getJSON('user') || {
        token: '',
        name: '',
        id: ''
    },
    mutations: {
        SetUser(state, inputuser) {
            state.name = inputuser.name
            state.id = inputuser.id
        },
        SetToken(state, inputtoken) {
            state.token = inputtoken
        }
    },
    actions: {
        SetUser(state, inputuser) {

            state.commit('SetUser', inputuser)

        },
        SetToken(state, inputtoken) {
            state.commit('SetToken', inputtoken)
        },
    },
}