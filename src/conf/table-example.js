import { vmHelper, jsxLibHelper, btnHelper, groupHelper } from '../utils/helpers'

export default function (vue) {
  const lib = jsxLibHelper(vue)
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
        formatter: lib.XInput(row => vmHelper(row, 'name'))
      },
      {
        label: 'btn',
        formatter: lib.XButton(() => btnHelper('Click me', vue.handlerEvent))
      },
      {
        label: 'select',
        formatter: lib.XGroup(() => groupHelper('select', vue.data.map(x => ({ label: x.name, value: x.id })), vmHelper(vue, 'query.select')))
      },
      {
        label: 'radio',
        formatter: lib.XGroup(() => groupHelper('radio', vue.data.map(x => ({ label: x.id, $text: x.name })), vmHelper(vue, 'query.radio')))
      },
      {
        label: 'checkbox',
        formatter: lib.XGroup(() => groupHelper('checkbox', vue.data.map(x => ({ label: x.name, value: x.id })), vmHelper(vue, 'query.checkbox')))
      }
      // {
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
