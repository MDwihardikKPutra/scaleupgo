"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Rotiseri Pagi",
        category: "Toko Online",
        description:
            "Website toko online untuk bakery & cafe dengan fitur katalog produk, pemesanan otomatis, dan integrasi WhatsApp.",
        image: "/portfolio-bakery.png",
        tags: ["E-Commerce", "WhatsApp Order", "Katalog"],
    },
    {
        title: "PT Bangun Karya",
        category: "Company Profile",
        description:
            "Website company profile profesional untuk perusahaan konstruksi dengan halaman proyek, layanan, dan formulir kontak.",
        image: "/portfolio-construction.png",
        tags: ["Multi-Page", "SEO", "Contact Form"],
    },
    {
        title: "Lumina Beauty",
        category: "Landing Page",
        description:
            "Landing page high-converting untuk brand skincare dengan desain elegan, testimoni, dan CTA pembelian.",
        image: "/portfolio-beauty.png",
        tags: ["Conversion", "Responsive", "Branding"],
    },
];

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="portfolio" className="py-20 sm:py-28 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                        Karya Terbaru{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            Kami
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
                        Beberapa proyek yang sudah kami selesaikan untuk klien dari berbagai industri.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 * i }}
                            className="group cursor-pointer"
                        >
                            <div className="relative rounded-3xl overflow-hidden border border-navy-100 hover:border-navy-200 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 bg-white">
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">
                                            <ExternalLink size={16} className="text-navy-900" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-accent-50 text-accent-600 text-xs font-semibold rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-navy-500 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="px-2.5 py-1 bg-navy-50 text-navy-500 text-xs font-medium rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
