import { registerUser } from '../actions/users'

const Register = () => {
  return (
    <div>
      <h2>Regiser</h2>
      <form action={registerUser}>
        <div>
          <label>
            name
            <input
              type='text'
              name='name'
              required
            />
          </label>
        </div>
        <div>
          <label>
            username
            <input
              type='text'
              name='username'
              required
            />
          </label>
        </div>
        <div>
          <label>
            password
            <input
              type='password'
              name='password'
              required
            />
          </label>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
