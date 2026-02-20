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
            "Halaman yang dirancang khusus untuk mengkonversi pengunjung menjadi leads atau pembeli. Cocok untuk campaign iklan.",
        features: ["Desain Persuasif", "Mobile Responsive", "Fast Loading", "CTA Optimized"],
        gradient: "from-accent-400 to-accent-600",
        iconColor: "text-accent-600",
        iconBg: "bg-accent-50",
    },
    {
        icon: Building2,
        title: "Company Profile",
        tagline: "Untuk Branding Bisnis",
        description:
            "Website profesional yang merepresentasikan bisnis Anda secara online. Tingkatkan kredibilitas & kepercayaan pelanggan.",
        features: ["Multi-halaman", "SEO Optimized", "Kontak Form", "Google Maps"],
        gradient: "from-navy-700 to-navy-900",
        iconColor: "text-navy-600",
        iconBg: "bg-navy-50",
    },
    {
        icon: ShoppingCart,
        title: "Toko Online",
        tagline: "Katalog & Checkout",
        description:
            "Toko online lengkap dengan sistem katalog, keranjang belanja, dan checkout otomatis via WhatsApp atau Payment.",
        features: ["Katalog Produk", "Checkout Otomatis", "WhatsApp Order", "Admin Dashboard"],
        gradient: "from-emerald-500 to-green-600",
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-50",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-20 sm:py-28 bg-light-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border to-transparent" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Standardized */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                        Layanan Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4">
                        Solusi Website untuk{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            Setiap Kebutuhan
                        </span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed">
                        Pilih jenis website yang paling sesuai dengan tujuan strategis bisnis Anda.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className="group"
                        >
                            <div className="relative h-full p-8 sm:p-10 bg-white rounded-[2rem] border border-light-border hover:border-accent-500/30 hover:shadow-2xl hover:shadow-accent-500/5 transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl ${service.iconBg} group-hover:bg-white/20 flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm border border-light-border/50 group-hover:border-transparent`}>
                                        <service.icon size={22} className={`${service.iconColor} group-hover:text-white transition-colors duration-500`} />
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-black text-navy-900 group-hover:text-white transition-colors duration-500 mb-1 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className={`text-[9px] font-black uppercase tracking-widest mb-4 ${service.iconColor} group-hover:text-white/70 transition-colors duration-500`}>
                                        {service.tagline}
                                    </p>
                                    <p className="text-navy-500 text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-500 font-medium">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-10">
                                        {service.features.map((feature, j) => (
                                            <div key={j} className="flex items-center gap-2.5 text-xs sm:text-sm text-navy-600 group-hover:text-white/90 transition-colors duration-500 font-bold">
                                                <div className="w-4 h-4 rounded-full bg-accent-50 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                                    <svg className="w-2.5 h-2.5 text-accent-500 group-hover:text-white flex-shrink-0 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <a href="#pricing" className="group/btn inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-600 group-hover:text-white transition-colors duration-500 border-b border-accent-100 group-hover:border-white/20 pb-1">
                                        Lihat Harga
                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-300" />
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
