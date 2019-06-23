<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrarir">-</button>
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
        subtrarir?(){
            this.contador++
        }
    }

}
</script>

<style>

</style>
