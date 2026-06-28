import Header from '../components/Header'
import CopyButton from './CopyButton'
import TokenForm from './TokenForm'

interface TokenProps {
  token: string | null
}

const Token = ({ token }: TokenProps) => (
  <div>
    <Header title='API Token' />
    <div className='space-y-4'>
      <div className='bg-blue-50 text-gray-600 p-4 rounded'>
        {token ?
          <>
            <p>Current token:</p>
            <div className='bg-blue-100 text-gray-800 px-4 py-2 rounded mt-2 flex items-center justify-between'>
              <p>{token}</p>
              <CopyButton text={token} />
            </div>
          </>
        : <p className='text-gray-600 italic text-sm'>
            No token has been generated yet
          </p>
        }
      </div>
      <TokenForm />
    </div>
  </div>
)

export default Token
