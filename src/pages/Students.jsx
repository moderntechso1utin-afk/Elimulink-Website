import site from "../content/site.json";

export default function Students() {
  return (
    <section>
      <h1>Students</h1>
      <p>{site.students}</p>
    </section>
  );
}
