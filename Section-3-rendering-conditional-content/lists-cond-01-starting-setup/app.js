const app = Vue.createApp({
  data() {
    return {
      inputValueGoal: '',
      goals: [],
    };
  },
  methods: {
    addGoal () {
      this.goals.push(this.inputValueGoal);
    },
    removeGoal (idx) {
      this.goals.splice(idx, 1);
    },
  }
});

app.mount('#user-goals');
