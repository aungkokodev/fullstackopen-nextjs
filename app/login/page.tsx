'use client'

import { signIn, useSession } from 'next-auth/react'
import { notFound, useRouter } from 'next/navigation'
import Button from '../components/Button'
import Container from '../components/Container'
import Header from '../components/Header'
import InputGroup from '../components/InputGroup'
import { useNotification } from '../components/NotificationContext'

const Login = () => {
  const router = useRouter()
  const { showNotification } = useNotification()

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const result = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false
    })

    if (result?.error) {
      showNotification('Invalid username or password', 'error')
    } else {
      showNotification('Login successful')
      router.push('/')
      router.refresh()
    }
  }

  const { data: session, status } = useSession()
  if (status === 'loading' || session) {
    return null
  }

  return (
    <Container>
      <Header title='Login' className='text-center' />
      <form onSubmit={handleSubmit} className='space-y-2 max-w-xs mx-auto'>
        <InputGroup label='Username' type='text' name='username' />
        <InputGroup label='Password' type='password' name='password' />
        <Button className='mt-4 w-full h-9'>Login</Button>
      </form>
    </Container>
  )
}

export default Login
