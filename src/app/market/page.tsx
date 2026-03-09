"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, ExternalLink, ShoppingCart, ArrowRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects, categories, Project } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";

const ITEMS_PER_PAGE = 9;
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MarketPage() {
    const { t, language } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects = useMemo(() => {
        setCurrentPage(1);
        return projects.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tagKeys.some((tagKey) =>
                    t(tagKey).toLowerCase().includes(searchQuery.toLowerCase())
                );
            const matchesCategory =
                activeCategory === "All" || project.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory, t]);

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const el = document.getElementById("market-content");
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    };

    const handleBuy = (project: Project) => {
        const message =
            language === "id"
                ? `Halo ScaleUp.Go, saya tertarik dengan template "${project.title}". Bisa info detailnya?`
                : `Hi ScaleUp.Go, I'm interested in the "${project.title}" template. Could you provide more details?`;
        window.open(`https://wa.me/628133341706?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-[#01040D]">
            <Navbar />

            {/* ── Hero ── */}
            <section className="pt-32 pb-16 bg-[#01040D] text-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-accent-400 text-[10px] font-mono font-bold uppercase tracking-[0.3em]"
                    >
                        {t("market.label")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.1 }}
                        className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.04em]"
                    >
                        ScaleUp{" "}
                        <span className="text-accent-400 italic font-light">Market</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.2 }}
                        className="mt-4 text-white/40 text-base max-w-xl mx-auto leading-relaxed"
                    >
                        {t("market.desc")}
                    </motion.p>
                </div>
            </section>

            {/* ── Market Content ── */}
            <section
                id="market-content"
                className="py-14 bg-[#F5F5F7] border-t border-black/[0.06]"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Controls bar */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
                        {/* Search */}
                        <div className="relative w-full sm:max-w-xs">
                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                size={15}
                            />
                            <input
                                type="text"
                                placeholder={t("market.search")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/[0.08] rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all"
                            />
                        </div>

                        {/* Category pills */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-[9px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-200 ${activeCategory === cat
                                        ? "bg-[#01040D] text-white"
                                        : "bg-white text-slate-500 border border-black/[0.08] hover:border-black/20"
                                        }`}
                                >
                                    {cat === "All" ? t("market.filter_all") : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <AnimatePresence mode="popLayout">
                            {paginatedProjects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: (i % ITEMS_PER_PAGE) * 0.04,
                                    }}
                                    className="group flex flex-col bg-white rounded-2xl border border-black/[0.07] hover:border-black/[0.14] overflow-hidden transition-colors duration-400"
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden bg-slate-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imageClassName || "object-top"
                                                }`}
                                        />
                                        {/* Category badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-[8px] font-mono font-bold uppercase tracking-[0.2em] rounded-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                        {/* Price */}
                                        <div className="absolute bottom-3 left-3">
                                            <span className="text-white text-sm font-bold drop-shadow">
                                                {project.price}
                                            </span>
                                        </div>
                                        {/* Preview link */}
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm border border-black/[0.08] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                                        >
                                            <ExternalLink size={13} className="text-slate-600" />
                                        </a>
                                        {/* Placeholder indicator */}
                                        {project.isPlaceholder && (
                                            <div className="absolute top-3 right-3">
                                                <div className="relative flex items-center justify-center">
                                                    <div className="absolute w-3 h-3 bg-red-500 rounded-full opacity-75 animate-ping" />
                                                    <div className="relative w-2.5 h-2.5 bg-red-500 rounded-full" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-6">
                                        <h3 className="text-base font-bold text-[#01040D] tracking-tight mb-1.5 group-hover:text-accent-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                                            {t(project.descriptionKey)}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tagKeys.map((tagKey) => (
                                                <span
                                                    key={tagKey}
                                                    className="px-2 py-0.5 bg-slate-50 rounded-md text-[8px] font-mono font-bold uppercase tracking-[0.1em] text-slate-400 border border-black/[0.06]"
                                                >
                                                    {t(tagKey)}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buy button */}
                                        <button
                                            onClick={() => handleBuy(project)}
                                            className="mt-auto w-full py-3 bg-[#01040D] text-white text-[9px] font-mono font-bold uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 hover:bg-accent-600 active:scale-[0.98] transition-all duration-300"
                                        >
                                            <ShoppingCart size={13} />
                                            {t("market.buy")}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center items-center gap-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-black/[0.08] text-slate-400 disabled:opacity-30 hover:border-black/20 transition-all"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-10 h-10 rounded-xl text-xs font-bold transition-all duration-200 ${currentPage === page
                                        ? "bg-[#01040D] text-white"
                                        : "bg-white text-slate-500 border border-black/[0.08] hover:border-black/20"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-black/[0.08] text-slate-400 disabled:opacity-30 hover:border-black/20 transition-all"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    )}

                    {/* Empty state */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl border border-black/[0.07] flex items-center justify-center mx-auto mb-5">
                                <Search size={24} className="text-slate-300" />
                            </div>
                            <h3 className="text-base font-bold text-slate-700">No templates found</h3>
                            <p className="text-slate-400 text-sm mt-1">
                                Try adjusting your search or category filter.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
