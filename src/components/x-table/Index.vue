<script>
import { fmtJSXConfig } from '../../utils/helpers'

export default {
  name: 'XTable',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  

  render () {
    console.time('Render XTable time: ')
    let { table, colums, pagination } = this.config
    table = fmtJSXConfig(table)
    colums = colums.map(fmtJSXConfig)
    pagination = fmtJSXConfig(pagination)

    const columsRender = colums => colums.map(i => {
      return (
        <ElTableColumn { ...i }>
          {
            ('$colums' in i && i.$colums.length) && columsRender(i.$colums)
          }
        </ElTableColumn>
      )
    })

    const tableEl = (
      <ElTable { ...table }>
        { columsRender(colums) }
      </ElTable>
    )

    const paginationRender = pagination => <ElPagination { ...pagination } />
    const El = this.config && (
      <div>
        { tableEl }
        { paginationRender(pagination) }
      </div>
    )

    console.timeEnd('Render XTable time: ')
    return El
  }
}
</script>
