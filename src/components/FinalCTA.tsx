"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCTA() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="relative overflow-hidden">
            {/* CTA Section */}
            <div className="bg-dark-bg py-24 sm:py-32 relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[120px]" />
                </div>

                <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <MessageCircle size={14} className="animate-bounce" />
                            {t("cta.label")}
                        </div>

                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
                            {t("cta.title1")}{" "}
                            <span className="text-accent-400">{t("cta.title2")}</span>
                        </h2>

                        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed px-4">
                            {t("cta.desc")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-4">
                            <a
                                href={`https://wa.me/6281234567890?text=${encodeURIComponent(t("cta.wa_message"))}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-950 font-black text-sm rounded-2xl hover:bg-accent-50 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                {t("cta.wa")}
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold text-sm rounded-2xl border border-white/20 backdrop-blur-md hover:bg-white/20 transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                {t("cta.pricing")}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Standardized */}
            <footer className="bg-dark-bg border-t border-white/10 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <div className="flex items-center gap-1.5">
                                <span className="text-2xl text-white font-bold" style={{ fontFamily: "var(--font-changa-one)" }}>
                                    ScaleUp
                                </span>
                                <span className="text-2xl text-accent-500 font-bold" style={{ fontFamily: "var(--font-changa-one)" }}>
                                    .Go
                                </span>
                            </div>
                            <p className="text-white/40 text-xs font-bold tracking-tight text-center md:text-left">
                                {t("footer.tagline")}
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-6">
                            <div className="flex items-center gap-8">
                                {[
                                    { label: t("nav.services"), id: "services" },
                                    { label: t("nav.portfolio"), id: "portfolio" },
                                    { label: t("nav.pricing"), id: "pricing" },
                                    { label: t("nav.faq"), id: "faq" },
                                ].map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-accent-400 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                            <p className="text-white/20 text-[9px] font-black tracking-[0.3em] uppercase mt-2">
                                {t("footer.rights")}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
