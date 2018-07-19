import {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from '@/api/index'

const users = {
  namespaced: true,

  state: {
    user: {},
    data: [],
    meta: {},
    links: {}
  },

  actions: {
    fetchUsers: ({commit, dispatch, state}, query) => {
      return getUsers(query).then(response => {
        commit('setUsers', response.data)
      })
    },
    fetchUser: ({commit, dispatch, state}, id) => {
      return getUser(id).then(response => {
        commit('setUser', response.data.data)
      })
    },
    saveUser: ({commit, dispatch, state}) => {
      return updateUser(state.user.id, state.user).then(response => {
        commit('setUser', response.data.data)
      })
    },
    deleteUser: ({commit, dispatch, state}, id) => {
      return deleteUser(id)
    }
  },

  mutations: {
    setUsers(state, users) {
      Object.keys(users.data).forEach(function(key) {
        // console.log('key', key)
        // console.log('key', (key - 1) + users.meta.from, 'user', users.data[key])
        state.data[parseInt(key) + users.meta.from] = users.data[key]
      })
      // state.data = users.links
      state.meta = users.meta
      state.links = users.links
    },
    setUser(state, user) {
      state.user = user
    }
  },

  getters: {
    users: state => () => state.data
  }
}

export default users
