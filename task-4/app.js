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
    },
    computed: {
        classes() {
            return {
                user1: this.text === 'user1',
                user2: this.text === 'user2',
                visible: this.toggleBtn,
                hidden: !this.toggleBtn,
            }
        }
    }

});


app.mount('#assignment')