import XComponent from '../components/XComponent'
import { vmHelper } from '../utils/helpers'

export default function (vue) {
  return {
    table: {
      'data': vue.data,
      // 'height': undefined,
      // 'max-height': undefined,
      // 'stripe': undefined,
      // 'border': undefined,
      // 'size': undefined,
      // 'fit': undefined,
      // 'show-header': undefined,
      // 'highlight-current-row': undefined,
      // 'current-row-key': undefined,
      // 'row-class-name': undefined,
      // 'row-style': undefined,
      // 'cell-class-name': undefined,
      // 'cell-style': undefined,
      // 'header-row-class-name': undefined,
      // 'header-row-style': undefined,
      // 'header-cell-class-name': undefined,
      // 'header-cell-style': undefined,
      // 'row-key': undefined,
      // 'empty-text': undefined,
      // 'default-expand-all': undefined,
      // 'expand-row-keys': undefined,
      // 'default-sort': undefined,
      // 'tooltip-effect': undefined,
      // 'show-summary': undefined,
      // 'sum-text': undefined,
      // 'summary-method': undefined,
      // 'span-method': undefined,
      // 'select-on-indeterminate': undefined

      on: {
        'selection-change': vue.handlerEvent
        // 'select': vue.handlerEvent,
        // 'select-all': vue.handlerEvent,
        // 'cell-mouse-enter': undefined,
        // 'cell-mouse-leave': undefined,
        // 'cell-click': undefined,
        // 'cell-dblclick': undefined,
        // 'row-click': undefined,
        // 'row-contextmenu': undefined,
        // 'row-dblclick': undefined,
        // 'header-click': undefined,
        // 'header-contextmenu': undefined,
        // 'sort-change': undefined,
        // 'filter-change': undefined,
        // 'current-change': undefined,
        // 'header-dragend': undefined,
        // 'expand-change': undefined
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
            prop: 'suba'
          },
          {
            label: 'subb',
            prop: 'subb'
          }
        ]
      },
      {
        label: 'input',
        formatter: row => XComponent(vue)({
          type: 'input',
          component: vmHelper(vue, 'query.input')
        })
      },
      {
        label: 'btn',
        formatter: row => XComponent(vue)({
          type: 'button',
          component: {
            $text: 'Click me',
            on: {
              click: console.log
            }
          }
        })
      },
      {
        label: 'select',
        formatter: row => XComponent(vue)({
          type: 'select',
          config: {
            label: 'select'
          },
          component: {
            $parent: vmHelper(vue, 'query.select'),
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
        })
      },
      {
        label: 'radio',
        formatter: row => XComponent(vue)({
          type: 'radio',
          config: {
            label: 'radio'
          },
          component: {
            $parent: vmHelper(vue, 'query.radio'),
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
        })
      },
      {
        label: 'checkbox',
        formatter: row => XComponent(vue)({
          type: 'checkbox',
          config: {
            label: 'checkboxGroup'
          },
          component: {
            $parent: vmHelper(vue, 'query.checkboxGroup'),
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
        })
      }
      // // {
      //   'type': undefined,
      //   'index': undefined,
      //   'column-key': undefined,
      //   'label': undefined,
      //   'prop': 'date',
      //   'width': undefined,
      //   'min-width': undefined,
      //   'fixed': undefined,
      //   'render-header': undefined,
      //   'sortable': undefined,
      //   'sort-method': undefined,
      //   'sort-by': undefined,
      //   'sort-orders': undefined,
      //   'resizable': undefined,
      //   'formatter': undefined,
      //   'show-overflow-tooltip': undefined,
      //   'align': undefined,
      //   'header-align': undefined,
      //   'class-name': undefined,
      //   'label-class-name': undefined,
      //   'selectable': undefined,
      //   'reserve-selection': undefined,
      //   'filters': undefined,
      //   'filter-placement': undefined,
      //   'filter-multiple': undefined,
      //   'filter-method': undefined,
      //   'filtered-value': undefined,
      //   $colums: [
      //     {
      //       ...
      //     }
      //   ]
      // }
    ],

    pagination: {
      'page-size': vue.pagination.pageSize,
      'total': vue.pagination.total,
      'current-page': vue.pagination.currentPage,
      'layout': 'total, sizes, prev, pager, next, jumper',
      'page-sizes': [100, 200, 300, 400],
      // 'small': undefined,
      // 'background': undefined,
      // 'page-count': undefined,
      // 'pager-count': undefined,
      // 'popper-class': undefined,
      // 'prev-text': undefined,
      // 'next-text': undefined,
      // 'disabled': undefined

      on: {
        'size-change': vue.handlerEvent,
        'current-change': vue.handlerEvent
        // 'prev-click': undefined,
        // 'next-click': undefined
      }
    }
  }
}
