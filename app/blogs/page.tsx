import { searchBlog } from '@/app/actions/blogs'
import { getBlogs } from '@/app/services/blogs'
import Button from '../components/Button'
import Container from '../components/Container'
import Header from '../components/Header'
import Textbox from '../components/Textbox'
import BlogList from './BlogList'

interface Props {
  searchParams: Promise<{ search: string }>
}

const Blog = async ({ searchParams }: Props) => {
  const { search } = await searchParams
  const blogs = await getBlogs(search)

  return (
    <Container>
      <Header title='Blog List' />
      <form action={searchBlog} className='w-full sm:w-1/2 flex gap-2 my-4'>
        <Textbox
          name='search'
          defaultValue={search}
          placeholder='search'
          className='w-full'
        />
        <Button>Search</Button>
      </form>
      <BlogList blogs={blogs} />
    </Container>
  )
}

export default Blog
