import XForm from './src/components/XForm'
import XTable from './src/components/XTable'
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
