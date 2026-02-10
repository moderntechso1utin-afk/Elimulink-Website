import RequestDemoForm from "../components/RequestDemoForm";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="surface" style={{ padding: 26 }}>
          <div className="kicker">Contact</div>
          <h1 className="h1" style={{ marginTop: 10 }}>Request a demo — we’ll reach out.</h1>
          <p className="p" style={{ maxWidth: 900 }}>
            Email: <span style={{ color: "var(--text)", fontWeight: 750 }}>hello@elimulink.co.ke</span>
            <br />
            We respond quickly and keep it simple.
          </p>

          <div style={{ marginTop: 18 }}>
            <RequestDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}