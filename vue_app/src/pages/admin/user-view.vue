<template>
  <v-layout>
    <v-flex text-xs-center>
      <template v-if="user">
        <h2 class="mb-2">
          {{ user.name }}

          <v-btn icon class="mx-0" @click="changeMode('edit')" v-if="mode == 'view'">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="changeMode('view')" v-if="mode == 'edit'">
            <v-icon>remove_red_eye</v-icon>
          </v-btn>
        </h2>
      </template>

      <v-form autocomplete="off" v-model="valid" ref="form" lazy-validation>
        <v-layout row wrap>
            <v-flex md6 text-xs-left v-if="mode == 'edit'">
              <v-text-field prepend-icon="person" v-model="user.name" name="name" label="Имя"
                            type="text" @keyup.enter="save" :loading="loading" required
                            :rules="rules.name">
              </v-text-field>
              <v-text-field prepend-icon="email" v-model="user.email" name="email" label="E-mail"
                            type="text" @keyup.enter="save" :loading="loading" required
                            :rules="rules.email">
              </v-text-field>
            </v-flex>
            <v-flex md6 text-xs-left v-if="mode == 'view'">
              <div class="mb-1" v-if="mode == 'view'">
                <span class="mr-1"><v-icon>person</v-icon></span>
                <span>{{user.name}}</span>
              </div>
              <div class="mb-3" v-if="mode == 'view'">
                <span class="mr-1"><v-icon>email</v-icon></span>
                <span>{{user.email}}</span>
              </div>
            </v-flex>
            <v-flex md1></v-flex>
          <v-flex md5 text-xs-left>
            <div class="mb-1">
              <span class="mr-1"><b>Дилер:</b> </span>
              <span>{{user.dealer.name}}</span>
            </div>
            <div class="mb-3">
              <span class="mr-1"><b>Город:</b> </span>
              <span>{{user.dealer.city}}</span>
            </div>

            <div class="mb-1">
              <span class="mr-1"><b>Создан:</b> </span>
              <span>{{user.created_at.date}}</span>
            </div>
          </v-flex>
          <v-flex xs12 text-xs-left v-if="mode == 'edit'">
            <v-btn color="primary" @click.prevent="save" :loading="loading" :disabled="!valid">Сохранить</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  import {
    getUser
  } from '@/api/index'

  export default {
    asyncData ({ store, route }) {
      // возвращаем Promise из действия
      return store.dispatch('users/fetchUser', route.params.id)
    },
    computed: {
      user () {
        return this.$store.state.users.user
      }
    },
    data () {
      return {
        loading: false,
        error: null,
        valid: true,
        mode: this.$route.query.mode || 'view',
        rules: {
          name: [
            v => !!v || 'Имя обязательно'
          ],
          email: [
            v => !!v || 'E-mail обязателен',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Некорректный e-mail'
          ],
        }
      }
    },
    methods: {
      save() {
        if (this.$refs.form.validate()) {
          this.loading = true

          this.$store.dispatch('users/saveUser')
            .then(r => {
              return this.$toast.open({text: 'Сохранено', type: 'success'})
            })
            .catch(e => {
              return this.$toast.open({text: 'Ошибка', type: 'error'})
            })
            .then(() => this.loading = false)
        }
      },
      changeMode(m) {
        this.mode = m
      }
    }
  }
</script>
