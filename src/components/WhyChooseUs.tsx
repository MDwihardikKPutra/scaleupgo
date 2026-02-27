"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Target, Zap, MessageSquare } from "lucide-react";

export default function WhyChooseUs() {
    const { t } = useLanguage();

    const values = [
        {
            title: "Desain Premium",
            subtitle: "Visual Excellence",
            desc: t("why.desc1"),
            icon: Target,
            bg: "bg-blue-50",
            stroke: "#2563EB",
        },
        {
            title: "Konversi Tinggi",
            subtitle: "ROI Oriented",
            desc: t("why.desc2"),
            icon: Zap,
            bg: "bg-accent-50",
            stroke: "#3B82F6",
        },
        {
            title: "Support 24/7",
            subtitle: "Reliable Partner",
            desc: t("why.desc3"),
            icon: MessageSquare,
            bg: "bg-indigo-50",
            stroke: "#4F46E5",
        },
    ];

    return (
        <section id="why-choose-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Standardized */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4"
                    >
                        {t("why.label")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4"
                    >
                        {t("why.title1")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            {t("why.title2")}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed text-center"
                    >
                        {t("why.desc")}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-8 sm:p-10 rounded-3xl border border-navy-100 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 bg-white">
                                <div
                                    className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}
                                >
                                    <item.icon size={26} style={{ stroke: item.stroke }} className="group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-900 mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-accent-500 font-semibold text-sm mb-3">
                                    {item.subtitle}
                                </p>
                                <p className="text-navy-500 text-sm leading-relaxed mb-6 font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
