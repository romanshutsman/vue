<template>
    <active-user
        :user="currentUser"
    ></active-user>
    <user-data :user="currentUser" @change-user="updateUser"></user-data>
</template>

<script>
export default {
    data() {
        return {
            currentUser: {
                name: 'Roman',
                age: 28
            }
        }
    },
    methods: {
        updateUser(user) {
            this.currentUser = user;
        }
    }
}
</script>