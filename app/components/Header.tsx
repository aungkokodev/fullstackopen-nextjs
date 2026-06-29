import { ComponentPropsWithRef } from 'react'

interface HeaderProps extends ComponentPropsWithRef<'h2'> {
  title: string
}

const Header = ({ title, ...props }: HeaderProps) => (
  <h2
    className={`font-bold text-xl text-gray-800 mb-4 ${props.className}`}
    {...props}
  >
    {title}
  </h2>
)

export default Header
