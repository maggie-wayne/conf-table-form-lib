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

## table config
```javascript
{
  table: {
    'data': this.data,
    on: {
      'selection-change': this.handlerEvent
    }
  },

  colums: [
    {
      type: 'selection'
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

  pagination: {
    'page-size': this.pagination.pageSize,
    'total': this.pagination.total,
    'current-page': this.pagination.currentPage,
    'layout': 'total, sizes, prev, pager, next, jumper',
    'page-sizes': [100, 200, 300, 400],

    on: {
      'size-change': this.handlerEvent,
      'current-change': this.handlerEvent
    }
  }
}
```

## form config
```javascript
{
  form: {
    model: this.query,
    inline: true
  },

  items: [
    {
      type: 'input',
      config: {
        label: 'input'
      },
      container: {
        style: {
          width: '200px'
        }
      },
      component: this.vmHelper('query.input')
    },
    {
      type: 'datePicker',
      config: {
        label: 'date'
      },
      container: {
        style: {
          width: '200px'
        }
      },
      component: this.vmHelper('query.date')
    },
    {
      type: 'timePicker',
      config: {
        label: 'time'
      },
      component: this.vmHelper('query.time')
    },
    {
      type: 'switch',
      config: {
        label: 'switch'
      },
      component: this.vmHelper('query.switch')
    },
    {
      config: {
        label: 'custome'
      },
      component () {
        return <ElButton>asdfsadfasdf</ElButton>
      }
    },
    {
      type: 'checkbox',
      config: {
        label: 'checkbox'
      },
      component: this.vmHelper('query.checkbox')
    },
    {
      type: 'checkbox',
      config: {
        label: 'checkboxGroup'
      },
      component: {
        $parent: this.vmHelper('query.checkboxGroup'),
        $children: [
          {
            label: 1,
            $text: '选项1'
          },
          {
            label: 2,
            $text: '选项2'
          }
        ]
      }
    },
    {
      type: 'select',
      config: {
        label: 'select'
      },
      component: {
        $parent: this.vmHelper('query.select'),
        $children: [
          {
            label: '选项1',
            value: 1
          },
          {
            label: '选项2',
            value: 2
          }
        ]
      }
    },
    {
      type: 'radio',
      config: {
        label: 'radio'
      },
      component: {
        $parent: this.vmHelper('query.radio'),
        $children: [
          {
            label: 1,
            $text: '选项1'
          },
          {
            label: 2,
            $text: '选项2'
          }
        ]
      }
    },
    {
      type: 'button',
      config: {
        label: 'button'
      },
      component: {
        $text: 'Clice me',
        on: {
          click: console.log
        }
      }
    }
  ],

  style: {
    form: {
      // background: 'red'
    },
    formItem: {
      // background: 'blue'
    },
    itemContainer: {
      // background: 'yellow'
    },
    component: {
      // background: 'green'
    }
  }
}
```