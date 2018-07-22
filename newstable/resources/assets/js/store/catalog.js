import store from ".";
export default {
  state: {
    catalog: [{
      childrens: [{}]
    }]
  },
  getters: {
    Catalog(state) {
      return state.catalog;
    },
    Category: state => slug => {
      return state.catalog.find(function (category, index, array) {
        if (category.slug === slug) return category;
      });
    },
    Subcategory: (state, getters) => obj => {
      return getters.Category(obj.pslug).childrens.filter(child => {
        if (child.slug === obj.slug) {
          child.parentobj = getters.Category(obj.pslug);
          return child;
        }
      })[0];
    }
  },
  mutations: {
    SetCatalog(state, data) {
      //console.log(data)
      state.catalog = data
    }
  },
  actions: {
    SetCatalog(state) {
      axios.get("/api/catalog").then(function (resp) {
        state.commit("SetCatalog", resp.data);
      });

    }
  }
};