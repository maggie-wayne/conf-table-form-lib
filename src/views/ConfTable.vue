<template>
  <div class="conf-table">
    <XTable :config="tableConfig"/>
  </div>
</template>

<script>
import data from "../data.json"

export default {
  name: "ConfTable",
  data() {
    const tableData = data

    return {
      tableData,
      tableConfig: {
        table: {
          data: tableData
        },
        colums: [
          {
            label: 'name',
            formatter: function (row) {
              return row.name
            }
          },
          {
            label: 'address',
            formatter: function (row) {
              return row.address
            }
          },
          {
            label: 'email',
            formatter: function (row) {
              return row.email
            }
          },
          {
            label: 'phone',
            formatter: function (row) {
              return row.phone
            }
          },
          {
            label: 'comment',
            formatter: function (row) {
              return row.comment
            }
          },
          {
            label: 'uuid',
            formatter: function (row) {
              return row.uuid
            }
          }
        ]
      }
    }
  }
};
</script>
