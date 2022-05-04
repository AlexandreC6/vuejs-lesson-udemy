function getRandomValue(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data(){
    return{
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },
  computed: {
    monsterBarStyle () {
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyle() {
      return { width: this.playerHealth + '%'};
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    mayUseHealth() {
      return this.currentRound % 2 !== 0;
    }
  },
  methods: {
    attackMonster () {
      // Calculaite the number of round
      this.currentRound ++;
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
      this.currentRound ++;
      const attackValue = getRandomValue(15, 20);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound ++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      };
      this.attackPlayer();
    }
  }
});

app.mount("#game");
