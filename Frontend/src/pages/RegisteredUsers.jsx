import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { AuthContext } from "../context/AuthContext";

const RegisteredUsers = () => {
    const { backendUrl } = useContext(AuthContext);
    const baseUrl = useMemo(() => (
        backendUrl.endsWith("/") ? backendUrl.slice(0, -1) : backendUrl
    ), [backendUrl]);

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [listError, setListError] = useState("");

    useEffect(() => {
        let isActive = true;

        const loadUsers = async () => {
            setIsLoading(true);
            setListError("");

            try {
                const response = await fetch(`${baseUrl}/api/admin/users`);
                const data = await response.json().catch(() => ({}));

                if (!response.ok) {
                    throw new Error(data.message || "Unable to load users.");
                }

                if (isActive) {
                    setUsers(Array.isArray(data.users) ? data.users : []);
                }
            } catch (error) {
                if (isActive) {
                    setListError(error.message || "Unable to load users.");
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        };

        loadUsers();

        return () => {
            isActive = false;
        };
    }, [baseUrl]);

    const formatDate = (value) => {
        if (!value) {
            return "";
        }

        const parsed = new Date(value);
        if (Number.isNaN(parsed.getTime())) {
            return "";
        }

        return parsed.toLocaleDateString();
    };

    const userCountLabel = `${users.length} registered user${users.length === 1 ? "" : "s"}`;

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_65%)]" />
            <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/4 rounded-full bg-sky-200/60 blur-3xl" />

            <AdminNavbar />

            <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10">
                <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500">
                            Registered users
                        </p>
                        <h1 className="text-3xl font-semibold text-slate-900">User directory</h1>
                        <p className="text-sm text-slate-600">
                            See every user profile that has registered on RateStore.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-600">
                            <span className="font-semibold text-slate-900">{userCountLabel}</span>
                        </span>
                        <Link
                            to="/admin"
                            className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
                        >
                            Back to admin
                        </Link>
                    </div>
                </header>

                <section className="mt-8 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-xl backdrop-blur">
                    {isLoading && (
                        <div className="space-y-3 text-sm text-slate-500">Loading users...</div>
                    )}

                    {!isLoading && listError && (
                        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-4 text-sm text-red-700">
                            {listError}
                        </div>
                    )}

                    {!isLoading && !listError && users.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
                            No registered users yet.
                        </div>
                    )}

                    {!isLoading && !listError && users.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
                                <thead>
                                    <tr className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                        <th className="px-4">User</th>
                                        <th className="px-4">Email</th>
                                        <th className="px-4">Address</th>
                                        <th className="px-4">Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} className="bg-white/90 shadow-sm">
                                            <td className="rounded-l-2xl px-4 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-linear-to-br from-[#0141cb] to-[#00a9fd] text-sm font-semibold text-white">
                                                        {(user.name || "U").charAt(0)}
                                                    </span>
                                                    <div>
                                                        <p className="font-semibold text-slate-900">{user.name || "Unknown"}</p>
                                                        <p className="text-xs text-slate-500">ID: {user.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-slate-600">{user.email || "Not available"}</td>
                                            <td className="px-4 py-4 text-slate-600">{user.address || "Not available"}</td>
                                            <td className="rounded-r-2xl px-4 py-4 text-slate-600">
                                                {formatDate(user.createdAt) || "Not available"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default RegisteredUsers;
