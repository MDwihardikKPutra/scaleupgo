"use client";

import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import { Smartphone, Monitor, ArrowRight } from "lucide-react";

export default function Services() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            title: "Landing Page",
            tagline: "High Conversion",
            description: t("services.desc1"),
            features: ["Sales Focus", "Mobile Ready", "Fast Load"],
            icon: Smartphone,
            color: "from-blue-600 to-accent-600",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            gradient: "from-blue-600/10 to-accent-600/10",
        },
        {
            title: "Company Profile",
            tagline: "Brand Identity",
            description: t("services.desc2"),
            features: ["Professional", "SEO Ready", "Multi Page"],
            icon: Monitor,
            color: "from-accent-600 to-indigo-600",
            iconBg: "bg-accent-50",
            iconColor: "text-accent-600",
            gradient: "from-accent-600/10 to-indigo-600/10",
        },
    ];

    return (
        <section id="services" className="py-20 sm:py-28 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-light-border to-transparent" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Standardized */}
                <div className="text-center mb-16 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4"
                    >
                        {t("services.label")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4"
                    >
                        {t("services.title1")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            {t("services.title2")}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed text-center"
                    >
                        {t("services.desc")}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="group"
                        >
                            <div className="relative h-full p-8 sm:p-10 bg-white rounded-[2rem] border border-light-border hover:border-accent-400/30 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 shadow-sm">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl ${service.iconBg} group-hover:bg-white/20 flex items-center justify-center mb-8 transition-all duration-500 shadow-sm border border-light-border/50 group-hover:border-transparent group-hover:rotate-[10deg]`}>
                                        <service.icon size={22} className={`${service.iconColor} group-hover:text-white transition-all duration-500`} />
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

                                    <div className="pt-6">
                                        <a
                                            href="#pricing"
                                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-navy-900 group-hover:text-white transition-colors duration-500"
                                        >
                                            {t("services.view_pricing")}
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
