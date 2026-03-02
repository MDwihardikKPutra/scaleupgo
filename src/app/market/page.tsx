"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, ExternalLink, ShoppingCart, ArrowRight, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects, categories, Project } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA";

const ITEMS_PER_PAGE = 9;

export default function MarketPage() {
    const { t, language } = useLanguage();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects = useMemo(() => {
        // Reset to page 1 when filters change
        setCurrentPage(1);
        return projects.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tagKeys.some(tagKey => t(tagKey).toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = activeCategory === "All" || project.category === activeCategory;
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
        const contentSection = document.getElementById("market-content");
        if (contentSection) {
            const offset = contentSection.offsetTop - 100;
            window.scrollTo({ top: offset, behavior: "smooth" });
        }
    };

    const handleBuy = (project: Project) => {
        const message = language === "id"
            ? `Halo ScaleUp.Go, saya tertarik dengan template "${project.title}". Bisa info detailnya?`
            : `Hi ScaleUp.Go, I'm interested in the "${project.title}" template. Could you provide more details?`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-light-bg">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-navy-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 border border-accent-500/20"
                    >
                        {t("market.label")}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        ScaleUp <span className="text-accent-500">Market</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-navy-200 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {t("market.desc")}
                    </motion.p>
                </div>
            </section>

            {/* Market Content */}
            <section id="market-content" className="py-12 sm:py-20 -mt-8 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Controls */}
                    <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-[2.5rem] border border-light-border shadow-xl shadow-navy-100/20 mb-12">
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                            {/* Search */}
                            <div className="relative w-full lg:max-w-md">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-navy-400" size={18} />
                                <input
                                    type="text"
                                    placeholder={t("market.search")}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 pr-6 py-4 bg-light-surface border border-light-border rounded-2xl text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-accent-500/20 transition-all font-medium text-sm"
                                />
                            </div>

                            {/* Categories */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                            ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20"
                                            : "bg-light-surface text-navy-500 hover:bg-navy-50 border border-light-border"
                                            }`}
                                    >
                                        {cat === "All" ? t("market.filter_all") : cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {paginatedProjects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: (i % ITEMS_PER_PAGE) * 0.05 }}
                                    whileHover={{ y: -12 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-light-border group-hover:border-accent-500/30 shadow-sm group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.12)] transition-all duration-500 h-full flex flex-col relative">
                                        {/* Image Header */}
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className={`object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${project.imageClassName || "object-top"}`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                            <div className="absolute top-6 left-6">
                                                <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-navy-900 text-[10px] font-black uppercase tracking-wider rounded-xl shadow-lg border border-white/20">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {project.isPlaceholder && (
                                                <div className="absolute top-6 right-6 z-30">
                                                    <div className="relative flex items-center justify-center">
                                                        <div className="absolute w-3 h-3 bg-red-500 rounded-full opacity-75 animate-ping" />
                                                        <div className="relative w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                                <div className="text-white">
                                                    <p className="text-xl font-black tracking-tight drop-shadow-md">{project.price}</p>
                                                </div>
                                                <a
                                                    href={project.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-11 h-11 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-accent-500 transition-all duration-300 shadow-lg border border-white/10"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-grow flex flex-col">
                                            <h3 className="text-xl font-black text-navy-900 mb-3 group-hover:text-accent-600 transition-colors duration-300 tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-navy-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                                                {t(project.descriptionKey)}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tagKeys.map(tagKey => (
                                                    <span key={tagKey} className="px-3 py-1 bg-light-surface text-navy-500 text-[9px] font-bold rounded-lg border border-light-border uppercase tracking-wide group-hover:bg-accent-50 group-hover:text-accent-600 group-hover:border-accent-200 transition-all duration-300">
                                                        {t(tagKey)}
                                                    </span>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => handleBuy(project)}
                                                className="mt-auto w-full py-4.5 bg-navy-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-500 transform active:scale-[0.98] group/btn"
                                            >
                                                <ShoppingCart size={16} className="transition-transform group-hover/btn:scale-110" />
                                                {t("market.buy")}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center items-center gap-3">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-light-border text-navy-400 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent-500 hover:text-accent-500 transition-all duration-300 shadow-sm"
                            >
                                <ArrowRight className="rotate-180" size={20} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-12 h-12 rounded-2xl text-[10px] font-black tracking-wider transition-all duration-300 ${currentPage === page
                                        ? "bg-navy-900 text-white shadow-xl shadow-navy-900/20"
                                        : "bg-white text-navy-500 border border-light-border hover:border-accent-500 hover:text-accent-500 shadow-sm"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-light-border text-navy-400 disabled:opacity-30 disabled:cursor-not-allowed hover:border-accent-500 hover:text-accent-500 transition-all duration-300 shadow-sm"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 bg-light-surface rounded-full flex items-center justify-center mx-auto mb-6 text-navy-300">
                                <Search size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900">No templates found</h3>
                            <p className="text-navy-500 mt-2">Try adjusting your search or category filter.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            <FinalCTA />

            {/* Simple Footer */}
            <footer className="py-12 bg-white border-t border-light-border">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-sm font-medium text-navy-500 tracking-tight">
                        {t("footer.rights")}
                    </p>
                </div>
            </footer>
        </main>
    );
}
