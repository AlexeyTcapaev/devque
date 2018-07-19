<template>
   <v-layout column justify-center align-center>
    <v-flex xs12 sm9 md9 style="width: 100%">
      <v-card>
        <v-card-text>
          <v-layout row>
            <v-flex style="align-items: center; display: flex;">
              <span class="headline">Лента</span>
            </v-flex>
            <v-flex class="text-xs-right">
              <v-btn small router to="/inspire">Создать проект</v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-pagination></v-pagination>
  </v-layout>
</template>

<script>
export default {
  name: "feed-view"
};
</script>

<style scoped src="">

</style>
