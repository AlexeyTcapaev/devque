<template>
<v-layout>
    <div class="slideslist">
        <slide-card :index="null" :products="products" :carousel="Slides"></slide-card>
        <slide-card :index="index" :products="products" :carousel="Slides" :slide="slide" v-for="(slide,index) in Slides" :key="index"></slide-card>
    </div>
</v-layout>
</template>
<script>
const SlideCard = () => import("./SlideCard.vue");
export default {
  components: {
    SlideCard
  },
  data: () => ({
    Slides: [],
    products:[]
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/carousel").then(function(resp) {
      init.Slides = resp.data;
    });
    axios.get("/api/product").then(function(resp) {
      init.products = resp.data;
    });
  }
};
</script>
<style scoped>
.slideslist{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>


