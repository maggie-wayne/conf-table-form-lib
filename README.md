# conf-table-form-lib

为什么会有这个项目：[表单配置化思考](https://zowiegong.com/posts/Thinking%20about%20configurable%20from.html)


## 

真的需要配置化吗？

这是不是为了配置化而配置化？

这仅是一次对配置化的探索，已在实际项目中得到实践。


## Use

### install
`yarn add conf-table-form-lib` or `npm install conf-table-form-lib`


### main.js

```javascript
import Vue from 'vue'
import ConfTableForm from 'conf-table-form-lib'

Vue.use(ConfTableForm)
// ...
```

### page.vue

```html
<div>
  <XForm :config="formConfig" />
  <XTable :config="tableConfig" />
</div>

<script>
export default {
  computed: {
    formConfig () {
      return option
    },
    tableConfig () {
      return option
    }
  }
}
</script>
```


## Option


```javascript
{
  // Vue 组件 props
  props: {
    name: 'wayne' // 等同于 <component :name="wayne" />
  },

  // Vue 组件事件句柄
  on: {
    click: this.handlerXxx // 等同于 <component @click="handlerXxx" />
  },

  // 自定义指令
  directives: {
    // ...
  },
  
  // 普通的 HTML 特性
  attrs: {
    placeholder: '请输入' // 等同于 <component placeholder="请输入" />
  },
  
  // Dom 事件句柄
  nativeOn: {
    click: this.handlerXxx // 等同于 <component @click.native="handlerXxx" />
  },
  
  // class 属性
  class: { ... },
  
  // style 属性
  style: { ... },
  
  // 同 Vue 组件 :key
  key: { ... },
  
  // 同 Vue 组件 ref
  ref: { ... },
  
  // 同 slot
  slot: { ... },
  
  // DOM 属性
  domProps: { ... },
  
  // 嵌套组件的父组件 例如：select
  $parent: option,
  
  // 嵌套组件的子组件 例如：option
  $children: [ option ... ],
  
  // innerText
  $text: 'xxx'
}
```

`option` 中除了以上列出的 `key` 其他均默认为 `props`。

属性名以 `$` 开头不会被处理为 `props`，预留使用。

具体参照 [Vue 数据对象](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1)


## Example

Online [demo](https://maggie-wayne.github.io/conf-table-form-lib/).

Config see [example](https://github.com/maggie-wayne/conf-table-form-lib/tree/master/src/conf).


### table config

table 配置结构：

```javascript
{
  // <el-table ...option />
  table: option,

  // <el-table-column ...option />
  // 嵌套表头 option 使用 $colums: [option, ...]
  // option.formatter 可使用 jsx 渲染 table cell
  colums: [option],

  // <el-pagination>
  pagination: option
}
```


### form config

form 配置结构：

```javascript
{
    // <el-form ...option/>
    form: option,

    // 表单项配置
    items: [
      {
        // 表单 item 类型 input、select、radio、checkbox ...
        type: 'input',

        // <el-form-item ...option />
        config: option,

        // <el-col ..option>
        //   <component ...>
        // </el-col>
        container: option

        // <el-input ...option />
        component: option
      },

      // Group 组件配置
      {
        type: 'checkboxGroup',
        // ...

        component: {
          $parent: option,
          $children: [option]
        }
      },

      // component 为函数时可定义 jsx 函数渲染
      // 需要在当前函数作用域前定义 h = vue.createElement
      {
        component: function () {
          return <xxx />
        }
      }
      // ...
    ],

    // 组件 style
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
