import { notFound } from 'next/navigation'
import { auth } from '../auth'
import Container from '../components/Container'
import Header from '../components/Header'
import { getCurrentUser } from '../services/session'
import TokenForm from './TokenForm'

const Me = async () => {
  const session = await auth()
  const user = await getCurrentUser()

  if (!session || !user) {
    return notFound()
  }

  return (
    <Container>
      <div className='p-6 border border-gray-300 rounded-xl shadow-xl'>
        <Header title='My Profile' />
        <div className='space-y-4'>
          <p className='text-gray-600'>
            <span className='font-bold'>Name:</span> {user?.name}
          </p>
          <p className='text-gray-600'>
            <span className='font-bold'>Username:</span> {user?.username}
          </p>
        </div>

        <hr className='my-4 text-gray-600' />

        <Header title='API Token' />
        <div className='space-y-4'>
          <div className='bg-blue-50 text-gray-600 p-4 rounded'>
            {user.token ?
              <>
                <p>Current token:</p>
                <p className='bg-blue-100 text-gray-800 px-4 py-2 rounded mt-2'>
                  {user.token}
                </p>
              </>
            : <p className='text-gray-600 italic'>
                No token has been generated yet
              </p>
            }
          </div>
          <TokenForm />
        </div>
      </div>
    </Container>
  )
}

export default Me
