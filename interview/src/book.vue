<template>
<li class="collection-item">
    <div class="card gradient-45deg-light-blue-cyan gradient-shadow">
        <div class="card-content white-text">
            <span class="card-title">{{elem.title}}</span>
            <p>{{elem.author}}</p>
            <hr>
            <ul>
                <li :key="key" v-for="(cat,key) in elem.genres">{{cat}}</li>
            </ul>
        </div>
        <div class="card-action">
            <a href="#!" class="waves-effect waves-light btn gradient-45deg-red-pink" @click="DeleteBook(elem)"><i class="material-icons">close</i></a>
            <router-link :to="'/book/'+index" tag="a" class="waves-effect waves-light btn gradient-45deg-red-pink"><i class="material-icons">edit</i></router-link>
        </div>
    </div>
</li>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  props: ["elem", "index"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["DeleteBook"])
  }
};
</script>

<style>

</style>
