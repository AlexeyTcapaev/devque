<template>
<div>
  <div class="breadcrumbs">
    <div class="container">
      <router-link class="breadcrumb" to="/">Главная</router-link>
      <a class="breadcrumb" >Корзина</a>             
    </div>
  </div>
<div class="container cart">
  <h2>Корзина</h2>
  <ul class="cart-list">
    <li v-for="(product,index) in Products" :key="index">
        <mycart :number="index"></mycart>
    </li>
  </ul> 
</div> 

</div>
</template>
<script>
import { mapGetters } from "vuex";
const mycart = () => import("./cart/CartCard.vue");
export default {
  metaInfo: function() {
    return {
      title: "Корзина"
    };
  },
  computed: {
    ...mapGetters({ Products: "cart/Products" })
  },
  components: {
    mycart
  }
};
</script>
<style scoped>
.cart-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.mycart {
  width: 100%;
  max-height: 250px;
  max-width: 100% !important;
  margin: 15px 0;
}
.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
}
.breadcrumbs {
  width: 100%;
  background-color: #ffaf60;
}
.container {
  padding: 0;
}
.bread {
  display: flex;
  align-items: center;
  min-height: 64px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}
.breadcrumb:not:last-child:before {
  content: "\E5CC";
  color: rgba(255, 255, 255, 0.7);
  vertical-align: top;
  display: inline-block;
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin: 0 10px 0 8px;
  -webkit-font-smoothing: antialiased;
}
.breadcrumb:last-child {
  color: #fff;
}
.breadcrumbs .container {
  display: flex !important;
  align-items: center !important;
  height: 64px !important;
}
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}
.breadcrumb:not(:first-child):before {
  content: "\E5CC";
  color: rgba(255, 255, 255, 0.7);
  vertical-align: top;
  display: inline-block;
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 25px;
  margin: 0 10px 0 8px;
  -webkit-font-smoothing: antialiased;
}
</style>
