<template>
<div class="mycard">
    <div class="img"><img :src="'/uploads/'+product.image" :alt="product.name"></div>
    <div class="content">
        <h5>{{product.name}}</h5>
        <p v-if="product.description != 'null' && product.description != 'undefined'">
            {{product.description}}
        </p>
    </div>
    <div class="card-body">
        <div class="actions">
            <a @click="decrace" v-if="product.count > 1"><i class="material-icons">chevron_left</i></a>
            <v-text-field
            name="count"
            label="Количество"
            v-model="product.count"
            width="64px"
            @change="Change"
            type="number"
            ></v-text-field>
            <a @click="incrace"><i class="material-icons">chevron_right</i></a>
        </div>
        <div class="info">
            
        </div>
    </div>
    <a class="close" @click="DeleteProduct(number)"><i class="material-icons">close</i></a>
</div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  props: ["number"],
  methods: {
    ...mapActions(["DeleteProduct", "IncCount", "DecCount", "ChangeCount"]),
    Change() {
      this.ChangeCount({ number: this.number, count: +this.product.count });
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
    ...mapGetters(["Product"]),
    product() {
      return this.Product(this.number);
    }
  }
};
</script>
<style scoped>
.actions i.material-icons {
  font-size: 65px;
  color: #ffaf60;
  cursor: pointer;
}
.actions {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
a.close {
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #ffaf60;
}
.content {
  width: 70%;
}
.mycard {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 250px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ffaf60;
  margin: 10px 0;
}
.img {
  width: 226px;
  min-width: 226px;
  align-items: center;
  display: flex;
}
.img img {
  height: 100%;
  object-fit: contain;
}
.mycard .content {
  padding: 15px;
}
</style>
