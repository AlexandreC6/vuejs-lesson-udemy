function getRandomValue(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data(){
    return{
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  computed: {
    monsterBarStyle () {
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyle() {
      return { width: this.playerHealth + '%'};
    }
  },
  methods: {
    attackMonster () {
      // Calculate a number range between 5 and 12
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer () {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttackPlayer (){
      const attackValue = getRandomValue(15, 20);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  }
});

app.mount("#game");
