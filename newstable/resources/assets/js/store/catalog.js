export default {
  namespaced: true,
  state: {
    catalog: []
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
    Subcategory: state => obj => {

      let FindCat
      state.catalog.forEach(category => {
        if (category.slug === obj.pslug)
          category.childrens.forEach(child => {
            if (child.slug === obj.slug) {
              FindCat = child
              FindCat.parentobj = category
            }

          })
      });
      return FindCat
    }
  },
  mutations: {
    SetCatalog(state, data) {
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