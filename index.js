import XForm from './src/components/x-form/Index.vue'
import XTable from './src/components/x-table/Index.vue'
import * as helpers from './src/utils/helpers'

const components = [
  XForm,
  XTable
]

const install = Vue => {
  components.forEach(i => {
    Vue.component(i.name, i)
  })
}

export default {
  install,
  XForm,
  XTable,
  helpers
}
