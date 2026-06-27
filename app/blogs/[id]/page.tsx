import { likeBlog } from '@/app/actions/blogs'
import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import Header from '@/app/components/Header'
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
    <Container>
      <Header title={blog.title} />
      <div className='space-y-2'>
        <p className='text-gray-400 italic'>By {blog.author}</p>
        <p>
          <a href={blog.url} className='text-blue-600 hover:underline'>
            {blog.url}
          </a>
        </p>
        <p>
          {blog.likes} {blog.likes > 1 ? 'Likes' : 'Like'}
        </p>
        <form action={likeBlog}>
          <input type='hidden' name='id' value={blog.id} />
          <Button>Like</Button>
        </form>
      </div>
    </Container>
  )
}

export default BlogPage
