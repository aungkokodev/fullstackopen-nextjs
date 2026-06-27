import { ComponentPropsWithRef } from 'react'

type TextboxProps = ComponentPropsWithRef<'input'>

const Textbox = (props: TextboxProps) => (
  <input
    {...props}
    className={`text-sm rounded text-gray-800 px-2 py-1.5 bg-blue-50 outline-1 outline-blue-300 focus:outline-2 ${props.className}`}
  />
)

export default Textbox
