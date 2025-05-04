// blog/components/Blogs.js
import { BlogItem } from "../../sections/blogs/BlogItem";

export function Blogs({ blogs }) {
  return (
    <div className="grid mt-4 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {blogs?.map((blog, i) => (
        <BlogItem key={blog._id} blog={blog} index={i} />
      ))}
    </div>
  );
}
