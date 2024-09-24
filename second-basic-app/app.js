const app = Vue.createApp({
    data() {

        
        return {
            goal: 'My goal',
            goalA: 'Learn Vue1!',
            goalB: '<span>Master Vue!</span>',
            link: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const value = Math.random();
            return value > 0.5 ? this.goalA: this.goalB;
        },

    }
});

app.mount('#user-goal');