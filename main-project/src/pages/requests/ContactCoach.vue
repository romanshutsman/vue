<template>
    <form @submit.prevent="submit">
        <div class="form-control">
            <label for="email">Your email:</label>
            <input type="text" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message">Your Message:</label>
            <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>

<script>

export default {
    name: "ContactCoach",

    data() {
        return {
            email: '',
            message: ''
        }
    },
    methods: {
        submit() {
            const body = {
                message: this.message,
                email: this.email,
                coachId: this.$route.params.id
            };
            this.$store.dispatch('requests/contactCoach', body)
            this.$router.replace('/coaches');
        }
    }
}
</script>

<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}
</style>