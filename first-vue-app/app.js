Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            console.log('clicked')
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app')