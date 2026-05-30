import React from 'react';
import { Link } from 'react-router-dom';

const RoleSelectionPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50 text-slate-900">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-teal-200/60 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_55%)]" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:px-12">
        <header className="max-w-2xl space-y-4">
          <p className="text-xs font-['Manrope'] uppercase tracking-[0.3em] text-slate-500">
            RateStore Access
          </p>
          <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-['Fraunces'] text-slate-900">
            Choose your role
          </h1>
          <p className="text-base font-['Manrope'] text-slate-600">
            Pick the workspace that matches your responsibilities. Each portal
            is tailored to the insights and tools you need to move faster.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <Link
            to="/user-dashboard"
            aria-label="Enter the User Dashboard"
            className="group relative flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)]"
          >
            <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-400 to-teal-500" />
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                User
              </span>
              <span className="text-xs font-['Manrope'] text-slate-400">
                /user-dashboard
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-['Fraunces'] text-slate-900">
                User Dashboard
              </h2>
              <p className="text-sm font-['Manrope'] text-slate-600">
                Discover trusted stores, manage your reviews, and stay on top
                of personalized recommendations.
              </p>
            </div>
            <ul className="space-y-2 text-sm font-['Manrope'] text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Personalized store highlights
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Review history and activity
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Favorite lists and alerts
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between text-sm font-['Manrope'] font-semibold text-slate-700">
              <span>Enter dashboard</span>
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </div>
          </Link>

          <Link
            to="/store-owner"
            aria-label="Enter the Store Owner workspace"
            className="group relative flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)]"
          >
            <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-400 to-orange-500" />
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-amber-700">
                Owner
              </span>
              <span className="text-xs font-['Manrope'] text-slate-400">
                /store-owner
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-['Fraunces'] text-slate-900">
                Store Owner
              </h2>
              <p className="text-sm font-['Manrope'] text-slate-600">
                Monitor store reputation, respond to feedback, and track growth
                metrics in one place.
              </p>
            </div>
            <ul className="space-y-2 text-sm font-['Manrope'] text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Ratings and sentiment overview
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Review response center
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Performance and revenue trends
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between text-sm font-['Manrope'] font-semibold text-slate-700">
              <span>Enter workspace</span>
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </div>
          </Link>

          <Link
            to="/admin"
            aria-label="Enter the System Administrator control room"
            className="group relative flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-35px_rgba(15,23,42,0.45)]"
          >
            <span className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-slate-700 to-slate-900" />
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-slate-700">
                Admin
              </span>
              <span className="text-xs font-['Manrope'] text-slate-400">
                /admin
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-['Fraunces'] text-slate-900">
                System Administrator
              </h2>
              <p className="text-sm font-['Manrope'] text-slate-600">
                Govern platform operations, manage users, and keep data quality
                aligned across the marketplace.
              </p>
            </div>
            <ul className="space-y-2 text-sm font-['Manrope'] text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                Role and access management
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                Global moderation tools
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                Platform health monitoring
              </li>
            </ul>
            <div className="mt-auto flex items-center justify-between text-sm font-['Manrope'] font-semibold text-slate-700">
              <span>Enter control room</span>
              <span className="transition group-hover:translate-x-1">-&gt;</span>
            </div>
          </Link>
        </section>

        <div className="flex flex-wrap items-center gap-3 text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-500">
          <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
            Secure routing
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
            Role-specific tools
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1">
            Real-time insights
          </span>
        </div>
      </main>
    </div>
  )
}

export default RoleSelectionPage;