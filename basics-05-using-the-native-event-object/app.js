const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // computed = Ne relance pas tout le code controlé par Vue
  // Best use computed for output values than methods
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Camilo';
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
