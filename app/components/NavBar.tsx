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
      <NavLink href='/blogs'>Blogs</NavLink>
      <NavLink href='/users'>Users</NavLink>
      {session ?
        <>
          <NavLink href='/blogs/new'>Create New</NavLink>
          <NavLink href='/me'>Me</NavLink>
          <Button className='bg-red-600' onClick={logout}>
            Logout
          </Button>
        </>
      : <>
          <NavLink href='/login'>Login</NavLink>
          <NavLink href='/register'>Register</NavLink>
        </>
      }
    </nav>
  )
}

export default NavBar
