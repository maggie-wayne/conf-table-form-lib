<template>
  <div class="template-table">
    <el-table :data="tableData">
      <el-table-column
        label="name"
        prop="name"
      />
      <el-table-column
        label="address"
        prop="address"
      />
      <el-table-column
        label="email"
        prop="email"
      />
      <el-table-column
        label="phone"
        prop="phone"
      />
      <el-table-column
        label="comment"
        prop="comment"
      />
      <el-table-column
        label="uuid"
        prop="uuid"
      />
    </el-table>
  </div>
</template>

<script>
import data from '../data.json'

export default {
  name: 'TemplateTable',
  data () {
    return {
      tableData: data
    }
  }
}
</script>
