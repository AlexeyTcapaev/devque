class User {
    constructor(id) {
        this.id = id;
    }
}

export default {

    state: {
        user: null
    },
    mutations: {
        SetUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        RegisterUser({
            commit
        }, payload) {
            //connect to db
            commit('SetUser', new User(1))
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }

}