<template>
<header>
  <div class="container head">
    <router-link class="logo" to="/">La Flowers</router-link>
      <a href="tel:88122344455" class="phone">8(812) 234-44-55
        <span>Работаем с 8:00 до 23:00</span>
      </a>
      <div class="search-bar">
        <search></search>
          <span>ДОСТАВКА
            <i class="material-icons">remove</i>
            ОПЛАТА
            <i class="material-icons">remove</i>
            КОНТАКТЫ
          </span>
      </div>
      <div class="magazine-buttons">
        <router-link class="btn-flat" to="/login" ><i class="material-icons" :class="{user:islogging}">account_box</i>{{$store.state.user.name}}</router-link>
        <router-link to="/cart" class="btn-flat cart" @click="test">
          <i class="material-icons">shopping_cart</i>
            <span>{{cartCount}}</span>
        </router-link>
      </div>
  </div>
  <mynav></mynav>
</header>
</template>
<script>
import { mapGetters } from "vuex";
const search = () => import("./search.vue");
const mynav = () => import("./mynav.vue");
export default {
  components: { search, mynav },
  methods: {
    test() {}
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>
<style scoped>
.head {
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
a.logo {
  color: black !important;
  background-color: #fff !important;
}
.router-link-exact-active {
  background-color: #ffaf60 !important;
  color: #fff !important;
}
.logo {
  color: black;
  font-size: 4rem;
  font-weight: bold;
}
.phone {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: bold;
  color: black;
}
.phone span {
  font-size: 1rem;
  color: #ababab;
}
.search-bar span {
  font-size: 1rem;
  color: #ababab;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-bar span i {
  color: #ffaf60;
}
.magazine-buttons {
  display: flex;
  justify-content: space-between;
}
.magazine-buttons a {
  width: inherit !important;
  margin: 0 10px 0 10px !important;
  padding: 15px !important;
  height: 47px !important;
}
.magazine-buttons a.btn-flat {
  color: #ffaf60;
  border-radius: 0;
  border: 1px solid #ffaf60;
  padding: 0;
  margin: 0 10px 0 10px;
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
}
.user {
  margin: 0 5px 0 0;
}
a.cart {
  position: relative;
  overflow: visible !important;
}
a.cart span {
  position: absolute;
  right: -10px;
  color: white;
  top: -10px;
  width: 20px;
  display: flex;
  height: 20px;
  border-radius: 10px;
  background-color: #ffaf60;
  align-items: center;
  justify-content: center;
}
</style>
