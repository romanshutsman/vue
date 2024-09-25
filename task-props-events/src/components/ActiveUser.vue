<template>
    <h2>{{user?.name}}</h2>
    <h2>{{user?.age}}</h2>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {}
    }
}
</script>