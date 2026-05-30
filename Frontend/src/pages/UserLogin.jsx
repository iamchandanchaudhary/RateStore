import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

const UserLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    login({ email: trimmedEmail, role: "user" });

    const nextPath = location.state?.from?.pathname || "/user-dashboard";
    navigate(nextPath, { replace: true });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-50 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_58%)]" />
      <div className="absolute -top-16 right-0 h-64 w-64 rounded-full bg-blue-200/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/4 rounded-full bg-sky-200/70 blur-3xl" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-xl items-center px-6 py-14">
        <div className="grid w-full overflow-hidden rounded-xl bg-white/90 shadow-lg backdrop-blur">
          <section className="px-8 md:px-10 pt-10 pb-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500">
                  User login
                </p>
                <h2 className="text-2xl font-semibold text-slate-900">Welcome Back 👋</h2>
                <p className="text-sm text-slate-500">Login to access your User account.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm font-semibold text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  />
                </label>

                <label className="block text-sm font-semibold text-slate-700">
                  Password
                  <div className="relative mt-2">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter password"
                      autoComplete="current-password"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 pr-12 text-sm text-slate-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    />
                    <span className="cursor-pointer absolute inset-y-0 right-4 flex items-center text-slate-400">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M12 5c5.05 0 9.27 3.11 10.94 7.5C21.27 16.89 17.05 20 12 20S2.73 16.89 1.06 12.5C2.73 8.11 6.95 5 12 5zm0 2C8.2 7 4.9 9.43 3.5 12.5 4.9 15.57 8.2 18 12 18s7.1-2.43 8.5-5.5C19.1 9.43 15.8 7 12 7zm0 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                      </svg>
                    </span>
                  </div>
                </label>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                    Keep me signed in
                  </label>
                  <button type="button" className="cursor-pointer font-semibold text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 mt-3 text-sm md:text-base cursor-pointer font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500"
                >
                  Login
                </button>
              </form>

              {/* <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  <span className="h-px flex-1 bg-slate-200" />
                  or continue with
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300">
                    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
                      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.7 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.5z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.5 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z" />
                      <path fill="#4CAF50" d="M24 44c5.3 0 10.3-2 14-5.3l-6.5-5.3c-2 1.5-4.6 2.6-7.5 2.6-5.3 0-9.8-3.4-11.4-8.1l-6.6 5.1C9.5 39.5 16.2 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.7-3 5-5.8 6.6l6.5 5.3c-3.1 2.9-7 4.6-12 4.6-7.7 0-14.4-4.3-17.7-10.7l6.6-5.1C14.2 32.6 18.7 36 24 36c5.4 0 9.9-3.3 11.3-8H24v-8h19.6z" />
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 2c-.9.1-1.9.6-2.5 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.4 2.6-1.1.6-.7 1-1.7.9-2.9z" />
                      <path d="M20.4 17.4c-.4.9-.9 1.7-1.6 2.4-.9.9-1.9 1.5-3.2 1.5-1.3 0-1.8-.8-3.4-.8-1.6 0-2.1.8-3.4.8-1.3 0-2.3-.5-3.2-1.5-1.9-1.9-3.4-5.4-1.4-8.7.9-1.4 2.5-2.3 4.2-2.3 1.3 0 2.4.8 3.2.8.7 0 2.1-.9 3.6-.8.6 0 2.3.2 3.4 1.7-2.8 1.6-2.3 5.5.8 6.9z" />
                    </svg>
                    Apple
                  </button>
                </div>
              </div> */}

              <p className="text-center text-sm text-slate-500">
                New here? <button className="cursor-pointer font-semibold text-blue-600">Create an account</button>
              </p>
            </div>

            <div className="w-full flex justify-center mt-4">
                <Link to="/" className="text-sm text-center font-semibold text-blue-600 hover:text-blue-500">
                    Switch role
                </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserLogin;
