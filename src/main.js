import Vue from 'vue'
import App from './App.vue'


console.dir(Vue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
