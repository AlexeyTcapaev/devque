<template>
  <li class="collection-header gradient-45deg-light-blue-cyan row">
    <h4 class="task-card-title">Поиск</h4>
     <div class="input-field col s12">
          <input id="search" type="search" @input="ChangeFilterStr($event.target.value)" :disabled="patt" :value="search.str">
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons" @click="ChangeFilterStr('')">close</i>
      </div>
       <div class="input-field col s12">
          <i class="material-icons prefix">edit</i>
          <input type="text" id="autocomplete-input" class="autocomplete" @change="patt=true">
          <label for="autocomplete-input">Поиск по</label>
        </div>
</li>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      patt: true
    };
  },
  mounted() {
    var elem = document.querySelector(".autocomplete");
    var instance = M.Autocomplete.init(elem, {
      data: {
        title: null,
        genres: null,
        author: null
      },
      minLength: 0,
      onAutocomplete: () => {
        this.ChangeFilterLabel(elem.value);
        this.patt = false;
      }
    });
  },
  methods: {
    ...mapActions(["ChangeFilterStr", "ChangeFilterLabel"])
  },
  computed: {
    ...mapGetters(["search"])
  }
};
</script>

<style>
input:not([type]):focus:not([readonly]),
input[type="text"]:not(.browser-default):focus:not([readonly]),
input[type="password"]:not(.browser-default):focus:not([readonly]),
input[type="email"]:not(.browser-default):focus:not([readonly]),
input[type="url"]:not(.browser-default):focus:not([readonly]),
input[type="time"]:not(.browser-default):focus:not([readonly]),
input[type="date"]:not(.browser-default):focus:not([readonly]),
input[type="datetime"]:not(.browser-default):focus:not([readonly]),
input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
input[type="tel"]:not(.browser-default):focus:not([readonly]),
input[type="number"]:not(.browser-default):focus:not([readonly]),
input[type="search"]:not(.browser-default):focus:not([readonly]),
textarea.materialize-textarea:focus:not([readonly]) {
  border-bottom: 1px solid #fff;
  -webkit-box-shadow: 0 1px 0 0 #fff;
  box-shadow: 0 1px 0 0 #fff;
}
.input-field input {
  width: 86% !important;
}
input:focus {
  color: #fff !important;
}
label {
  color: #fff !important;
}
.collection-header {
  padding: 20px;
}
.task-card-title {
  margin: 0;
  color: #fff;
  font-weight: 300;
}
.input-field label,
input {
  color: #fff;
}
input {
  padding-left: 50px !important;
  border-bottom: none !important;
  background-color: none !important;
}
i {
  color: #fff !important;
}
.input-field input:focus:not(.browser-default) {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff;
}
</style>
