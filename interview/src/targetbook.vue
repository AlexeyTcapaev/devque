<template>
  <div>
     <div class="collection-item targetbook">
         <div class="card gradient-45deg-light-blue-cyan gradient-shadow">
            <router-link v-if="left >= 0" :to="'/book/'+left" tag="a" class="navigation-arrow left"><i class="material-icons large ">chevron_left</i></router-link>
            <router-link  v-if="right < filteredLibrary.length" :to="'/book/'+right" tag="a" class="navigation-arrow right"><i class="material-icons large ">chevron_right</i></router-link>      
                <div class="card-content white-text">
                     <div class="input-field col s6">
                        <input  id="title" type="text" class="validate" :value="booktoTarget.title" @blur="ChangeBookTitle({value:$event.target.value,id:bookid})">
                        <label for="title">Title</label>
                    </div>
                     <div class="input-field col s6">
                        <input  id="author" type="text" class="validate" :value="booktoTarget.author"  @blur="ChangeBookAuthor({value:$event.target.value,id:bookid})">
                        <label for="author">Author</label>
                    </div>
                    <hr> 
                <ul class="genres">
                    <li :key="key" v-for="(cat,key) in booktoTarget.genres" >{{cat}} <a @click="DeleteGenres({value:cat,id:bookid})"><i class="material-icons">close</i></a></li>
                </ul>
                <div class="input-field col s6">
                        <input  id="genres" type="text" class="validate" @blur="ChangeBookGenres({value:$event.target.value,id:bookid})">
                        <label for="genres">Add</label>
                </div>
                </div> 
        </div>
     </div>
      <router-link :to="{name: 'main'}">Go to index</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["filteredLibrary", "book"]),
    bookid() {
      return this.$route.params.id;
    },
    booktoTarget() {
      return this.book(this.bookid);
    },
    left() {
      return this.bookid - 1;
    },
    right() {
      return parseInt(this.bookid) + 1;
    }
  },
  methods: {
    ...mapActions([
      "ChangeBookTitle",
      "ChangeBookAuthor",
      "ChangeBookGenres",
      "DeleteGenres"
    ]),
    test: function() {
      console.log(1);
    }
  }
};
</script>

<style scoped>
.genres li {
  display: flex;
  align-items: center;
}
.genres li i {
  margin: 0 0 0 15px;
  cursor: pointer;
}
input {
  padding-left: 80px !important;
}
.targetbook .card {
  padding: 10%;
  position: relative;
}
a.navigation-arrow {
  position: absolute;
}
a.navigation-arrow.left {
  top: 40%;
  left: 0;
}
a.navigation-arrow.right {
  top: 40%;
  right: 0;
}
input {
  box-shadow: none !important;
  border: none !important;
}
</style>
