<template>
  <v-layout>
    <v-flex text-xs-center>
      <h2>Пользователи</h2>
      <br/>
      <template v-if="users">
        <v-data-table
          :loading="loading"
          :headers="tableHeaders"
          :items="users"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.id }}</td>
            <td class="text-xs-left"><router-link :to="'/users/' + props.item.id">{{ props.item.name }}</router-link></td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">
              {{ (new Date(props.item.created.date)).toLocaleString('ru-RU', { timeZone: timeZone }) }}
            </td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0" @click="modifyRecord(props.item)" :disabled="loading">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="deleteRecord(props.item)" :disabled="loading">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              Извините, пользователи не найдены :(
            </v-alert>
          </template>
        </v-data-table>
      </template>
      <br/>
      <!--<div class="pagination">-->
        <!--<v-btn :disabled="!prevPage" @click.prevent="goPrev">Previous</v-btn>-->
        <!--Страница: {{ page }}-->
        <!--<v-btn :disabled="!nextPage" @click.prevent="goNext">Next</v-btn>-->
      <!--</div>-->

      <v-pagination :length="lastPage" v-model="page" :total-visible="7">
      </v-pagination>

      <p>Пользователей на странице: {{ per_page }}</p>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    asyncData ({ store, route }) {
      // возвращаем Promise из действия
      return store.dispatch('users/fetchUsers', {
        page: route.query.page,
        per_page: route.query.per_page
      })
    },
    data () {
      return {
        search: '',
        totalItems: 0,
        loading: false,
        pagination: {},
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        tableHeaders: [
          {
            text: '#',
            align: 'left',
            value: 'id'
          },
          {
            text: 'Имя',
            align: 'left',
            value: 'name'
          },
          {
            text: 'e-mail',
            align: 'left',
            value: 'email'
          },
          {
            text: 'Время регистрации, ' + Intl.DateTimeFormat().resolvedOptions().timeZone,
            align: 'left',
            value: 'name'
          },
          {
            text: '',
            value: 'actions'
            //align: 'center',
            //value: 'name'
          }
        ],
        meta: null,
        links: {
          first: null,
          last: null,
          next: null,
          prev: null,
        },
        error: null
      }
    },
    computed: {
      // отображаем элемент из состояния хранилища.
      users () {
        if (!!this.$store.state.users.data)
          return this.$store.state.users.data.slice(this.$store.state.users.meta.from, this.$store.state.users.meta.to + 1)
      },
      page: {
        get () {
          return parseInt(this.$store.state.route.query.page) || 1
        },
        set (val) {
          this.$router.push({
            query: {
              page: val,
              per_page: this.per_page
            }
          })
        }
      },
      per_page () {
        return this.$store.state.route.query.per_page || 10
      },
      nextPage () {
        if (this.$store.state.users.meta.current_page === this.$store.state.users.meta.last_page) return
        return this.$store.state.users.meta.current_page + 1
      },
      prevPage () {
        if (this.$store.state.users.meta.current_page === 1) return
        return this.$store.state.users.meta.current_page - 1
      },
      lastPage () {
        return this.$store.state.users.meta.last_page
      }
    },
    methods: {
      goNext () {
        this.$router.push({
          query: {
            page: `${this.nextPage}`,
            per_page: this.per_page
          }
        })
      },
      goPrev () {
        this.$router.push({
          query: {
            page: `${this.prevPage}`,
            per_page: this.per_page
          }
        })
      },
      // Редактировать пользователя
      modifyRecord (item) {
        this.$router.push({path: `users/${item.id}?mode=edit`});
      },
      // Удалить пользователя
      deleteRecord (item) {
        this.loading = true;
        this.$store.dispatch('users/deleteUser', item.id)
          .then(r => {
            return this.$store.dispatch('users/fetchUsers', {
              page    : this.$route.query.page,
              per_page: this.$route.query.per_page
            })
          })
          .catch(e => {
            return this.$toast.open({text: 'Ошибка', type: 'error'})
          })
          .then(() => this.loading = false);
      }
    }
  }
</script>
