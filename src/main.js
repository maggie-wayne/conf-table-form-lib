import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import ConfTableForm from 'conf-table-form-lib'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ConfTableForm)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
