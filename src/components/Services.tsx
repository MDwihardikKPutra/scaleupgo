"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Building2, ShoppingCart, ArrowRight } from "lucide-react";

const services = [
    {
        icon: FileText,
        title: "Landing Page",
        tagline: "Untuk Promosi Spesifik",
        description:
            "Halaman yang dirancang khusus untuk mengkonversi pengunjung menjadi leads atau pembeli. Cocok untuk campaign iklan atau promo produk tertentu.",
        features: ["Desain Persuasif", "Mobile Responsive", "Fast Loading", "CTA Optimized"],
        color: "accent",
        gradient: "from-accent-400 to-accent-500",
    },
    {
        icon: Building2,
        title: "Company Profile",
        tagline: "Untuk Branding Perusahaan",
        description:
            "Website profesional yang merepresentasikan bisnis Anda secara online. Tingkatkan kredibilitas dan kepercayaan calon pelanggan.",
        features: ["Multi-halaman", "SEO Optimized", "Kontak Form", "Google Maps"],
        color: "navy",
        gradient: "from-navy-700 to-navy-900",
    },
    {
        icon: ShoppingCart,
        title: "Toko Online",
        tagline: "Katalog & Checkout Otomatis",
        description:
            "Toko online lengkap dengan sistem katalog produk, keranjang belanja, dan checkout otomatis via WhatsApp atau payment gateway.",
        features: ["Katalog Produk", "Checkout Otomatis", "WhatsApp Order", "Dashboard Admin"],
        color: "emerald",
        gradient: "from-emerald-500 to-green-600",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-20 sm:py-28 bg-[#F8F9FA] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-500 text-sm font-semibold rounded-full mb-4">
                        Layanan Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                        Solusi Website untuk{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                            Setiap Kebutuhan
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
                        Pilih jenis website yang paling sesuai dengan tujuan bisnis Anda.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className="group"
                        >
                            <div className="relative h-full p-8 sm:p-10 bg-white rounded-3xl border border-navy-100 hover:border-transparent hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${service.color === "accent"
                                                ? "bg-accent-50 group-hover:bg-white/20"
                                                : service.color === "navy"
                                                    ? "bg-navy-50 group-hover:bg-white/20"
                                                    : "bg-emerald-50 group-hover:bg-white/20"
                                            }`}
                                    >
                                        <service.icon
                                            size={26}
                                            className={`transition-colors duration-500 ${service.color === "accent"
                                                    ? "text-accent-400 group-hover:text-white"
                                                    : service.color === "navy"
                                                        ? "text-navy-700 group-hover:text-white"
                                                        : "text-emerald-500 group-hover:text-white"
                                                }`}
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-white transition-colors duration-500 mb-1">
                                        {service.title}
                                    </h3>
                                    <p
                                        className={`text-sm font-semibold mb-4 transition-colors duration-500 ${service.color === "accent"
                                                ? "text-accent-400 group-hover:text-white/80"
                                                : service.color === "navy"
                                                    ? "text-navy-500 group-hover:text-white/80"
                                                    : "text-emerald-500 group-hover:text-white/80"
                                            }`}
                                    >
                                        {service.tagline}
                                    </p>
                                    <p className="text-navy-500 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-500">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2 mb-8">
                                        {service.features.map((feature, j) => (
                                            <div
                                                key={j}
                                                className="flex items-center gap-2 text-sm text-navy-600 group-hover:text-white/90 transition-colors duration-500"
                                            >
                                                <svg className="w-4 h-4 text-green-500 group-hover:text-white flex-shrink-0 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-white transition-colors duration-500"
                                    >
                                        Lihat Harga
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
