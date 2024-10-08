export default {
    isUserAuth(state) {
        return state.isLoggedIn;
    },
    basketQty(state) {
        return state.basket.qty;
    },
    basketTotal(state) {
        return state.basket.total;
    },
    basketItems(state) {
        return state.basket.items;
    },
    getProducts(state) {
        return state.products;
    }
}