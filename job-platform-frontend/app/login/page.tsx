"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { ApiRequestError } from "@/lib/api";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password);
    } catch (err) {
      if (err instanceof ApiRequestError) {
        setError(err.messages.join(", "));
      } else {
        setError("Could not reach the server. Check your connection.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-line bg-night/60 px-4 py-3 text-chalk placeholder:text-fog/35 outline-none transition focus:border-gold/70";

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-surface lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div className="mesh" />
        <div className="halo" />
        <div className="arc -right-56 top-1/4 opacity-70" />

        <Link href="/" className="relative z-10 font-display text-2xl text-chalk">
          Job Platform
        </Link>

        <div className="relative z-10 max-w-md">
          <h2 className="font-display text-5xl leading-[1.1] text-chalk">
            Openings, applicants, and
            <span className="gold-text"> decisions</span> in one place.
          </h2>
          <div className="hairline my-8" />
          <dl className="space-y-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-fog">Candidates</dt>
              <dd className="text-chalk">Apply once, track the status</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-fog">Companies</dt>
              <dd className="text-chalk">Publish roles, review applicants</dd>
            </div>
          </dl>
        </div>

        <p className="relative z-10 text-xs text-fog/50">
          Built with NestJS, PostgreSQL and Next.js
        </p>
      </aside>

      <main className="relative flex items-center justify-center overflow-hidden px-6 py-14">
        <div className="halo lg:hidden" />

        <div className="rise rise-1 relative z-10 w-full max-w-sm">
          <Link href="/" className="font-display text-2xl text-chalk lg:hidden">
            Job Platform
          </Link>

          <h1 className="mt-8 font-display text-4xl text-chalk lg:mt-0">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-fog">
            Use the email you registered with.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="text-sm text-fog">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={field}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-fog">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={field}
                placeholder="Your password"
              />
            </div>

            {error && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-gold py-3 font-semibold text-night transition hover:bg-gold-soft disabled:opacity-50"
            >
              {submitting ? "Signing in" : "Sign in"}
            </button>
          </form>

          <p className="mt-8 text-sm text-fog">
            No account yet?{" "}
            <Link href="/register" className="text-gold-soft underline underline-offset-4">
              Create one
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
