<template>
<div class="card">
  <v-form class="myform" ref="form" v-model="valid" lazy-validation>
    <div class="card-image">
      <input type="file" multiple @change="onFileChange" accept="image/*" class="file" ref="file">
      <img :src="item.image" v-if="item.image">
    </div>
    <div class="card-content"> 
      <v-text-field label="Наименование" outline v-model="item.name" :rules="nameRules"></v-text-field>
      <v-text-field label="Описание" outline v-model="item.description"></v-text-field>
      <v-text-field  suffix="₽" label="Старая цена" outline v-model="item.oldprice"></v-text-field>
      <v-text-field  suffix="₽" label="Текущая цена" outline v-model="item.currentprice"></v-text-field>
      <v-text-field  suffix="см" label="Добавить длину" outline append-icon="add" @click:append="AddParam" v-model="option"></v-text-field>
      <ul class="params">
        <li v-for="(option, index) in item.options" :key="index">
          <v-chip close @input="deleteParams(index)" >{{option}}</v-chip>
        </li>
      </ul>
      <v-btn :disabled="!valid" @click="submit" flat>Создать</v-btn>
      <v-btn v-if="prod" :disabled="!valid" @click="update" flat>Обновить</v-btn>
      <v-btn v-if="prod" :disabled="!valid" @click="destroy" flat >Удалить</v-btn>
    </div>
  </v-form>
</div>       
</template>
<script>
export default {
  props: ["cat", "prod", "index"],
  data: () => ({
    item: {
      image: "/storage/img/plus.svg",
      options: []
    },
    option: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 50) || "> 10"
    ],
    priceRules: [
      v => !!v || "Price is required",
      v => (v && v.length > 1) || "> 1"
    ],
    isActive: true,
    valid: false
  }),
  mounted() {
    if (this.prod !== undefined) {
      this.prod.options = JSON.parse(this.prod.options);
      this.item = this.prod;
      this.item.image = "/storage/uploads/" + this.item.image;
    }
  },
  methods: {
    AddParam() {
      this.item.options.push(this.option);
    },
    deleteParams(index) {
      this.item.options.splice(index, 1);
    },
    destroy() {
      const init = this;
      axios
        .delete("/api/product/" + this.item.id)
        .then(function(resp) {
          console.log(resp);
          init.cat.products.splice(init.index, 1);
        })
        .catch(function(resp) {
          console.log(resp);
        });
    },
    onFileChange(e) {
      this.item.fileOnserver = this.$refs.file.files[0];
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
    },
    submit() {
      if (this.$refs.form.validate()) {
        let product = new FormData();
        product.append("image", this.$refs.file.files[0]);
        product.append("name", this.item.name);
        product.append("description", this.item.description);
        product.append("oldprice", this.item.oldprice);
        product.append("currentprice", this.item.currentprice);
        product.append("catalog_id", this.cat.id);
        product.append("id", this.item.id);
        product.append("options", JSON.stringify(this.item.options));
        const init = this;
        axios
          .post("/api/product", product)
          .then(function(resp) {
            console.log(resp);
            resp.data.options = JSON.parse(resp.data.options);
            init.cat.products.push(resp.data);
            init.$refs.form.reset();
            init.item.image = "/storage/img/plus.svg";
          })
          .catch(function(resp) {
            console.log(resp);
          });
      }
    },
    update() {
      if (this.$refs.form.validate()) {
        let product = new FormData();
        product.append("_method", "PATCH");
        product.append("image", this.$refs.file.files[0]);
        product.append("name", this.item.name);
        product.append("description", this.item.description);
        product.append("oldprice", this.item.oldprice);
        product.append("currentprice", this.item.currentprice);
        product.append("catalog_id", this.cat.id);
        product.append("id", this.item.id);
        product.append("options", JSON.stringify(this.item.options));
        const init = this;
        console.log(product.getAll("name"));
        axios
          .post("/api/product/" + this.item.id, product)
          .then(function(resp) {
            resp.data.options = JSON.parse(resp.data.options);
            init.item = resp.data;
            init.item.image = "/storage/uploads/" + resp.data.image;
          })
          .catch(function(resp) {
            console.log(resp);
          });
      }
    }
  }
};
</script>
<style scoped>
.params li {
  padding: 5px 0;
}
.card {
  display: block;
  width: 500px;
  border-radius: 2px;
  min-width: 0;
  position: relative;
  text-decoration: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
ul {
  padding: 0;
}
.padding {
  padding: 10%;
}
.myform {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 10px;
}
.btntest {
  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%);
}
.btntest:disabled {
  background: rgba(238, 238, 238, 0);
}
.card-action a {
  cursor: pointer;
}
button {
  width: 100%;
  margin: 0 !important;
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
  max-width: 48% !important;
}
.card-image {
  width: 50%;
  padding: 10px;
  height: 100%;
  transition: 0.2s linear;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image img {
  object-fit: cover;
  max-width: 100%;
}
.params li span {
  width: 100%;
}
.v-chip {
  margin: 0;
}
.v-chip .v-chip__content {
  width: 100% !important;
}
.card {
  margin: 10px;
}
</style>
