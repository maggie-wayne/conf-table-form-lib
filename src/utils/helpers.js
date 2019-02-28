import XInput from '../components/jsx-lib/XInput'
import XButton from '../components/jsx-lib/XButton'
import XGroup from '../components/jsx-lib/XGroup'


const jsxLib = [XInput, XButton, XGroup]


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


export const jsxLibHelper = vue => {
  return jsxLib.reduce((lib, i) => {
    lib[i.name] = fn => i(vue, fn)
    return lib
  }, Object.create(null))
}


export const eventHelper = (e, cb) => {
  return {
    on: {
      [e]: cb
    }
  }
}


export const btnHelper = (text, cb) => {
  return {
    $text: text,
    ...eventHelper('click', cb)
  }
}


export const groupHelper = (type, list, config) => {
  const cmpNameMap = {
    select: ['ElSelect', 'ElOption'],
    radio: ['ElRadioGroup', 'ElRadio'],
    checkbox: ['ElCheckboxGroup', 'ElCheckbox']
  }
  const [parentName, childrenName] = cmpNameMap[type]
  return {
    parentName,
    childrenName,
    $children: list.map(fmtJSXConfig),
    $parent: fmtJSXConfig(config)
  }
}


export const formItemHelperGenerator = vue => {
  return (type, label, source, list = [], eventName, cb) => {
    let component = null
    if (list.length) {
      component = {
        $parent: vmHelper(vue, source, eventName, cb),
        $children: list
      }
    } else {
      component = vmHelper(vue, source)
    }

    return {
      type,
      config: {
        label
      },
      component
    }
  }
}


export const formGroupItemHelperGenerator = vue => {
  return (type, label, source) => {
    let component = {
      $parent: vmHelper(vue, source)
    }
    return {
      type,
      config: {
        label
      },
      component
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
