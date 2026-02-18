"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        type: "Landing Page",
        price: "1.5",
        unit: "juta",
        description: "Cocok untuk promosi produk, event, atau campaign tertentu.",
        features: [
            "1 Halaman Landing Page",
            "Desain Custom Premium",
            "Mobile Responsive",
            "Form WhatsApp",
            "1x Revisi",
            "Gratis Domain .com (1 Tahun)",
        ],
        popular: false,
        cta: "Pilih Starter",
    },
    {
        name: "Business",
        type: "Company Profile",
        price: "3.5",
        unit: "juta",
        description: "Untuk bisnis yang ingin tampil profesional dan terpercaya.",
        features: [
            "Hingga 5 Halaman",
            "Desain Premium & Animasi",
            "SEO On-Page Optimization",
            "Google Maps Integration",
            "Contact Form & WhatsApp",
            "3x Revisi",
            "Gratis Domain .com (1 Tahun)",
            "Free Hosting 1 Tahun",
        ],
        popular: true,
        cta: "Pilih Business",
    },
    {
        name: "Pro",
        type: "Toko Online / Custom",
        price: "7",
        unit: "juta",
        description: "Solusi lengkap untuk toko online atau sistem custom.",
        features: [
            "Unlimited Halaman",
            "Katalog & Checkout Otomatis",
            "Dashboard Admin",
            "Payment Gateway",
            "WhatsApp Order Notification",
            "SEO & Analytics",
            "5x Revisi",
            "Gratis Domain .com (1 Tahun)",
            "Free Hosting 1 Tahun",
            "Support 3 Bulan",
        ],
        popular: false,
        cta: "Pilih Pro",
    },
];

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-700 text-sm font-semibold rounded-full mb-4">
                        Harga Transparan
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                        Investasi untuk{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                            Pertumbuhan Bisnis
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
                        Harga terjangkau, kualitas premium. Pilih paket yang sesuai kebutuhan.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className={`relative group ${tier.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-accent-400 text-white text-xs font-bold rounded-full shadow-lg shadow-accent-400/30">
                                        <Star size={12} fill="currentColor" />
                                        BEST VALUE
                                    </div>
                                </div>
                            )}
                            <div
                                className={`relative h-full rounded-3xl overflow-hidden transition-all duration-300 ${tier.popular
                                        ? "bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-2xl shadow-navy-900/30 hover:shadow-3xl hover:shadow-navy-900/40 border-2 border-accent-400/30"
                                        : "bg-white border border-navy-100 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5"
                                    }`}
                            >
                                <div className="p-8 sm:p-10">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <p className="text-sm font-semibold mb-1 text-accent-400">
                                            {tier.type}
                                        </p>
                                        <h3
                                            className={`text-2xl font-bold ${tier.popular ? "text-white" : "text-navy-900"
                                                }`}
                                        >
                                            {tier.name}
                                        </h3>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span
                                                className={`text-sm font-medium ${tier.popular ? "text-white/60" : "text-navy-400"
                                                    }`}
                                            >
                                                Rp
                                            </span>
                                            <span
                                                className={`text-5xl font-extrabold tracking-tight ${tier.popular ? "text-white" : "text-navy-900"
                                                    }`}
                                            >
                                                {tier.price}
                                            </span>
                                            <span
                                                className={`text-lg font-medium ${tier.popular ? "text-white/60" : "text-navy-400"
                                                    }`}
                                            >
                                                {tier.unit}
                                            </span>
                                        </div>
                                        <p
                                            className={`mt-2 text-sm ${tier.popular ? "text-white/60" : "text-navy-400"
                                                }`}
                                        >
                                            {tier.description}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div
                                        className={`h-px mb-6 ${tier.popular ? "bg-white/10" : "bg-navy-100"
                                            }`}
                                    />

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {tier.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <div
                                                    className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${tier.popular ? "bg-accent-400/20" : "bg-green-100"
                                                        }`}
                                                >
                                                    <Check
                                                        size={12}
                                                        className={
                                                            tier.popular ? "text-accent-400" : "text-green-600"
                                                        }
                                                    />
                                                </div>
                                                <span
                                                    className={`text-sm ${tier.popular ? "text-white/80" : "text-navy-600"
                                                        }`}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href="https://wa.me/6281234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block w-full py-4 px-6 text-center text-sm font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${tier.popular
                                                ? "bg-accent-400 text-white hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-400/30"
                                                : "bg-navy-900 text-white hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/25"
                                            }`}
                                    >
                                        {tier.cta}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
