"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "@/components/ui/MagneticButton";
import { EASE, VIEWPORT } from "@/lib/motion";

// ─── Constants ────────────────────────────────────────────────────────────────

const CURRENT_YEAR = new Date().getFullYear();

// ─── Component ────────────────────────────────────────────────────────────────

export default function FinalCTA() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, VIEWPORT);

    const footerLinks = [
        { label: t("nav.services"), id: "services" },
        { label: t("nav.portfolio"), id: "portfolio" },
        { label: t("nav.pricing"), id: "pricing" },
        { label: t("nav.faq"), id: "faq" },
    ];

    const waLink = `https://wa.me/628133341706?text=${encodeURIComponent(t("cta.wa_message"))}`;

    return (
        <section className="relative">
            {/* ── CTA ── */}
            <div className="py-20 bg-[#01040D] border-t border-white/[0.06]">
                <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: EASE }}
                    >
                        <span className="text-accent-400 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                            {t("cta.label")}
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight mb-5">
                            {t("cta.title1")}{" "}
                            <span className="text-accent-400 italic font-light">{t("cta.title2")}</span>
                        </h2>
                        <p className="text-white/40 text-base max-w-xl mx-auto mb-10">
                            {t("cta.desc")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <MagneticButton>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white text-[13px] font-bold uppercase tracking-[0.1em] rounded-xl hover:bg-accent-600 active:scale-[0.98] transition-all duration-300"
                                >
                                    <span className="absolute top-0 -left-[100%] w-1/2 h-full block transform -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                                    <span className="relative flex items-center gap-2">
                                        <MessageCircle size={18} />
                                        {t("cta.wa")}
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                            </MagneticButton>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.06] text-white/70 text-sm font-medium rounded-xl border border-white/[0.08] hover:bg-white/[0.09] hover:border-white/[0.14] active:scale-[0.98] transition-all duration-300"
                            >
                                {t("cta.pricing")}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Footer ── */}
            <footer className="bg-[#01040D] border-t border-white/[0.06] py-12">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-10">

                        {/* Brand */}
                        <div>
                            <Link href="/" className="flex items-center">
                                <span className="text-xl text-white tracking-tighter" style={{ fontFamily: "var(--font-changa-one)" }}>
                                    ScaleUp
                                </span>
                                <span className="text-xl text-accent-400" style={{ fontFamily: "var(--font-changa-one)" }}>
                                    .Go
                                </span>
                            </Link>
                            <p className="mt-3 text-white/25 text-xs leading-relaxed max-w-xs">
                                {t("footer.tagline")}
                            </p>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <h4 className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.3em] mb-4">Menu</h4>
                                <div className="flex flex-col gap-3">
                                    {footerLinks.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="text-xs text-white/40 hover:text-white/70 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.3em] mb-4">Legal</h4>
                                <div className="flex flex-col gap-3">
                                    <p className="text-xs text-white/25">© {CURRENT_YEAR} ScaleUp.Go</p>
                                    <p className="text-[10px] text-white/30 font-medium">scaleupgosolution@gmail.com</p>
                                    <p className="text-[9px] font-mono text-white/15 uppercase tracking-widest">All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
