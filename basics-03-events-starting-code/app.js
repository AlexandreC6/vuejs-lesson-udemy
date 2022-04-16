const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    confirmedInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      //event.preventDefault(); // prevent.Default = Enlève le comportoment original VanillaJS
      alert('Submitted !');
    },
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
