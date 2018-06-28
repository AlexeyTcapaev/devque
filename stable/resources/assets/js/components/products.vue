<template>
  <v-app id="inspire">
    <v-expansion-panel expand focusable>
      <v-expansion-panel-content v-for="category in Categories" :key="category.id" hide-actions inset>
        <div slot="header" class="collapsible-header">{{category.name}}</div>
        <div class="collapsible-body">
                   <ProductCard :catid="category.id"></ProductCard>
                   <v-expansion-panel expand focusable v-if="category.childrens.length != 0">
                    <v-expansion-panel-content v-for="subcategory in category.childrens" :key="subcategory.id" hide-actions inset>
                      <div slot="header" class="collapsible-header">{{subcategory.name}}</div>
                      <div class="collapsible-body">
                        <ProductCard :catid="subcategory.id"></ProductCard>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
        
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-app>
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
.products {
  width: 100%;
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