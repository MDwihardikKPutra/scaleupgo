"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/portfolio";
import { EASE, VIEWPORT } from "@/lib/motion";

const DISPLAYED_PROJECTS = 3;

export default function Portfolio() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, VIEWPORT);

    return (
        <section id="portfolio" className="min-h-screen flex items-center bg-white border-t border-black/[0.06]">
            <div ref={ref} className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-600 text-[11px] font-mono font-bold uppercase tracking-[0.3em]">
                        {t("portfolio.label")}
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#01040D] tracking-[-0.03em]">
                        {t("portfolio.title")}
                    </h2>
                    <p className="mt-5 text-[#01040D]/50 text-lg max-w-xl mx-auto">
                        {t("portfolio.desc")}
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-5">
                    {projects.slice(0, DISPLAYED_PROJECTS).map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.07 * i }}
                            className="group"
                        >
                            <a
                                href={project.href}
                                target={project.href !== "#" ? "_blank" : undefined}
                                rel={project.href !== "#" ? "noopener noreferrer" : undefined}
                                className="block"
                            >
                                <div className="rounded-2xl overflow-hidden border border-black/[0.07] hover:border-black/[0.14] transition-colors duration-500 bg-white">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden bg-slate-50">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imageClassName || "object-top"}`}
                                        />
                                        {project.isPlaceholder && (
                                            <div className="absolute top-4 right-4 z-30">
                                                <div className="relative flex items-center justify-center">
                                                    <div className="absolute w-3 h-3 bg-red-500 rounded-full opacity-75 animate-ping" />
                                                    <div className="relative w-2.5 h-2.5 bg-red-500 rounded-full" />
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                                            <div className="w-9 h-9 bg-white/90 backdrop-blur-sm border border-black/[0.08] rounded-xl flex items-center justify-center">
                                                <ExternalLink size={14} className="text-slate-700" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7">
                                        <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                                            {project.category}
                                        </span>
                                        <h3 className="mt-2 text-lg font-bold text-[#01040D] tracking-tight group-hover:text-accent-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-slate-500 text-sm leading-relaxed line-clamp-2">
                                            {t(project.descriptionKey)}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {project.tagKeys.map((tagKey, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-0.5 bg-slate-50 rounded-md text-[9px] font-mono font-bold uppercase tracking-[0.1em] text-slate-400"
                                                >
                                                    {t(tagKey)}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
