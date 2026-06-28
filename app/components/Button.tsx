'use client'

import { ComponentPropsWithRef } from 'react'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props}
    className={`inline-block px-3 py-1.5 min-w-20 text-sm rounded text-white bg-blue-500 hover:opacity-90 hover:cursor-pointer active:opacity-100 ${props.className}`}
  >
    {children}
  </button>
)

export default Button
