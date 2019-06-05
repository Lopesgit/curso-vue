new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(event){
            alert('Você clicou no botão.')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})