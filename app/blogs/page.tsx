import Link from 'next/link';
import { getBlogs } from '../services/blogs';

const Blog = () => {
  const blogs = getBlogs();
  const blogsByLikes = blogs.toSorted((a, b) => b.likes - a.likes);

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogsByLikes.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
