import Link from 'next/link'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <nav>
          <Link href='/'>Home</Link>
          {' | '}
          <Link href='/blogs'>Blogs</Link>
          {' | '}
          <Link href='/blogs/new'>Create New</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
