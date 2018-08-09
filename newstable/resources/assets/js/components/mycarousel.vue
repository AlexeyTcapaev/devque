<template>
<v-carousel hide-delimiters cycle v-if="slides.length > 0">
    <v-carousel-item v-for="(item,i) in slides" :key="i" :src="'/storage/uploads/'+item.image">
        <div class="container carc">
            <div class="car-cont">
                <h2>{{item.product.name}}</h2>
                <span class="info-block" v-if="item.product.description !== 'undefined'">{{item.product.description}}</span>
                <div class="prices">
                    <span class="old-price">{{item.product.oldprice}} ₽</span>
                    <span class="new-price">{{item.product.currentprice}} ₽</span>
                </div>
                <a class="btn-large waves-effect buy"></a>
                <v-btn  class="buy btn-flat" flat >Купить</v-btn>
            </div>

            <img class="iimg" :src="'/storage/uploads/'+item.product.image">

        </div>
    </v-carousel-item>
</v-carousel>
</template>
<script>
export default {
  data: () => ({
    slides: [
      {
        product: {
          name: ""
        }
      }
    ]
  }),
  beforeCreate() {
    const init = this;
    axios.get("/api/carousel").then(function(resp) {
      init.slides = resp.data;
    });
  }
};
</script>
<style scoped>
.v-jumbotron >>> .v-jumbotron__image {
  height: 100%;
  width: 100vw;
}
.v-jumbotron >>> .v-jumbotron__wrapper {
  overflow: inherit !important;
}
.v-carousel {
  overflow: inherit !important;
  box-shadow: none !important;
  margin-bottom: 5%;
}
.carc {
  height: 100%;
  position: relative;
}
.buy {
  margin: 0;
  background-color: #ffaf60;
  border-radius: 0;
  color: #ffffff;
  align-items: center;
  transition: 0.2s linear;
}
.iimg {
  width: 30%;
  bottom: -20%;
  right: 0;
  position: absolute;
}
.car-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  z-index: 999;
  height: 100%;
}
.car-cont h2 {
  font-weight: 500;
  line-height: 32px;
  color: white;
  text-align: left;
  margin: 1.78rem 0 1.424rem 0;
  font-size: 3rem !important;
  text-transform: uppercase;
}
.info-block {
  color: white;
  text-align: left;
  font-size: 1.5rem;
}
.prices {
  margin: 20px 0 20px 0;
}
.prices .old-price {
  color: #ababab !important;
  text-transform: uppercase;
  text-decoration: line-through !important;
  font-weight: bold;
  font-size: 1.9rem;
}
.prices .new-price {
  color: #ffaf60 !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.8rem;
}
.prices span {
  margin: 0 15px 0 0;
}
</style>


