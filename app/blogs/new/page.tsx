'use client'

import { createBlog } from '@/app/actions/blogs'
import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import Header from '@/app/components/Header'
import InputGroup from '@/app/components/InputGroup'
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
    <Container>
      <Header title='Create New Blog' className='text-center' />
      <form action={formAction} className='space-y-2 max-w-xs mx-auto'>
        <InputGroup
          label='Title'
          name='title'
          id='blog-title'
          placeholder='Blog Title'
          defaultValue={state.values?.title}
          error={state.errors.title}
        />
        <InputGroup
          label='Author'
          name='author'
          id='blog-author'
          placeholder='John'
          defaultValue={state.values?.author}
          error={state.errors.author}
        />
        <InputGroup
          label='URL'
          name='url'
          id='blog-url'
          placeholder='http://example.com'
          defaultValue={state.values?.url}
          error={state.errors.url}
        />
        <Button className='mt-4 w-full h-9'>Create</Button>
      </form>
    </Container>
  )
}

export default NewBlog
