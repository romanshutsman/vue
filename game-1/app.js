const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            userHealth: 100,
            currentRound: 0,
            winner: null
        };
    },
    methods: {
        getRandomValue(max, min) {
            return Math.floor(Math.random() *  (max - min)) + min
        },
        attackMonster() {
            this.currentRound++;
            this.monsterHealth = this.monsterHealth - this.getRandomValue(12, 5);
            this.attackUser();
        },
        attackUser() {
            this.userHealth = this.userHealth - this.getRandomValue(8, 15)
        },
        specialAttackMonster() {
            this.currentRound++;
            this.monsterHealth = this.monsterHealth - this.getRandomValue(10, 25);
            this.attackUser();
        },
        healUser() {
            this.currentRound++;
            const healValue = this.getRandomValue(8, 20);
            if (healValue + this.userHealth > 100) {
                this.userHealth = 100;
            } else {
                this.userHealth += healValue
            }
            this.attackUser();
        },
        startNewGame() {
            this.userHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
        },
        surrender() {
            this.winner = 'monster';
        }
    },
    computed: {
        userBar() {
            if(this.userHealth < 0) return {width: '0%'}
            return {width: this.userHealth + '%'}
        },
        monsterBar() {
            if(this.monsterHealth < 0) return {width: '0%'}
            return {width: this.monsterHealth + '%'}
        },
        canUseSpecialAttack() {
          return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.userHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'user';
            }
        },
        userHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        }
    }
});

app.mount('#game');
