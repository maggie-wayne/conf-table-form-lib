/**
 * 将普通 config 对象转换为适合 jsx 绑定的特殊顶级对象
 */
export const fmtJSXConfig = (config) => {
  // 特殊顶级属性
  const defaultKeys = [
    'props',
    'attrs',
    'domProps',
    'on',
    'nativeOn',
    'class',
    'style',
    'key',
    'ref',
    'slot'
  ]
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
 * 格式化 form.items.compnent
 */
export const fmtJSXComponent = component => {
  // render function
  if (Object.prototype.toString.call(component) === '[object Function]') return component

  // 需要 groupRender 渲染的 component
  if ('$parent' in component && '$children' in component) {
    return {
      $parent: fmtJSXConfig(component.$parent),
      $children: component.$children.map(fmtJSXConfig)
    }
  }
  return fmtJSXConfig(component)
}


/**
 * 格式化 form.items
 */
export const fmtJSXItems = items => {
  return items.map(i => ({
    ...i.type && { type: i.type },
    ...i.config && { config: fmtJSXConfig(i.config) },
    ...i.container && { container: fmtJSXConfig(i.container) },
    component: fmtJSXComponent(i.component)
  }))
}


export const eventHelper = (e, cb) => {
  return {
    on: {
      [e]: cb
    }
  }
}


// eslint-disable-next-line
export const vmHelper = (vue, path, eventName = 'input', cb = event => eval(`vue.${path} = event`)) => {
  return fmtJSXConfig({
    value: eval(`vue.${path}`),
    ...eventHelper(eventName, cb)
  })
}
