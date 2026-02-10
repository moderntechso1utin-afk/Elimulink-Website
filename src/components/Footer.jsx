import site from "../content/site.json";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>{site.footerText}</div>
    </footer>
  );
}
