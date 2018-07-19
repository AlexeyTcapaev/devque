<template>
    <transition  name="fade" mode="out-in">     
        <router-view class="child-view"></router-view>
    </transition>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | La Flowers", // title is now "My Example App - Yay!"
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  }
};
</script>
