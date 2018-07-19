<template>
<div>
    <vheader></vheader>
    <main>
        <transition name="page"  mode="out-in">
          <router-view></router-view>
        </transition>
    </main>
    <vfooter></vfooter>
    <vue-progress-bar></vue-progress-bar>
</div>
</template>
<script>
const vheader = () => import("./header/vheader.vue");
const vfooter = () => import("./footer/vfooter.vue");
export default {
  data: () => ({
    loading: true
  }),
  components: {
    vfooter,
    vheader
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  }
};
</script>
<style>
.v-content {
  padding: 0 !important;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}
@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}

@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}
</style>
