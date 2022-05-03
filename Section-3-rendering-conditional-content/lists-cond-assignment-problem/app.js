const app = Vue.createApp ({
  data() {
    return {
      inputTask: '',
      tasks: [],
      show: true,
    };
  },
  methods: {
    addTask (){
      this.tasks.push(this.inputTask);
    },
    hiddenTask () {
      this.show = !this.show;
    }
  }
});

app.mount("#assignment");
