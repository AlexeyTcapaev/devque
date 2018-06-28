<template>
    <div>     
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | La Flowers", // title is now "My Example App - Yay!"
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>
