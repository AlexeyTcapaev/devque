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
                <router-link class="btn-flat" to="/login" ><i class="material-icons">account_box</i></router-link>
                <a class="btn-flat cart">
                    <i class="material-icons">shopping_cart</i>
                    <span>1</span>
                </a>
            </div>
        </div>
        <mynav/>
</header>
</template>
<script>
const search = () => import("./search.vue");
const mynav = () => import("./mynav.vue");
export default {
  components: {
    search,
    mynav
  }
};
</script>
<style scoped>
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
