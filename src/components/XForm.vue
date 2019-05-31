<script>
import XComponent from './XComponent'
import { fmtJSXConfig, fmtFormConfig } from '../utils'


export default {
  name: 'XForm',

  props: {
    config: {
      type: Object,
      required: true
    }
  },


  render (h) {
    let { form, items } = fmtFormConfig(this.config)

    const containerRender = config => (
      <ElCol { ...fmtJSXConfig(config.container) }>
        { XComponent(this)(config) }
      </ElCol>
    )

    const formItemRender = items => items.map(i => (
      <ElFormItem { ...fmtJSXConfig(i.config) }>
        { containerRender(i) }
      </ElFormItem>
    ))

    return (
      <ElForm { ...fmtJSXConfig(form) }>
        { formItemRender(items) }
      </ElForm>
    )
  }
}
</script>
