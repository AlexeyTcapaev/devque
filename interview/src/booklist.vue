<template>
  <ul>
    <search></search>
    <li class="list"><ul><book :elem="book" :index="index" :key="book.id" v-for="(book,index) in filteredLibrary"></book></ul></li>
    <li class="collection-item">
      <div class="card gradient-45deg-light-blue-cyan gradient-shadow">
          <div class="card-content white-text">
              <span class="card-title">Общее количество книг - {{library.length}} | Общее количество авторов - {{authorsCount}}</span>             
              <hr>     
          </div>        
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import book from "./book.vue";
import search from "./search.vue";
export default {
  components: {
    book,
    search
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["search", "filteredLibrary", "library"]),
    authorsCount() {
      let temp = [];
      for (let index = 0; index < this.library.length; index++) {
        if (temp.indexOf(this.library[index].author) === -1) {
          temp.push(this.library[index].author);
        }
      }
      return temp.length;
    }
  }
};
</script>

<style>
.container {
  position: relative;
}
a.btn {
  box-shadow: none;
}

.gradient-45deg-light-blue-cyan.gradient-shadow {
  box-shadow: 0 6px 20px 0 rgba(38, 198, 218, 0.5);
}
.gradient-45deg-light-blue-cyan {
  background: #0288d1;
  background: -webkit-linear-gradient(45deg, #0288d1 0%, #26c6da 100%);
  background: linear-gradient(45deg, #0288d1 0%, #26c6da 100%);
}
.gradient-45deg-red-pink {
  background: #ff5252;
  background: -webkit-linear-gradient(45deg, #ff5252 0%, #f48fb1 100%);
  background: linear-gradient(45deg, #ff5252 0%, #f48fb1 100%);
}
</style>
