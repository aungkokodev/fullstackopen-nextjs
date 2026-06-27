import Link from 'next/link'

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
      <li
        key={blog.id}
        className='px-4 py-2 rounded bg-blue-50 border border-blue-400 text-gray-600 hover:text-blue-600 hover:bg-blue-100 '
      >
        <Link
          href={`/blogs/${blog.id}`}
          className='hover:underline hover:text-blue-600'
        >
          {blog.title.length > 48 ?
            blog.title.slice(0, 48).concat('...')
          : blog.title}
        </Link>
        <span className='text-sm text-gray-400'> By {blog.author}</span>
      </li>
    ))}
  </ul>
)

export default BlogList
