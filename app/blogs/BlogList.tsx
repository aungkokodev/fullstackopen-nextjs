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
  <ul className='space-y-2'>
    {blogs.map(blog => (
      <Item key={blog.id}>
        <Link href={`/blogs/${blog.id}`} className='hover:underline'>
          {blog.title}
        </Link>
        <span className='text-sm text-gray-400'> By {blog.author}</span>
      </Item>
    ))}
  </ul>
)

export default BlogList
