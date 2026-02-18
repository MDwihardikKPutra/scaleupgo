"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

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

export default function WhyChooseUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-50/50 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
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
                            transition={{ duration: 0.5, delay: 0.15 * i }}
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
