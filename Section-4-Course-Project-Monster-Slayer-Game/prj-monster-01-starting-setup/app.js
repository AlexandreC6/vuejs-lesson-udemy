function getRandomValue(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data(){
    return{
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  // Quand une property change, exécute le code
  watch: {
    playerHealth(value){
      if (value <= 0 && this.monsterHealth <= 0 ) {
        // draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value){
      if (value <= 0 && this.playerHealth <= 0 ) {
        // draw
        this.winner = "draw";
      } else if (value <= 0) {
        // monster lost
        this.winner = "player";
      }
    }
  },
  computed: {
    monsterBarStyle () {
      if (this.monsterHealth < 0) {
        return {width: '0%'};
      }
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return {width: '0%'};
      }
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
    surrender (){
      this.winner = 'monster';
    },
    startNewGame (){
      this.playerHealth= 100;
      this.monsterHealth= 100;
      this.currentRound= 0;
      this.winner= null;
      this.logMessages= [];

    },
    // Player attack the monster
    attackMonster () {
      // Calculaite the number of round
      this.currentRound ++;
      // Calculate a number range between 5 and 12
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessages('player', 'attack', attackValue);
      this.attackPlayer();
    },
    // Monster attack player
    attackPlayer () {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessages('monster', 'attack', attackValue);
    },
    specialAttackPlayer (){
      this.currentRound ++;
      const attackValue = getRandomValue(15, 20);
      this.monsterHealth -= attackValue;
      this.addLogMessages('player', 'special-attack', attackValue);
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
      this.addLogMessages('player', 'heal', healValue) ;
      this.attackPlayer();
    },
    addLogMessages(who, what, value){
      // .unshift => add in begin of array
      // .push => add in end of array
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  }
});

app.mount("#game");
