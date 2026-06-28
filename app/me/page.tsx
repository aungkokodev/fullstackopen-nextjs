import { notFound } from 'next/navigation'
import { auth } from '../auth'
import Container from '../components/Container'
import { getCurrentUser } from '../services/session'
import Divider from './Divider'
import Profile from './Profile'
import ReadingList from './ReadingList'
import Token from './Token'

const Me = async () => {
  const session = await auth()
  const user = await getCurrentUser()
  if (!session || !user) {
    return notFound()
  }

  return (
    <Container>
      <div className='p-6 border border-gray-300 rounded-xl shadow-xl'>
        <Profile name={user.name} username={user.username} />
        <Divider />
        <ReadingList />
        <Divider />
        <Token token={user.token} />
      </div>
    </Container>
  )
}

export default Me
