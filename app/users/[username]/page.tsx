import BlogList from '@/app/blogs/BlogList'
import Container from '@/app/components/Container'
import Header from '@/app/components/Header'
import { getUserWithBlogs } from '@/app/services/users'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ username: string }>
}

const UserPage = async ({ params }: Props) => {
  const { username } = await params

  const user = await getUserWithBlogs(username)

  if (!user) {
    notFound()
  }

  return (
    <Container>
      <Header title={user.name} />
      <p className='text-gray-400 italic'>@{user.username}</p>
      <h3 className='font-bold text-gray-600 my-4'>Blogs Added</h3>
      <BlogList blogs={user.blogs} />
    </Container>
  )
}

export default UserPage
