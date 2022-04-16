const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    limit() {
      const that = this;
      setTimeout(function() {
        that.counter = 0;
      }, 5000);
    }
  },
  computed: {
    limit() {
      if (this.counter < 37) {
        return  "Not there yet";
      } else {
        return "Too much!";
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  }
});

app.mount('#assignment');
