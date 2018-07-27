<template>
<v-carousel cycle lazy hide-delimiters >
    <v-carousel-item v-for="(item,i) in slides" :key="i" :src="'/storage/uploads/'+item.image">
        <p>{{item.name}}</p>
    </v-carousel-item>
</v-carousel>
</template>
<script>
export default {
  data: () => ({
    slides: []
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/carousel").then(function(resp) {
      init.slides = resp.data;
    });
  }
};
</script>
<style scoped>
</style>


