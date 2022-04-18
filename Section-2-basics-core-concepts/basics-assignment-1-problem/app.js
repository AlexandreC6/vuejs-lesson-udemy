const app = Vue.createApp ({
  data(){
    return {
      myName: "Alexandre",
      myAge: 24,
      linkImage : "https://pbs.twimg.com/profile_images/1786517293/faceyourmanga-female-avatar.jpg"
    };
  },
  methods: {
    calculateRandomNumber () {
      return Math.random();
    },
    calcualteMyAge () {
      return this.myAge + 5;
    }
  }
});

app.mount("#assignment")
