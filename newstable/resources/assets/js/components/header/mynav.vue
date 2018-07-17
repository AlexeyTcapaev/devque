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
  }
};
</script>
</<style scoped>
.hide-on-med-and-down {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    padding-left: 0;
    list-style-type: none!important;
}
.hide-on-med-and-down li a:hover {
    color: white;
    background-color: black;
}
.hide-on-med-and-down li a {
    display: flex;
    color: black;
    transition: 0.2s linear;
    font-weight: bold;
    text-transform: uppercase;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
}
@media only screen and (max-width: 992px) {
  .hide-on-med-and-down {
    display: none !important;
  }
}
</style>
