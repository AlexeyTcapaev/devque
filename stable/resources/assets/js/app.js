require('./bootstrap');
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
Vue.use(VueRouter)
Vue.use(Vuex)
const options = {
    color: '#ffaf60',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.4s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
Vue.use(VueProgressBar, options)
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const App = () =>
    import ('./components/App.vue');
const index = () =>
    import ('./components/index.vue');
const login = () =>
    import ('./components/login.vue');
const admin = () =>
    import ('./components/admin.vue');
const catalog = () =>
    import ('./components/catalog.vue');
const products = () =>
    import ('./components/products.vue');
const magazine = () =>
    import ('./components/magazine.vue');
const category = () =>
    import ('./components/category.vue');
const subcategory = () =>
    import ('./components/subcategory.vue');
const registration = () =>
    import ('./components/Registration.vue');
const search = () =>
    import ('./components/search.vue');
const cart = () =>
    import ('./components/cart.vue');

import Meta from 'vue-meta'
Vue.use(Meta)
import Router from 'vue-router'
import Vuetify from 'vuetify';
Vue.use(Vuetify)
Vue.use(Router)
const auth = {
    loggedIn: function () {
        return true;
    }
}
const routes = [{
    name: "admin",
    path: "/admin",
    component: admin,
    children: [{
            path: "catalog",
            name: "catalog",
            component: catalog,
        },
        {
            path: "products",
            name: "products",
            component: products,
        }
    ],
    meta: {
        requiresAuth: true
    },
}, {
    path: "/",
    component: magazine,
    meta: {
        linkText: "Главная"
    },
    children: [{
            name: "magazine",
            path: "/",
            component: index,
        },
        {
            name: "search",
            path: "search/:str",
            component: search,
        },
        {
            name: "login",
            path: "/login",
            component: login,
        },
        {
            name: "registration",
            path: "/registrate",
            component: registration,

        },
        {
            name: "cart",
            path: "/cart",
            component: cart,
        },
        {
            name: "subcategory",
            path: ":pslug/:slug",
            component: subcategory,
        },
        {
            name: "category",
            path: ":slug",
            component: category,
        },


    ]
}]
export const router = new VueRouter({
    routes,
    mode: "history"
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // этот путь требует авторизации, проверяем залогинен ли
        // пользователь, и если нет, перенаправляем на страницу логина
        if (!auth.loggedIn()) {
            next({
                path: '/login',
                /*query: {
                    redirect: to.fullPath
                }*/
            })
        } else {
            next()
        }
    } else {
        next() // всегда так или иначе нужно вызвать next()!
    }
})
import store from './store/index'
const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});