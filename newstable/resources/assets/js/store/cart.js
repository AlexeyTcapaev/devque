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
            /*if (state.products.find(function (item) {
                    if (item.id === product.id)
                        return true
                    else return false
                })) {
                product.count++;
            } else {
                product.count = 1
               
            }*/
            state.products.push()
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
            state.commit('AddProduct', product)
        },
        DeleteProduct(state, index) {
            state.commit('DeleteProduct', index)
        },
        IncCount(state, index) {
            state.commit('IncCount', index)
        },
        DecCount(state, index) {
            state.commit('DecCount', index)
        },
        ChangeCount(state, obj) {
            state.commit('ChangeCount', obj)
        }
    }
}