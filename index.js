import XForm from './src/components/XForm'
import XTable from './src/components/XTable'

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
  XTable
}
