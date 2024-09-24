const app = Vue.createApp({
    data() {
        return {
            name: 'Roman',
            birthYear: 1996,
            imgUrl: "https://img.freepik.com/premium-photo/cool-wallpaper-landscape-background_915164-75660.jpg"
        }
    },
    methods: {
        getAge() {
            return new Date().getFullYear() - this.birthYear;
        },
        getAgeInNext5Years() {
            return this.getAge() + 5;
        },

        getRandom() {
          return Math.ceil(Math.random() * 10);
        }
    }
});


app.mount('#createApp');