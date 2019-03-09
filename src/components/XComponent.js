import { fmtJSXConfig } from '../utils/helpers'

const groupMap = {
  checkbox: ['ElCheckboxGroup', 'ElCheckbox'],
  select: ['ElSelect', 'ElOption'],
  radio: ['ElRadioGroup', 'ElRadio']
}

const groupRender = v => {
  // eslint-disable-next-line
  const h = v.$createElement

  return config => {
    const { type, component: { $parent, $children } } = config
    const [$parentName, $childrenName] = groupMap[type]

    return (
      <$parentName {...fmtJSXConfig($parent)}>
        {
          $children.map(i => (
            <$childrenName {...fmtJSXConfig(i)} >{ i.$text }</$childrenName>
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
    const { type, component } = config

    if (Object.prototype.toString.call(component) === '[object Function]') return component.call(v)
    if ('$parent' in component && '$children' in component) return groupRender(v)(config)

    const tagName = 'El' + type.charAt(0).toUpperCase() + type.slice(1)
    return <tagName {...fmtJSXConfig(component)}>{ component.$text }</tagName>
  }
}
