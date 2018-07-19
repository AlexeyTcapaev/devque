<template>
<div class="container nav-cont">
            <nav>
                <div class="nav-wrapper">
                    <v-toolbar-title style="width: 330px" class="ml-0 pl-3 sidenav-trigger"  :clipped="$vuetify.breakpoint.lgAndUp">
                            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                        </v-toolbar-title>
                    <ul class="hide-on-med-and-down">
                        <navlink :category="category" v-for="category in Categories" :key="category.id"></navlink>
                    </ul>
                </div>
            </nav>
            <v-navigation-drawer mobile-break-point="1569" fixed app absolute v-model="drawer" floating>

            </v-navigation-drawer>
        </div>
</template>
<script>
const navlink = () => import("./navlink.vue");
const mobilenavlink = () => import("./mobilenavlink.vue");
export default {
  data: () => ({
    Categories: [],
    drawer: false
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
<style scoped>
.container {
  padding: 0;
}
.hide-on-med-and-down {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 0 0;
  padding-left: 0;
  list-style-type: none !important;
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
@media only screen and (min-width: 993px) {
  .sidenav-trigger {
    display: none;
  }
}
@media only screen and (max-width: 1569px) {
  .sidenav-trigger {
    display: block !important;
  }
  .hide-on-med-and-down {
    display: none;
  }
}
</style>
