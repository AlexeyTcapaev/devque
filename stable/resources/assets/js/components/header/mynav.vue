<template>
<div class="container nav-cont">
            <nav>
                <div class="nav-wrapper">
                    <a href="#" data-activates="mobile-demo" class="sidenav-trigger button-collapse">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="hide-on-med-and-down">
                        <navlink :category="category" v-for="category in Categories" :key="category.id"></navlink>
                    </ul>
                </div>
            </nav>
            <ul class="side-nav" id="mobile-demo">
               <mobilenavlink/>
            </ul>
        </div>
</template>
<script>
const navlink = () => import("./navlink.vue");
const mobilenavlink = () => import("./mobilenavlink.vue");
import $ from "jquery";
export default {
  data: () => ({
    Categories: []
  }),
  components: {
    navlink,
    mobilenavlink
  },
  beforeCreate() {
    const init = this;
    axios.get("/api/catalog").then(function(resp) {
      init.Categories = resp.data;
    });
  },
  mounted() {
    $(".button-collapse").sideNav();
  }
};
</script>
