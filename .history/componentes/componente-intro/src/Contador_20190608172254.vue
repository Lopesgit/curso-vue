<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contador: 0
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador++
        }
    }

}
</script>

<style>
    .contador span{
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }
</style>
