<template>
  <li class="collection-header gradient-45deg-light-blue-cyan">
    <h4 class="task-card-title">Поиск</h4>
     <div class="input-field">
          <input id="search" type="search" @input="$store.commit('ChangeFilter',$event.target.value)"  :value="searchstr">
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons" @click="$store.commit('ChangeFilter','')">close</i>
        </div>
</li>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    searchstr() {
      return this.$store.state.search;
    }
  }
};
</script>

<style>
.collection-header {
  padding: 20px;
}
.task-card-title {
  margin: 0;
  color: #fff;
  font-weight: 300;
}
.input-field label,
input {
  color: #fff;
}
input {
  padding-left: 50px !important;
  border-bottom: none !important;
  background-color: none !important;
}
i {
  color: #fff !important;
}
.input-field input[type="search"]:focus:not(.browser-default) {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff;
}
</style>
