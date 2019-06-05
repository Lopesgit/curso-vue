new Vue({
    el: '#desafio',
    data: {
        nome: 'Renê Lopes 2',
        idade: 35,
        image: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg'
    },
    methods:{
        multiplicarIdade: function (){
            return this.idade * 3
        },
        gerarNumeroRandomico: function (){
            return Math.random()
        }
    }
})