import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

const roleConfig = {
  user: {
    eyebrow: "User access",
    title: "Sign in to the User Dashboard",
    description:
      "Track your reviews, save trusted stores, and share helpful feedback with the community.",
    redirect: "/user-dashboard",
    buttonLabel: "Continue as user",
    accent: "from-blue-600 to-sky-500",
    panelTitle: "Customer workspace",
    panelDescription:
      "A focused space to manage your ratings, follow favorite stores, and build your review history.",
    features: [
      "Rate stores in minutes",
      "Track your review impact",
      "Personalized recommendations"
    ]
  },
  "store-owner": {
    eyebrow: "Owner access",
    title: "Sign in to the Store Owner Console",
    description:
      "Monitor feedback, respond quickly, and keep your store reputation moving upward.",
    redirect: "/store-owner",
    buttonLabel: "Continue as owner",
    accent: "from-emerald-600 to-teal-500",
    panelTitle: "Business command center",
    panelDescription:
      "Stay on top of reputation signals, customer sentiment, and growth opportunities.",
    features: [
      "Real-time review alerts",
      "Response tracking",
      "Store performance snapshots"
    ]
  },
  admin: {
    eyebrow: "Admin access",
    title: "Sign in to the System Admin Panel",
    description:
      "Govern platform operations, user access, and overall data quality with confidence.",
    redirect: "/admin",
    buttonLabel: "Continue as admin",
    accent: "from-amber-500 to-orange-500",
    panelTitle: "Operations control",
    panelDescription:
      "Manage platform integrity, resolve issues fast, and keep the ecosystem trusted.",
    features: [
      "User lifecycle control",
      "Audit-ready activity logs",
      "Platform health insights"
    ]
  }
};

const RoleLoginPage = () => {
  const { role } = useParams();
  const config = roleConfig[role];
  const navigate = useNavigate();
  const { login, isAuthenticated, user } = useContext(AuthContext);
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  if (!config) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated && user?.role === role) {
    return <Navigate to={config.redirect} replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!formState.email || !formState.password) {
      setError("Please enter your email and password.");
      return;
    }

    login({ email: formState.email, role });
    navigate(config.redirect, { replace: true });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eef6ff] to-[#e7f7f0] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-200/60 blur-2xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.6)]">
              <img src={logo} alt="RateStore logo" className="h-7 w-7" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">
                RateStore
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {config.eyebrow}
              </p>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {config.title}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {config.description}
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-300/60"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formState.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-300/60"
                placeholder="Enter your password"
              />
            </div>

            {error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className={`group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${config.accent} px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200/60 transition hover:brightness-105`}
            >
              {config.buttonLabel}
              <span className="text-base transition group-hover:translate-x-0.5">
                -&gt;
              </span>
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <span>Need help? Contact support.</span>
            <Link to="/" className="font-semibold text-slate-800 hover:text-slate-900">
              Change role
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              Access level
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {config.panelTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {config.panelDescription}
            </p>

            <div className="mt-6 space-y-3">
              {config.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-3 w-3 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M9.55 17.15 4.9 12.5l1.4-1.4 3.25 3.25 8.2-8.2 1.4 1.4z" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-md backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Security
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Sessions are protected and tied to your selected role. Sign out from any workspace when you are done.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RoleLoginPage;
