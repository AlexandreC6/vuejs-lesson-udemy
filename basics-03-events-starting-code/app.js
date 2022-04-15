const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  methods: {
    setName(event){
      this.name = event.target.value; //target.value = prend la valeur dans l'input
    },
    add(num) {
      this.counter = this.counter + num ;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
