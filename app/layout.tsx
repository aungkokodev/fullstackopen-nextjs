import React from 'react'
import NavBar from './components/NavBar'
import AuthSessionProvider from './components/SessionProvider'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <AuthSessionProvider>
          <NavBar />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
