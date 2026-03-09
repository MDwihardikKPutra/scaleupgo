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
                        className="text-accent-400 text-[10px] font-mono font-bold uppercase tracking-[0.3em]"
                    >
                        {t("why.label")}
                    </motion.span>
                    <motion.h2
                        className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.03em] flex flex-wrap justify-center gap-x-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {},
                        }}
                    >
                        {[...t("why.title1").split(" "), t("why.title2")].map((word, i, arr) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
                                }}
                                className={i === arr.length - 1 ? "text-accent-400 italic font-light" : ""}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                        className="mt-5 text-white/40 text-base sm:text-lg max-w-xl mx-auto"
                    >
                        {t("why.desc")}
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {values.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.1 * i }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group flex flex-col p-9 rounded-2xl bg-white/[0.02] border border-white/[0.05] min-h-[280px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-8 group-hover:border-accent-400/30 transition-colors duration-300">
                                <item.icon size={22} className="text-accent-400 animate-float" />
                            </div>
                            <h3 className="relative z-10 text-2xl font-bold text-white tracking-tight mb-2">{item.title}</h3>
                            <p className="relative z-10 text-accent-400 font-mono text-[9px] uppercase tracking-[0.25em] font-bold mb-5 opacity-60">
                                {item.subtitle}
                            </p>
                            <p className="relative z-10 text-white/35 text-base leading-relaxed flex-1">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
