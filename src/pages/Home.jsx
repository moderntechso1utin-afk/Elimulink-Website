import site from "../content/site.json";

export default function Home() {
  return (
    <section>
      <h1>Welcome to {site.siteName}</h1>
      <p>{site.about}</p>
    </section>
  );
}
