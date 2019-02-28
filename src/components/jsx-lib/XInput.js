export default function XInput (vue, confGen) {
  return function (...args) {
    // eslint-disable-next-line
    const h = vue.$createElement
    const config = confGen(...args)

    return <ElInput {...config} />
  }
}
