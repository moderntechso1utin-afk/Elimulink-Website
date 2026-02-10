import { useParams, Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import { useEffect, useState } from "react";
import { marked } from "marked";

export default function Post() {
  const { slug } = useParams();
  const [html, setHtml] = useState("");
  const post = getAllPosts().find(p => p.slug === slug);

  useEffect(() => {
    if (post) setHtml(marked.parse(post.content));
  }, [post]);

  if (!post) return <section><h1>Not found</h1><Link to="/blog">Back to Blog</Link></section>;

  return (
    <section className="blog-post">
      <h1>{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/blog">← Back to Blog</Link>
    </section>
  );
}
