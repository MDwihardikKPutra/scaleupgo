"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EASE, VIEWPORT } from "@/lib/motion";

export default function Services() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, VIEWPORT);

    const services = [
        {
            num: "01",
            tag: t("services.tagline1"),
            title: t("services.type1"),
            desc: t("services.desc1"),
            features: [t("services.feat1_1"), t("services.feat1_2"), t("services.feat1_3")],
        },
        {
            num: "02",
            tag: t("services.tagline2"),
            title: t("services.type2"),
            desc: t("services.desc2"),
            features: [t("services.feat2_1"), t("services.feat2_2"), t("services.feat2_3")],
        },
        {
            num: "03",
            tag: t("services.tagline3") || "Hot",
            title: t("services.type3"),
            desc: t("services.desc3"),
            features: [t("services.feat3_1"), t("services.feat3_2"), t("services.feat3_3")],
        },
    ];

    return (
        <section id="services" className="min-h-screen flex items-center bg-[#01040D]">
            <div ref={ref} className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-16 pb-8 border-b border-white/[0.07]">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="block text-accent-400 text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-3"
                    >
                        {t("services.label")}
                    </motion.span>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: EASE }}
                            className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em]"
                        >
                            {t("services.title1")}{" "}
                            <span className="text-accent-400 italic font-light">{t("services.title2")}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:block text-white/30 text-sm max-w-xs lg:text-right leading-relaxed shrink-0"
                        >
                            {t("services.desc")}
                        </motion.p>
                    </div>
                </div>

                {/* Service rows */}
                <div className="divide-y divide-white/[0.06]">
                    {services.map((svc, i) => (
                        <motion.a
                            key={i}
                            href="#pricing"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, ease: EASE, delay: 0.1 + 0.08 * i }}
                            className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 sm:contents">
                                <span className="text-white/15 text-xs font-mono w-6 shrink-0">{svc.num}</span>
                                <div className="sm:w-52 shrink-0">
                                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-accent-400/50 block mb-1">
                                        {svc.tag}
                                    </span>
                                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-400 transition-colors duration-300 leading-snug">
                                        {svc.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-white/35 text-sm leading-relaxed flex-1 pl-10 sm:pl-0">
                                {svc.desc}
                            </p>

                            <div className="hidden lg:flex items-center gap-2 shrink-0">
                                {svc.features.map((f, fi) => (
                                    <span key={fi} className="text-[9px] font-mono font-bold uppercase tracking-[0.1em] text-white/25 px-2.5 py-1 border border-white/[0.08] rounded-md whitespace-nowrap">
                                        {f}
                                    </span>
                                ))}
                            </div>

                            <ArrowUpRight size={16} className="hidden sm:block text-white/15 group-hover:text-accent-400 transition-colors duration-300 shrink-0" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
