import { vmHelper, formItemHelperGenerator, btnHelper } from '../utils/helpers'

const testData = () => ([
  {
    label: 'a',
    value: 0
  },
  {
    label: 'b',
    value: 1
  }
])

const useHelper = vue => {
  const formItemHelper = formItemHelperGenerator(vue)
  return {
    form: {
      model: vue.query,
      inline: true
    },

    items: [
      formItemHelper('input', 'input', 'query.input'),
      formItemHelper('datePicker', 'date', 'query.date'),
      formItemHelper('timePicker', 'time', 'query.time'),
      formItemHelper('switch', 'switch', 'query.switch'),
      formItemHelper('checkbox', 'checkbox', 'query.checkbox'),
      formItemHelper('checkboxGroup', 'checkboxGroup', 'query.checkboxGroup', testData()),
      formItemHelper('select', 'select', 'query.select', testData()),
      formItemHelper('radio', 'radio', 'query.radio', testData()),
      {
        type: 'button',
        component: {
          ...btnHelper('Click me', console.log)
        }
      }
    ],

    style: {
      itemContainer: {
        width: '200px'
      }
    }
  }
}

export default useHelper

// eslint-disable-next-line
const example = vue => {
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
          label: 'input',
          style: {
            'align-items': 'flex-start',
            width: '50%',
            display: 'flex',
            'justify-content': 'center'
          }
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
          label: 'date',
          style: {
            'align-items': 'flex-start',
            width: '50%'
          }
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
        type: 'checkbox',
        config: {
          label: 'checkbox'
        },
        component: vmHelper(vue, 'query.checkbox')
      },
      {
        type: 'checkboxGroup',
        config: {
          label: 'checkboxGroup'
        },
        component: {
          $parent: vmHelper(vue, 'query.checkboxGroup'),
          $children: testData()
        }
      },
      {
        type: 'select',
        config: {
          label: 'select'
        },
        component: {
          $parent: vmHelper(vue, 'query.select'),
          $children: testData()
        }
      },
      {
        type: 'radio',
        config: {
          label: 'radio'
        },
        component: {
          $parent: vmHelper(vue, 'query.radio', 'change'),
          $children: testData()
        }
      },
      {
        type: 'button',
        config: {
          label: 'button'
        },
        component: {
          ...btnHelper('Click me', console.log)
        }
      }
    ],

    style: {
      form: {
        background: 'red'
      },
      formItem: {
        background: 'blue'
      },
      itemContainer: {
        background: 'yellow'
      },
      component: {
        background: 'green'
      }
    }
  }
}
