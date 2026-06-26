'use server'

import { db } from '@/db'
import { users } from '@/db/schema'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

const validate = (value: string, name: string, len = 4) => {
  if (!value) return `${name} must not be empty`
  else if (value.length < len)
    return `${name} must be at least ${len} characters`
  return ''
}

interface FormState {
  name: string
  username: string
  password: string
  confirm: string
}

export const registerUser = async (
  prevState: { errors: FormState; values: FormState },
  formData: FormData
) => {
  const name = (formData.get('name') as string).trim()
  const username = (formData.get('username') as string).trim()
  const password = formData.get('password') as string
  const confirm = formData.get('confirm') as string

  const errors = {
    name: validate(name, 'name'),
    username: validate(username, 'username'),
    password: validate(password, 'password', 0),
    confirm: password !== confirm ? 'passwords do not match' : ''
  }

  if (Object.values(errors).some(Boolean)) {
    return { errors, values: { name, username, password, confirm } }
  }

  const userExists = await db.query.users.findFirst({
    where: eq(users.username, username)
  })

  if (userExists) {
    errors.username = 'username must be unique'
    return { errors, values: { name, username, password, confirm } }
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await db.insert(users).values({ name, username, passwordHash })

  redirect('/login')
}
