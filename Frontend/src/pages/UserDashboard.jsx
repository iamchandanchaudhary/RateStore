import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 lg:px-12">
				<header className="flex flex-col gap-6 rounded-3xl border border-emerald-100/80 bg-white/80 p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.4)] backdrop-blur">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div className="space-y-2">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.3em] text-emerald-600">
								User Dashboard
							</p>
							<h1 className="text-[clamp(2rem,3.2vw,3rem)] font-['Fraunces']">
								Welcome back, explore your favorite stores
							</h1>
							<p className="max-w-2xl text-sm font-['Manrope'] text-slate-600">
								Your insights hub for reviews, ratings, and curated store picks.
							</p>
						</div>
						<Link
							to="/"
							className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
						>
							Back to roles
							<span aria-hidden="true">-&gt;</span>
						</Link>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="rounded-2xl border border-emerald-100 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Active reviews
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">18</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								3 new updates this week
							</p>
						</div>
						<div className="rounded-2xl border border-emerald-100 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Favorite stores
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">7</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Saved for quick access
							</p>
						</div>
						<div className="rounded-2xl border border-emerald-100 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Recommendations
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">12</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Tailored to your taste
							</p>
						</div>
					</div>
				</header>

				<section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
					<div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.35)]">
						<div className="flex items-start justify-between">
							<div>
								<h2 className="text-xl font-['Fraunces']">Trending stores</h2>
								<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
									Shops gaining momentum across your categories.
								</p>
							</div>
							<span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-emerald-700">
								Live
							</span>
						</div>
						<div className="mt-6 space-y-4">
							{[
								{ name: 'Urban Beans', location: 'Downtown', score: '4.9' },
								{ name: 'Harbor Market', location: 'Riverside', score: '4.7' },
								{ name: 'Studio Furnishings', location: 'Old Town', score: '4.8' },
							].map((store) => (
								<div
									key={store.name}
									className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-100/70 bg-emerald-50/40 px-4 py-3"
								>
									<div>
										<p className="text-sm font-['Manrope'] font-semibold text-slate-800">
											{store.name}
										</p>
										<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-500">
											{store.location}
										</p>
									</div>
									<div className="text-right">
										<p className="text-lg font-['Fraunces'] text-emerald-700">
											{store.score}
										</p>
										<p className="text-xs font-['Manrope'] text-slate-500">Rating</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<div className="rounded-3xl border border-emerald-100 bg-white p-7">
							<h2 className="text-xl font-['Fraunces']">Recent activity</h2>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Your latest review and follow updates.
							</p>
							<div className="mt-5 space-y-4">
								{[
									'You reviewed Harbor Market with 5 stars.',
									'Urban Beans replied to your feedback.',
									'3 new stores added to your watchlist.',
								].map((item) => (
									<p
										key={item}
										className="rounded-2xl border border-emerald-100/70 bg-emerald-50/40 px-4 py-3 text-sm font-['Manrope'] text-slate-700"
									>
										{item}
									</p>
								))}
							</div>
						</div>

						<div className="rounded-3xl border border-emerald-100 bg-white p-7">
							<h2 className="text-xl font-['Fraunces']">Next actions</h2>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Recommended tasks to keep your insights fresh.
							</p>
							<div className="mt-5 space-y-3 text-sm font-['Manrope'] text-slate-700">
								<div className="flex items-center justify-between rounded-2xl border border-emerald-100/70 bg-white px-4 py-3">
									<span>Finish your review draft</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
										Today
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-emerald-100/70 bg-white px-4 py-3">
									<span>Follow up with Studio Furnishings</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
										Tomorrow
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-emerald-100/70 bg-white px-4 py-3">
									<span>Update your favorites list</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
										This week
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default UserDashboard
