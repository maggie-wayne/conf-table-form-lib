/**
 * 将普通 config 对象转换为适合 jsx 解构对象
 */
export const fmtJSXConfig = (config) => {
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


export const vmHelper = function (path, eventName = 'input', cb) {
  // eslint-disable-next-line
  const self = this
  const defaultCb = function (event) {
    eval(`self.${path} = event`)
  }

  return fmtJSXConfig({
    value: eval(`self.${path}`),
    on: {
      [eventName]: cb || defaultCb
    }
  })
}
