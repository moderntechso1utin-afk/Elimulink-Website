import React, { useState } from "react";

export default function RequestDemoForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    role: "Institution Admin",
    message: "",
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });
    const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_DEMO_URL || "";
    if (!FORMSPREE_URL) {
      setStatus({
        type: "error",
        message: "Missing VITE_FORMSPREE_DEMO_URL. Add it to your .env file.",
      });
      return;
    }
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          source: "elimulink.co.ke",
          createdAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => null);
        throw new Error(j?.error || "Failed to send");
      }
      setStatus({ type: "success", message: "✅ Demo request sent! We’ll contact you soon." });
      setForm({
        fullName: "",
        email: "",
        phone: "",
        institution: "",
        role: "Institution Admin",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: "❌ Could not send. Please try again, or use WhatsApp/Email.",
      });
    }
  }

  return (
    <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl backdrop-blur">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-extrabold text-white">Request a Demo</h3>
        <p className="mt-1 text-sm text-slate-300">
          Tell us about your institution — we’ll set up a guided demo and pilot plan.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full Name">
            <input
              value={form.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              required
              className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
              placeholder="Victor Kyeva"
            />
          </Field>
          <Field label="Work Email">
            <input
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              type="email"
              className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
              placeholder="you@university.ac.ke"
            />
          </Field>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Phone (WhatsApp)">
            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
              placeholder="+254 7xx xxx xxx"
            />
          </Field>
          <Field label="Institution">
            <input
              value={form.institution}
              onChange={(e) => updateField("institution", e.target.value)}
              required
              className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
              placeholder="Eg. Example University"
            />
          </Field>
        </div>
        <Field label="Your Role">
          <select
            value={form.role}
            onChange={(e) => updateField("role", e.target.value)}
            className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
          >
            <option>Institution Admin</option>
            <option>VC / DVC / Executive</option>
            <option>Dean / Head of Department</option>
            <option>IT / Systems</option>
            <option>Lecturer / Academic</option>
            <option>Student Leader</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Message">
          <textarea
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            rows={4}
            className="w-full rounded-xl bg-slate-950/60 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-sky-400"
            placeholder="What problem do you want ElimuLink to solve for your campus?"
          />
        </Field>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <button
            disabled={status.type === "loading"}
            className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400 disabled:opacity-60"
            type="submit"
          >
            {status.type === "loading" ? "Sending..." : "Submit Demo Request"}
          </button>
          <div className="text-xs text-slate-300">
            Prefer WhatsApp?{" "}
            <a className="underline hover:text-white" href="https://wa.me/" target="_blank" rel="noreferrer">
              Tap here
            </a>
          </div>
        </div>
        {status.type !== "idle" && (
          <div
            className={`text-sm mt-2 ${
              status.type === "success"
                ? "text-emerald-300"
                : status.type === "error"
                ? "text-rose-300"
                : "text-slate-300"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-300">
        {label}
      </div>
      {children}
    </label>
  );
}
