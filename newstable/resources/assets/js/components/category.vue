<template>
<div>
  <div class="breadcrumbs">
    <div class="container">
      <router-link class="breadcrumb" to="/">Главная</router-link>
      <router-link class="breadcrumb" :to="{name:'category',params:{slug:category.slug}}">{{category.name}}</router-link>             
    </div>
  </div> 
<h1>{{category.name}}</h1>
</div>
</template>
<script>
export default {
  metaInfo: function() {
    return {
      title: this.category.name
    };
  },
  data: () => ({
    category: {
      name: ""
    }
  }),
  methods: {
    getCategory() {
      const init = this;
      axios.get("/api/catalog/" + init.$route.params.slug).then(function(resp) {
        init.category = resp.data[0];
      });
    }
  },
  beforeCreate() {
    const init = this;
    axios.get("/api/catalog/" + init.$route.params.slug).then(function(resp) {
      init.category = resp.data[0];
    });
  },
  watch: {
    $route: "getCategory"
  }
};
</script>
<style scoped>
.breadcrumbs {
  width: 100%;
  background-color: #ffaf60;
}
.container {
  padding: 0;
}
.bread {
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
.breadcrumbs .container {
  display: flex !important;
  align-items: center !important;
  height: 64px !important;
}
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}
.breadcrumb:not(:first-child):before {
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
</style>
