"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EASE, VIEWPORT } from "@/lib/motion";

const WA_LINK = "https://wa.me/628133341706";

export default function Pricing() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, VIEWPORT);

    const plans = [
        {
            name: t("services.type1"),
            price: "750rb",
            period: t("pricing.period"),
            description: t("pricing.desc1"),
            popular: false,
            features: [
                t("pricing.feat_lp1"), t("pricing.feat_lp2"), t("pricing.feat_lp3"),
                t("pricing.feat_lp4"), t("pricing.feat_lp5"), t("pricing.feat_lp6"), t("pricing.feat_lp7"),
            ],
        },
        {
            name: t("services.type2"),
            price: "1.5jt",
            period: t("pricing.period"),
            description: t("pricing.desc2"),
            popular: true,
            features: [
                t("pricing.feat_cp1"), t("pricing.feat_cp2"), t("pricing.feat_cp3"), t("pricing.feat_cp4"),
                t("pricing.feat_cp5"), t("pricing.feat_cp6"), t("pricing.feat_cp7"), t("pricing.feat_cp8"),
            ],
        },
        {
            name: t("services.type3"),
            price: "2.5jt",
            period: t("pricing.period"),
            description: t("pricing.desc3"),
            popular: false,
            features: [
                t("pricing.feat_to1"), t("pricing.feat_to2"), t("pricing.feat_to3"),
                t("pricing.feat_to4"), t("pricing.feat_to5"), t("pricing.feat_to6"), t("pricing.feat_to7"),
            ],
        },
    ];

    return (
        <section id="pricing" className="min-h-screen flex items-center bg-[#F5F5F7] border-t border-black/[0.06]">
            <div ref={ref} className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-600 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                        {t("pricing.label")}
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#01040D] tracking-[-0.03em]">
                        {t("pricing.title1")}{" "}
                        <span className="text-accent-600 italic font-light">{t("pricing.title2")}</span>
                    </h2>
                    <p className="mt-5 text-[#01040D]/50 text-base sm:text-lg max-w-xl mx-auto">
                        {t("pricing.desc")}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-5 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.07 * i }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="relative group"
                        >
                            {plan.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                                    <div className="flex items-center gap-1.5 px-3.5 py-1 bg-accent-500 text-white text-[9px] font-mono font-bold uppercase tracking-[0.2em] rounded-full">
                                        <Star size={9} fill="currentColor" />
                                        {t("pricing.popular")}
                                    </div>
                                </div>
                            )}

                            <div className={`relative p-9 rounded-2xl border transition-all duration-300 ${plan.popular
                                ? "bg-[#01040D] border-white/10"
                                : "bg-white border-black/[0.08] hover:border-accent-200 group-hover:shadow-xl"
                                }`}>
                                <h3 className={`text-xl font-bold tracking-tight mb-2 ${plan.popular ? "text-white" : "text-[#01040D]"}`}>{plan.name}</h3>
                                <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? "text-white/60" : "text-slate-500"}`}>{plan.description}</p>

                                <div className="mb-8">
                                    <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.2em] ${plan.popular ? "text-white/40" : "text-slate-400"}`}>
                                        {t("pricing.starting")}
                                    </span>
                                    <div className="flex items-baseline gap-1 mt-1">
                                        <span className={`text-4xl font-bold tracking-tighter ${plan.popular ? "text-white" : "text-[#01040D]"}`}>Rp {plan.price}</span>
                                        <span className={`text-[10px] font-mono ${plan.popular ? "text-white/40" : "text-slate-400"}`}>/{plan.period}</span>
                                    </div>
                                </div>

                                <div className="space-y-3.5 mb-9">
                                    {plan.features.map((feature, j) => (
                                        <div key={j} className={`flex items-center gap-3 text-sm ${plan.popular ? "text-white/80" : "text-slate-600"}`}>
                                            <Check size={14} className="text-accent-500 flex-shrink-0 stroke-[2.5]" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={WA_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl active:scale-[0.98] transition-all duration-300 ${plan.popular
                                        ? "bg-accent-500 text-white hover:bg-accent-600"
                                        : "bg-[#01040D] text-white hover:bg-slate-800"
                                        }`}
                                >
                                    {t("pricing.cta")}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
