import { likeBlog } from '@/app/actions/blogs'
import { getBlogById } from '@/app/services/blogs'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

const BlogPage = async ({ params }: Props) => {
  const { id } = await params
  const blog = await getBlogById(Number(id))

  if (!blog) {
    notFound()
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>By {blog.author}</p>
      <a href={blog.url}>{blog.url}</a>
      <p>{blog.likes} Likes </p>
      <form action={likeBlog}>
        <input
          type='hidden'
          name='id'
          value={blog.id}
        />
        <button type='submit'>Like</button>
      </form>
    </div>
  )
}

export default BlogPage
