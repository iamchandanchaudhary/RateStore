import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const SystemAdministrator = () => {
    const adminCards = [
        {
            title: "Registered Users",
            description: "Review every user account and registration details.",
            to: "/admin/users",
        },
        {
            title: "Registered Stores",
            description: "Track store owner registrations and contact information.",
            to: "/admin/store-owners",
        },
        {
            title: "Store List",
            description: "Inspect all created stores with their live details.",
            to: "/admin/stores",
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_65%)]" />
            <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-200/60 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/4 rounded-full bg-sky-200/60 blur-3xl" />

            <AdminNavbar />

            <main className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10">
                <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-blue-600">System Administrator</h1>
                        <p className="text-sm text-slate-600">
                            Manage users, store owners, and live storefronts in one place.
                        </p>
                    </div>
                </header>

                <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {adminCards.map((card) => (
                        <Link
                            key={card.title}
                            to={card.to}
                            className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-lg backdrop-blur hover:border-slate-300"
                        >
                            <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-slate-200/50 blur-2xl transition duration-300 group-hover:scale-110" />
                            <div className="pointer-events-none absolute -bottom-16 -left-8 h-28 w-28 rounded-full bg-slate-200/40 blur-2xl transition duration-300 group-hover:scale-110" />

                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold text-slate-900">
                                        {card.title}
                                    </h2>
                                    <p className="text-sm text-slate-600">
                                        {card.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span>Open view</span>
                                <svg viewBox="0 -960 960 960" className="h-5 w-5 fill-slate-500 transition group-hover:fill-slate-700" aria-hidden="true">
                                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default SystemAdministrator;
