import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const authorization = req.headers.get('authorization')

  if (
    !authorization ||
    !authorization.toLocaleLowerCase().startsWith('bearer ')
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = authorization.substring(7)

  const user = await db.query.users.findFirst({
    where: eq(users.token, token),
    with: { blogs: true },
    columns: {
      token: false,
      passwordHash: false
    }
  })

  return NextResponse.json(user ? user : {})
}
