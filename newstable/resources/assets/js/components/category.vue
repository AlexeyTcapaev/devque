<template>
<div  v-if="category">
  <div class="breadcrumbs">
    <div class="container">
      <router-link class="breadcrumb" to="/">Главная</router-link>
      <a class="breadcrumb">{{category.name}}</a>             
    </div>
  </div>
  <div class="container">
    <h2>{{category.name}}</h2>
    <ul class="sales-list">
        <li v-for="product in category.products" :key="product.id"><showable-card  :prod="product"></showable-card></li>
    </ul>
</div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: function() {
    return {
      title: this.category ? this.category.name : ""
    };
  },
  computed: {
    ...mapGetters({
      cat: "catalog/Category"
    }),
    category() {
      return this.cat(this.$route.params.slug);
    }
  }
};
</script>
<style scoped>
h2 {
  font-size: 3.56rem;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
  text-align: center;
}
h6 {
  font-size: 1rem;
  line-height: 110%;
  margin: 0.5rem 0 0.4rem 0;
}
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
