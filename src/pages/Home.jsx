import React, { useEffect, useMemo, useState } from "react";
import RequestDemoForm from "../components/RequestDemoForm";

/**
 * ElimuLink Website — Home Page
 * Stack: React + Tailwind
 * Notes:
 * - Replace the demo links/emails with your real ones.
 * - This is a single-file homepage component.
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Solutions", href: "#solutions" },
      { label: "How it works", href: "#how" },
      { label: "Security", href: "#security" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-indigo-500/20 via-cyan-400/10 to-transparent blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-500/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-white">
                ElimuLink
              </div>
              <div className="text-xs text-slate-300">Education Connected.</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#demo"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition"
            >
              Request Demo
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3">
                {nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-white/5 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#demo"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main>
        <section className="relative">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:py-20">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Executive Intelligence • Student Services • Institution Ops
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                One platform connecting{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-cyan-200 bg-clip-text text-transparent">
                  students, institutions, and education intelligence.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                ElimuLink brings education services into one secure system —
                student access, institutional workflows, and executive decision
                dashboards — powered by real data and intelligent insights.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition"
                >
                  Request Demo
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10 transition"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Quick trust bar */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <TrustPill title="Role-based access" subtitle="Students • Institutions • Executive" />
                <TrustPill title="Secure data flow" subtitle="APIs + Firebase controls" />
                <TrustPill title="Analytics & AI" subtitle="Insights, summaries, alerts" />
                <TrustPill title="Integrations" subtitle="KUCCPS • Banks • M-Pesa" />
              </div>
            </div>

            {/* Hero card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-indigo-500/10">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Executive Dashboard
                      </div>
                      <div className="text-xs text-slate-300">
                        Premium oversight & intelligence (UI preview)
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-xs text-slate-200">
                      Live preview
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-3">
                    <MiniCard
                      badge="Premium"
                      title="Departments"
                      text="Monitor institutional units and performance signals."
                    />
                    <MiniCard
                      badge="Premium"
                      title="Trends"
                      text="Spot growth patterns, anomalies, and bottlenecks."
                    />
                    <MiniCard
                      badge="Premium"
                      title="Recommendations"
                      text="AI summaries from data + institutional context."
                    />
                    <MiniCard
                      badge="Sync"
                      title="Sync from Institution"
                      text="Securely pull verified institution records (API)."
                    />
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <div className="text-xs font-semibold text-slate-200">
                      ElimuLink — Education Connected.
                    </div>
                    <p className="mt-1 text-xs text-slate-300">
                      One source of truth. Multiple user experiences. Always secure.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Tip: Start with a demo. We’ll map your institution workflow and integrations.
              </p>
            </div>
          </div>
        </section>

        {/* 3 User Paths */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Built for every education user
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                One ecosystem with different portals — each one focused, fast, and safe.
              </p>
            </div>
            <a
              href="#demo"
              className="hidden sm:inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10 transition"
            >
              Request Demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard
              title="For Students"
              desc="Access services, track progress, and get real-time guidance from ElimuLink AI."
              bullets={[
                "Student services in one place",
                "Smart chat support & reminders",
                "Personalized insights",
              ]}
            />
            <FeatureCard
              title="For Institutions"
              desc="Manage departments, staff, student records, and automate reporting across units."
              bullets={[
                "Department workflows",
                "Analytics & performance tracking",
                "Secure data governance",
              ]}
            />
            <FeatureCard
              title="For Public & Researchers"
              desc="Discover education insights, trends, and structured knowledge through open access features."
              bullets={[
                "Education discovery & research",
                "Trends and public insights",
                "Responsible access controls",
              ]}
            />
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-semibold text-white">
                  Core solutions that scale
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  ElimuLink is designed as a unified platform: student experience,
                  institutional operations, and executive oversight—working together.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <div className="text-sm font-semibold text-white">
                    Integration Hub
                                      </div>
                  <p className="mt-1 text-sm text-slate-300">
                    Connect with KUCCPS, banks, and M-Pesa to power admissions,
                    payments, and verification workflows.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <SolutionCard
                    title="Student Portal Services"
                    desc="Easy access to personal, academic, and financial services."
                  />
                  <SolutionCard
                    title="Institution Management"
                    desc="Operations for departments, welfare, and performance tracking."
                  />
                  <SolutionCard
                    title="Executive Intelligence"
                    desc="Dashboards + AI-driven summaries for leadership decisions."
                  />
                  <SolutionCard
                    title="Data + AI Layer"
                    desc="Global AI + institution context to produce better student guidance."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-white">How it works</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            A clear pipeline: institutions connect data, executive systems analyze safely,
            students receive services and guidance.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <StepCard
              step="1"
              title="Institutions Connect"
              desc="Securely connect verified data through an API + controlled access."
            />
            <StepCard
              step="2"
              title="Executive AI Analyzes"
              desc="Summaries and insights are created using real institutional context."
            />
            <StepCard
              step="3"
              title="Students Benefit"
              desc="Students get services, guidance, and outcomes powered by global + institutional knowledge."
            />
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-white">Trust & Security</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                You’re right to prioritize safety. Executive is where institutional
                data is integrated and governed, with role-based boundaries.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <SecurityItem title="Role-based access control" text="Students, institutions, and executive users each have unique permissions." />
                <SecurityItem title="Read-only executive views (where needed)" text="Oversight without risky write-access for compliance and safety." />
                <SecurityItem title="Audit-friendly data flow" text="Designed for traceability: what was read, when, and why." />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-sm font-semibold text-white">
                  Recommended Live Setup (Simple + Strong)
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>
                      Website on <span className="text-white">Vercel</span> (fast marketing site)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>
                      Apps hosted where they fit best (Vercel/Firebase) — but always behind auth.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>
                      One domain with subdomains (example):
                      <span className="text-white"> elimulink.co.ke</span> (website),
                      <span className="text-white"> executive.elimulink.co.ke</span> (executive),
                      <span className="text-white"> app.elimulink.co.ke</span> (app)
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-xs font-semibold text-slate-200">
                    ElimuLink — Education Connected.
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    Build once, evolve forever. Everything stays editable as your ideas grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo / Contact */}
        <section id="demo" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-cyan-400/10 to-white/5 p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-semibold text-white">
                  Ready to connect your education ecosystem?
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Request a demo and we’ll set up the best configuration for your institution,
                  data integrations, and AI workflow.
                </p>
              </div>
              <div className="lg:col-span-5">
                <RequestDemoForm />
                <p className="mt-3 text-xs text-slate-300">
                  Tip: You can connect KUCCPS / Banks / M-Pesa as phases.
                </p>
              </div>
            </div>

            <div id="contact" className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <ContactCard title="Email" value="hello@elimulink.co.ke" />
              <ContactCard title="Phone" value="+254 XXX XXX XXX" />
              <ContactCard title="Location" value="Kenya" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold text-white">ElimuLink</div>
                <div className="text-xs text-slate-300">Education Connected.</div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <a className="hover:text-white transition" href="#solutions">
                  Solutions
                </a>
                <a className="hover:text-white transition" href="#how">
                  How it works
                </a>
                <a className="hover:text-white transition" href="#security">
                  Security
                </a>
                <a className="hover:text-white transition" href="#demo">
                  Request Demo
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              © {new Date().getFullYear()} ElimuLink. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* -------------------- Small Components -------------------- */

function TrustPill({ title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-xs font-semibold text-white">{title}</div>
      <div className="mt-1 text-[11px] text-slate-300">{subtitle}</div>
    </div>
  );
}

function MiniCard({ badge, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:bg-slate-950/40 transition">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">{title}</div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-200">
          {badge}
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-300">{text}</p>
    </div>
  );
}

function FeatureCard({ title, desc, bullets }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <CheckIcon />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6 hover:bg-slate-950/40 transition">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 font-semibold">
          {step}
        </div>
        <div className="text-base font-semibold text-white">{title}</div>
      </div>
      <p className="mt-3 text-sm text-slate-300">{desc}</p>
    </div>
  );
}

function SecurityItem({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-1 text-sm text-slate-300">{text}</p>
    </div>
  );
}

function ContactCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
      <div className="text-xs font-semibold text-slate-200">{title}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5A1 1 0 015.704 9.29l2.793 2.793 6.793-6.793a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}