import { Link, useLocation } from "react-router-dom";
import site from "../content/site.json";
import "../App.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar-brand">{site.siteName}</div>
      <ul className="navbar-links">
        {site.navLinks.map(link => (
          <li key={link.path} className={location.pathname === link.path ? "active" : ""}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
