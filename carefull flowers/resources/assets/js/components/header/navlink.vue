<template>
<li v-if="category.childrens.length === 0">
    <router-link :to="{name:'category',params:{slug:category.slug}}">{{category.name}}</router-link>
</li>
<li v-else>
    <v-menu offset-y open-on-hover>
      <router-link :to="{name:'category',params:{slug:category.slug}}" slot="activator">{{category.name}}<i class="material-icons">arrow_drop_down</i></router-link>
      <v-list>
        <v-list-tile
          v-for="children in category.childrens"
          :key="children.id"
          :to="{name:'subcategory',params:{pslug:category.slug,slug:children.slug}}"
          class="sublink"
        >
          <v-list-tile-title>{{ children.name }}</v-list-tile-title>
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
.v-list__tile__title {
  display: flex;
  color: black;
  transition: 0.2s linear;
  font-weight: bold;
  text-transform: uppercase;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  line-height: 32px;
  padding: 14px 16px;
  font-size: 16px;
}
.sublink {
  transition: 0.2s linear;
  height: 64px;
  display: flex;
  align-items: center;
}
.sublink:hover {
  background-color: #ffaf60 !important;
}
.sublink:hover .v-list__tile__title {
  color: #fff !important;
}
.v-menu__content {
  box-shadow: none;
}
.v-list {
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  height: auto !important;
  width: auto !important;
}
a.subcat:hover {
  color: white !important;
  background-color: #ffaf60 !important;
}
a.subcat {
  color: black !important;
}

.v-menu__activator--active a {
  background-color: black !important;
  color: #fff !important;
}
.v-menu__activatora i {
  transform: rotate(0deg);
}
.v-menu__activator--active a i {
  transform: rotate(180deg);
}
a {
  background-color: #fff;
  color: black !important;
  display: flex;
  transition: 0.2s linear;
  font-weight: bold;
  padding: 0 15px;
  font-size: 1rem;
  line-height: 64px;
  cursor: pointer;
  text-transform: uppercase;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
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
