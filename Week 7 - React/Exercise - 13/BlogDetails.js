import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Learning React", content: "React makes building UIs easier." },
    { id: 2, title: "Understanding Hooks", content: "Hooks let you use state in function components." },
  ];

  return (
    <div style={styles.container}>
      <h3>Blog Details</h3>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong>: {blog.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = { container: { padding: "10px", border: "1px solid #ccc", margin: "10px" } };

export default BlogDetails;
