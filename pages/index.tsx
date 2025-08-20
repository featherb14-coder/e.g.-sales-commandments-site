import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sales Commandments — Playbooks & Training</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="High-converting sales playbooks for Home Services, Auto, and Mortgage pros. Templates, scripts, and ARP selling that closes." />
      </Head>

      <main className="min-h-screen bg-[#0b0b0f] text-white">
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-12">
          <p className="mb-3 text-sm font-medium text-fuchsia-400/80">The Ten Sales Commandments</p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Sales Playbooks that <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-300">actually</span> close.
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">
            Built from trenches: Home Services, Auto, and Mortgage. Battle-tested scripts, ARP objections, pricing,
            upsells, and follow-up that turns leads into money.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-xl bg-fuchsia-500 px-5 py-3 font-semibold text-white hover:bg-fuchsia-400 transition">Browse Playbooks</a>
            <a href="#workshops" className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5 transition">Book Team Training</a>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-6 text-2xl font-bold">Playbooks & Templates</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Home Services Sales Playbook</h3>
              <p className="mt-2 text-sm text-white/70">ARP objection handling, pricing by sqft/stories, upsells (moss, windows, screens), yard-signs→Google ramp.</p>
              <a className="mt-4 inline-block text-fuchsia-300 hover:text-fuchsia-200" href="#">View details →</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Auto BDC & Desk Guide</h3>
              <p className="mt-2 text-sm text-white/70">Hard appointments, double-tap voicemails, live hot-handoffs, desk structure, follow-up cadences.</p>
              <a className="mt-4 inline-block text-fuchsia-300 hover:text-fuchsia-200" href="#">View details →</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold">Mortgage Phone & Deal Flow</h3>
              <p className="mt-2 text-sm text-white/70">Branding, value stacking, creative cash-out/DTI solves, speed-to-close, referral compounding.</p>
              <a className="mt-4 inline-block text-fuchsia-300 hover:text-fuchsia-200" href="#">View details →</a>
            </div>
          </div>
        </section>

        <section id="workshops" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold">Team Workshops</h2>
          <p className="max-w-2xl text-white/70">
            Book a live session: ARP drills, role-play, call breakdowns, and Ten Commandments rollout tailored to your org.
          </p>
          <a className="mt-6 inline-block rounded-xl border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5 transition" href="#">
            Request a session
          </a>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Sales Commandments. All rights reserved.
        </footer>
      </main>
    </>
  )
}
