"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, BookOpen, Clock, Rocket, RefreshCw, BarChart3, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const { t } = useLanguage();
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

    const problemsList = [
        { icon: MessageCircle, text: t("ps.p1") },
        { icon: BookOpen, text: t("ps.p2") },
        { icon: Clock, text: t("ps.p3") },
    ];

    const solutionsList = [
        { icon: Rocket, text: t("ps.s1") },
        { icon: RefreshCw, text: t("ps.s2") },
        { icon: BarChart3, text: t("ps.s3") },
    ];

    const chartPath = "M 0,190 C 40,188 80,185 120,180 L 160,174 C 180,170 190,165 205,155 L 230,130 C 255,98 275,62 305,32 C 325,12 342,4 360,2";
    const marketPath = "M 0,190 C 30,189 70,187 110,184 L 155,180 C 175,177 188,172 205,162 L 232,140 C 258,108 278,72 308,40 C 328,20 345,10 360,7";

    return (
        <section id="why-digital" className="min-h-screen flex items-center bg-white border-t border-black/[0.06]">
            <div ref={ref} className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">

                {/* Header — centered */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease }}
                    className="text-center mb-12"
                >
                    <span className="text-accent-600 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                        {t("ps.label")}
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#01040D] tracking-[-0.03em]">
                        {t("ps.title1")}{" "}
                        <span className="text-accent-600 italic font-light">{t("ps.title2")}</span>
                    </h2>
                </motion.div>

                {/* Equal-height 2-column grid */}
                <div className="grid lg:grid-cols-2 gap-5 items-stretch">

                    {/* LEFT: Comparison card */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease, delay: 0.1 }}
                        className="flex flex-col rounded-2xl border border-black/[0.08] overflow-hidden"
                    >
                        {/* Problems */}
                        <div className="flex-1 p-8 border-b border-black/[0.06] bg-white">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                <span className="text-red-400 text-[9px] font-mono font-bold uppercase tracking-[0.3em]">{t("ps.bad_label")}</span>
                            </div>
                            <div className="space-y-5">
                                {problemsList.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                                            <item.icon size={15} className="text-red-400" />
                                        </div>
                                        <p className="text-slate-500 text-sm leading-snug">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="flex-1 p-8 bg-slate-50/60">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                                <span className="text-accent-600 text-[9px] font-mono font-bold uppercase tracking-[0.3em]">{t("ps.good_label")}</span>
                            </div>
                            <div className="space-y-5">
                                {solutionsList.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-9 h-9 rounded-xl bg-accent-500 text-white flex items-center justify-center flex-shrink-0">
                                            <item.icon size={15} />
                                        </div>
                                        <p className="text-[#01040D] text-sm font-semibold leading-snug">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="px-8 py-5 border-t border-black/[0.06] bg-white flex items-center justify-between">
                            <p className="text-slate-300 text-[9px] font-mono font-bold uppercase tracking-[0.25em]">{t("ps.cta")}</p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 font-semibold text-accent-600 hover:text-accent-700 transition-colors text-xs"
                            >
                                {t("ps.btn")} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT: Growth chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease, delay: 0.2 }}
                        className="flex flex-col rounded-2xl border border-black/[0.08] bg-white p-8"
                    >
                        {/* Stats row */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 rounded-xl bg-slate-50 border border-black/[0.05]">
                                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400 mb-1">Market Reach</p>
                                <p className="text-2xl font-bold text-[#01040D] tracking-tight">+340%</p>
                                <p className="text-xs text-accent-500 font-semibold mt-0.5">setelah punya website</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 border border-black/[0.05]">
                                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400 mb-1">Revenue Growth</p>
                                <p className="text-2xl font-bold text-[#01040D] tracking-tight">+210%</p>
                                <p className="text-xs text-green-500 font-semibold mt-0.5">rata-rata klien kami</p>
                            </div>
                        </div>

                        {/* Chart — fills remaining height */}
                        <div className="flex-1 flex flex-col">
                            <svg viewBox="0 0 360 200" className="w-full flex-1" preserveAspectRatio="none" style={{ minHeight: 160 }}>
                                <defs>
                                    <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01" />
                                    </linearGradient>
                                    <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.08" />
                                        <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.01" />
                                    </linearGradient>
                                </defs>

                                {/* Subtle grid */}
                                {[50, 100, 150].map((y) => (
                                    <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                                ))}

                                {/* Area fills */}
                                <motion.path
                                    d={`${marketPath} L 360,200 L 0,200 Z`}
                                    fill="url(#marketGrad)"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                                <motion.path
                                    d={`${chartPath} L 360,200 L 0,200 Z`}
                                    fill="url(#profitGrad)"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />

                                {/* Market reach line (dashed) */}
                                <motion.path
                                    d={marketPath}
                                    fill="none" stroke="#cbd5e1" strokeWidth="1.5"
                                    strokeDasharray="4 3" strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
                                />

                                {/* Profit line */}
                                <motion.path
                                    d={chartPath}
                                    fill="none" stroke="#3b82f6" strokeWidth="2.5"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                                />

                                {/* "Website live" marker */}
                                <motion.line
                                    x1="205" y1="10" x2="205" y2="200"
                                    stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 1.4, duration: 0.4 }}
                                />
                                <motion.text
                                    x="208" y="24" fontSize="7" fontFamily="monospace"
                                    fill="#94a3b8" fontWeight="700" letterSpacing="0.8"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 1.6, duration: 0.4 }}
                                >
                                    WEBSITE LIVE
                                </motion.text>

                                {/* End dot */}
                                <motion.circle cx="360" cy="2" r="4" fill="#3b82f6"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: 2.2, duration: 0.4, type: "spring" }}
                                />
                            </svg>

                            {/* X-axis labels */}
                            <div className="flex justify-between mt-3">
                                <span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">Sebelum</span>
                                <span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">Sesudah</span>
                            </div>

                            {/* Legend */}
                            <div className="flex items-center gap-5 mt-4 pt-4 border-t border-black/[0.05]">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-0.5 bg-accent-500 rounded" />
                                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Profit</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 border-t border-dashed border-slate-300" />
                                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Market Reach</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
