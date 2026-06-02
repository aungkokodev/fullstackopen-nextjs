import { getBlogs } from '../services/blogs';

const Blog = () => {
  const blogs = getBlogs();

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>
              By {blog.author} | Likes {blog.likes}
            </p>
            <a href={blog.url}>{blog.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
