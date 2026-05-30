import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const UserNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login/user");
    };

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="relative z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
                <Link to="/user-dashboard" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white">
                        RS
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-500">RateStore</p>
                        <p className="text-base font-semibold text-slate-900">User Portal</p>
                    </div>
                </Link>

                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        to="/"
                        className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
                    >
                        Switch role
                    </Link>

                    <div onClick={handleToggleMenu} className="cursor-pointer relative flex items-center gap-2">
                        <span
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-linear-to-br from-[#0141cb] to-[#00a9fd] text-white transition hover:border-slate-300"
                            aria-haspopup="true"
                            aria-expanded={isMenuOpen}
                            aria-label="Open profile menu"
                        >
                            {user.name?.charAt(0)}
                        </span>

                        <span className="hidden text-sm text-gray-700 sm:inline">
                            Hello, {user.name?.split(' ')[0] || 'User'}
                        </span>

                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={`text-gray-700 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </svg>

                        {isMenuOpen && (
                            <div className="absolute right-0 top-10 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                                <Link
                                    to="/profile/user"
                                    onClick={handleCloseMenu}
                                    className="block px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                                >
                                    Profile
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleCloseMenu();
                                        handleLogout();
                                    }}
                                    className="block w-full px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;