<template>
      <v-select :items="catalog" v-model="targetcategory" item-value="item" return-object label="Выберите категорию" outline item-text="name" @change="Submit"></v-select>
</template>
<script>
export default {
  data: () => ({
      catalog:[],
      targetcategory:''
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/catalog").then(function(resp) {
      init.catalog = resp.data;
    });
  },
  methods:{
      Submit(){
          
      }
  }
};
</script>
<style scoped>
</style>


