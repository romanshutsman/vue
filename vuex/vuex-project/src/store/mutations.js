export default {
    setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
    },
    addProductToBasket(state, payload) {
        const addNew = () => {
            state.basket.items.push({...payload, qty: 1});
            state.basket.qty = state.basket.qty + 1
            state.basket.total = state.basket.total + payload.price;
        }
        if(!state.basket.items.length) {
            addNew()
        } else {
            const hasAlready = state.basket.items.find(i => i.id === payload.id);
            if (hasAlready) {
                hasAlready.qty = hasAlready.qty + 1;
                state.basket.qty = state.basket.qty + 1 // depends on requirements
                state.basket.total = state.basket.total + payload.price;
            } else {
                addNew()
            }
        }
    },
    removeFromBasket(state, id) {
        const found = state.basket.items.find(i => i.id === id);
        if(found) {
            state.basket.qty = state.basket.qty - 1;
            state.basket.total = state.basket.total - found.price;
            if(found.qty > 1) {
                found.qty = found.qty - 1;
            } else {
                state.basket.items = state.basket.items.filter(i => i.id !== id)
            }
        }

    }
};
