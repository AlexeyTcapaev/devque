<template>
<div v-if="subcategory">
  <div class="breadcrumbs">
    <div class="container">
      <router-link class="breadcrumb" to="/">Главная</router-link>
      <router-link class="breadcrumb"  :to="{name:'category',params:{slug:subcategory.parentobj.slug}}">{{subcategory.parentobj.name}}</router-link>  
      <router-link class="breadcrumb"  :to="{name:'category',params:{slug:subcategory.slug}}">{{subcategory.name}}</router-link>             
    </div>
  </div>
<div class="container">
    <h2>{{subcategory.name}}</h2>
    <ul class="sales-list">
        <li v-for="product in subcategory.products" :key="product.id"><showable-card  :prod="product"></showable-card></li>
    </ul>
</div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
const ShowableCard = () => import("./ShowableCard.vue");
export default {
  metaInfo: function() {
    return {
      title: this.subcategory
        ? this.subcategory.name + " " + this.subcategory.parentobj.name
        : ""
    };
  },
  components: {
    ShowableCard
  },
  computed: {
    ...mapGetters({
      cat: "catalog/Subcategory"
    }),
    subcategory() {
      return this.cat(this.$route.params);
    }
  }
};
</script>
<style>
h2 {
  font-size: 3.56rem;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
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
.buy {
  background-color: #ffaf60 !important;
  box-shadow: none !important;
}
</style>
