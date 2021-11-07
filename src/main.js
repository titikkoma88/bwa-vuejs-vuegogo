import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootsrap.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
