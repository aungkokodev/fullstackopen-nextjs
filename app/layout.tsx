import './globals.css'
import React from 'react'
import NavBar from './components/NavBar'
import Notification from './components/Notification'
import { NotificationProvider } from './components/NotificationContext'
import AuthSessionProvider from './components/SessionProvider'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className='min-h-screen'>
        <AuthSessionProvider>
          <NotificationProvider>
            <div className='max-w-3xl mx-auto'>
              <NavBar />
              <Notification />
              {children}
            </div>
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
