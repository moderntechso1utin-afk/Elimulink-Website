import { Link } from "react-router-dom";
import { posts } from "../content/posts";

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <div className="surface" style={{ padding: 26 }}>
          <div className="kicker">Blog</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Updates, insights, and platform notes.</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            Short posts to explain what we’re building and why it matters to institutions and students.
          </p>

          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 18 }}>
            {posts.map((p) => (
              <div key={p.slug} className="card" style={{ padding: 18 }}>
                <div className="badge" style={{ marginBottom: 12 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--brand)" }} />
                  {p.date}
                </div>
                <div style={{ fontWeight: 900, fontSize: "1.15rem" }}>{p.title}</div>
                <div style={{ color: "var(--muted)", marginTop: 8, lineHeight: 1.65 }}>{p.excerpt}</div>
                <div style={{ marginTop: 14 }}>
                  <Link className="btn btnPrimary" to={`/blog/${p.slug}`}>Read</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}