<template>
  <v-app dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="secondary">
                <v-toolbar-title>Вход в систему</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form autocomplete="off">
                  <v-text-field prepend-icon="person" v-model="email" name="login" label="Логин или email"
                                single-line type="text" @keyup.enter="login()" :loading="loading">

                  </v-text-field>
                  <v-text-field prepend-icon="lock" v-model="password" name="password" label="Пароль" id="password"
                                single-line type="password" @keyup.enter="login()" :loading="loading"
                                :append-icon="pass_hidden ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (pass_hidden = !pass_hidden)"
                                :type="pass_hidden ? 'password' : 'text'">

                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn flat @click.prevent="goBack()">Назад</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.prevent="login()" :loading="loading">Вход</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        email: null,
        password: null,
        loading: null,
        error: false,
        pass_hidden: true
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },
      login() {
        this.loading = true
        this.$store.dispatch('auth/login', { email: this.email, password: this.password })
          .then(() => {
            this.error = null
            this.goBack()
          })
          .catch(() => {
            this.error = 'Ошибка авторизации. Попробуйте еще раз.'
            this.loading = false
          })
      }
    }
  }
</script>
