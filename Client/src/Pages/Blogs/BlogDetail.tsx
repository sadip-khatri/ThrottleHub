import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../Data/BlogsData";

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div style={{ padding: "2rem" }}>Blog not found.</div>;
  }

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{blog.title}</h1>
      <div style={{ color: "#888", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
        By {blog.author} | {new Date(blog.date).toLocaleDateString()}
      </div>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: 8, marginBottom: "2rem" }} />
      <div style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#333" }}>
        {blog.content.split("\n").map((para, idx) => (
          <p key={idx} style={{ marginBottom: "1.2em" }}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail; 