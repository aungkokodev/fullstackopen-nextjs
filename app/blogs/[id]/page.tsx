import { getBlogById } from '@/app/services/blogs';
import { notFound } from 'next/navigation';

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>By {blog.author}</p>
      <a href={blog.url}>{blog.url}</a>
      <p>{blog.likes} Likes</p>
    </div>
  );
};

export default BlogPage;
