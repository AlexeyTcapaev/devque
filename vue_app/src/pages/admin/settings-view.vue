<template>
  <v-layout>
    <v-flex text-xs-center>
      <!--<div v-if="document && $auth.ready()">-->
        <!--<p>Авторизирован: {{ $auth.check() }}</p>-->
        <!--<p>Пользователь: {{ $auth.user().data }}</p>-->
        <!--<p>Имя: {{ $auth.user().email }}</p>-->
      <!--</div>-->
      <!--<div v-if="! document || !$auth.ready()">-->
        <!--Site loading...-->
      <!--</div>-->
111
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        check: '',
        token: '',
        user: ''
      }
    }
  }
</script>
