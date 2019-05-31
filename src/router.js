import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const TemplateTable = () => import('./views/TemplateTable.vue')
const ConfTable = () => import('./views/ConfTable.vue')

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/template_table',
      component: TemplateTable
    },
    {
      path: '/conf_table',
      component: ConfTable
    }
  ]
})
