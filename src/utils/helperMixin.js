export default {
  methods: {
    vm (path, e = 'input', cb) {
      // eslint-disable-next-line
      const self = this

      const defaultCb = function (event) {
        eval(`self.${path} = event`)
      }

      return {
        props: {
          value: eval(`this.${path}`)
        },
        ...this.eventHelper(e, cb || defaultCb)
      }
    },


    eventHelper (e, cb) {
      return {
        on: {
          [e]: cb
        }
      }
    }
  }
}
