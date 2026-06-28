import Link from 'next/link'
import Item from '../components/Item'

interface User {
  id: number
  name: string
  username: string
}

interface UserListProps {
  users: User[]
}

const UserList = ({ users }: UserListProps) => (
  <ul className='space-y-2'>
    {users.map(user => (
      <Item key={user.id}>
        <Link href={`/users/${user.username}`} className='hover:underline'>
          {user.name}
        </Link>
        <span className='text-sm italic text-gray-400'> @{user.username}</span>
      </Item>
    ))}
  </ul>
)

export default UserList
