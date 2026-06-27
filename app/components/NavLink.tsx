import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className='hover:text-gray-400'>
    {children}
  </Link>
)

export default NavLink
