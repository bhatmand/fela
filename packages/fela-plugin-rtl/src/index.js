/* @flow */
import transformStyle from 'rtl-css-js'

export default function rtl() {
  return (style: Object) => transformStyle(style)
}
