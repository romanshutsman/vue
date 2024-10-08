<template>
    <section>
        <h2>Your Basket</h2>
        <h3>Total Amount:
            <base-badge mode="elegant">${{ basketTotal }}</base-badge>
        </h3>
        <ul>
            <cart-item
                    v-for="item in items"
                    :key="item.id"
                    :prod-id="item.id"
                    :title="item.title"
                    :image="item.image"
                    :price="item.price"
                    :qty="item.qty"
            ></cart-item>
        </ul>
    </section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
    components: {
        CartItem,
    },
    computed: {
        basketTotal() {
            return this.$store.getters.basketTotal.toFixed(2); // return this.$store.state.basket.total.toFixed(2);
        },
        items() {
            return this.$store.getters.basketItems;// return this.$store.state.basket.items;
        }
    }
};
</script>

<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
}

h2 {
    color: #292929;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 1rem;
}

h3 {
    text-align: center;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>