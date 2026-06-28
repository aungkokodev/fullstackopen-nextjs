'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '../auth'
import { addReading, toggleReadStatus } from '../services/readinglist'

export const addToReadinglist = async (formData: FormData) => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  const id = formData.get('id') as string

  await addReading(Number(id))
  revalidatePath(`/blogs/${id}`)
}

export const markAsRead = async (formData: FormData) => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  const id = formData.get('id') as string

  await toggleReadStatus(Number(id))
  revalidatePath('/me')
}
