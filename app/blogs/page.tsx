import Link from 'next/link';
import { searchBlog } from '../actions/blogs';
import { getBlogs } from '../services/blogs';

const Blog = async ({ searchParams }: { searchParams: Promise<{ search: string }> }) => {
  const { search } = await searchParams;

  const blogs = getBlogs();
  const blogsBySearch = search
    ? blogs.filter((blog) => blog.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : blogs;

  const blogsByLikes = blogsBySearch.toSorted((a, b) => b.likes - a.likes);

  return (
    <div>
      <h2>Blogs</h2>
      <form action={searchBlog}>
        <input type="text" name="search" id="blog-search" defaultValue={search} />
        <button type="submit">Search</button>
      </form>
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
