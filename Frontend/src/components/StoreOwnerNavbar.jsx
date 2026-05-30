import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const StoreOwnerNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login/store-owner");
    };

    return (
        <nav className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
                <Link to="/store-owner" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white">
                        RS
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500">RateStore</p>
                        <p className="text-base font-semibold text-slate-900">Store Owner</p>
                    </div>
                </Link>

                <div className="flex flex-wrap items-center gap-3">
                    <span className="hidden text-sm text-slate-500 sm:inline">
                        Signed in as {user?.name || user?.email || "Owner"}
                    </span>
                    <Link
                        to="/"
                        className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
                    >
                        Switch role
                    </Link>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default StoreOwnerNavbar;
