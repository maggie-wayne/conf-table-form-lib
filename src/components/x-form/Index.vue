<script>
import { fmtJSXConfig } from '../../utils/helpers'


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
     * 格式化 form.items.compnent
     */
    fmtJSXComponent (component) {
      // 需要 groupRender 渲染的 component
      if ('$parent' in component && '$children' in component) {
        return {
          $parent: fmtJSXConfig(component.$parent),
          $children: component.$children.map(fmtJSXConfig)
        }
      }
      return fmtJSXConfig(component)
    },


    /**
     * 格式化 form.items
     */
    fmtJSXItems (items) {
      return items.map(i => ({
        type: i.type,
        config: fmtJSXConfig(i.config),
        ...i.container && { container: fmtJSXConfig(i.container) },
        component: this.fmtJSXComponent(i.component)
      }))
    },


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
        if (!('type' in i)) throw Error(`index = ${idx} items.type error`)
        temp.type = i.type
        temp.config = i.config || {}
        temp.container = i.container || {}

        temp.config.style = mergeStyle(temp.config.style, result.style.formItem)
        temp.container.style = mergeStyle(temp.container.style, result.style.itemContainer)

        if (!('component' in i)) throw Error(`index = ${idx} type = ${i.type} items.component error`)
        temp.component = i.component
        temp.component.style = mergeStyle(temp.component.style, result.style.component)
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
    console.time('Render XForm time: ')
    let { form, items } = this.formatterConfig(this.config)
    form = fmtJSXConfig(form)
    items = this.fmtJSXItems(items)
    // console.log('Formatted JSX config form: ', form)
    // console.log('Formatted JSX config items: ', items)

    // 基本组件 render
    const simpleComponentRender = ({ type, component }) => {
      const cmpName = 'El' + type.charAt(0).toUpperCase() + type.slice(1)
      return <cmpName { ...component }/>
    }

    // 带 group 组件 render
    // TODO: x-table/lib/XGroup
    const groupRender = ({ parentName, childrenName }, { $parent, $children }) => (
      <parentName {...$parent}>
        {
          $children.map(i => (
            <childrenName {...i} />
          ))
        }
      </parentName>
    )

    // 按钮 render
    const btnRender = (component) => (
      <ElButton { ...component }>{ component.$text }</ElButton>
    )

    // form.items.component 的 render
    const componentRender = ({ type, component }) => {
      // 直接渲染 jsx
      if (Object.prototype.toString.call(component) === '[objcet Funtion]') {
        return component()
      }

      // 渲染 config
      else {
        switch (type) {
          case 'input':
          case 'datePicker':
          case 'timePicker':
          case 'switch':
          case 'checkbox':
            return simpleComponentRender({ type, component })

          case 'checkboxGroup':
            return groupRender(
              { parentName: 'ElCheckboxGroup', childrenName: 'ElCheckbox' },
              component
            )
          case 'select':
            return groupRender(
              { parentName: 'ElSelect', childrenName: 'ElOption' },
              component
            )
          case 'radio':
            return groupRender(
              { parentName: 'ElRadioGroup', childrenName: 'ElRadio' },
              component
            )
          case 'button':
            return btnRender(component)

          default:
            throw Error('render error')
        }
      }
    }

    // formItem 外层容器 render
    const containerRender = ({ type, container, component }) => (
      <ElCol { ...container }>{ componentRender({ type, component }) }</ElCol>
    )

    // formItem render
    const formItemRender = items => items.map(i => (
      <ElFormItem { ...i.config }>
        { containerRender(i) }
      </ElFormItem>
    ))

    // form 元素
    const formEl = <ElForm { ...form }>{ formItemRender(items) }</ElForm>
    console.timeEnd('Render XForm time: ')

    return <div>{ formEl }</div>
  }
}
</script>
