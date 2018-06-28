<template>
<div class="card horizontal">
    <form enctype="multipart/form-data">
        <div class="card-image">
            <input type="file" multiple @change="onFileChange($event)" accept="image/*" class="file">
            <img :src="item.image" :class="{ padding: isActive }">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    </form>
</div>             
</template>
<script>
export default {
  props: ["catid"],
  data: () => ({
    item: {
      image: "/img/plus.svg"
    },
    isActive: true
  }),
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(this.item, files[0]);
      this.isActive = false;
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = e => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(item) {
      item.image = false;
    }
  }
};
</script>
<style scoped>
.padding {
  padding: 30%;
}
form {
  display: flex;
  align-items: center;
}
.file {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 4;
  opacity: 0;
}
.horizontal {
  align-items: center;
  justify-content: center;
  position: relative;
}
.card-image {
  width: 50%;
  height: 100%;
  transition: 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image img {
  object-fit: cover;
  max-width: 200px;
  max-height: 200px;
}
.card-image:hover {
  background-color: rgb(238, 238, 238);
}
</style>
