const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;

      // this.$refs.aaaa.value = event.target.value
      this.message = this.$refs.userText.value
    },
  },
  // Avant de charger Vue
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created(){
    console.log('created');
  },
  // Juste avant de construire l'app Vue
  beforeMount(){
    console.log('beforeMounted');
  },
  // l'app VueJS déjà construite, template déjà charger
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('update');
  }
});

app.mount('#app');
