import { likeBlog } from '@/app/actions/blogs'
import { addToReadinglist } from '@/app/actions/readinglist'
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
      <Header title={blog.title} data-testid='blog-title' />
      <div className='space-y-2' data-testid='blog-detail'>
        <p className='text-gray-400 italic' data-testid='blog-author'>
          By {blog.author}
        </p>
        <div className='flex gap-4 items-center'>
          <p>
            {blog.likes} {blog.likes > 1 ? 'Likes' : 'Like'}
          </p>
          <form action={likeBlog}>
            <input type='hidden' name='id' value={blog.id} />
            <Button>Like</Button>
          </form>
          {blog.readers?.length === 0 && (
            <form action={addToReadinglist}>
              <input type='hidden' name='id' value={blog.id} />
              <Button
                className='bg-green-600'
                data-testid='add-to-reading-list-button'
              >
                Add to reading list
              </Button>
            </form>
          )}
        </div>
        <a href={blog.url} className='text-blue-600 hover:underline'>
          {blog.url}
        </a>
      </div>
    </Container>
  )
}

export default BlogPage
