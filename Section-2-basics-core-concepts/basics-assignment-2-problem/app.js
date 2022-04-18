const app = Vue.createApp({
  data() {
    return {
      messageAlert : "It's a alert",
      output: "",
      outputConfirmed: ""
    }
  },
  methods: {
    outputConfirm (){
      this.outputConfirmed = this.output;
    },
    setAlert () {
      return alert(this.messageAlert);
    },
    setOutput (event) {
      this.output = event.target.value;
    }
  }

});

app.mount('#assignment');
