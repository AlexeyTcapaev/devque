<template>
  <v-app>

    <v-toolbar fixed app dense class="elevation-1">

      <div class="title">
        <v-toolbar-title class="logo" v-text="title">
        </v-toolbar-title>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid style="height: 100%; display: flex;">
        <v-slide-y-transition mode="out-in">


          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-4">
                <v-toolbar class="elevation-2">
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
                  <v-alert outline color="error" icon="warning" :value="error">
                    {{ error }}
                  </v-alert>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat @click.prevent="goBack()">Назад</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click.prevent="login()" :loading="loading">Вход</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>


        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer fixed app class="elevation-2">
      <span style="margin-left: 2em">&copy; 2017, ITGeekz.ru</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
      name: "login-view",
      data() {
        return {
          email: null,
          password: null,
          loading: null,
          pass_hidden: true,
          error: false,
          title: 'ITGeekz.ru'
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

<style scoped>

</style>
