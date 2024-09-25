<template>
    <input type="text" v-model="name">
    <input type="number" v-model="age">
    <button @click="apply()">Apply</button>
</template>

<script>
export default {
    props: ['user'],
    emits: ['change-user'],
    data() {
        return {
            name: null,
            age: null
        }
    },
    methods: {
        apply() {
            this.$emit('change-user', {name: this.name, age: this.age});
        }
    },
    mounted() {
        this.name = this.user.name;
        this.age = this.user.age;
    }
}
</script>