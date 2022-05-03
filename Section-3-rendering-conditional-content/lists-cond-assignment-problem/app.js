const app = Vue.createApp ({
  data() {
    return {
      inputTask: '',
      tasks: [],
      taskIsVisible: true,
    };
  },
  computed: {
    buttonCaption () {
      return this.taskIsVisible ? "Hide the list" : 'Show the list'
    }
  },
  methods: {
    addTask (){
      this.tasks.push(this.inputTask);
    },
    hiddenTask () {
      this.taskIsVisible = !this.taskIsVisible;
    }
  }
});

app.mount("#assignment");
