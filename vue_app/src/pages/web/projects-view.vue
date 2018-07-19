<template>
  <v-layout column justify-center align-center>
      <hpanel :mode="grid" @switch="SwitchViewMode"></hpanel>
      <div class="container projects-container">
        <div class="row">
          <project :mode="grid"></project>
          <project :mode="grid"></project>
        </div>
       </div>
  </v-layout>
</template>

<script>
import hpanel from "./projects-view/hpanel.vue";
import project from "./projects-view/project.vue";
export default {
  name: "projects-view",
  components: { hpanel, project },
  data() {
    return {
      grid: false
    };
  },
  methods: {
    SwitchViewMode: function() {
      this.grid = !this.grid;
    }
  }
};
</script>
<style scoped src="../../assets/css/theme.css">
</style>

