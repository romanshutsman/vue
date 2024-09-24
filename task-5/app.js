const app = Vue.createApp({
  data() {
    return {
      goalValue: '',
      goals: [],
      isListShown: true
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue)
    },
    deleteGoal(index) {
      this.goals.splice(index, 1);
    },
    toggleList() {
      this.isListShown = !this.isListShown
    }
  }
});

app.mount('#user-goals');
