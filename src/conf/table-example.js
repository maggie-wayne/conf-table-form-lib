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
    table: {
      'data': this.data,

      on: {
        'selection-change': handlerEvent
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
        formatter: function () {
          return <ElInput { ...inputVm } />
        }
      },

      {
        label: 'btn',
        formatter: function () {
          return <ElButton onClick={ handlerEvent }>Click me!</ElButton>
        }
      },

      {
        label: 'select',
        formatter: function () {
          return (
            <ElSelect { ...selectVm }>
              { options.map(x => <ElOption value={ x.value } label={ x.label } />) }
            </ElSelect>
          )
        }
      },

      {
        label: 'radio',
        formatter: function () {
          return (
            <ElRadioGroup { ...selectVm }>
              { options.map(x => <ElRadio label={ x.value }>{ x.label }</ElRadio>) }
            </ElRadioGroup>
          )
        }
      },

      {
        label: 'checkbox',
        formatter: function () {
          return (
            <ElCheckboxGroup { ...checkboxVm }>
              { options.map(x => <ElCheckbox label={ x.value }>{ x.label }</ElCheckbox>) }
            </ElCheckboxGroup>
          )
        }
      }
    ],

    pagination: {
      'page-size': this.pagination.pageSize,
      'total': this.pagination.total,
      'current-page': this.pagination.currentPage,
      'layout': 'total, sizes, prev, pager, next, jumper',
      'page-sizes': [100, 200, 300, 400],

      on: {
        'size-change': handlerEvent,
        'current-change': handlerEvent
      }
    }
  }
}
