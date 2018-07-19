<template>
<header>
        <div class="container head">
            <router-link class="logo" to="/">La Flowers</router-link>
            <a href="tel:88122344455" class="phone">8(812) 234-44-55
                <span>Работаем с 8:00 до 23:00</span>
            </a>
            <div class="search-bar">
              <search/>
                <span>ДОСТАВКА
                    <i class="material-icons">remove</i>ОПЛАТА
                    <i class="material-icons">remove</i>КОНТАКТЫ</span>
            </div>
            <div class="magazine-buttons">
                <router-link class="btn-flat" to="/login" ><i class="material-icons" :class="{user:islogging}">account_box</i>{{$store.state.user.name}}</router-link>
                <router-link to="/cart" class="btn-flat cart" @click="test">
                    <i class="material-icons">shopping_cart</i>
                    <span>{{cartCount}}</span>
                </router-link>
            </div>
        </div>
        <mynav/>
</header>
</template>
<script>
const search = () => import("./search.vue");
const mynav = () => import("./mynav.vue");
import { mapGetters } from "vuex";
export default {
  components: {
    search,
    mynav
  },
  methods: {
    test() {}
  },
  computed: {
    ...mapGetters(["cartCount"]),
    islogging() {
      if (this.$store.state.user.name === undefined) return false;
      else return true;
    }
  }
};
</script>
<style scoped>
.magazine-buttons a {
  width: inherit !important;
  margin: 0 10px 0 10px;
  padding: 15px;
  height: 47px;
}
.user {
  margin: 0 5px 0 0;
}
.btn-flat:focus {
  background-color: rgba(0, 0, 0, 0);
}
.router-link-exact-active {
  background-color: #ffaf60 !important;
  color: #fff !important;
}
a.logo {
  color: black !important;
  background-color: #fff !important;
}
</style>
