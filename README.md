# conf-table-form-lib

## Use
```javascript
// yarn add conf-table-form-lib

import Vue from 'vue'
import ConfTableForm from 'conf-table-form-lib'

Vue.use(ConfTableForm)

// ...
```


## Option

除以下特殊属性外，`option` 下其他属性均默认为 `props`。

属性名以 `$` 开头不会被处理，其中 `$parent`、`$children`、`$text` 为预留属性。


- `option.props` 
  - Vue 组件 `props`
  - `option.props.data = { a: 1 }` 等同于 `<input :data="{ a: 1 }" />`


- `option.on`
  - Vue 组件事件句柄
  - `option.on.click = console.log` 等同于 `<button @click="console.log" />`


- `option.attrs`
  - Dom 属性
  - `option.attrs.placeholder = '请输入'` 等同于 `<input placeholder="请输入" />`


- `option.nativeOn`
  - Dom 事件句柄
  - `option.nativeOn.click = console.log` 等同于 `<button @click.native="console.log" />`

- `option.class`
  - 同 `class`

- `option.style`
  - 同 `style`

- `option.key`
  - 同 `v-key`

- `option.ref`
  - 同 `ref`

- `option.slot`
  - 同 `slot`

- `option.$parent`
  - Group 组件外层组件
  - `option.$parent = option`

- `option.$children`
  - Group 组件内层组件
  - `option.$children = option`

- `option.$text`
  - 当前组件的  `innerText`

- `option.domProps`
  - 不详


## Example

Online [demo](https://maggie-wayne.github.io/conf-table-form-lib/).

Config see [example](https://github.com/maggie-wayne/conf-table-form-lib/tree/master/src/conf).


### table config

```javascript
{
  // <el-table>
  table: option,

  // <el-table-column>
  // 嵌套表头 option 内有 $colums 属性
  // option.formatter 可使用 jsx 渲染 table cell
  colums: [option],

  // <el-pagination>
  pagination: option
}
```


### form config

```javascript
{
    // 对应 <el-form />
    form: option,

    // 表单项配置
    items: [
      {
        // 表单类型 input、select、radio、checkbox ...
        type: 'input',

        // <el-form-item/>
        config: option,

        // component 会包裹一层 <el-col>
        // 通常没啥用
        container: option

        // 具体 component
        // component 为函数时可定义 jsx 函数渲染
        // render 需要在当前函数作用域定义 h = vue.createElement
        component: option
      },
      {
        type: 'checkboxGroup',
        config: option,
        container: option

        // Group 组件
        component: {
          $parent: option,
          $children: [option]
        }
      }
      // ...
    ],

    // 对应组件上的 style
    style: {
      // <el-form :style="styleObj">
      form: styleObj,

      // ...
      formItem: styleObj,
      container: styleObj,
      component: styleObj
    }
 }
```