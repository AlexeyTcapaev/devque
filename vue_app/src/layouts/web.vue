<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >

      <v-list dense>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in menu"
          exact
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped" dense class="elevation-1">

      <div class="title">
        <v-toolbar-side-icon @click.stop="drawer = !drawer">
        </v-toolbar-side-icon>
        <v-toolbar-title class="logo" v-text="title">
        </v-toolbar-title>
      </div>

      <v-toolbar-items v-show="!drawer" class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in menu"
               :key="i"
               flat
               class="my-nav-item"
               :to="item.to">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer>
      </v-spacer>
      <v-btn
        v-show="drawer"
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'">
        </v-icon>
      </v-btn>
      <v-btn
        v-show="drawer"
        icon
        @click.native.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>

    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view>
          </router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app class="elevation-2">
      <span style="margin-left: 2em">&copy; 2017, ITGeekz.ru</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
      name: "web-layout",
      data () {
        return {
          clipped: true,
          drawer: false,
          fixed: false,
          menu: [
            {title: 'Проекты', to: '/'},
            {title: 'Лента', to: '/feed'},
            {title: 'Работа', to: '/job'},
            {title: 'Пользователи', to: '/users'},
            {title: 'Типы работ', to: '/job-types'},
            {title: 'Статистика', to: '/statistics'},
            {title: 'Настройки', to: '/settings'}
          ],
          items: [
            {icon: 'apps', title: 'Панель', to: '/'},
            {icon: 'people', title: 'Пользователи', to: '/users'},
            {icon: 'people', title: 'Пользователи2', to: '/users?page=2&per_page=20'},
            {icon: 'bubble_chart', title: 'Ошибка 404', to: '/404'},
            {icon: 'settings', title: 'Настройки', to: '/settings'}
          ],
          miniVariant: false,
          right: true,
          rightDrawer: false,
          title: 'ITGeekz.ru'
        }
      }
    }
</script>

<style lang="stylus">

</style>
