const options = [
  {
    label: '选项1',
    value: 1
  },
  {
    label: '选项2',
    value: 2
  }
]

const options2 = [
  {
    label: 1,
    $text: '选项1'
  },
  {
    label: 2,
    $text: '选项2'
  }
]


export default function () {
  return {
    form: {
      model: this.query,
      'label-width': '120px'
    },

    items: [
      {
        type: 'input',
        config: {
          label: 'input'
        },
        component: this.vm('query.input')
      },

      {
        type: 'datePicker',
        config: {
          label: 'date'
        },
        component: this.vm('query.date')
      },

      {
        type: 'timePicker',
        config: {
          label: 'time'
        },
        component: this.vm('query.time')
      },

      {
        type: 'switch',
        config: {
          label: 'switch'
        },
        component: this.vm('query.switch')
      },

      {
        type: 'checkbox',
        config: {
          label: 'checkbox'
        },
        component: this.vm('query.checkbox')
      },

      {
        type: 'checkbox',
        config: {
          label: 'checkboxGroup'
        },
        component: {
          $parent: this.vm('query.checkbox'),
          $children: options2
        }
      },

      {
        type: 'select',
        config: {
          label: 'select'
        },
        component: {
          $parent: {
            ...this.vm('query.select'),
            style: {
              width: '100%'
            }
          },
          $children: options
        }
      },

      {
        type: 'radio',
        config: {
          label: 'radio'
        },
        component: {
          $parent: this.vm('query.select'),
          $children: options2
        }
      },

      {
        type: 'button',
        config: {
          label: 'button'
        },
        component: {
          $text: 'Clice me!',
          on: {
            click: console.log
          }
        }
      },

      {
        config: {
          label: 'custome'
        },
        component () {
          return <ElButton>Click me!</ElButton>
        }
      }
    ],

    style: {
      form: {
        display: 'flex',
        'flex-wrap': 'wrap',
        'flex-direction': 'row',
        'justify-content': 'space-between'
      },

      formItem: {
        width: '30%'
      }
    }
  }
}
