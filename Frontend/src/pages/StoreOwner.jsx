import React from 'react';
import { Link } from 'react-router-dom';

const StoreOwner = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 lg:px-12">
				<header className="flex flex-col gap-6 rounded-3xl border border-amber-100/80 bg-white/80 p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.4)] backdrop-blur">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div className="space-y-2">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.3em] text-amber-600">
								Store Owner Workspace
							</p>
							<h1 className="text-[clamp(2rem,3.2vw,3rem)] font-['Fraunces']">
								Your store pulse at a glance
							</h1>
							<p className="max-w-2xl text-sm font-['Manrope'] text-slate-600">
								Track sentiment, respond faster, and keep customer trust high.
							</p>
						</div>
						<Link
							to="/"
							className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-amber-700 transition hover:border-amber-300 hover:bg-amber-100"
						>
							Back to roles
							<span aria-hidden="true">-&gt;</span>
						</Link>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="rounded-2xl border border-amber-100 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Overall rating
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">4.7</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								+0.2 in the last 30 days
							</p>
						</div>
						<div className="rounded-2xl border border-amber-100 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Pending responses
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">5</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Awaiting your reply
							</p>
						</div>
						<div className="rounded-2xl border border-amber-100 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Monthly visits
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">12.4k</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Steady traffic trend
							</p>
						</div>
					</div>
				</header>

				<section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
					<div className="rounded-3xl border border-amber-100 bg-white p-7 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.35)]">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<div>
								<h2 className="text-xl font-['Fraunces']">Review insights</h2>
								<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
									See how customers feel this week.
								</p>
							</div>
							<span className="rounded-full bg-amber-50 px-4 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-amber-700">
								Weekly
							</span>
						</div>
						<div className="mt-6 space-y-4">
							{[
								{ label: 'Positive feedback', value: '72%' },
								{ label: 'Neutral feedback', value: '19%' },
								{ label: 'Negative feedback', value: '9%' },
							].map((item) => (
								<div key={item.label} className="rounded-2xl border border-amber-100/70 bg-amber-50/40 p-4">
									<div className="flex items-center justify-between">
										<p className="text-sm font-['Manrope'] text-slate-700">{item.label}</p>
										<p className="text-lg font-['Fraunces'] text-amber-700">{item.value}</p>
									</div>
									<div className="mt-3 h-2 w-full rounded-full bg-amber-100">
										<div
											className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
											style={{ width: item.value }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<div className="rounded-3xl border border-amber-100 bg-white p-7">
							<h2 className="text-xl font-['Fraunces']">Response queue</h2>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Prioritize the reviews that need attention.
							</p>
							<div className="mt-5 space-y-3 text-sm font-['Manrope'] text-slate-700">
								{[
									'Order delays mentioned in 2 reviews',
									'New product feedback trending positive',
									'Follow-up from VIP customer pending',
								].map((item) => (
									<div
										key={item}
										className="rounded-2xl border border-amber-100/70 bg-amber-50/40 px-4 py-3"
									>
										{item}
									</div>
								))}
							</div>
						</div>

						<div className="rounded-3xl border border-amber-100 bg-white p-7">
							<h2 className="text-xl font-['Fraunces']">Growth actions</h2>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Suggested next steps to build loyalty.
							</p>
							<div className="mt-5 space-y-3 text-sm font-['Manrope'] text-slate-700">
								<div className="flex items-center justify-between rounded-2xl border border-amber-100/70 bg-white px-4 py-3">
									<span>Schedule staff training refresh</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
										This week
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-amber-100/70 bg-white px-4 py-3">
									<span>Launch review thank-you campaign</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
										Next</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-amber-100/70 bg-white px-4 py-3">
									<span>Update store highlights</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
										Soon</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default StoreOwner
