'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { registerUser } from '../actions/users'
import { useNotification } from '../components/NotificationContext'

const initialState = {
  name: '',
  username: '',
  password: '',
  confirm: ''
}

const Register = () => {
  const [state, formAction] = useActionState(registerUser, {
    errors: { ...initialState },
    values: { ...initialState },
    success: false
  })
  const { showNotification } = useNotification()
  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      showNotification('user created successfully')
      router.push('/login')
    }
  }, [router, showNotification, state.success])

  return (
    <div>
      <h2>Regiser</h2>
      <form action={formAction}>
        <div>
          <label>
            Name
            <input
              type='text'
              name='name'
              defaultValue={state.values?.name}
            />
          </label>
          {state.errors?.name && (
            <span style={{ color: 'red' }}> {state.errors?.name}</span>
          )}
        </div>
        <div>
          <label>
            Username
            <input
              type='text'
              name='username'
              defaultValue={state.values?.username}
            />
          </label>
          {state.errors?.username && (
            <span style={{ color: 'red' }}> {state.errors?.username}</span>
          )}
        </div>
        <div>
          <label>
            Password
            <input
              type='password'
              name='password'
              defaultValue={state.values?.password}
            />
          </label>
          {state.errors?.password && (
            <span style={{ color: 'red' }}> {state.errors?.password}</span>
          )}
        </div>
        <div>
          <label>
            Confirm Password
            <input
              type='password'
              name='confirm'
              defaultValue={state.values?.confirm}
            />
          </label>
          {state.errors?.confirm && (
            <span style={{ color: 'red' }}> {state.errors?.confirm}</span>
          )}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
