const app = Vue.createApp({
    data(){
        return {
            text: '',
            toggleBtn: true,
            color: ''
        }
    },
    methods: {
        toggle() {
            this.toggleBtn = !this.toggleBtn;
        }
    }

});


app.mount('#assignment')