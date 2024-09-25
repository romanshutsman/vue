<template>
    <form>
        <label for="name">Name:</label>
        <input type="text" name="name" v-model="name" >

        <label for="phoneNumber">Phone:</label>
        <input type="text" name="phoneNumber" v-model="phone" >

<!--        <label for="isFavorite">Is Favorite:</label>-->
<!--        <input type="text" name="isFavorite" >-->
        <button @click.prevent="save"
                :style="{background: isDisabled ? 'gray': '#ff0077'}"
                :disabled="isDisabled">Submit</button>
    </form>
</template>





<script>
export default {
    emits: ['new-user'],
    data() {
        return {
            name: '',
            phone: '',
            isFavorite: false
        }
    },
    computed: {
        isDisabled() {
            return !(this.name && this.phone);
        }
    },
    methods: {
        save() {
            this.$emit('new-user', {
                id: Math.random().toString(),
                name: this.name,
                phone: this.phone,
                email: '',
                isFavorite: false,
            });

            this.name = '';
            this.phone = '';

        }
    }
}

</script>









<style>
#app input {
    font: inherit;
    padding: 0.15rem;
}
#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div {
    margin: 1rem 0;
}
</style>