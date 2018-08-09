require('./bootstrap');
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuex from 'vuex'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify';
import VueProgressBar from 'vue-progressbar'
import Meta from 'vue-meta'
import store from './store/index'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Vuetify)
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
const Magazine = () =>
    import ('./components/Magazine.vue');
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
const packs = () =>
    import ('./components/packs.vue');
const carouseladmin = () =>
    import ('./components/carouseladmin.vue');
const indexsetting = () =>
    import ('./components/indexsetting.vue');

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
            },
            {
                path: "packs",
                name: "packs",
                component: packs,
            },
            {
                path: "carouseladmin",
                name: "carouseladmin",
                component: carouseladmin,
            },
            {
                path: "indexsetting",
                name: "indexsetting",
                component: indexsetting,
            }
        ],
        beforeEnter: (to, from, next) => {
            axios
                .post(
                    "/api/user/details", {}, {
                        headers: {
                            Accept: "application/json",
                            Authorization: "Bearer " + store.state.user.token
                        }
                    }
                )
                .then(function (resp) {
                    if (resp.data.success.admin === 1)
                        next();
                    else {
                        next({
                            path: "/"
                        });
                    }
                }).catch(function (error) {
                    next({
                        path: "/"
                    });
                });

        }
    },

    {
        path: "/",
        component: Magazine,
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
    }
]
export const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});