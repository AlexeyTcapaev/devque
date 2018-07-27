export default {
    namespaced: true,
    state: {
        packs: []
    },
    getters: {
        packs(state) {
            return state.packs;
        }
    },
    mutations: {
        SetPacks(state, data) {
          state.packs = data
        }
      },
      actions: {
        SetPacks(state) {
          axios.get("/api/packs").then(function (resp) {
            state.commit("SetPacks", resp.data);
          });
    
        }
      }
}