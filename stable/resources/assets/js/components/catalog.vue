<template>
<div>
    <v-expansion-panel expand focusable class="collapsible">
       <v-expansion-panel-content hide-actions inset>
        <div slot="header" class="collapsible-header">
          <div>
            <a @click="NewCategorySend"><i class="material-icons">add</i>Добавить</a> 
              <div class="input-field col s6">
                <input id="name" type="text" class="validate" v-model="NewCategory.name">
                  <label for="name">Название</label>
              </div>
            </div>
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content v-for="(category,index) in Categories" :key="category.id" hide-actions inset>
        <div slot="header" class="collapsible-header">
          <div class="input-field col s6">
            <input id="name" type="text" class="validate" v-model="category.name" @change="UpdateCategory(category)">
              <label class="active" for="name">Название</label>
          </div>
          <a @click="DeleteCategory(category.id,index)"><i class="material-icons">close</i></a>
        </div>
        <div class="collapsible-body">
          <v-expansion-panel expand focusable class="collapsible">
            <v-expansion-panel-content hide-actions inset>
              <div slot="header" class="collapsible-header">
                 <div>
                    <a @click="NewSubCategorySend(category)"><i class="material-icons">add</i>Добавить</a> 
                    <div class="input-field col s6">
                      <input id="name" type="text" class="validate" v-model="NewSubCategory.name">
                        <label for="name">Название</label>
                     </div>
                  </div>
              </div>
            </v-expansion-panel-content>
             <v-expansion-panel-content hide-actions inset v-for="(children,index) in category.childrens" :key="children.id">
                <div slot="header" class="collapsible-header">
                  <div class="input-field col s6">
                    <input id="name" type="text" class="validate" v-model="children.name" @change="UpdateCategory(children)">
                    <label class="active" for="name">Название</label>
                  </div>
                  <a @click="DeleteSubCategory(category,children.id,index)"><i class="material-icons">close</i></a>
                </div>
             </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
</div>
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
  mounted() {
    $(".collapsible").collapsible();
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
        this.NewSubCategory.parent = parent.id;
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
<style scoped>
.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.collapsible-header a {
  display: flex;
  align-items: center;
  margin: 0 15px 0 0;
}
.collapsible-header div {
  min-width: 25%;
}
.expansion-panel {
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  margin: 0.5rem 0 1rem 0;
}
.collapsible-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.5;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.expansion-panel__header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.5;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.collapsible-body {
  display: block !important;
}
</style>
