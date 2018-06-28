<template>
<li v-if="children.length == 0">
    <router-link :to="to">{{name}}</router-link>
</li>
<li v-else>
    <router-link class="dropdown-trigger"  :to="to" :data-activates="name">{{name}} <i class="material-icons">arrow_drop_down</i></router-link>
    <ul :id="name" class="dropdown-content">
        <li v-for="child in children" :key="child.name">
              <router-link :to="child.to">{{child.name}}</router-link>
        </li>

    </ul>
</li>  
</template>
<script>
export default {
  data: () => {
    return {
      name: "world",
      to: "",
      children: []
    };
  }
};
</script>
<style scoped>
a {
  background-color: #fff;
  color: black !important;
}
a:hover {
  background-color: black !important;
  color: #fff !important;
}
</style>