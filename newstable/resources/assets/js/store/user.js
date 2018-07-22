export default {

    state: {
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
            state.token = inputuser.token
        }
    },
    actions: {
        SetUser(state, inputuser) {
            state.commit('SetUser', inputuser)
        },
        SetToken(state, inputtoken) {
            state.commit('SetToken', inputtoken)
        },
    }
}