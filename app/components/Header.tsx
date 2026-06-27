interface HeaderProps {
  title: string
  className?: string
}

const Header = ({ title, className = '' }: HeaderProps) => (
  <h2 className={`font-bold text-xl text-gray-800 mb-4 ${className}`}>
    {title}
  </h2>
)

export default Header
