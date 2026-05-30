import React from 'react';
import { Link } from 'react-router-dom';

const SystemAdministrator = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 lg:px-12">
				<header className="flex flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.4)] backdrop-blur">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div className="space-y-2">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.3em] text-slate-500">
								System Administrator
							</p>
							<h1 className="text-[clamp(2rem,3.2vw,3rem)] font-['Fraunces']">
								Control room overview
							</h1>
							<p className="max-w-2xl text-sm font-['Manrope'] text-slate-600">
								Oversee platform health, moderation, and compliance in one view.
							</p>
						</div>
						<Link
							to="/"
							className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-5 py-2 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-300 hover:bg-slate-200"
						>
							Back to roles
							<span aria-hidden="true">-&gt;</span>
						</Link>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Open incidents
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">2</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Monitoring in progress
							</p>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								User escalations
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">11</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Awaiting review
							</p>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-5">
							<p className="text-xs font-['Manrope'] uppercase tracking-[0.2em] text-slate-400">
								Data integrity
							</p>
							<p className="mt-3 text-3xl font-['Fraunces']">99.3%</p>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Healthy service uptime
							</p>
						</div>
					</div>
				</header>

				<section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
					<div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.35)]">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<div>
								<h2 className="text-xl font-['Fraunces']">Moderation queue</h2>
								<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
									Items flagged for review and resolution.
								</p>
							</div>
							<span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-slate-700">
								Priority
							</span>
						</div>
						<div className="mt-6 space-y-4">
							{[
								{ item: 'Duplicate store listing detected', status: 'Investigate' },
								{ item: 'Suspicious rating spike on Harbor Market', status: 'Audit' },
								{ item: 'Report on offensive review content', status: 'Action' },
							].map((row) => (
								<div
									key={row.item}
									className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/60 px-4 py-3"
								>
									<p className="text-sm font-['Manrope'] text-slate-700">{row.item}</p>
									<span className="rounded-full bg-white px-3 py-1 text-xs font-['Manrope'] font-semibold uppercase tracking-[0.2em] text-slate-600">
										{row.status}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-6">
						<div className="rounded-3xl border border-slate-200 bg-white p-7">
							<h2 className="text-xl font-['Fraunces']">System health</h2>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Live infrastructure metrics and alerts.
							</p>
							<div className="mt-5 space-y-3 text-sm font-['Manrope'] text-slate-700">
								<div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
									<span>API latency</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
										235 ms
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
									<span>Queue processing</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
										98.4%
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
									<span>Uptime SLA</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
										99.9%
									</span>
								</div>
							</div>
						</div>

						<div className="rounded-3xl border border-slate-200 bg-white p-7">
							<h2 className="text-xl font-['Fraunces']">Admin tasks</h2>
							<p className="mt-2 text-sm font-['Manrope'] text-slate-600">
								Recommended actions for today.
							</p>
							<div className="mt-5 space-y-3 text-sm font-['Manrope'] text-slate-700">
								<div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
									<span>Audit new store verifications</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
										Today
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
									<span>Review policy update draft</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
										Tomorrow
									</span>
								</div>
								<div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
									<span>Finalize incident postmortem</span>
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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

export default SystemAdministrator;
