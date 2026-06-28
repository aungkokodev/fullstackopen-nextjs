import { db } from '@/db'
import { readinglist } from '@/db/schema'
import { and, eq } from 'drizzle-orm'
import { getCurrentUser } from './session'

export const addReading = async (blogId: number) => {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Not logged in')
  }

  const isExist = await db.query.readinglist.findFirst({
    where: and(eq(readinglist.userId, user.id), eq(readinglist.blogId, blogId))
  })
  if (isExist) {
    return null
  }

  await db.insert(readinglist).values({
    userId: user.id,
    blogId
  })
}

export const getReadinglist = async () => {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Not logged in')
  }

  return await db.query.readinglist.findMany({
    where: eq(readinglist.userId, user.id),
    with: {
      blog: true
    }
  })
}

export const toggleReadStatus = async (id: number, read: boolean = true) => {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Not logged in')
  }

  await db
    .update(readinglist)
    .set({ read })
    .where(and(eq(readinglist.userId, user.id), eq(readinglist.blogId, id)))
}
