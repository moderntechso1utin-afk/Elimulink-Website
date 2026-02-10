import site from "../content/site.json";

export default function Institutions() {
  return (
    <section>
      <h1>Institutions</h1>
      <p>{site.institutions}</p>
    </section>
  );
}
