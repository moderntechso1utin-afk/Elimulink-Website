import { useState } from "react";
import { getAllPosts } from "../lib/posts";
import site from "../content/site.json";
import { Link } from "react-router-dom";

const posts = getAllPosts();

export default function Blog() {
  const [search, setSearch] = useState("");
  const filtered = posts.filter(
    p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.excerpt && p.excerpt.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <section>
      <h1>Blog</h1>
      <p>{site.blog.intro}</p>
      <input
        type="text"
        placeholder="Search blog..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="blog-search"
      />
      <ul className="blog-list">
        {filtered.map(post => (
          <li key={post.slug} className="blog-list-item">
            <Link to={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && <li>No posts found.</li>}
      </ul>
    </section>
  );
}
