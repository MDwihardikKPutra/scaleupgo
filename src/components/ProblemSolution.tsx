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
    ShieldCheck,
    Zap,
    HeartHandshake,
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

const values = [
    {
        icon: ShieldCheck,
        title: "Aset Digital Milik Sendiri",
        subtitle: "Anti-Banned",
        description:
            "Website Anda adalah milik Anda sepenuhnya. Tidak seperti marketplace, tidak ada risiko akun dibanned atau kebijakan berubah mendadak.",
        bg: "bg-blue-50",
        stroke: "#0A4FA6",
    },
    {
        icon: Zap,
        title: "Loading Super Cepat",
        subtitle: "SEO Friendly",
        description:
            "Dibangun dengan teknologi terbaru sehingga website cepat diakses. Dioptimasi agar mudah ditemukan di Google oleh calon pelanggan Anda.",
        bg: "bg-accent-50",
        stroke: "#2563EB",
    },
    {
        icon: HeartHandshake,
        title: "Terima Beres",
        subtitle: "Gak Perlu Paham Coding",
        description:
            "Anda cukup bilang maunya seperti apa, kami yang kerjakan. Dari desain, development, sampai online — semua kami handle.",
        bg: "bg-emerald-50",
        stroke: "#10b981",
    },
];

export default function ProblemSolution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 sm:py-28 bg-[#F8F9FA] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- Problem vs Solution --- */}
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

                {/* --- Why Choose Us --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-24 mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-700 text-sm font-semibold rounded-full mb-4">
                        Kenapa ScaleUp.Go?
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                        Bukan Sekedar{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                            Buat Website
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
                        Kami memastikan website Anda benar-benar bekerja sebagai mesin penjualan.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 + 0.15 * i }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-8 sm:p-10 rounded-3xl border border-navy-100 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 bg-white">
                                <div
                                    className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <item.icon size={26} style={{ stroke: item.stroke }} />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-accent-500 font-semibold text-sm mb-3">
                                    {item.subtitle}
                                </p>
                                <p className="text-navy-500 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
