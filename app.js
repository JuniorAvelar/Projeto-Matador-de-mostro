const app = Vue.createApp({
    data() {
        return {
            running:false,
            playerLife: 100,
            monsterLife:100,
        }
    },

    methods: {
        startGame() {
            this.playerLife = 100
            this.monsterLife = 100
            this.running = true
        },

        attack(especial) {
            this.hurt("playerLife" ,5 , 10 , false) 
            this.hurt("monsterLife" ,10 , 12 , especial) 
        },

        hurt( atr, min , max , especial) {
            const plus = especial ? 5 :0
            const hurt = this.getRandom(min + plus , max + plus )

            // Garante que playerLife nunca fique abaixo de 0.
            // Se playerLife - hurt for menor que 0, a função retorna 0, impedindo valores negativos.
            this[atr] = Math.max(this[atr] - hurt ,0)
        },

        getRandom(min , max) {
            const value = Math.random() * (min - max) + min
            return Math.round(value)
        }
    },

    computed: {
        hasResult() {
            // mostra quem ganhou, retorna true ou false 
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },

    watch: {
        // observo se a mudança na varialvel, se sim altero ela para false 
        hasResult(value) {
        
            if(value) this.running = false
        }
    }
})

app.mount("#app")