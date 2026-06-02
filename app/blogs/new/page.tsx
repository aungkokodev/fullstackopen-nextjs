import { createBlog } from '@/app/actions/blogs';

const NewBlog = () => {
  return (
    <div>
      <h2>Create New Blog</h2>
      <form action={createBlog}>
        <label>
          Title: <input type="text" name="title" id="blog-title" />
        </label>
        <br />
        <label>
          Author: <input type="text" name="author" id="blog-author" />
        </label>
        <br />
        <label>
          URL: <input type="text" name="url" id="blog-url" />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBlog;
