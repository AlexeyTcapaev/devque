<template>
  <v-snackbar v-model="open" v-bind="options">
    <div class="ctn">
      <div class="title mb-2" v-if="title">{{title}}</div>
      <div class="txt">{{text}}</div>
    </div>
    <v-btn v-if="options.closeable" :icon="true" class="mx-0" @click.native="open = false">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<style scoped>
  .ctn {
    width: 100%;
  }
</style>

<script>
export default {
  name: 'toast',
  props: {
    title: String,
    text: String,
    type: String,
    options: Object,
  },
  data() {
    return {
      open: false,
    }
  },
  watch: {
    open: function(val) {
      if (!val) {
        this.close()
      }
    },
  },
  beforeMount() {
    document.querySelector('#app').appendChild(this.$el)
  },
  mounted() {
    this.open = true
  },
  methods: {
    close() {
      if (this.open) this.open = false
      setTimeout(() => {
        this.$options.onClose()
        this.$destroy()
        removeElement(this.$el)
      }, 700) // wait for close animation
    },
  },
}

function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else {
    el.parentNode.removeChild(el)
  }
}
</script>
