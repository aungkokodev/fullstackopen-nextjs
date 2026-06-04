'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { addBlog, increaseLike } from '../services/blogs'

export const createBlog = async (formData: FormData) => {
  const title = formData.get('title') as string
  const author = formData.get('author') as string
  const url = formData.get('url') as string

  await addBlog(title, author, url)
  revalidatePath('/blogs')
  redirect('/blogs')
}

export const likeBlog = async (formData: FormData) => {
  const id = formData.get('id') as string

  await increaseLike(Number(id))
  revalidatePath(`/blogs/${id}`)
  revalidatePath('/blogs')
}

export const searchBlog = async (formData: FormData) => {
  const search = formData.get('search') as string
  if (search) {
    return redirect(`/blogs?search=${search}`)
  }
  return redirect('/blogs')
}
