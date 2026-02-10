import site from "../content/site.json";

export default function Solutions() {
  return (
    <section>
      <h1>Solutions</h1>
      <p>{site.solutions.intro}</p>
      <div className="solutions-list">
        <div className="solution-card">
          <h2>KUCCPS Integration</h2>
          <p>{site.solutions.kuccps}</p>
        </div>
        <div className="solution-card">
          <h2>Banks</h2>
          <p>{site.solutions.banks}</p>
        </div>
        <div className="solution-card">
          <h2>M-Pesa</h2>
          <p>{site.solutions.mpesa}</p>
        </div>
      </div>
    </section>
  );
}
