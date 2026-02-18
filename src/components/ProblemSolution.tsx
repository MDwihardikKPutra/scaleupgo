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
    X,
    Check,
} from "lucide-react";

const oldWay = [
    { icon: MessageCircle, text: "Balas chat satu-satu, capek & lambat" },
    { icon: BookOpen, text: "Rekap orderan di buku, rawan salah hitung" },
    { icon: Clock, text: "Customer kabur karena slow respon" },
];

const newWay = [
    { icon: Rocket, text: "Orderan masuk otomatis ke dashboard" },
    { icon: RefreshCw, text: "Buka 24 Jam tanpa harus standby" },
    { icon: BarChart3, text: "Data pelanggan rapi & bisa dianalisa" },
];

export default function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 sm:py-28 bg-[#F8F9FA] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-500 text-sm font-semibold rounded-full mb-4">
                        Masih Pakai Cara Lama?
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                        2026 Masih Jualan{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                            Manual?
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
                        Bandingkan cara lama vs cara baru. Sudah saatnya upgrade bisnis Anda.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Old Way */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                        <div className="relative p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                    <X className="text-red-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy-900">Manual & Ribet</h3>
                                    <p className="text-sm text-navy-500">Cara lama yang bikin pusing</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {oldWay.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                        className="flex items-start gap-4 p-4 bg-white/70 rounded-2xl"
                                    >
                                        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <item.icon size={18} className="text-red-400" />
                                        </div>
                                        <p className="text-navy-700 font-medium text-sm leading-relaxed pt-1.5">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* New Way */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-50 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                        <div className="relative p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                    <Check className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy-900">Otomatis & Cepat</h3>
                                    <p className="text-sm text-navy-500">Upgrade dengan website profesional</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {newWay.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                        className="flex items-start gap-4 p-4 bg-white/70 rounded-2xl"
                                    >
                                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <item.icon size={18} className="text-green-500" />
                                        </div>
                                        <p className="text-navy-700 font-medium text-sm leading-relaxed pt-1.5">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
