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
const fullExample = {
    table: {
      'data': undefined,
      'height': undefined,
      'max-height': undefined,
      'stripe': undefined,
      'border': undefined,
      'size': undefined,
      'fit': undefined,
      'show-header': undefined,
      'highlight-current-row': undefined,
      'current-row-key': undefined,
      'row-class-name': undefined,
      'row-style': undefined,
      'cell-class-name': undefined,
      'cell-style': undefined,
      'header-row-class-name': undefined,
      'header-row-style': undefined,
      'header-cell-class-name': undefined,
      'header-cell-style': undefined,
      'row-key': undefined,
      'empty-text': undefined,
      'default-expand-all': undefined,
      'expand-row-keys': undefined,
      'default-sort': undefined,
      'tooltip-effect': undefined,
      'show-summary': undefined,
      'sum-text': undefined,
      'summary-method': undefined,
      'span-method': undefined,
      'select-on-indeterminate': undefined

      on: {
        'selection-change': undefined,
        'select': undefined,
        'select-all': undefined,
        'cell-mouse-enter': undefined,
        'cell-mouse-leave': undefined,
        'cell-click': undefined,
        'cell-dblclick': undefined,
        'row-click': undefined,
        'row-contextmenu': undefined,
        'row-dblclick': undefined,
        'header-click': undefined,
        'header-contextmenu': undefined,
        'sort-change': undefined,
        'filter-change': undefined,
        'current-change': undefined,
        'header-dragend': undefined,
        'expand-change': undefined
      }
    },

    colums: [
      {
        'type': undefined,
        'index': undefined,
        'column-key': undefined,
        'label': undefined,
        'prop': 'date',
        'width': undefined,
        'min-width': undefined,
        'fixed': undefined,
        'render-header': undefined,
        'sortable': undefined,
        'sort-method': undefined,
        'sort-by': undefined,
        'sort-orders': undefined,
        'resizable': undefined,
        'formatter': undefined,
        'show-overflow-tooltip': undefined,
        'align': undefined,
        'header-align': undefined,
        'class-name': undefined,
        'label-class-name': undefined,
        'selectable': undefined,
        'reserve-selection': undefined,
        'filters': undefined,
        'filter-placement': undefined,
        'filter-multiple': undefined,
        'filter-method': undefined,
        'filtered-value': undefined,
      }
    ],

    pagination: {
      'page-size': undefined,
      'total': undefined,
      'current-page': undefined,
      'layout': undefined,
      'page-sizes': undefined,
      'small': undefined,
      'background': undefined,
      'page-count': undefined,
      'pager-count': undefined,
      'popper-class': undefined,
      'prev-text': undefined,
      'next-text': undefined,
      'disabled': undefined

      on: {
        'size-change': undefined,
        'current-change': undefined,
        'prev-click': undefined,
        'next-click': undefined
      }
    }
}
```

## form config
```javascript
{
    form: {
      model: vue.query,
      style: {
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'justify-content': 'space-between'
      }
    },

    items: [
      {
        type: 'input',
        config: {
          label: 'input',
          style: {
            'align-items': 'flex-start',
            width: '50%',
            display: 'flex',
            'justify-content': 'center'
          }
        },
        container: {
          style: {
            width: '200px'
          }
        },
        component: vmHelper(vue, 'query.input')
      },
      {
        type: 'datePicker',
        config: {
          label: 'date',
          style: {
            'align-items': 'flex-start',
            width: '50%'
          }
        },
        container: {
          style: {
            width: '200px'
          }
        },
        component: vmHelper(vue, 'query.date')
      },
      {
        type: 'timePicker',
        config: {
          label: 'time'
        },
        component: vmHelper(vue, 'query.time')
      },
      {
        type: 'switch',
        config: {
          label: 'switch'
        },
        component: vmHelper(vue, 'query.switch')
      },
      {
        type: 'checkbox',
        config: {
          label: 'checkbox'
        },
        component: vmHelper(vue, 'query.checkbox')
      },
      {
        type: 'checkboxGroup',
        config: {
          label: 'checkboxGroup'
        },
        component: {
          $parent: vmHelper(vue, 'query.checkboxGroup'),
          $children: testData()
        }
      },
      {
        type: 'select',
        config: {
          label: 'select'
        },
        component: {
          $parent: vmHelper(vue, 'query.select'),
          $children: testData()
        }
      },
      {
        type: 'radio',
        config: {
          label: 'radio'
        },
        component: {
          $parent: vmHelper(vue, 'query.radio', 'change'),
          $children: testData()
        }
      },
      {
        type: 'button',
        config: {
          label: 'button'
        },
        component: {
          ...btnHelper('Click me', console.log)
        }
      }
    ],

    style: {
      form: {
        background: 'red'
      },
      formItem: {
        background: 'blue'
      },
      itemContainer: {
        background: 'yellow'
      },
      component: {
        background: 'green'
      }
    }
 }
```