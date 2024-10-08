export default {
    login(context) {
        context.commit('setAuth', {isAuth: true});
    },
    logout(context) {
        context.commit("setAuth", {isAuth: false})
    },
    addProductToBasket(context, payload) {
        context.commit('addProductToBasket', payload);
    },
    removeFromBasket(context, payload) {
        context.commit('removeFromBasket', payload);
    }
}