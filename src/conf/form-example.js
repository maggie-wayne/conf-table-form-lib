import { vmHelper } from '../utils/helpers'

export default vue => {
  return {
    form: {
      model: vue.query,
      style: {
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'justify-content': 'space-between'
      }
    },

    items: [
      {
        type: 'input',
        config: {
          label: 'input'
        },
        container: {
          style: {
            width: '200px'
          }
        },
        component: vmHelper(vue, 'query.input')
      },
      {
        type: 'datePicker',
        config: {
          label: 'date'
        },
        container: {
          style: {
            width: '200px'
          }
        },
        component: vmHelper(vue, 'query.date')
      },
      {
        type: 'timePicker',
        config: {
          label: 'time'
        },
        component: vmHelper(vue, 'query.time')
      },
      {
        type: 'switch',
        config: {
          label: 'switch'
        },
        component: vmHelper(vue, 'query.switch')
      },
      {
        config: {
          label: 'custome'
        },
        component () {
          return <ElButton>asdfsadfasdf</ElButton>
        }
      },
      {
        type: 'checkbox',
        config: {
          label: 'checkbox'
        },
        component: vmHelper(vue, 'query.checkbox')
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        type: 'button',
        config: {
          label: 'button'
        },
        component: {
          $text: 'Clice me',
          on: {
            click: console.log
          }
        }
      }
    ],

    style: {
      form: {
        // background: 'red'
      },
      formItem: {
        // background: 'blue'
      },
      itemContainer: {
        // background: 'yellow'
      },
      component: {
        // background: 'green'
      }
    }
  }
}
