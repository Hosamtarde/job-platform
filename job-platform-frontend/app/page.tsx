import Link from "next/link";

const openings = [
  { title: "Backend Engineer Intern", org: "Tech Corp", place: "Nablus", type: "Internship" },
  { title: "Full-stack Developer", org: "Northline", place: "Ramallah", type: "Full-time" },
  { title: "Product Designer", org: "Studio Sur", place: "Remote", type: "Part-time" },
];

const stages = [
  { name: "Submitted", note: "Your application reaches the company the moment you send it." },
  { name: "Reviewing", note: "The company opens it and goes through your details." },
  { name: "Decided", note: "Accepted or rejected. Either way, you stop wondering." },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="mesh" />
      <div className="halo" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <span className="font-display text-2xl text-chalk">Job Platform</span>
        <nav className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm text-fog transition hover:text-chalk"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-night transition hover:bg-gold-soft"
          >
            Create account
          </Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <h1 className="rise rise-1 font-display text-6xl leading-[1.03] text-chalk sm:text-7xl">
              Find the role.
              <br />
              Or find the <span className="gold-text">person</span>.
            </h1>
            <p className="rise rise-2 mt-7 max-w-md text-lg leading-relaxed text-fog">
              Companies publish openings. Candidates apply and follow every
              application from sent to decided, in one place.
            </p>
            <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-lg bg-gold px-7 py-3.5 font-semibold text-night transition hover:bg-gold-soft"
              >
                Create an account
              </Link>
              <Link
                href="/login"
                className="rounded-lg border border-line px-7 py-3.5 font-medium text-chalk transition hover:border-gold/50"
              >
                Sign in
              </Link>
            </div>
          </div>

          <div className="rise rise-4 relative">
            <div className="arc -right-40 -top-24 opacity-60" />
            <div className="panel relative rounded-2xl p-6">
              <div className="flex items-center justify-between px-1 pb-5">
                <p className="text-sm text-fog">Open positions</p>
                <span className="h-1.5 w-1.5 rounded-full bg-jade" />
              </div>
              <ul className="space-y-2">
                {openings.map((job) => (
                  <li
                    key={job.title}
                    className="rounded-xl border border-line bg-night/50 p-5 transition hover:border-gold/40"
                  >
                    <p className="font-semibold text-chalk">{job.title}</p>
                    <p className="mt-1.5 text-sm text-fog">
                      {job.org} ? {job.place}
                    </p>
                    <span className="mt-4 inline-block rounded-md border border-line px-2.5 py-1 text-xs text-gold-soft">
                      {job.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="hairline" />

        <section className="grid gap-6 py-20 md:grid-cols-2">
          <div className="panel rounded-2xl border-t-2 border-t-jade p-9">
            <h2 className="font-display text-4xl text-chalk">For candidates</h2>
            <p className="mt-4 leading-relaxed text-fog">
              Search openings by title, location, or type. Apply once per role ?
              the platform will not let you send the same application twice.
            </p>
            <Link
              href="/register"
              className="mt-7 inline-block text-sm font-medium text-jade underline underline-offset-4"
            >
              Start looking
            </Link>
          </div>

          <div className="panel rounded-2xl border-t-2 border-t-gold p-9">
            <h2 className="font-display text-4xl text-chalk">For companies</h2>
            <p className="mt-4 leading-relaxed text-fog">
              Publish a role, see everyone who applied, and move each person
              through your pipeline. You only ever touch your own postings.
            </p>
            <Link
              href="/register"
              className="mt-7 inline-block text-sm font-medium text-gold-soft underline underline-offset-4"
            >
              Post a role
            </Link>
          </div>
        </section>

        <section className="py-20">
          <h2 className="max-w-xl font-display text-5xl leading-tight text-chalk">
            Every application carries a status
          </h2>
          <p className="mt-4 max-w-md text-fog">No silence after you hit send.</p>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {stages.map((stage, i) => (
              <li key={stage.name} className="bg-surface/80 p-9">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-gold">{i + 1}</span>
                  <h3 className="font-semibold text-chalk">{stage.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-fog">
                  {stage.note}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="relative mb-24 overflow-hidden rounded-2xl border border-line bg-surface px-8 py-20 text-center">
          <div className="halo" />
          <div className="relative z-10">
            <h2 className="font-display text-5xl text-chalk">Ready to start?</h2>
            <p className="mx-auto mt-4 max-w-sm text-fog">
              Pick your side when you sign up.
            </p>
            <Link
              href="/register"
              className="mt-9 inline-block rounded-lg bg-gold px-8 py-3.5 font-semibold text-night transition hover:bg-gold-soft"
            >
              Create an account
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line py-9">
        <p className="mx-auto max-w-6xl px-6 text-sm text-fog/50">
          Job Platform ? NestJS, PostgreSQL, Next.js
        </p>
      </footer>
    </div>
  );
}
