/**
 * 将普通 config 对象转换为适合 jsx 解构对象
 */
export const fmtJSXConfig = config => {
  const defaultKeys = ['props', 'attrs', 'domProps', 'on', 'nativeOn', 'class', 'style', 'key', 'ref', 'slot']

  return Object.keys(config).reduce((o, key) => {
    // copy 特殊顶级属性
    if (defaultKeys.indexOf(key) !== -1) {
      o[key] = config[key]
    }

    // 保留 $ 前缀属性
    else if (key.startsWith('$')) {
      o[key] = config[key]
    }

    // 剩余属性默认为 props
    else {
      if (!('props' in o)) {
        o.props = Object.create(null)
      }
      o.props[key] = config[key]
    }
    return o
  }, Object.create(null))
}


/**
 * Object merge
 */
const mergeStyle = (first, secend) => ({
  ...secend,
  ...first && first
})


/**
 * Format form config
 */
export const fmtFormConfig = config => {
  const result = {
    form: config.form,
    style: Object.create(null)
  }

  // config.style default value
  const styleKeys = ['form', 'formItem', 'itemContainer', 'component']
  styleKeys.forEach(k => {
    result.style[k] = (config.style && config.style[k]) || {}
  })

  // merge form style
  result.form.style = mergeStyle(result.form.style, result.style.form)

  // map items
  result.items = config.items.map((i, idx) => {
    const item = {
      type: i.type,
      config: i.config || {},
      container: i.container || {},
      component: i.component
    }

    // merge item style
    item.config.style = mergeStyle(item.config.style, result.style.formItem)
    item.container.style = mergeStyle(item.container.style, result.style.itemContainer)
    if (Object.prototype.toString.call(i.component) !== '[object Function]') {
      item.component.style = mergeStyle(item.component.style, result.style.component)
    }

    return item
  })

  return result
}
