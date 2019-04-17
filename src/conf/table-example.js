export default function () {
  return {
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
}
