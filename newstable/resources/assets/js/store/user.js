import * as Cookies from 'js-cookie'
export default {
    namespaced: true,
    state: Cookies.getJSON('user') || {
        token: '',
        name: '',
        id: ''
    },
    mutations: {
        SetUser(state, inputuser) {
            state.name = inputuser.name
            state.id = inputuser.id
            Cookies.set('user', JSON.stringify(state), {
                expires: 2,
                domain: location.hostname
            });
        },
        SetToken(state, inputtoken) {
            state.token = inputtoken
            Cookies.set('user', JSON.stringify(state), {
                expires: 2,
                domain: location.hostname
            });
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