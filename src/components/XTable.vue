<script>
import { fmtJSXConfig } from '../utils/helpers'

export default {
  name: 'XTable',
  props: {
    config: {
      type: Object,
      required: true
    }
  },


  render () {
    let { table, colums, pagination } = this.config

    const columsRender = colums => colums.map(i => (
      <ElTableColumn { ...fmtJSXConfig(i) }>
        {
          ('$colums' in i && i.$colums.length) && columsRender(i.$colums)
        }
      </ElTableColumn>
    ))

    const tableEl = (table, colums) => table && colums && (
      <ElTable { ...fmtJSXConfig(table) }>
        { columsRender(colums) }
      </ElTable>
    )

    const paginationRender = pagination => pagination && <ElPagination { ...fmtJSXConfig(pagination) } />

    return (
      <div class="x-table">
        { tableEl(table, colums) }
        { paginationRender(pagination) }
      </div>
    )
  }
}
</script>
