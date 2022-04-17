const app = Vue.createApp({
  data () {
    return {
      classSelected : "",
      paragraphIsVisible: true,
      inputBackgroundColor: ""
    }
  },
  computed: {
    // Add classes
    paraClasses () {
      return {
        user1: this.classSelected === 'user1',
        user2: this.classSelected === 'user2',
        visible: this.paragraphIsVisible,
        hidden: this.paragraphIsVisible === false,

      }
    }
  },
  methods: {
    toggleParagraph () {
      // Reversible true/false
      this.paragraphIsVisible = !this.paragraphIsVisible;
    }
  }
});

app.mount("#assignment");
