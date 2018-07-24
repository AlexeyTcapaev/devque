<template>
<div class="custom-card">
    <div class="img">
        <img :src="'/storage/uploads/'+prod.image">
    </div>
    <div class="con">
        <h6>{{prod.name}}</h6>
        <div class="card-prices">

            <span class="new">{{prod.currentprice}} ₽</span>
        </div>
        <div class="card-magazine-buttons">
            <v-dialog v-model="dialogForCart" max-width="290">
                <v-btn slot="activator" class="buy btn-flat">В корзину</v-btn>
                <v-card>
                    <div class="modal-wrapper">
                        <div class="modal-img">
                            <img :src="'/storage/uploads/'+prod.image">
                        </div>
                        <div class="modal-content">
                            <div class="close"><a  @click="dialogForCart = false"><i class="material-icons">close</i></a></div>                          
                            <div class="properties">                           
                                <h4>{{prod.name}}</h4>
                                <div class="row">
                                    <p>Цена за штуку
                                        <span>Без упаковки</span>
                                    </p>
                                    <h6>{{prod.currentprice}} ₽</h6>
                                </div>
                                <div class="row">
                                  <v-text-field label="Количество цветов для заказа" single-line outline v-model="prod.count" mask="###"></v-text-field>
                                </div>
                                 <div class="row">
                                     <v-select
                                        :items="prod.options"
                                        v-model="targetoption"
                                        item-value="item"
                                        return-object
                                        label="Выберите длину"
                                        outline
                                        item-text="option"
                                        suffix="см"
                                      ></v-select>                                     
                                 </div>
                                  <div class="row">
                                     <v-select
                                        :items="prod.options"
                                        v-model="targetoption"
                                        item-value="item"
                                        return-object
                                        label="Выберите упаковку"
                                        outline
                                        item-text="option"
                                      ></v-select>
                                  </div>
                                  <div class="row">
                                    <img src="/storage/img/box.png">
                                  </div>                         
                            </div>
                            <v-spacer></v-spacer>
                            <div class="modal-footer">
                                <div class="row">
                                    <p>Итоговая цена:
                                        <span> С упаковкой, лентой и дополнениями</span>
                                    </p>
                                    <h6 v-if="prod.count > 0 && targetoption.price > 0 ">{{(Number(prod.currentprice) + Number(targetoption.price))*prod.count}} руб.</h6>
                                    <h6 v-else>{{prod.currentprice}} руб.</h6>
                                </div>
                                <v-btn :disabled="check" class="buy btn-flat" @click.native="dialogForCart = false" @click="ToCart">Добавить</v-btn>

                            </div>
                        </div>
                    </div>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogForBuy" max-width="290">
                <v-btn slot="activator" class="buy btn-flat">Купить в 1 клик</v-btn>
                <v-card>
                    <v-card-title class="headline">Оставьте свой телефон и мы обязательно свяжемся с вами</v-card-title>
                     <v-text-field class="phone" label="Телефон" single-line outline v-model="phone" mask="(###) ### ## ##"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn  class="buy btn-flat" flat @click.native="dialogForBuy = false">Отмена</v-btn>
                        <v-btn class="buy btn-flat" flat @click.native="dialogForBuy = false" @click="SendPhone">Подтвердить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </div>
    </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["prod"],
  methods: {
    ...mapActions({ AddProduct: "cart/AddProduct" }),
    ToCart() {
      this.prod.targetoption = this.targetoption;
      let a = { ...this.prod };
      this.AddProduct(a);
    },
    Buy() {},
    SendPhone() {}
  },
  data: () => ({
    dialogForBuy: false,
    dialogForCart: false,
    targetoption: "",
    phone: ""
  }),
  computed: {
    check() {
      if (this.prod.count) return false;
      else return true;
    }
  }
};
</script>
<style>
.modal-img img {
}
.row img {
  width: 30%;
  object-fit: contain;
}
.phone {
  margin: 20px !important;
  width: 300px;
}
div.close {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
div.close a {
  color: #ffaf60;
}
.properties h4 {
  text-align: center;
}
.properties {
  width: 100%;
}
.row h6 {
  font-weight: bold;
  color: #ffaf60;
  font-size: 2.5rem;
}
.row {
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
}
.modal-footer .row p {
  display: flex;
  flex-direction: column;
}
.modal-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  align-items: center;
}
.modal-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.primary--text {
  color: #ffaf60 !important;
}
.v-text-field--outline .v-input__slot {
  border-radius: 0 !important;
}
.v-btn__content {
  color: #ffffff !important;
}
.input-field {
  margin: 0 0 0 15px;
}
.custom-card {
  max-width: 370px;
  min-width: 335px;
  padding: 15px;
  transition: 0.1s linear;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-wrapper {
  display: flex;
  height: 100%;
}
.modal-img {
  overflow: hidden;
  width: 50%;
  min-width: 50%;
  display: flex;
}
h4 {
  font-size: 2.28rem;
  line-height: 110%;
  margin: 1.14rem 0 0.912rem 0;
}

.v-dialog {
  max-width: 60% !important;
  width: initial !important;
}
.custom-card .img img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
}
.properties p {
  display: flex;
  flex-direction: column;
  margin: 0;
}
.properties .row h6 {
  font-weight: bold;
  color: #ffaf60;
  font-size: 2.5rem;
}
.custom-card .con {
  width: 100%;
}

.custom-card .con h6 {
  text-align: center;
  font-weight: bold;
}
.card-prices {
  display: flex;
  justify-content: center;
}
.card-prices span.new {
  color: #ffaf60;
}
.card-prices span {
  font-size: 2rem;
  font-weight: bold;
  margin: 0 20px 0 20px;
}
.card-magazine-buttons {
  display: flex;
  justify-content: space-between;
}
.card-magazine-buttons a {
  color: #ffffff;
  padding: 0 1rem;
}
.buy {
  background-color: #ffaf60;
  border-radius: 0;
  color: #ffffff;
  align-items: center;
  transition: 0.2s linear;
}
.custom-card:hover {
  border: 2px solid #ffaf60;
}
.flower-preset {
  flex: 1;
  justify-content: space-between;
}
.properties p {
  display: flex;
  flex-direction: column;
  margin: 0;
}
.v-text-field__details {
  display: none;
}
</style>
