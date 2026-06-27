'use client'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({
  children,
  className = '',
  type = 'submit',
  onClick = () => {}
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1.5 min-w-20 text-sm rounded text-white bg-blue-500 hover:opacity-90 hover:cursor-pointer active:opacity-100 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
