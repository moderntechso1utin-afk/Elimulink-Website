import site from "../content/site.json";

export default function About() {
  return (
    <section>
      <h1>About {site.siteName}</h1>
      <p>{site.about}</p>
    </section>
  );
}
