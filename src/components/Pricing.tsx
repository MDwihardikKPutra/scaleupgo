"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Landing Page",
        price: "750rb",
        period: "proyek",
        description: "Cocok untuk promosi produk, campaign iklan, atau event spesifik.",
        popular: false,
        features: [
            "1 Halaman Responsif",
            "Desain Custom Modern",
            "Optimasi Kecepatan",
            "WhatsApp Integration",
            "Form Kontak",
            "Gratis Domain .com",
            "Free Revisi 2x",
        ],
    },
    {
        name: "Company Profile",
        price: "1.5jt",
        period: "proyek",
        description: "Website profesional untuk branding dan kredibilitas bisnis Anda.",
        popular: true,
        features: [
            "3-5 Halaman Responsif",
            "Desain Custom Premium",
            "SEO On-Page Optimization",
            "Google Maps Integration",
            "Blog / Berita",
            "WhatsApp Chat Widget",
            "Gratis Domain .com",
            "Free Revisi 3x",
        ],
    },
    {
        name: "Toko Online",
        price: "2.5jt",
        period: "proyek",
        description: "Solusi lengkap untuk jualan online dengan katalog & sistem order.",
        popular: false,
        features: [
            "Unlimited Produk",
            "Katalog Produk Dinamis",
            "Keranjang & Checkout",
            "WhatsApp Auto-Order",
            "Dashboard Admin",
            "Gratis Domain .com",
            "Free Revisi 5x",
        ],
    },
];

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-light-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-400/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Standardized */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                        Pilihan Paket
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4">
                        Harga{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            Transparan
                        </span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed">
                        Pilih paket investasi yang paling sesuai dengan target pertumbuhan bisnis Anda.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className="group relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-accent-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-xl shadow-accent-500/30">
                                        <Star size={10} fill="currentColor" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`relative h-full p-8 sm:p-10 rounded-[2rem] border transition-all duration-500 bg-white ${plan.popular
                                    ? "border-accent-200 shadow-2xl shadow-accent-500/10 scale-[1.03] z-10"
                                    : "border-light-border hover:border-navy-200 hover:shadow-xl"
                                }`}>
                                <h3 className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">{plan.name}</h3>
                                <p className="text-navy-500 text-sm mt-2 mb-8 font-medium">{plan.description}</p>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black text-navy-400 uppercase tracking-widest pl-1">Mulai Dari</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tighter">Rp {plan.price}</span>
                                            <span className="text-navy-400 text-xs font-bold font-mono">/{plan.period}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <div key={j} className="flex items-center gap-3 text-xs sm:text-sm text-navy-600 font-bold">
                                            <div className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} className="text-accent-500 stroke-[3]" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full py-4 text-center text-[11px] font-black uppercase tracking-widest rounded-2xl active:scale-[0.98] transition-all duration-300 ${plan.popular
                                            ? "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30"
                                            : "bg-navy-900 text-white hover:bg-navy-800 hover:shadow-xl shadow-navy-900/10"
                                        }`}
                                >
                                    Pesan Sekarang
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
