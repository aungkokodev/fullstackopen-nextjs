import Link from 'next/link'
import { markAsRead } from '../actions/readinglist'
import Button from '../components/Button'
import Header from '../components/Header'
import Item from '../components/Item'
import { getReadinglist } from '../services/readinglist'

const ReadingList = async () => {
  const readinglist = await getReadinglist()

  const readList = readinglist.filter(r => r.read)
  const unreadList = readinglist.filter(r => !r.read)

  return (
    <div data-testid='reading-list-section'>
      <Header title='Reading List' />
      {readinglist.length > 0 ?
        <div className='space-y-4'>
          <h3 className='font-bold text-gray-600'>
            Unread ({unreadList.length})
          </h3>
          <ul className='space-y-4' data-testid='unread-section'>
            {unreadList.map(reading => (
              <Item
                key={reading.id}
                className='border-0 flex items-center justify-between gap-4'
              >
                <Link
                  href={`/blogs/${reading.blogId}`}
                  className='hover:underline'
                >
                  {reading.blog.title}
                </Link>
                <form className='shrink-0' action={markAsRead}>
                  <input type='hidden' name='id' value={reading.blogId} />
                  <Button
                    className='bg-green-600'
                    data-testid='mark-read-button'
                  >
                    Mark as read
                  </Button>
                </form>
              </Item>
            ))}
          </ul>
          <h3 className='font-bold text-gray-600'>Read ({readList.length})</h3>
          <ul className='space-y-4' data-testid='no-unread-blogs'>
            {readList.map(reading => (
              <Item
                key={reading.id}
                className='border-0 flex items-center justify-between gap-4'
              >
                <Link
                  href={`/blogs/${reading.blogId}`}
                  className='hover:underline'
                >
                  {reading.blog.title}
                </Link>
              </Item>
            ))}
          </ul>
        </div>
      : <p
          className='text-gray-600 italic text-sm bg-blue-50 p-4 rounded'
          data-testid='empty-reading-list'
        >
          You have not added any blogs to your list yet
        </p>
      }
    </div>
  )
}

export default ReadingList
