import Link from 'next/link'
import Item from '../components/Item'

interface Blog {
  id: number
  title: string
  author: string
  url: string
  likes: number
  userId: number
}

interface BlogListProps {
  blogs: Blog[]
}

const BlogList = ({ blogs }: BlogListProps) => (
  <ul className='space-y-2' data-testid='blogs-list'>
    {blogs.map(blog => (
      <Item key={blog.id} className='flex items-center gap-2'>
        <Link href={`/blogs/${blog.id}`} className='hover:underline'>
          {blog.title}
        </Link>
        <span className='text-sm text-gray-400'> By {blog.author}</span>
        <span className='text-sm text-gray-400 ml-auto shrink-0'>
          {' '}
          {blog.likes} likes
        </span>
      </Item>
    ))}
  </ul>
)

export default BlogList
