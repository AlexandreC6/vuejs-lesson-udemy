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
  }
});

app.mount('#user-goals');
