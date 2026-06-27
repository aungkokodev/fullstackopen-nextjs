import Link from 'next/link'

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
      <li
        key={user.id}
        className='px-4 py-2 rounded border border-blue-300 bg-blue-50 text-gray-600 hover:text-blue-600 hover:bg-blue-100'
      >
        <Link
          href={`/users/${user.username}`}
          className='hover:underline hover:text-blue-600'
        >
          {user.name}
        </Link>
        <span className='text-sm italic text-gray-400'> @{user.username}</span>
      </li>
    ))}
  </ul>
)

export default UserList
