<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >

      <v-subheader class="mt-3 grey--text text--darken-1">Навигация</v-subheader>
      <v-list dense>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-subheader class="mt-3 grey--text text--darken-1">Дополнительно</v-subheader>
      <v-list dense>
        <v-list-tile router to="/login">
          <v-list-tile-action>
            <v-icon>vpn_key</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Авторизация</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click.stop="logoutDialog = true">
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Предупреждение</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click.prevent="logout">
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Выход</v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.native.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.native.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-dialog v-model="logoutDialog" max-width="500px">
          <v-card>
            <v-card-title>
              Внимание!
            </v-card-title>
            <v-card-text>
              <p>Через {{ Math.trunc(logoutIn / 1000) }}
                секунд будет произведен автоматический выход из системы.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" dark @click.stop="logoutDialog=false">Остаться в системе</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click.prevent="logout">Выход</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
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
    <v-footer :absolute="true" app>
      <span style="margin-left: 2em">&copy; TopDigital, 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    name: 'admin-layout',
    mixins: [Meta],

    data() {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
        logoutDialog: false,
        logoutIn: 10000,
        logoutTimer: null,
        logoutDialogTimer: null,
        items: [
          {icon: 'apps', title: 'Панель', to: '/'},
          {icon: 'people', title: 'Пользователи', to: '/users'},
          {icon: 'people', title: 'Пользователь 3', to: '/users/3'},
          {icon: 'bubble_chart', title: 'Ошибка 404', to: '/404'},
          {icon: 'settings', title: 'Настройки', to: '/settings'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'TopDigital'
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('auth/logout', this.$router)
      },
      getLogoutTimeBefore() {
        return this.expires_at - (new Date()).getTime() - 15000
      },
      setLogoutTimers() {
        this.logoutDialogTimer = setTimeout(() => {
          this.logoutDialog = true
        }, this.getLogoutTimeBefore() - process.env.LOGOUT_DIALOG_TIMER * 1000)
        this.logoutTimer = setTimeout(() => {
          this.logout()
        }, this.getLogoutTimeBefore())
      }
    },
    mounted: function () {
      setInterval(() => {
        this.logoutIn = this.getLogoutTimeBefore()
      },1000)
      this.setLogoutTimers()
    },
    computed: {
      expires_at () {
        return this.$store.state.auth.expires_at
      }
    }
  }
</script>
