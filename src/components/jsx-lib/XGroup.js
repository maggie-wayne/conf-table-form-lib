export default function XGroup (vue, confGen) {
  return function (...args) {
    // eslint-disable-next-line
    const h = vue.$createElement
    const { parentName, childrenName, $parent, $children } = confGen(...args)
    return (
      <parentName {...$parent}>
        {
          $children.map(i => (
            <childrenName {...i} >{ i.$text }</childrenName>
          ))
        }
      </parentName>
    )
  }
}
