<template>
<div class="card horizontal">
    <v-form ref="form" v-model="valid" lazy-validation>
        <div class="card-image">
            <input type="file" multiple @change="onFileChange($event)" accept="image/*" class="file" ref="file">
            <img :src="item.image" :class="{ padding: isActive }">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                 <v-text-field
                    id="name"
                    name="input-1"
                    label="Наименование"
                    v-model="item.name"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    id="desc"
                    name="input-2"
                    label="Описание"
                     v-model="item.description"
                  ></v-text-field>
                  <v-text-field
                    id="oldprice"
                    name="input-3"
                    label="Старая цена"
                    prefix=" руб."
                    type="number"
                    v-model="item.oldprice"
                  ></v-text-field>
                  <v-text-field
                    id="currentprice"
                    name="input-4"
                    prefix=" руб."
                    label="Текущая цена"
                    type="number"
                    v-model="item.currentprice"
                    :rules="priceRules"
                    required              
                  ></v-text-field>
            </div>
            <div class="card-action">
               <v-btn v-if="prod === undefined" :disabled="!valid"
                  class="btntest"
                  @click="submit"
                  flat large >
                  Сохранить
                </v-btn>
                 <v-btn v-else :disabled="!valid"
                  class="btntest"
                  @click="update"
                  flat large >
                  Обновить
                </v-btn>
            </div>
        </div>
    </v-form>
</div>             
</template>
<script>
export default {
  props: ["cat", "prod"],
  data: () => ({
    item: {
      image: "/img/plus.svg"
    },
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
      this.item = this.prod;
      this.item.image = "/uploads/" + this.item.image;
    }
  },
  methods: {
    onFileChange(e) {
      this.item.fileOnserver = this.$refs.file.files[0];
      console.log(this.item.fileOnserver);
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
        const init = this;
        axios
          .post("/api/product", product)
          .then(function(resp) {
            console.log(resp);
            //this.$emit("AddProduct", resp);
            init.cat.products.push(resp);
            init.$refs.form.reset();
          })
          .catch(function(resp) {
            console.log(resp);
          });
      }
    },
    update() {
      axios
        .patch("/api/product/" + this.item.id, this.item)
        .then(function(resp) {
          category = resp.data;
        })
        .catch(function(resp) {
          console.log(resp);
        });
    }
  }
};
</script>
<style scoped>
.padding {
  padding: 10%;
}
form {
  display: flex;
  align-items: center;
  width: 100%;
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
  height: 100%;
  transition: 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image img {
  object-fit: cover;
  max-width: 24vw;
  max-height: 455px;
}
.card-image:hover {
  background-color: rgb(238, 238, 238);
}
.card {
  margin: 10px;
}
</style>
