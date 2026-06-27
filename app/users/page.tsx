import Container from '../components/Container'
import Header from '../components/Header'
import { getUsers } from '../services/users'
import UserList from './UserList'

const Users = async () => {
  const users = await getUsers()

  return (
    <Container>
      <Header title='User List' />
      <UserList users={users} />
    </Container>
  )
}

export default Users
