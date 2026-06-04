import { db } from '@/db'
import { blogs } from '@/db/schema'
import { eq, ilike } from 'drizzle-orm'

export const getBlogs = async (filter: string) => {
  return db.query.blogs.findMany({
    where: ilike(blogs.title, `%${filter ? filter : ''}%`),
    orderBy: (blogs, { desc }) => [desc(blogs.likes)]
  })
}

export const getBlogById = async (id: number) => {
  return await db.query.blogs.findFirst({
    where: eq(blogs.id, id)
  })
}

export const addBlog = async (title: string, author: string, url: string) => {
  await db.insert(blogs).values({ title, author, url, likes: 0 })
}

export const increaseLike = async (id: number) => {
  const blog = await getBlogById(id)
  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes! + 1 })
      .where(eq(blogs.id, blog.id))
  }
}
