import Vue from 'vue'
import App from './App.vue'
import wui from './packages'
Vue.config.productionTip = false
Vue.use(wui)
new Vue({
  render: h => h(App),
}).$mount('#app')
