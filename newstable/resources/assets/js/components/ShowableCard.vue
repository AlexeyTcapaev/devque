<template>
<div class="custom-card">
    <div class="img">
        <img :src="'/uploads/'+prod.image">
    </div>
    <div class="con">
        <h6>{{prod.name}}</h6>
        <div class="card-prices">

            <span class="new">{{prod.currentprice}}</span>
        </div>
        <div class="card-magazine-buttons">
            <a class="waves-effect  buy btn-flat" @click="AddProduct(prod)">В корзину</a>
            <a class="waves-effect  buy btn-flat" @click="Buy">Купить в 1 клик</a>

        </div>
    </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["prod"],
  methods: {
    ...mapActions(["AddProduct"]),
    Buy() {}
  },
  data: () => ({
    dialog: false
  })
};
</script>
<style scoped>
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
.custom-card .img img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
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
</style>
