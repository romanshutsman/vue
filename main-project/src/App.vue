<template>
    <TheHeader></TheHeader>
    <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
    name: "App",
    components: {
        TheHeader
    }
}
</script>

<style >

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}
</style>