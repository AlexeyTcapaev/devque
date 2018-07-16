<template>
  <v-expansion-panel focusable>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
      <div slot="header">Item</div>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  metaInfo: {
    title: "Вход" // set a title
  },
  data: () => ({
    NewCategory: {
      name: ""
    },
    NewSubCategory: {
      name: "",
      parent: null
    },
    Categories: [
      {
        childrens: []
      }
    ]
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/catalog").then(function(resp) {
      init.Categories = resp.data;
    });
  },
  methods: {
    DeleteCategory(id, index) {
      const init = this;
      axios
        .delete("/api/catalog/" + id)
        .then(function(resp) {
          init.Categories.splice(index, 1);
        })
        .catch(function(resp) {
          console.log(resp);
        });
    },
    DeleteSubCategory(category, id, index) {
      const init = this;
      axios
        .delete("/api/catalog/" + id)
        .then(function(resp) {
          category.childrens.splice(index, 1);
        })
        .catch(function(resp) {
          console.log(resp);
        });
    },
    NewCategorySend() {
      if (this.NewCategory.name !== "") {
        const init = this;
        axios
          .post("/api/catalog", init.NewCategory)
          .then(function(resp) {
            init.Categories.push(resp.data);
            this.NewCategory.name = "";
          })
          .catch(function(resp) {
            console.log(resp);
          });
      }
    },
    UpdateCategory(category) {
      axios
        .patch("/api/catalog/" + category.id, category)
        .then(function(resp) {
          category = resp.data;
        })
        .catch(function(resp) {
          console.log(resp);
        });
    },
    NewSubCategorySend(parent) {
      if (this.NewSubCategory.name !== "") {
        this.NewSubCategory.catalog_id = parent.id;
        const init = this;
        axios
          .post("/api/catalog", init.NewSubCategory)
          .then(function(resp) {
            parent.childrens.push(resp.data);
            this.NewSubCategory.name = "";
          })
          .catch(function(resp) {
            console.log(resp);
          });
      }
    }
  }
};
</script>