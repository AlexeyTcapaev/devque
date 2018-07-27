<template>
<v-layout>
    <v-expansion-panel expand focusable class="collapsible">
       <v-expansion-panel-content hide-actions inset>
        <div slot="header" class="collapsible-header">
          <div>
            <a @click="NewCategorySend"><i class="material-icons">add</i>Добавить категорию</a>            
            <v-text-field label="Название" outline v-model="NewCategory.name">
            </v-text-field>
            </div>
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content v-for="(category,index) in Categories" :key="category.id" hide-actions inset>
        <div slot="header" class="collapsible-header">
          <div>
            <v-text-field label="Название" outline v-model="category.name" @change="UpdateCategory(category)">
            </v-text-field>
            <span>Подкатегорий: {{category.childrens.length}}</span>
          </div>
          <a @click="DeleteCategory(category.id,index)"><i class="material-icons">close</i></a>
        </div>
        <div class="collapsible-body">
          <v-expansion-panel expand focusable class="collapsible">
            <v-expansion-panel-content hide-actions inset>
              <div slot="header" class="collapsible-header sub">
                 <div>
                    <a @click="NewSubCategorySend(category)"><i class="material-icons">add</i>Добавить подкатегорию</a> 
                    <v-text-field label="Название" outline v-model="NewSubCategory.name" >
                    </v-text-field>
                  </div>
              </div>
            </v-expansion-panel-content>
             <v-expansion-panel-content hide-actions inset v-for="(children,index) in category.childrens" :key="children.id">
                <div slot="header" class="collapsible-header sub">
                  <div>
                    <v-text-field label="Название" outline v-model="children.name" @change="UpdateCategory(children)">
                    </v-text-field>               
                  </div>
                  <a @click="DeleteSubCategory(category,children.id,index)"><i class="material-icons">close</i></a>
                </div>
             </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
</v-layout>
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
            init.NewCategory.name = "";
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
            init.NewSubCategory.name = "";
          })
          .catch(function(resp) {
            console.log(resp);
          });
      }
    }
  }
};
</script>
<style >
.sub {
  margin: 0 0 0 20px;
}
.application
  .theme--light.v-expansion-panel--focusable
  .v-expansion-panel__container:focus,
.theme--light
  .v-expansion-panel--focusable
  .v-expansion-panel__container:focus {
  background-color: #fff;
}
.v-expansion-panel__header {
  height: inherit !important;
}
.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.collapsible-header a {
  display: flex;
  align-items: center;
  margin: 15px 0;
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
