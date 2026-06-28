import Header from '../components/Header'

interface ProfileProps {
  name: string
  username: string
}

const Profile = ({ name, username }: ProfileProps) => (
  <div>
    <Header title='My Profile' />
    <div className='space-y-4'>
      <p className='text-gray-600'>
        <span className='font-bold'>Name:</span> {name}
      </p>
      <p className='text-gray-600'>
        <span className='font-bold'>Username:</span> {username}
      </p>
    </div>
  </div>
)

export default Profile
