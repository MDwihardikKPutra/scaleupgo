"use client";

import { motion } from "framer-motion";
import { Target, Zap, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EASE } from "@/lib/motion";

export default function WhyChooseUs() {
    const { t } = useLanguage();

    const values = [
        { icon: Target, title: t("why.val1_title"), subtitle: t("why.val1_sub"), desc: t("why.desc1") },
        { icon: Zap, title: t("why.val2_title"), subtitle: t("why.val2_sub"), desc: t("why.desc2") },
        { icon: MessageSquare, title: t("why.val3_title"), subtitle: t("why.val3_sub"), desc: t("why.desc3") },
    ];

    return (
        <section id="why-choose-us" className="min-h-screen flex items-center bg-[#01040D] border-t border-white/[0.06]">
            <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accent-400 text-[11px] font-mono font-bold uppercase tracking-[0.3em]"
                    >
                        {t("why.label")}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em]"
                    >
                        {t("why.title1")}{" "}
                        <span className="text-accent-400 italic font-light">{t("why.title2")}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                        className="mt-5 text-white/40 text-lg max-w-xl mx-auto"
                    >
                        {t("why.desc")}
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.08 * i }}
                            className="group flex flex-col p-9 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-white/12 transition-colors duration-500 min-h-[280px]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-8">
                                <item.icon size={22} className="text-accent-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{item.title}</h3>
                            <p className="text-accent-400 font-mono text-[9px] uppercase tracking-[0.25em] font-bold mb-5 opacity-60">
                                {item.subtitle}
                            </p>
                            <p className="text-white/35 text-base leading-relaxed flex-1">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
