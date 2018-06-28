<template>
    <div class="wrapper">
    <aside class="nav">
        <ul>
            <li>
                <router-link class="link waves-effect waves-cyan" to="/">
                    <i class="material-icons">web</i>
                    <span class="nav-text">На сайт</span>
                </router-link>
            </li>
            <li>
                <router-link class="link waves-effect waves-cyan" to="/admin/catalog">
                    <i class="material-icons">view_list</i>
                    <span class="nav-text">Каталог</span>
                </router-link>
            </li>
            <li>
                <router-link class="link waves-effect waves-cyan" to="/admin/products">
                    <i class="material-icons">shopping_basket</i>
                    <span class="nav-text">Товары</span>
                </router-link>
            </li>
            
        </ul>
    </aside>
    <div class="content">
        <router-view ></router-view>
    </div>
    </div>
</template>
<script>
export default {
  metaInfo: {
    title: ""
  }
};
</script>
<style scoped>
html {
  overflow-y: hidden !important;
}
.content {
  padding: 20px;
  width: 100%;
  height: 100vh;
  width: calc(100% - 300px);
  overflow-y: scroll;
}
aside.nav {
  min-width: 300px;
  height: 100vh;
  background: linear-gradient(45deg, #00aeff 50%, #3369e6 100%) !important;
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.link {
  border-bottom-right-radius: 24px;
  border-top-right-radius: 24px;
  color: #ffffff;
  border-left: 2px solid transparent;
  margin: 10px 0 10px 0;
  display: flex;
  width: 90%;
  height: 100%;
  padding: 10px;
  align-items: center;
  font-size: initial;
  box-sizing: border-box;
  -webkit-transition: color 0.28s ease, background-color 0.28s ease;
  transition: color 0.28s ease, background-color 0.28s ease;
}
.link i {
  margin: 0 15px 0 15px;
}
.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.8);
  color: #f80b37;
  border-left: #f80b37 solid 3px;
}
</style>