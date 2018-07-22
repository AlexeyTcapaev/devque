<template>
<v-app>
  <v-content>
    <transition  name="fade" mode="out-in">     
        <router-view class="child-view"></router-view>
    </transition>
  </v-content>
</v-app>
</template>
<script>
import { mapActions } from "vuex";
export default {
  metaInfo: {
    titleTemplate: "%s | La Flowers"
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  methods: {
    ...mapActions(["SetCatalog"])
  },
  beforeMount() {
    this.SetCatalog();
  }
};
</script>

