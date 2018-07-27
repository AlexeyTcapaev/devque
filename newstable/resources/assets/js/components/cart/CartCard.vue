<template>
<div class="mycard">
    <div class="cimg">
        <img :src="'/storage/uploads/'+product.image" :alt="product.name">
    </div>
    <div class="content cl">
        <h1>{{product.name}}</h1>
        <h5 v-if="product.description != 'null' && product.description != 'undefined'">
            {{product.description}}
        </h5>
    </div>
    <div class="options cl">
        <v-select :items="product.options" v-model="product.targetoption" item-value="item" return-object label="Выбранная длина"
            outline item-text="option" @change="Change"></v-select>
        <v-select @change="Change" :items="packs" v-model="product.selectpack" item-value="item" return-object label="Выбранная упаковка" outline item-text="name">
            <template slot="selection" slot-scope="data">
                {{ data.item.name }} - {{ data.item.price }} ₽
            </template>
            <template slot="item" slot-scope="data">
                <v-list-tile-avatar>
                    <img v-bind:src="'/storage/uploads/'+data.item.image" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="data.item.price+ ' ₽'"></v-list-tile-sub-title>
                </v-list-tile-content>
            </template>
        </v-select>

        <img v-if="product.selectpack.image" :src="'/storage/uploads/'+product.selectpack.image">
    </div>
    <div class="card-body cl">
        <div class="actions">
            <a @click="decrace" v-if="product.count > 1">
                <i class="material-icons">chevron_left</i>
            </a>
            <v-text-field name="count" label="Количество" v-model="product.count" width="64px" type="number"></v-text-field>
            <a @click="incrace">
                <i class="material-icons">chevron_right</i>
            </a>
        </div>

        <div class="card-info">          
            <span>Цена за 1шт. :
                <p>{{product.currentprice}} ₽</p>
            </span>
            <span>Сумма:
                <p>{{((Number(product.currentprice) + Number(product.targetoption.price)) * Number(product.count)) + Number(product.selectpack.price)}} ₽</p>
            </span>
        </div>
    </div>
    <a class="close" @click="DeleteProduct(number)">
        <i class="material-icons">close</i>
    </a>
</div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["number"],
  methods: {
    ...mapActions({
      DeleteProduct: "cart/DeleteProduct",
      IncCount: "cart/IncCount",
      DecCount: "cart/DecCount",
      ChangeCount: "cart/ChangeCount"
    }),
    Change() {
      this.ChangeCount({
        product: this.product
      });
    },
    decrace() {
      this.product.count--;
      this.DecCount();
    },
    incrace() {
      this.product.count++;
      this.IncCount();
    }
  },
  computed: {
    ...mapGetters({ Product: "cart/Product" }),
    ...mapGetters({ packs: "packs/packs" }),
    product() {
      return this.Product(this.number);
    }
  }
};
</script>
<style>
.options {
  flex-grow: 0 !important;
  max-width: 300px;
}
.card-info {
  display: flex;
  align-items: flex-start;
  padding: 0 15px;
  justify-content: center;
  flex-direction: column;
}
.card-info span {
  display: flex;
  font-size: 20px;
  flex-direction: row;
}
.card-info span p {
  color: #ffaf60;
  font-weight: bold;
  margin: 0 0 0 10px;
}
.options img {
  height: 125px;
  object-fit: contain;
}
.actions i.material-icons {
  font-size: 65px;
  color: #ffaf60;
  cursor: pointer;
}
.cl {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
}
.v-text-field--outline .v-input__slot {
  background: transparent !important;
  border-radius: 0px !important;
}
.actions {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.card-body {
  justify-content: space-between;
}
.v-input {
  flex-grow: 0;
}
a.close {
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #ffaf60;
}
.content {
  width: 35%;
}
.primary--text {
  color: #ffaf60 !important;
}
.v-text-field--outline .v-input__slot {
  border-radius: 0 !important;
}
.mycard {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 315px;
  padding: 10px 20px 10px 10px;
  box-sizing: border-box;
  border: 2px solid #ffaf60;
  margin: 10px 0;
}
.cimg {
  width: 226px;
  min-width: 226px;
  align-items: center;
  overflow: hidden;
}
.cimg img {
  height: 100%;
  object-fit: contain;
}
</style>
