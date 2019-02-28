export default function XButton (vue, confGen) {
  return function (...args) {
    // eslint-disable-next-line
    const h = vue.$createElement
    const config = confGen(...args)

    return <ElButton {...config}>{config.$text}</ElButton>
  }
}
