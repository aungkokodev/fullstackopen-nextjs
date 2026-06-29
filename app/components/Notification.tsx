'use client'

import { useNotification } from './NotificationContext'

const Notification = () => {
  const { message, type } = useNotification()

  if (!message) return null

  return (
    <div
      className={`text-white p-4 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
      data-testid={type === 'error' ? 'error-message' : 'notification'}
    >
      <p>{message}</p>
    </div>
  )
}

export default Notification
