<template>
  <div id="app">
    <XForm :config="formConfig"/>
    <XTable :config="tableConfig" />
  </div>
</template>


<script>
import helperMixin from './utils/helperMixin'
import formConfigGenerator from './conf/form-example'
import tableConfigGenerator from './conf/table-example'


export default {
  name: 'app',

  mixins: [helperMixin],

  data () {
    return {
      data: [
        {
          date: '2016-05-02',
          name: '王1虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id: 1
        },
        {
          date: '2016-05-04',
          name: '王2虎',
          address: '上海市普陀区金沙江路 1517 弄',
          id: 2
        },
        {
          date: '2016-05-01',
          name: '王3虎',
          address: '上海市普陀区金沙江路 1519 弄',
          id: 3
        },
        {
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
        select: 1,
        checkbox: [1],
        date: new Date(),
        time: new Date(),
        switch: 'switch'
      }
    }
  },


  computed: {
    tableConfig () {
      return tableConfigGenerator.call(this)
    },

    formConfig () {
      return formConfigGenerator.call(this)
    }
  },


  methods: {
    vm: vmHelper,

    handlerEvent (e) {
      console.log('Event', e)
    }
  }
}
</script>
