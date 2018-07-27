<template>
<v-layout>
    <pack-card :index="null" :packs="Packs"></pack-card>
    <pack-card v-for="(pack,index) in Packs" :index="index" :pack="pack" :packs="Packs" :key="index"></pack-card>
</v-layout>
</template>
<script>
const PackCard = () => import("./PackCard.vue");
export default {
  components: {
    PackCard
  },
  data: () => ({
    Packs: []
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/packs").then(function(resp) {
      init.Packs = resp.data;
    });
  }
};
</script>
