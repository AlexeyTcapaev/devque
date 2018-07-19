<template>
  <v-layout>
    <v-expansion-panel expand focusable class="collapsible">
        <v-expansion-panel-content hide-actions inset v-for="category in Categories" :key="category.id">
          <div slot="header" class="collapsible-header"><h2>{{category.name}} | количество товаров - {{category.products.length}}</h2></div>
          <div class="collapsible-body">
            <div class="product-list">
              <ProductCard :index="null" :cat="category"></ProductCard>
              <ProductCard :index="index" :cat="category" :prod="product" v-for="(product,index) in category.products" :key="product.id"></ProductCard>
            </div>
            <v-expansion-panel expand focusable v-if="category.childrens.length != 0">
              <v-expansion-panel-content v-for="subcategory in category.childrens" :key="subcategory.id" hide-actions inset>
                <div slot="header" class="collapsible-header"><h3>{{subcategory.name}} | количество товаров - {{subcategory.products.length}}</h3></div>
                  <div class="collapsible-body">
                    <div class="product-list">
                      <ProductCard :index="null" :cat="subcategory"></ProductCard>
                      <ProductCard :index="index" :cat="subcategory" :prod="product" v-for="product in subcategory.products" :key="product.id"></ProductCard>
                    </div>
                  </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>
<script>
const ProductCard = () => import("./ProductCard.vue");
export default {
  components: {
    ProductCard
  },
  data: () => ({
    Categories: [],
    showAllForms: false
  }),
  mounted() {},
  beforeCreate() {
    const init = this;
    axios.get("/api/catalog").then(function(resp) {
      init.Categories = resp.data;
    });
  },
  methods: {}
};
</script>
<style scoped>
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