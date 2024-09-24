const app = Vue.createApp({
    data() {
        return {
            keyDownText: '',
            keyDownEnterText: '',
        }
    },
    methods: {
        showAlert() {
            alert('Show Alert!');
        },
        keyDown(e) {
            this.keyDownText = e.target.value;
        },
        keyDownEnter(e) {
            this.keyDownEnterText = e.target.value;
        }
    }
});

app.mount('#assignment')