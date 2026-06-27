import NavBar from './components/NavBar'
import Notification from './components/Notification'
import { NotificationProvider } from './components/NotificationContext'
import AuthSessionProvider from './components/SessionProvider'
import './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className='min-h-screen'>
      <AuthSessionProvider>
        <NotificationProvider>
          <NavBar />
          <Notification />
          {children}
        </NotificationProvider>
      </AuthSessionProvider>
    </body>
  </html>
)

export default RootLayout
