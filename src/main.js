import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Alert from './components/myAlert/index'
Vue.config.productionTip = false
Vue.prototype.$Alert = Alert
new Vue({
  render: h => h(App),
}).$mount('#app')
