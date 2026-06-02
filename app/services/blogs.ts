import { randomBytes } from 'node:crypto';

const blogs = [
  {
    id: '679bc9fc2f308b4efe78ef65',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    id: '679bc9fc2f308b4efe78ef69',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    id: '679bc9fc2f308b4efe78ef6d',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    id: '679bc9fc2f308b4efe78ef71',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    id: '679bc9fc2f308b4efe78ef75',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    id: '679bc9fc2f308b4efe78ef79',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  }
];

const getId = () => randomBytes(12).toString('hex');

export const getBlogs = () => {
  return blogs;
};

export const getBlogById = (id: string) => {
  return blogs.find((blog) => blog.id === id);
};

export const addBlog = (title: string, author: string, url: string) => {
  const newBlog = { id: getId(), title, author, url, likes: 0 };
  blogs.push(newBlog);
};

export const increaseLike = (id: string) => {
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    blog.likes += 1;
  }
};
