<template>
    <section>
        <base-card>
            <h2>How was you learning experience?</h2>
            <form @submit.prevent="submitSurvey">
                <div class="form-control">
                    <label for="name">Enter body</label>
                    <input type="text" id="name" name="name" v-model.trim="body"/>
                </div>
                <h3>My learning experience was ...</h3>
                <div class="form-control">
                    <input type="radio" id="rating-poor" value="title1" name="rating" v-model="title"/>
                    <label for="rating-poor">Title 1</label>
                </div>
                <div class="form-control">
                    <input
                            type="radio"
                            id="rating-average"
                            value="title2"
                            name="rating"
                            v-model="title"
                    />
                    <label for="rating-average">Title 2</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-great" value="title4" name="rating" v-model="title"/>
                    <label for="rating-great">Title3</label>
                </div>
                <p
                        v-if="invalidInput"
                >One or more input fields are invalid. Please check your provided data.</p>
                <p v-if="error">{{ error }}</p>
                <div>
                    <base-button>Submit</base-button>
                </div>
            </form>
        </base-card>
    </section>
</template>

<script>

export default {
    data() {
        return {
            body: '',
            title: null,
            invalidInput: false,
            error: null,
        };
    },
    methods: {
        submitSurvey() {
            if (this.body === '' || !this.title) {
                this.invalidInput = true;
                return;
            }
            this.invalidInput = false;
            this.error = null;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.title,
                    body: this.body,
                    userId: Math.random(),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json))
                .catch((error) => {
                    this.error = error.message;
                });

            this.body = '';
            this.title = null;
        },
    },
};
</script>

<style scoped>
.form-control {
    margin: 0.5rem 0;
}

input[type='text'] {
    display: block;
    width: 20rem;
    margin-top: 0.5rem;
}
</style>