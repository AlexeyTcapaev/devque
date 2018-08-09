<template>
  <div id="app">
    <workshop :height="height"></workshop>
    <input v-model="height">
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import workshop from "./workshop.vue";
export default {
  name: "app",
  data() {
    return {
      height:10
    };
  },
  components: { workshop }
};
</script>

<style>
#app {
  height: 100%;
}
</style>
