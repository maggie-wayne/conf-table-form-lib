<script>
import XComponent from './XComponent'
import { fmtJSXConfig, fmtJSXItems } from '../utils/helpers'


export default {
  name: 'XForm',
  props: {
    config: {
      type: Object,
      required: true
    }
  },

  methods: {
    /**
     * 检查 Config  格式初始化默认值并合并样式
     */
    formatterConfig (config) {
      const result = {}

      // 处理 config.style 赋默认值 {}
      const styleKeys = ['form', 'formItem', 'itemContainer', 'component']
      result.style = Object.create(null)
      styleKeys.forEach(k => {
        result.style[k] = (config.style && config.style[k]) || {}
      })

      function mergeStyle (target, style) {
        return {
          ...target && target,
          ...style
        }
      }

      // 检查 config.form.model 并合并 config.style.form
      if (!(config && config.form && config.form.model)) throw Error('form.model error')
      result.form = config.form
      result.form.style = mergeStyle(result.form.style, result.style.form)

      // 检查 config.items 列表
      if (!(config.items && Array.isArray(config.items))) throw Error('items error')
      result.items = config.items.map((i, idx) => {
        const temp = {}

        temp.type = i.type
        temp.config = i.config || {}
        temp.container = i.container || {}

        temp.config.style = mergeStyle(temp.config.style, result.style.formItem)
        temp.container.style = mergeStyle(temp.container.style, result.style.itemContainer)

        if (!('component' in i)) throw Error(`index = ${idx} type = ${i.type} items.component error`)
        temp.component = i.component
        if (Object.prototype.toString.call(i.component) !== '[object Function]') {
          temp.component.style = mergeStyle(temp.component.style, result.style.component)
        }


        if ('$parent' in i && '$children' in i) {
          if (!(Array.isArray(temp.component.$children))) throw Error(`index = ${idx} type = ${i.type} items.component.$children error`)
        }
        return temp
      })

      // console.log('formatted config object: ', result)
      return result
    }
  },


  render () {
    process.env.NODE_ENV === 'development' && console.time('Render XForm time: ')
    let { form, items } = this.formatterConfig(this.config)
    form = fmtJSXConfig(form)
    items = fmtJSXItems(items)
    // console.log('Formatted JSX config form: ', form)
    // console.log('Formatted JSX config items: ', items)

    // 外层容器
    const containerRender = config => <ElCol { ...config.container }>{ XComponent(this)(config) }</ElCol>

    // formItem
    const formItemRender = items => items.map(i => <ElFormItem { ...i.config }>{ containerRender(i) }</ElFormItem>)

    process.env.NODE_ENV === 'development' && console.timeEnd('Render XForm time: ')
    return <ElForm { ...form }>{ formItemRender(items) }</ElForm>
  }
}
</script>
