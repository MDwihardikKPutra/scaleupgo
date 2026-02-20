"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Oceanus Energy",
        category: "Company Profile",
        description:
            "Website company profile premium untuk perusahaan energi offshore dengan desain corporate modern, animasi dinamis, dan halaman sustainability.",
        image: "/oceanusenergy.png",
        tags: ["Corporate", "Animasi", "Multi-Page"],
        href: "https://oceanusenergy.vercel.app/",
    },
    {
        title: "Rotiseri Pagi",
        category: "Toko Online",
        description:
            "Website toko online untuk bakery & cafe dengan fitur katalog produk, pemesanan otomatis, dan integrasi WhatsApp.",
        image: "/portfolio-bakery.png",
        tags: ["E-Commerce", "WhatsApp Order", "Katalog"],
        href: "#",
    },
    {
        title: "PT Bangun Karya",
        category: "Company Profile",
        description:
            "Website company profile profesional untuk perusahaan konstruksi dengan halaman proyek, layanan, dan formulir kontak.",
        image: "/portfolio-construction.png",
        tags: ["Multi-Page", "SEO", "Contact Form"],
        href: "#",
    },
];

export default function Portfolio() {
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
                        Showcase Karya
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4">
                        Karya Terbaru{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            Kami
                        </span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed">
                        Beberapa proyek pilihan yang sudah kami selesaikan dengan standar kualitas premium.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className="group cursor-pointer"
                        >
                            <a
                                href={project.href}
                                target={project.href !== "#" ? "_blank" : undefined}
                                rel={project.href !== "#" ? "noopener noreferrer" : undefined}
                                className="block"
                            >
                                <div className="relative rounded-[2rem] overflow-hidden border border-light-border hover:border-accent-500/30 hover:shadow-2xl hover:shadow-accent-500/5 transition-all duration-500 bg-white">
                                    {/* Image */}
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="w-9 h-9 bg-white shadow-xl rounded-full flex items-center justify-center">
                                                <ExternalLink size={14} className="text-navy-900" />
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
                                        <p className="text-navy-500 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[2.5rem] font-medium">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, j) => (
                                                <span
                                                    key={j}
                                                    className="px-2.5 py-1 bg-light-surface text-navy-500 text-[9px] font-bold rounded-md border border-light-border uppercase tracking-wide"
                                                >
                                                    {tag}
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
