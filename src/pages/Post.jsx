import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../content/posts";

export default function Post() {
  const { slug } = useParams();

  const post = useMemo(() => posts.find((p) => p.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <div className="surface" style={{ padding: 26 }}>
            <div className="kicker">Blog</div>
            <h1 className="h2" style={{ marginTop: 10 }}>Post not found</h1>
            <p className="p">That link doesn’t match any post yet.</p>
            <div style={{ marginTop: 16 }}>
              <Link className="btn btnPrimary" to="/blog">Back to Blog</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="surface" style={{ padding: 26 }}>
          <div className="badge">
            <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--brand)" }} />
            {post.date}
          </div>
          <h1 className="h1" style={{ marginTop: 12 }}>{post.title}</h1>

          <div className="card" style={{ padding: 18, marginTop: 14 }}>
            {post.content.map((line, idx) => (
              <p key={idx} className="p" style={{ marginTop: idx === 0 ? 0 : 12 }}>
                {line}
              </p>
            ))}
          </div>

          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" to="/blog">Back to Blog</Link>
            <Link className="btn btnPrimary" to="/contact">Request Demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}