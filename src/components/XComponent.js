import { fmtJSXItems } from '../utils/helpers'

const groupMap = {
  checkbox: ['ElCheckboxGroup', 'ElCheckbox'],
  select: ['ElSelect', 'ElOption'],
  radio: ['ElRadioGroup', 'ElRadio']
}

// 带 group 组件 render
const groupRender = v => {
  // eslint-disable-next-line
  const h = v.$createElement

  return config => {
    const { type, component: { $parent, $children } } = config
    if (!(type in groupMap)) throw Error(`Type error`)

    const [$parentName, $childrenName] = groupMap[type]

    return (
      <$parentName {...$parent}>
        {
          $children.map(i => (
            <$childrenName {...i} >{ i.$text }</$childrenName>
          ))
        }
      </$parentName>
    )
  }
}


export default function XComponent (v) {
  // eslint-disable-next-line
  const h = v.$createElement

  return function (config) {
    config = fmtJSXItems([config])[0]
    const { type, component } = config

    if (Object.prototype.toString.call(component) === '[object Function]') return component.call(v)
    if ('$parent' in component && '$children' in component) return groupRender(v)(config)

    const tagName = 'El' + type.charAt(0).toUpperCase() + type.slice(1)
    return <tagName {...component}>{ component.$text }</tagName>
  }
}
