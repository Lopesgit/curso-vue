import Vue from 'vue'
import App from './App.vue'
import Contador from './Contadores.vue'

Vue.config.productionTip = false
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
