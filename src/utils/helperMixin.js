export default {
  methods: {
    vmHelper (path, e = 'input', cb) {
      // eslint-disable-next-line
      const self = this

      if (!cb) {
        cb = function (v) {
          eval(`self.${path} = v`)
        }
      }

      return {
        props: {
          value: eval(`this.${path}`)
        },
        ...this.eventHelper(e, cb)
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
