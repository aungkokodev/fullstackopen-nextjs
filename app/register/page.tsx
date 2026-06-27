'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { registerUser } from '../actions/users'
import Button from '../components/Button'
import Container from '../components/Container'
import Header from '../components/Header'
import InputGroup from '../components/InputGroup'
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
    <Container>
      <Header title='Register' className='text-center' />
      <form action={formAction} className='space-y-2 max-w-xs mx-auto'>
        <InputGroup
          label='Name'
          type='text'
          name='name'
          defaultValue={state.values?.name}
          error={state.errors?.name}
        />
        <InputGroup
          label='Username'
          type='text'
          name='username'
          defaultValue={state.values?.username}
          error={state.errors?.username}
        />
        <InputGroup
          label='Password'
          type='password'
          name='password'
          defaultValue={state.values?.password}
          error={state.errors?.password}
        />
        <InputGroup
          label='Confirm Password'
          type='password'
          name='confirm'
          defaultValue={state.values?.confirm}
          error={state.errors?.confirm}
        />
        <Button className='mt-4 w-full h-9'>Register</Button>
      </form>
    </Container>
  )
}

export default Register
