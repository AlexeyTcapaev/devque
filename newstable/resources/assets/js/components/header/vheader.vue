<template>
<header>

</header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  methods: {
    test() {}
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>
