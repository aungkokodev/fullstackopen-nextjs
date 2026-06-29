'use client'

import { signOut, useSession } from 'next-auth/react'
import Button from './Button'
import NavLink from './NavLink'

const NavBar = () => {
  const { data: session } = useSession()

  const logout = async () => {
    await signOut({ redirectTo: '/' })
  }

  return (
    <nav className='bg-blue-950 text-white px-6 py-4 flex items-center gap-4 flex-wrap'>
      <div className='me-auto font-bold'>
        <NavLink href='/'>Home</NavLink>
      </div>
      <NavLink href='/blogs'>blogs</NavLink>
      <NavLink href='/users'>users</NavLink>
      {session ?
        <>
          <NavLink href='/blogs/new'>create new</NavLink>
          <NavLink href='/me'>me</NavLink>
          <Button className='bg-red-600' onClick={logout}>
            logout
          </Button>
        </>
      : <>
          <NavLink href='/login'>login</NavLink>
          <NavLink href='/register'>register</NavLink>
        </>
      }
    </nav>
  )
}

export default NavBar
