<template>
  <v-app>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator" :to="item.to" >
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}1
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

          <v-list-tile v-else :key="item.text" :to="item.to" active-class="primary--text exact-target-link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}        
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 330px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Панель администратора</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
      <v-container fluid fill-height>
        <v-layout justify-center align-start>
            <transition  name="fade" mode="out-in">     
                <router-view></router-view>
            </transition>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "web", text: "На сайт", to: "/" },
      { icon: "view_list", text: "Каталог", to: "/admin/catalog" },
      { icon: "shopping_basket", text: "Товары", to: "/admin/products" },
      { icon: "shopping_basket", text: "Упаковки", to: "/admin/packs" },
      { icon: "web", text: "Карусель", to: "/admin/carouseladmin" },
      { icon: "book", text: "Категория на главной", to: "/admin/indexsetting" }
    ]
  }),
  props: {
    source: String
  }
};
</script>
<style>
.exact-target-link {
  border-left: 3px solid #1976d2 !important;
}
</style>
