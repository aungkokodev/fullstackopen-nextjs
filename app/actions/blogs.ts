'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '../auth'
import { addBlog, increaseLike } from '../services/blogs'

interface ActionState {
  title: string
  author: string
  url: string
}

const validate = (value: string, name: string, len = 5) => {
  if (!value) return `${name} must not be empty`
  else if (value.length < len)
    return `${name} must be at least ${len} characters`
  return ''
}

export const createBlog = async (
  prevState: { errors: ActionState; values: ActionState },
  formData: FormData
) => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  const title = formData.get('title') as string
  const author = formData.get('author') as string
  const url = formData.get('url') as string

  const errors = {
    title: validate(title, 'title'),
    author: validate(author, 'author'),
    url: validate(url, 'url')
  }

  if (Object.values(errors).some(Boolean)) {
    return { errors, values: { title, author, url } }
  }

  await addBlog(title, author, url)

  revalidatePath('/blogs')
  redirect('/blogs')
}

export const likeBlog = async (formData: FormData) => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

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
