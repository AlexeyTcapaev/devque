<template>
<form>
    <div class="input-field">
        <input id="search" type="search" required v-model="searchStr" placeholder="Начать поиск">
        <a class="waves-effect waves-light btn-flat" @click="search">
            <i class="material-icons">search</i>
        </a>
    </div>
</form>
</template>
<script>
export default {
  mounted() {
    this.searchStr = this.$route.params.str;
  },
  data: () => {
    return {
      searchStr: ""
    };
  },
  methods: {
    search: function() {
      this.$router.push({ name: "search", params: { str: this.searchStr } });
    }
  }
};
</script>

