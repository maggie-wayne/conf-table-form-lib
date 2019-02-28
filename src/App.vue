<template>
  <div id="app">
    <XForm :config="formConfig"/>
    <XTable :config="tableConfig" />
  </div>
</template>

<script>
import formConfigGenerator from './conf/form-example'
import tableConfigGenerator from './conf/table-example'

export default {
  name: 'app',

  data () {
    return {
      data: [
        {
          date: '2016-05-02',
          name: '王1虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id: 1
        }, {
          date: '2016-05-04',
          name: '王2虎',
          address: '上海市普陀区金沙江路 1517 弄',
          id: 2
        }, {
          date: '2016-05-01',
          name: '王3虎',
          address: '上海市普陀区金沙江路 1519 弄',
          id: 3
        }, {
          date: '2016-05-03',
          name: '王4虎',
          address: '上海市普陀区金沙江路 1516 弄',
          id: 4
        }
      ],
      pagination: {
        total: 345,
        pageSize: 100,
        currentPage: 100
      },
      query: {
        input: 'input',
        date: new Date(),
        time: new Date(),
        switch: 'switch',
        checkbox: true,
        checkboxGroup: ['a'],
        select: 1,
        radio: 0
      }
    }
  },

  computed: {
    tableConfig () {
      return tableConfigGenerator(this)
    },
    formConfig () {
      return formConfigGenerator(this)
    }
  },

  methods: {
    handlerEvent (e) {
      console.log('Event', e)
    }
  }
}
</script>
