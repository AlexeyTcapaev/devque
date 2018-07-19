<template>
<div v-if="subcategory != null">
  <div class="breadcrumbs">
    <div class="container">
      <router-link class="breadcrumb" to="/">Главная</router-link>
      <a class="breadcrumb">Поиск</a>               
    </div>
  </div>
<div class="container">
    <h2>Результаты поиска по "{{subcategory.name}}"</h2>
    <ul class="sales-list">
        <li v-for="product in subcategory.products" :key="product.id"><showable-card  :prod="product"></showable-card></li>
    </ul>
</div>
</div>
</template>
<script>
const ShowableCard = () => import("./ShowableCard.vue");
export default {
  metaInfo: function() {
    return {
      title: "Поис по " + this.$route.params.str
    };
  },
  data: () => ({
    subcategory: {
      name: ""
    }
  }),
  components: {
    ShowableCard
  },
  methods: {
    GetSearch: function() {
      const init = this;
      axios.get("/api/search/" + init.$route.params.str).then(function(resp) {
        init.subcategory.name = init.$route.params.str;
        init.subcategory.products = resp.data;
      });
    }
  },
  beforeCreate() {
    const init = this;
    axios.get("/api/search/" + init.$route.params.str).then(function(resp) {
      init.subcategory.name = init.$route.params.str;
      init.subcategory.products = resp.data;
    });
  },
  watch: {
    $route: "GetSearch"
  }
};
</script>
<style scoped>
.breadcrumbs {
  width: 100%;
  background-color: #ffaf60;
}
.breadcrumbs .container {
  display: flex;
  align-items: center;
  min-height: 64px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}
.breadcrumb:not:last-child:before {
  content: "\E5CC";
  color: rgba(255, 255, 255, 0.7);
  vertical-align: top;
  display: inline-block;
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin: 0 10px 0 8px;
  -webkit-font-smoothing: antialiased;
}
.breadcrumb:last-child {
  color: #fff;
}
.container {
  display: block;
}
.container h2 {
  text-align: center;
}
.sales-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 45px;
  width: 100%;
  justify-items: center;
}
</style>
