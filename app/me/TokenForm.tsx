'use client'

import { useActionState, useEffect } from 'react'
import { generateToken } from '../actions/users'
import Button from '../components/Button'
import { useNotification } from '../components/NotificationContext'

const TokenForm = () => {
  const [state, formAction, isPending] = useActionState(generateToken, {
    error: '',
    success: false
  })
  const { showNotification } = useNotification()

  useEffect(() => {
    if (state.success) {
      showNotification('Token generated Successfully', 'success')
    }
  }, [showNotification, state.success])

  return (
    <form action={formAction}>
      <Button
        disabled={isPending}
        className='w-50 h-10'
        data-testid='generate-token-button'
      >
        {isPending ? 'Generating token...' : 'Generate New Token'}
      </Button>
    </form>
  )
}

export default TokenForm
