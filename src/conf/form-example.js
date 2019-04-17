export default function () {
  return {
    form: {
      model: this.query,
      inline: true
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
        component: this.vmHelper('query.input')
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
        component: this.vmHelper('query.date')
      },
      {
        type: 'timePicker',
        config: {
          label: 'time'
        },
        component: this.vmHelper('query.time')
      },
      {
        type: 'switch',
        config: {
          label: 'switch'
        },
        component: this.vmHelper('query.switch')
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
        component: this.vmHelper('query.checkbox')
      },
      {
        type: 'checkbox',
        config: {
          label: 'checkboxGroup'
        },
        component: {
          $parent: this.vmHelper('query.checkboxGroup'),
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
          $parent: this.vmHelper('query.select'),
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
          $parent: this.vmHelper('query.radio'),
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
