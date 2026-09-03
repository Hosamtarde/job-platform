"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { ApiRequestError } from "@/lib/api";
import { UserRole } from "@/lib/types";

export default function RegisterPage() {
  const { register } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("CANDIDATE");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await register({ fullName, email, password, role });
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

  const isCandidate = role === "CANDIDATE";

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
            Two sides.
            <br />
            One <span className="gold-text">platform</span>.
          </h2>
          <div className="hairline my-8" />
          <p className="text-sm leading-relaxed text-fog">
            Candidates search openings and follow each application from sent to
            decided. Companies publish roles and move applicants through their
            pipeline. Pick your side on the right.
          </p>
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
            Create your account
          </h1>
          <p className="mt-2 text-sm text-fog">
            {isCandidate
              ? "Apply to openings and track every application."
              : "Publish openings and review who applied."}
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid grid-cols-2 gap-1 rounded-lg border border-line bg-night/60 p-1">
              <button
                type="button"
                onClick={() => setRole("CANDIDATE")}
                className={
                  isCandidate
                    ? "rounded-md bg-jade py-2.5 text-sm font-semibold text-night"
                    : "rounded-md py-2.5 text-sm text-fog transition hover:text-chalk"
                }
              >
                Candidate
              </button>
              <button
                type="button"
                onClick={() => setRole("COMPANY")}
                className={
                  !isCandidate
                    ? "rounded-md bg-gold py-2.5 text-sm font-semibold text-night"
                    : "rounded-md py-2.5 text-sm text-fog transition hover:text-chalk"
                }
              >
                Company
              </button>
            </div>

            <div>
              <label className="text-sm text-fog">
                {isCandidate ? "Full name" : "Company name"}
              </label>
              <input
                type="text"
                required
                minLength={3}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={field}
                placeholder={isCandidate ? "Ahmad Ali" : "Tech Corp"}
              />
            </div>

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
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={field}
                placeholder="At least 8 characters"
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
              {submitting ? "Creating account" : "Create account"}
            </button>
          </form>

          <p className="mt-8 text-sm text-fog">
            Already registered?{" "}
            <Link href="/login" className="text-gold-soft underline underline-offset-4">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
