<template>
<form>
    <div class="input-field">
        <input id="search" type="search" required v-model="searchStr" placeholder="Начать поиск">
        <v-btn depressed small @click="search" class=" btn-flat"><i class="material-icons">search</i></v-btn>
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
<style scoped>
.search-bar form {
  margin: 3px;
}
.input-field {
  display: flex;
  align-items: center;
}
#search {
  box-shadow: none;
  border: 1px solid #ffaf60 !important;
  margin: 0;
  padding: 0 0 0 10px;
  height: 47px;
  min-width: 250px;
  box-sizing: border-box;
}
form .input-field .btn-flat {
  background-color: #ffaf60 !important;
  color: white;
  border-radius: 0;
  padding: 0;
  margin: 0;
  min-width: 47px;
  min-height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-bar form .input-field a.btn-flat i {
  color: white;
}
</style>
