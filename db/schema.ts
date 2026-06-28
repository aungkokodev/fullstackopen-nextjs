import { relations } from 'drizzle-orm'
import { boolean, integer, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const blogs = pgTable('blogs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  url: text('url').notNull(),
  likes: integer('likes').notNull().default(0),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id)
})

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('passwordHash').notNull().default(''),
  token: text('token')
})

export const readinglist = pgTable('readinglist', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  blogId: integer('blog_id')
    .notNull()
    .references(() => blogs.id),
  read: boolean('read').default(false)
})

export const usersRelations = relations(users, ({ many }) => ({
  blogs: many(blogs),
  readings: many(readinglist)
}))

export const blogsRelations = relations(blogs, ({ one, many }) => ({
  user: one(users, { fields: [blogs.userId], references: [users.id] }),
  readers: many(readinglist)
}))

export const readinglistRelations = relations(readinglist, ({ one }) => ({
  user: one(users, { fields: [readinglist.userId], references: [users.id] }),
  blog: one(blogs, { fields: [readinglist.blogId], references: [blogs.id] })
}))
