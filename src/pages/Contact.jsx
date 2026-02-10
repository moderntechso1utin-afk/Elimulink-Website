import site from "../content/site.json";

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>{site.contact.intro}</p>
      <ul>
        <li>Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li>
        <li>Phone: <a href={`tel:${site.contact.phone}`}>{site.contact.phone}</a></li>
      </ul>
    </section>
  );
}
