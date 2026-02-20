"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    MessageCircle,
    BookOpen,
    Clock,
    Rocket,
    RefreshCw,
    BarChart3,
    ArrowRight,
} from "lucide-react";

const problems = [
    { icon: MessageCircle, text: "Balas chat satu-satu, capek & lambat" },
    { icon: BookOpen, text: "Rekap orderan di buku, rawan salah hitung" },
    { icon: Clock, text: "Customer kabur karena slow respon" },
];

const solutions = [
    { icon: Rocket, text: "Orderan masuk otomatis ke dashboard" },
    { icon: RefreshCw, text: "Buka 24 Jam tanpa harus standby" },
    { icon: BarChart3, text: "Data pelanggan rapi & bisa dianalisa" },
];

export default function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 sm:py-28 bg-light-bg relative overflow-hidden">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Standardized */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                        Problem & Solution
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4">
                        Stop Cara Lama,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            Go Digital
                        </span>
                    </h2>
                    <p className="text-navy-500 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                        Ubah tantangan operasional menjadi keunggulan bisnis dengan otomasi yang tepat sasaran.
                    </p>
                </motion.div>

                {/* Single card with two columns */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="rounded-[2.5rem] border border-light-border overflow-hidden bg-white shadow-xl shadow-navy-900/[0.03]">
                        <div className="grid md:grid-cols-2">
                            {/* Left — Problems (Red) */}
                            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-light-border bg-white">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-red-500 text-[9px] font-black uppercase tracking-[0.2em]">Cara Lama</span>
                                </div>
                                <div className="space-y-6">
                                    {problems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-5">
                                            <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                                                <item.icon size={18} className="text-red-500" />
                                            </div>
                                            <p className="text-navy-700 text-sm sm:text-base font-medium">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — Solutions (Blue) */}
                            <div className="p-8 sm:p-12 bg-accent-50/20">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-2 h-2 rounded-full bg-accent-500" />
                                    <span className="text-accent-500 text-[9px] font-black uppercase tracking-[0.2em]">Scale Up Logic</span>
                                </div>
                                <div className="space-y-6">
                                    {solutions.map((item, i) => (
                                        <div key={i} className="flex items-center gap-5">
                                            <div className="w-10 h-10 rounded-2xl bg-accent-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/20">
                                                <item.icon size={18} />
                                            </div>
                                            <p className="text-navy-900 text-sm sm:text-base font-bold">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA strip */}
                        <div className="px-8 sm:px-12 py-6 border-t border-light-border bg-white flex flex-col sm:flex-row items-center justify-between gap-4 font-medium text-sm">
                            <p className="text-navy-400">Siap untuk transformasikan bisnis Anda?</p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 font-black text-accent-600 hover:text-accent-700 transition-colors tracking-tight"
                            >
                                Konsultasi Strategi Sekarang
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
