"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/portfolio";

export default function Portfolio() {
    const { t } = useLanguage();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="portfolio" className="py-20 sm:py-28 bg-light-surface relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Standardized */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                        {t("portfolio.label")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4">
                        {t("portfolio.title")}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed">
                        {t("portfolio.desc")}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                    {projects.slice(0, 3).map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                        >
                            <a
                                href={project.href}
                                target={project.href !== "#" ? "_blank" : undefined}
                                rel={project.href !== "#" ? "noopener noreferrer" : undefined}
                                className="block"
                            >
                                <div className="relative rounded-[2rem] overflow-hidden border border-light-border group-hover:border-accent-500/30 group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.08)] transition-all duration-500 bg-white">
                                    {/* Image */}
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imageClassName || "object-top"
                                                }`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {project.isPlaceholder && (
                                            <div className="absolute top-6 right-6 z-30">
                                                <div className="relative flex items-center justify-center">
                                                    <div className="absolute w-3 h-3 bg-red-500 rounded-full opacity-75 animate-ping" />
                                                    <div className="relative w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                                </div>
                                            </div>
                                        )}

                                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="w-11 h-11 bg-white/20 backdrop-blur-md border border-white/20 shadow-xl rounded-full flex items-center justify-center">
                                                <ExternalLink size={18} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-7">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-accent-50 text-accent-600 text-[9px] font-black uppercase tracking-wider rounded-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-navy-500 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[2.5rem] font-medium group-hover:text-navy-700 transition-colors">
                                            {t(project.descriptionKey)}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tagKeys.map((tagKey, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black uppercase tracking-widest text-white/90"
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
