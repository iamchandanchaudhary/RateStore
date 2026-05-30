import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import StarRating from "../components/StarRating";
import { AuthContext } from "../context/AuthContext";

const StoreList = () => {
    const { backendUrl } = useContext(AuthContext);
    const baseUrl = useMemo(() => (
        backendUrl.endsWith("/") ? backendUrl.slice(0, -1) : backendUrl
    ), [backendUrl]);

    const [stores, setStores] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [listError, setListError] = useState("");

    useEffect(() => {
        let isActive = true;

        const loadStores = async () => {
            setIsLoading(true);
            setListError("");

            try {
                const response = await fetch(`${baseUrl}/api/stores`);
                const data = await response.json().catch(() => ({}));

                if (!response.ok) {
                    throw new Error(data.message || "Unable to load stores.");
                }

                if (isActive) {
                    setStores(Array.isArray(data.stores) ? data.stores : []);
                }
            } catch (error) {
                if (isActive) {
                    setListError(error.message || "Unable to load stores.");
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        };

        loadStores();

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

    const getRatingSummary = (store) => {
        const reviewCount = Number(store?.reviewCount) || 0;
        const averageRating = Number(store?.averageRating) || 0;

        return {
            reviewCount,
            averageRating
        };
    };

    const storeCountLabel = `${stores.length} store${stores.length === 1 ? "" : "s"} created`;

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
                            Store list
                        </p>
                        <h1 className="text-3xl font-semibold text-slate-900">All created stores</h1>
                        <p className="text-sm text-slate-600">
                            Review every store with ratings, categories, and details.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-600">
                            <span className="font-semibold text-slate-900">{storeCountLabel}</span>
                        </span>
                        <Link
                            to="/admin"
                            className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
                        >
                            Back to admin
                        </Link>
                    </div>
                </header>

                <section className="mt-8">
                    {isLoading && (
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={`placeholder-${item}`}
                                    className="h-72 rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm animate-pulse"
                                >
                                    <div className="h-36 w-full rounded-2xl bg-slate-200" />
                                    <div className="mt-5 h-4 w-2/3 rounded bg-slate-200" />
                                    <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                                    <div className="mt-3 h-3 w-5/6 rounded bg-slate-200" />
                                </div>
                            ))}
                        </div>
                    )}

                    {!isLoading && listError && (
                        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-4 text-sm text-red-700">
                            {listError}
                        </div>
                    )}

                    {!isLoading && !listError && stores.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
                            No stores available yet.
                        </div>
                    )}

                    {!isLoading && !listError && stores.length > 0 && (
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {stores.map((store) => {
                                const { reviewCount, averageRating } = getRatingSummary(store);

                                return (
                                    <article
                                        key={store.id}
                                        className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                                    >
                                        <div className="h-44 w-full overflow-hidden bg-slate-100">
                                            {store.imageUrl ? (
                                                <img
                                                    src={store.imageUrl}
                                                    alt={store.name}
                                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center text-xs text-slate-400">
                                                    No image available
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-3 p-5">
                                            <div className="flex items-start justify-between gap-3">
                                                <h2 className="text-lg font-semibold text-slate-900">{store.name}</h2>
                                                {store.category && (
                                                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                                        {store.category}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-sm text-slate-600">{store.description}</p>

                                            {reviewCount > 0 ? (
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <StarRating value={averageRating} size="h-4 w-4" />
                                                    <span>
                                                        {averageRating.toFixed(1)} / 5 - {reviewCount} review{reviewCount === 1 ? "" : "s"}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                                    <StarRating value={0} size="h-4 w-4" />
                                                    <span>No ratings yet</span>
                                                </div>
                                            )}

                                            <div className="space-y-1 text-xs text-slate-500">
                                                <p>{store.address}</p>
                                                <p>Owner ID: {store.ownerId || "Not available"}</p>
                                                {store.createdAt && (
                                                    <p>Created on {formatDate(store.createdAt)}</p>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default StoreList;
