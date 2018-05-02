<template>
<div class="container">
  <router-view></router-view>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import booklist from "./book.vue";
export default {
  components: {
    booklist
  },
  data() {
    return {};
  }
};
</script>

<style>
.container {
  position: relative;
}
a.btn {
  box-shadow: none;
}

.gradient-45deg-light-blue-cyan.gradient-shadow {
  box-shadow: 0 6px 20px 0 rgba(38, 198, 218, 0.5);
}
.gradient-45deg-light-blue-cyan {
  background: #0288d1;
  background: -webkit-linear-gradient(45deg, #0288d1 0%, #26c6da 100%);
  background: linear-gradient(45deg, #0288d1 0%, #26c6da 100%);
}
.gradient-45deg-red-pink {
  background: #ff5252;
  background: -webkit-linear-gradient(45deg, #ff5252 0%, #f48fb1 100%);
  background: linear-gradient(45deg, #ff5252 0%, #f48fb1 100%);
}
</style>
