# conf-table-form-lib

## use
```javascript
// yarn add conf-table-form-lib

import Vue from 'vue'
import ElementUI from 'element-ui'
import ConfTableForm from 'conf-table-form-lib'

Vue.use(ElementUI)
Vue.use(ConfTableForm)

// ...
```


## Option

除以下特殊属性外，`option` 下其他属性均默认为 `props`。

- `option.props` 
  - Vue 组件 `props`
  - eg: `option.props.data = { a: 1 }` 等同于 `<input :data="{ a: 1 }" />`


- `option.on`
  - Vue 组件事件句柄
  - eg: `option.on.click = console.log` 等同于 `<button @click="console.log" />`


- `option.attrs`
  - Dom 属性
  - eg: `option.attrs.placeholder = '请输入'` 等同于 `<input placeholder="请输入" />`


- `option.nativeOn`
  - Dom 事件句柄
  - eg: `option.nativeOn.click = console.log` 等同于 `<button @click.native="console.log" />`

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

- `option.domProps`
  - 不详


## Example

[Online demo](https://maggie-wayne.github.io/conf-table-form-lib/)

![Example](https://raw.githubusercontent.com/maggie-wayne/conf-table-form-lib/master/example.PNG)

### table config
```jsx
let handlerEvent = null
const options = [
  {
    label: '选项 1',
    value: 1
  },
  {
    label: '选项 2',
    value: 2
  }
]


export default function () {
  // eslint-disable-next-line
  const h = this.$createElement

  !handlerEvent && (handlerEvent = this.handlerEvent)
  const inputVm = this.vm('query.input')
  const selectVm = this.vm('query.select')
  const checkboxVm = this.vm('query.checkbox')

  return {
    // 等同于 <el-table data="data" @selectionChange="handlerEvent">
    table: {
      'data': this.data,

      on: {
        'selection-change': handlerEvent
      }
    },
    {
      label: '日期',
      prop: 'date'
    },
    {
      label: '名称',
      prop: 'name'
    },
    {
      label: '地址',
      prop: 'address'
    },
    {
      label: '嵌套表头',
      $colums: [
        {
          label: 'suba',
          prop: 'name'
        },
        {
          label: 'subb',
          prop: 'address'
        }
      ]
    }
  ],

    colums: [
      // 等同于 <el-table-colum type="selection" />
      {
        type: 'selection'
      },

      // 等同于 <el-table-colum label="日期" prop="date" />
      {
        label: '日期',
        prop: 'date'
      },

      {
        label: '名称',
        prop: 'name'
      },

      {
        label: '地址',
        prop: 'address'
      },

      {
        label: '嵌套表头',
        // 嵌套表头
        $colums: [
          {
            label: 'suba',
            prop: 'suba'
          },
          {
            label: 'subb',
            prop: 'subb'
          }
        ]
      },

      // ElemtnUI 通过 formatter 渲染 table cell 内容
      {
        formatter: function () {
          return <ElInput { ...inputVm } />
        }
      },

      {
        formatter: function () {
          return <ElButton onClick={ handlerEvent }>Click me!</ElButton>
        }
      },

      {
        formatter: function () {
          return (
            <ElSelect { ...selectVm }>
              { options.map(x => <ElOption value={ x.value } label={ x.label } />) }
            </ElSelect>
          )
        }
      },

      {
        formatter: function () {
          return (
            <ElRadioGroup { ...selectVm }>
              { options.map(x => <ElRadio label={ x.value }>{ x.label }</ElRadio>) }
            </ElRadioGroup>
          )
        }
      },

      {
        formatter: function () {
          return (
            <ElCheckboxGroup { ...checkboxVm }>
              { options.map(x => <ElCheckbox label={ x.value }>{ x.label }</ElCheckbox>) }
            </ElCheckboxGroup>
          )
        }
      }
    ],


    /**
     * 等同于：
     * <el-pagination 
     *   layout="total, sizes, prev, pager, next, jumper"
     *   currentPage="pagination.currentPage",
     *   :pageSizes="[100, 200, 300, 400]"
     *   :pageSize="pagination.pageSize",
     *   :total="pagination.total",
     *   @sizeChange="handlerEvent"
     *   @currentChange="handlerEvent"
     * />
    */
    pagination: {
      'page-size': this.pagination.pageSize,
      'total': this.pagination.total,
      'current-page': this.pagination.currentPage,
      'layout': 'total, sizes, prev, pager, next, jumper',
      'page-sizes': [100, 200, 300, 400],

      // 事件处理在 on 字段下
      on: {
        'size-change': handlerEvent,
        'current-change': handlerEvent
      }
    }
  }
}
```


### form config
```javascript
const options = [
  {
    label: '选项1',
    value: 1
  },
  {
    label: '选项2',
    value: 2
  }
]

const options2 = [
  {
    label: 1,
    $text: '选项1'
  },
  {
    label: 2,
    $text: '选项2'
  }
]


export default function () {
  return {
    // 等同于 <el-form :model="query" label-width="120px">
    form: {
      model: this.query,
      'label-width': '120px'
    },

    items: [
      {
        // 当前表单项类型 input、select、checkbox、raido ...
        type: 'input',

        // 等同于 <el-form-item label="input">
        config: {
          label: 'input'
        },

        // 当前表单项组件
        // 等同于 <el-input v-model="query.input" />
        component: this.vm('query.input')
      },

      {
        type: 'datePicker',
        config: {
          label: 'date'
        },

        // 等同于 <el-date-picker v-model="query.date" />
        component: this.vm('query.date')
      },

      {
        type: 'timePicker',
        config: {
          label: 'time'
        },
        component: this.vm('query.time')
      },

      {
        type: 'switch',
        config: {
          label: 'switch'
        },
        component: this.vm('query.switch')
      },

      {
        type: 'checkbox',
        config: {
          label: 'checkbox'
        },
        component: this.vm('query.checkbox')
      },

      {
        type: 'checkbox',
        config: {
          label: 'checkboxGroup'
        },

        // 对于 Group 组件 (el-checkbox-group、el-radio-group ...)
        // $paren 为外层组件
        // $children 为内层组件
        component: {
          // 等同于 <el-checkbox-group v-model="query.checkbox" />
          $parent: this.vm('query.checkbox'),
          // 内层组件 $text 为 innerText
          $children: options2
        }
      },

      {
        type: 'select',
        config: {
          label: 'select'
        },
        component: {
          $parent: {
            ...this.vm('query.select'),
            style: {
              width: '100%'
            }
          },
          $children: options
        }
      },

      {
        type: 'radio',
        config: {
          label: 'radio'
        },
        component: {
          $parent: this.vm('query.select'),
          $children: options2
        }
      },

      {
        type: 'button',
        config: {
          label: 'button'
        },
        component: {
          $text: 'Clice me!',
          on: {
            click: console.log
          }
        }
      },

      {
        config: {
          label: 'custome'
        },
        // 自定义组件 component 为 jsx render 函数
        component () {
          return <ElButton>Click me!</ElButton>
        }
      }
    ],

    style: {
      form: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'flex-direction': 'row',
        'justify-content': 'space-between'
      },

      formItem: {
        width: '30%'
      }
    }
  }
}

```