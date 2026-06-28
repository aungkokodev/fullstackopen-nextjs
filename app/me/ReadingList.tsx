import Link from 'next/link'
import Header from '../components/Header'
import Item from '../components/Item'
import { getReadinglist } from '../services/readinglist'

const ReadingList = async () => {
  const readinglist = await getReadinglist()

  return (
    <div>
      <Header title='Reading List' />

      <div className='space-y-4'>
        {readinglist.length > 0 ?
          <ul className='space-y-4'>
            {readinglist.map(reading => (
              <Item key={reading.id} className='border-0'>
                <Link
                  href={`/blogs/${reading.blogId}`}
                  className='hover:underline'
                >
                  {reading.blog.title}
                </Link>
              </Item>
            ))}
          </ul>
        : <p className='text-gray-600 text-sm p-4 bg-blue-50 rounded italic'>
            Reading list is empty
          </p>
        }
      </div>
    </div>
  )
}

export default ReadingList
