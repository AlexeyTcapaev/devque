<template>
<v-layout>
    <mycarousel></mycarousel>
    <div class="specifick-container container">
        <ul class="spef">
            <li>
                <h4>Доставка в срок</h4>
            </li>
            <li>
                <h4>Всегда только свежие цветы</h4>
            </li>
            <li>
                <h4>Высокое качество</h4>
            </li>
        </ul>
    </div>
    <div class="sales container" v-if="targetcategory">
        <h2>{{targetcategory.name}}</h2>
        <ul class="sales-list">
          <template v-if="targetcategory.products">
            <li v-for="prod in targetcategory.products" :key="prod.id">
              <showable-card :prod="prod"></showable-card>
            </li>
          </template>
          <template v-if="targetcategory.childrens">
            <template v-for="child in targetcategory.childrens">
              <li v-for="prod in child.products" :key="prod.id">
                <showable-card :prod="prod"></showable-card>
              </li>
            </template>
          </template>

        </ul>
    </div>
    <div class="sales container" v-if="InstCarousel.length > 0">
      <h2>Наши довольные клиенты</h2>
      <carousel-3d :count="InstCarousel.length">
        <slide v-for="(slide, i) in InstCarousel" :index="i" :key="i">
          <img :src="'storage/uploads/'+slide.image">
          <h1>{{slide.link}}</h1>
        </slide>
      </carousel-3d>
        <a href="#" class="hight-link">Смотреть больше в Instagram
          <br>#laflowers</a>
    </div>
</v-layout>
</template>
<script>
const ShowableCard = () => import("./ShowableCard.vue");
const mycarousel = () => import("./mycarousel.vue");
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  metaInfo: {
    title: "Главная" // set a title
  },
  components: {
    mycarousel,
    ShowableCard,
    Carousel3d,
    Slide
  },
  data: () => ({
    targetcategory: {},
    InstCarousel: []
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/indexconfig").then(function(resp) {
      init.targetcategory = resp.data.category;
    });
    axios.get("/api/instcarousel").then(function(resp) {
      init.InstCarousel = resp.data;
    });
  }
};
</script>
<style scoped>
.hight-link::before {
  display: block;
  content: " ";
  background-image: url(/storage/img/instagram.svg);
  margin: 0 15px;
  background-size: 3rem 3rem;
  color: #ffaf60;
  height: 3rem;
  width: 3rem;
}
.hight-link {
  justify-content: center;
  color: #ababab;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 5% 0 5% 0;
}
.sales-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 45px;
  width: 100%;
  justify-items: center;
}
.sales h2 {
  font-weight: bolder;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
}
.sales h2::before,
.sales h2::after {
  display: block;
  content: " ";
  background-image: url(/storage/img/tulip.svg);
  background-size: 45px 45px;
  color: #ffaf60;
  margin: 0 15px;
  height: 45px;
  min-width: 45px;
  width: 45px;
}
.sales {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.layout {
  flex-direction: column;
}
.spef li {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.spef {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.spef li {
  width: 30%;
  padding: 20px;
  min-width: 350px;
}
.spef li h4 {
  border: 6px solid #ffaf60;
  border-radius: 100px;
  margin: 0;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px;
}
.spef h4 {
  text-align: center;
  font-size: 2.28rem;
  line-height: 110%;
  margin: 1.14rem 0 0.912rem 0;
}
h2 {
  font-size: 3.56rem;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
}
</style>

