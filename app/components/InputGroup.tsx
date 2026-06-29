import { ComponentPropsWithRef } from 'react'
import Textbox from './Textbox'

interface InputGroupProps extends ComponentPropsWithRef<'input'> {
  label: string
  error?: string
}

const InputGroup = ({ label, error, ...props }: InputGroupProps) => (
  <div className='flex flex-col gap-1'>
    <label htmlFor={props.id} className='text-gray-600 flex flex-col gap-2'>
      <span>{label}</span>
      <Textbox {...props} />
    </label>
    <p
      className='text-sm text-red-600 italic'
      data-testid={`${props.name}-error`}
    >
      {error}
    </p>
  </div>
)

export default InputGroup
