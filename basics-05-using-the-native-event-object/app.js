const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  watch: {
    counter(value){
      if (value > 50){
        this.counter = 0;
      };
    }
  },
  // computed = Ne relance pas tout le code controlé par Vue
  // Best use computed for output values than methods
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    resetInput(){
      this.name= "";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
