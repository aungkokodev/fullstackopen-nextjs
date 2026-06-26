'use client'

import { createBlog } from '@/app/actions/blogs'
import { useNotification } from '@/app/components/NotificationContext'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'

const initialState = {
  title: '',
  author: '',
  url: ''
}

const NewBlog = () => {
  const [state, formAction] = useActionState(createBlog, {
    errors: { ...initialState },
    values: { ...initialState },
    success: false
  })
  const { showNotification } = useNotification()
  const router = useRouter()

  useEffect(() => {
    if (state.success) {
      showNotification('blog created successfully')
      router.push('/blogs')
    }
  }, [router, showNotification, state.success])

  return (
    <div>
      <h2>Create New Blog</h2>
      <form action={formAction}>
        <div>
          <label>
            Title:
            <input
              type='text'
              name='title'
              id='blog-title'
              defaultValue={state.values?.title}
            />
          </label>
          {state.errors.title && (
            <span style={{ color: 'red' }}> {state.errors.title}</span>
          )}
        </div>
        <div>
          <label>
            Author:
            <input
              type='text'
              name='author'
              id='blog-author'
              defaultValue={state.values?.author}
            />
          </label>
          {state.errors.author && (
            <span style={{ color: 'red' }}> {state.errors.author}</span>
          )}
        </div>
        <div>
          <label>
            URL:
            <input
              type='text'
              name='url'
              id='blog-url'
              defaultValue={state.values?.url}
            />
          </label>
          {state.errors.url && (
            <span style={{ color: 'red' }}> {state.errors.url}</span>
          )}
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default NewBlog
