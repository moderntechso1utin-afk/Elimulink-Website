import { NavLink, Link } from "react-router-dom";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Institutions", to: "/institutions" },
  { label: "Students", to: "/students" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const linkStyle = ({ isActive }) => ({
  padding: "10px 12px",
  borderRadius: 12,
  color: isActive ? "var(--text)" : "var(--muted)",
  background: isActive ? "rgba(255,255,255,.06)" : "transparent",
  border: "1px solid",
  borderColor: isActive ? "rgba(255,255,255,.12)" : "transparent",
  fontWeight: 650,
  fontSize: ".98rem",
});

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(10px)" }}>
      <div style={{ borderBottom: "1px solid var(--line)", background: "rgba(11,18,32,.72)" }}>
        <div className="container" style={{ height: 74, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 12,
                background: "linear-gradient(135deg, rgba(77,163,255,.95), rgba(124,92,255,.85))",
                boxShadow: "0 12px 30px rgba(77,163,255,.22)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>ElimuLink</span>
              <span style={{ fontSize: ".82rem", color: "var(--muted)" }}>Education Connected</span>
            </div>
          </Link>

          <nav style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {nav.map((i) => (
              <NavLink key={i.to} to={i.to} style={linkStyle}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: "flex", gap: 10 }}>
            <Link className="btn" to="/contact">
              Contact
            </Link>
            <Link className="btn btnPrimary" to="/contact">
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}