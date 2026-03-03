"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import HeroCanvas from "@/components/HeroCanvas";
import AnimatedHeroText from "@/components/AnimatedHeroText";

// ─── Constants ────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as const;

const WA_LINK = "https://wa.me/6281234567890?text=Halo%20ScaleUp.Go,%20saya%20ingin%20buat%20website";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const trustItems = [
        { label: t("hero.trust1"), sub: t("hero.sub1") },
        { label: t("hero.trust2"), sub: t("hero.sub2") },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-[#01040D] overflow-hidden"
        >
            {/* Parallax background */}
            <motion.div className="absolute inset-0" style={{ y: canvasY, willChange: "transform" }}>
                <HeroCanvas />
            </motion.div>

            {/* Content */}
            <motion.div
                className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10 py-28"
                style={{ y: contentY, willChange: "transform" }}
            >
                <div className="flex flex-col items-center text-center">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                        <span className="text-accent-400 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                            {t("hero.agency")}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                        className="mb-8"
                    >
                        <AnimatedHeroText
                            as="h1"
                            text={`${t("hero.title1")} ${t("hero.title2")} ${t("hero.title3")}`}
                            highlightText={t("hero.title3")}
                            className="text-4xl sm:text-5xl lg:text-[68px] font-bold text-white tracking-[-0.04em] leading-tight"
                        />
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
                        className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
                    >
                        {t("hero.desc")}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white text-sm font-semibold rounded-xl hover:bg-accent-600 active:scale-[0.98] transition-all duration-300"
                        >
                            {t("hero.cta")}
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white/80 text-sm font-medium rounded-xl border border-white/10 hover:bg-white/[0.08] hover:border-white/15 active:scale-[0.98] transition-all duration-300"
                        >
                            {t("hero.secondary")}
                        </a>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-8"
                    >
                        {trustItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                                <div>
                                    <p className="text-white text-xs font-semibold">{item.label}</p>
                                    <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
