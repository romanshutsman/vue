const app = Vue.createApp({
    data(){
        return {
            result: 0
        }
    },
    watch: {
        label(value) {
            setTimeout(() => this.result = 0, 5000);
        }
    },
    methods: {
        add(number) {
            this.result = this.result + number;
        }
    },
    computed: {
        label() {
            if (this.result > 37) return 'Too much!';
            if (this.result < 37) return 'Not yet there!';
            return 'Exactly';
        }
    }
});


app.mount('#assignment')