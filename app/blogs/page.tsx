import Link from 'next/link'
import { searchBlog } from '@/app/actions/blogs'
import { getBlogs } from '@/app/services/blogs'

interface Props {
  searchParams: Promise<{ search: string }>
}

const Blog = async ({ searchParams }: Props) => {
  const { search } = await searchParams

  const blogs = await getBlogs(search)

  return (
    <div>
      <h2>Blogs</h2>

      <form action={searchBlog}>
        <input
          type='text'
          name='search'
          id='blog-search'
          defaultValue={search}
        />
        <button type='submit'>Search</button>
      </form>

      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
