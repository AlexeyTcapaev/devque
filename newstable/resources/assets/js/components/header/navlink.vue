<template>
<li v-if="category.childrens.length === 0">
    <router-link :to="{name:'category',params:{slug:category.slug}}">{{category.name}}</router-link>
</li>
<li v-else>
    <v-menu :open-on-hover="true" content-class="menu">
        <router-link :to="{name:'category',params:{slug:category.slug}}" slot="activator">{{category.name}}<i class="material-icons">arrow_drop_down</i></router-link>
        <v-list>
          <v-list-tile v-for="child in category.childrens" :key="child.id">
            <v-list-tile-title><router-link :to="{name:'subcategory',params:{pslug:category.slug,slug:child.slug}}">{{child.name}}</router-link></v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
</li>
</template>
<script>
export default {
  props: ["category"],
  data: () => {
    return {};
  },
  mounted() {}
};
</script>
<style scoped>
a {
  background-color: #fff;
  color: black !important;
}
a i {
  transition: 0.2s linear;
}
a:hover {
  background-color: black !important;
  color: #fff !important;
}
.list__tile__title a:hover {
  color: white;
  background-color: #ffaf60 !important;
}
div.menu {
  width: 100%;
  position: relative;
}
div.list {
  position: absolute;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
}
.menu__activator--active a i {
  transform: rotate(180deg);
}
.menu__content,
.menuable__content__active {
  position: absolute !important;
}
</style>
