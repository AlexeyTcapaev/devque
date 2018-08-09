export default {
    namespaced: true,
    state: JSON.parse(localStorage.getItem('cart')) || {
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
                        if (item.targetoption.id === product.targetoption.id)
                            return true
                    else return false
                })) {
                item.count = Number(item.count) + Number(product.count);
                state.count = Number(state.count) + Number(product.count);
            } else {
                state.products.push(product)
                state.count = Number(state.count) + Number(product.count)
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        DeleteProduct(state, index) {
            state.count -= state.products[index].count
            state.products.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        IncCount(state) {
            state.count++;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        DecCount(state) {
            state.count--;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        ChangeCount(state, obj) {
            state.products.forEach(prod => {
                if (prod.id === obj.product.id) {
                    prod = obj.product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state));
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
    },
}