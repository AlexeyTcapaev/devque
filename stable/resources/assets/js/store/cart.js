import cookies from "js-cookie";
import store from ".";
export default {

    state: {
        products: [],
        count: 0
    },
    getters: {
        cartCount(state) {
            return state.count;
        },
        Products(state) {
            return state.products
        },
        Product: (state) => (index) => {
            return state.products[index];
        }
    },
    mutations: {
        AddProduct(state, product) {
            if (state.products.find(function (item) {
                    if (item.id === product.id)
                        return true
                    else return false
                })) {
                product.count++;
            } else {
                product.count = 1
                state.products.push(product)
            }
            state.count++;
        },
        DeleteProduct(state, index) {
            state.count -= state.products[index].count
            state.products.splice(index, 1);
        },
        IncCount(state) {
            state.count++
        },
        DecCount(state) {
            state.count--
        },
        ChangeCount(state) {
            let k = 0;
            state.products.forEach(function (item, i, arr) {
                k += Number(item.count)
            });
            state.count = k

        }
    },
    actions: {
        AddProduct(state, product) {
            store.commit('AddProduct', product)
        },
        DeleteProduct(state, index) {
            store.commit('DeleteProduct', index)
        },
        IncCount(state, index) {
            store.commit('IncCount', index)
        },
        DecCount(state, index) {
            store.commit('DecCount', index)
        },
        ChangeCount(state, obj) {
            store.commit('ChangeCount', obj)
        }
    },
    strict: process.env.NODE_ENV !== "production"
}