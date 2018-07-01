<template>
<div v-if="subcategory != null">
  <div class="breadcrumbs">
    <div class="container">
      <router-link class="breadcrumb" to="/">Главная</router-link>
      <router-link class="breadcrumb"  :to="{name:'category',params:{slug:subcategory.parentobj.slug}}">{{subcategory.parentobj.name}}</router-link>  
      <router-link class="breadcrumb"  :to="{name:'category',params:{slug:subcategory.slug}}">{{subcategory.name}}</router-link>             
    </div>
  </div> 
<h1>{{subcategory.name}}</h1>
</div>
</template>
<script>
export default {
  metaInfo: function() {
    return {
      title: this.subcategory.name + " " + this.subcategory.parentobj.name
    };
  },
  data: () => ({
    subcategory: {
      name: "",
      parentobj: {
        name: ""
      }
    }
  }),
  methods: {
    getSubcategory() {
      const init = this;
      axios
        .get("/api/catalog/sub/" + init.$route.params.slug)
        .then(function(resp) {
          init.subcategory = resp.data;
        });
    }
  },
  beforeCreate() {
    const init = this;
    axios
      .get("/api/catalog/sub/" + init.$route.params.slug)
      .then(function(resp) {
        init.subcategory = resp.data;
      });
  },
  watch: {
    $route: "getSubcategory"
  }
};
</script>
<style scoped>
.breadcrumbs {
  width: 100%;
  background-color: #ffaf60;
}
.container {
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
</style>
