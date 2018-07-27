<template>
  <v-layout>
    <mycarousel></mycarousel>
  </v-layout>
</template>
<script>
const mycarousel = () => import("./mycarousel.vue");
export default {
  metaInfo: {
    title: "Главная" // set a title
  },
  components: {
    mycarousel
  },
  beforeCreate() {}
};
</script>
