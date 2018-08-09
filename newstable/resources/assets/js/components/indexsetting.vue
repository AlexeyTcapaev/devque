<template>
<v-layout>
<v-flex column>
      <h2>Категория на главной</h2>
      <v-select :items="catalog" v-model="targetcategory" item-value="item" return-object label="Выберите категорию" outline item-text="name" @blur="Submit"></v-select>
      <h2>Карусель с инстаграмм</h2>
      <ul class="sli-list">
      <li><inst-slide-card :index="null" :slides="InstCarousel"></inst-slide-card></li>
      <li><inst-slide-card v-for="(slide,index) in InstCarousel" :index="index" :slide="slide" :slides="InstCarousel" :key="index"></inst-slide-card></li>
      </ul>
</v-flex>
</v-layout>
</template>
<script>
const InstSlideCard = () => import("./InstSlideCard.vue");
export default {
  data: () => ({
    catalog: [],
    targetcategory: "",
    InstCarousel: []
  }),
  components: { InstSlideCard },
  beforeCreate() {
    const init = this;
    axios.get("/api/catalog").then(function(resp) {
      init.catalog = resp.data;
    });
    axios.get("/api/indexconfig").then(function(resp) {
      init.targetcategory = resp.data.category;
    });
    axios.get("/api/instcarousel").then(function(resp) {
      init.InstCarousel = resp.data;
    });
  },
  methods: {
    Submit() {
      if (this.targetcategory !== undefined) {
        const init = this;
        axios
          .post("/api/indexconfig", { catalog_id: this.targetcategory.id })
          .then(function(resp) {
            init.targetcategory = resp.data.category;
          });
      }
    }
  }
};
</script>
<style scoped>
.sli-list{
  display: flex;
  flex-direction: row;
}
</style>


