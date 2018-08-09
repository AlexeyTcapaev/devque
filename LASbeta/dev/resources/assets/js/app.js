/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);


import App from './components/App'
import Hello from './components/Hello'
import Home from './components/Home'
import UsersIndex from './components/UsersIndex';

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
    ],
});


const store = new Vuex.Store({
    state: {
        library: JSON.parse(`[
        { "id": 1,  "title": "Детское море", "author": "Николай Варухин", "genres": ["Наука", "Педагогика и воспитания", "Спорт"] },
        { "id": 2,  "title": "Владычица Озера", "author": "Анджей Сапковский", "genres": ["Фэнтези"] },
        { "id": 3,  "title": "Ловец человеков", "author": "Надежда Попова", "genres": ["Детектив", "Научная фантастика", "Тёмное фэнтези"] },
        { "id": 4,  "title": "Болтливый мертвец", "author": "Макс Фрай", "genres": ["Фэнтези"] },
        { "id": 5,  "title": "Меч Предназначения", "author": "Анджей Сапковский", "genres": ["Героический", "Фэнтези"] },
        { "id": 6,  "title": "Герцог де Л'Омлет", "author": "Эдгар Алан По", "genres": ["Классические детективы", "Проза"] },
        { "id": 7,  "title": "На байдарке", "author": "Феликс Квадригин", "genres": ["Спорт"] },
        { "id": 8,  "title": "Тубурская игра", "author": "Макс Фрай", "genres": ["Детектив", "Фэнтези"] },
        { "id": 9,  "title": "Маяк", "author": "Эдгар Алан По,", "genres": ["Классические детективы", "Проза"] },
        { "id": 10, "title": "Последнее желание", "author": "Анджей Сапковский", "genres": ["Героический", "Фэнтези"] }
       ]
       `),
        search: {
            str: "",
            label: ""
        }
    },
    getters: {
        book: (state, getters) => (bookid) => {
            return getters.filteredLibrary[bookid];
        },
        library(state) {
            return state.library;
        },
        search(state) {
            return state.search;
        },
        filteredLibrary(state) {
            return state.library.filter(book => {
                if (state.search.str === "") return true;
                else if (!Array.isArray(book[state.search.label]))
                    return book[state.search.label].toLowerCase().indexOf(state.search.str.toLowerCase()) > -1;
                else {
                    for (let index = 0; index < book[state.search.label].length; index++) {
                        if (book[state.search.label][index].toLowerCase().indexOf(state.search.str.toLowerCase()) > -1)
                            return book[state.search.label]
                    }
                }
            });
        }
    },
    strict: process.env.NODE_ENV !== "production",
    mutations: {
        DeleteBook(state, index) {
            state.library.splice(index, 1);
        },
        ChangeFilterStr(state, str) {
            state.search.str = str;
        },
        ChangeFilterLabel(state, label) {
            state.search.label = label;
        },
        ChangeBookTitle(state, title) {
            if (title.value !== '')
                state.library[title.id].title = title.value
        },
        ChangeBookAuthor(state, author) {
            if (author.value !== '')
                state.library[author.id].author = author.value
        },
        ChangeBookGenres(state, genres) {
            if (genres.value !== '')
                state.library[genres.id].genres.push(genres.value)
        },
        DeleteGenres(state, genres) {
            if (genres.value !== '')
                state.library[genres.id].genres.splice(state.library[genres.id].genres.indexOf(genres.value), 1)
        },
    },
    actions: {
        DeleteBook(store, index) {
            store.commit("DeleteBook", index);
        },
        ChangeFilterStr(store, str) {
            store.commit("ChangeFilterStr", str);
        },
        ChangeFilterLabel(store, label) {
            store.commit("ChangeFilterLabel", label);
        },
        ChangeBookTitle(store, title) {
            store.commit("ChangeBookTitle", title);
        },
        ChangeBookAuthor(store, author) {
            store.commit("ChangeBookAuthor", author);
        },
        ChangeBookGenres(store, genres) {
            store.commit("ChangeBookGenres", genres);
        },
        DeleteGenres(store, genres) {
            store.commit("DeleteGenres", genres);
        }
    }
});

const app = new Vue({
    el: '#app',
    store,
    components: {
        App
    },
    router
});