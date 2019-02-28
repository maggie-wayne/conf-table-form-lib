import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ConfTableForm from '../index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ConfTableForm)

new Vue({
  render: h => h(App)
}).$mount('#app')
