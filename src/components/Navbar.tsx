"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/portfolio";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isDarkHeroPage = pathname === "/" || pathname === "/market";

    const navLinks = [
        { label: t("nav.market"), href: "/market" },
        { label: t("nav.services"), href: isHome ? "#services" : "/#services" },
        { label: t("nav.portfolio"), href: isHome ? "#portfolio" : "/#portfolio" },
        { label: t("nav.pricing"), href: isHome ? "#pricing" : "/#pricing" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-light-bg/85 backdrop-blur-xl shadow-lg shadow-navy-900/5 border-b border-light-border"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo Standardized Size */}
                    <Link href="/" className="flex items-center group">
                        <span className={`text-xl lg:text-2xl tracking-tighter transition-colors duration-500 ${scrolled || !isDarkHeroPage ? "text-navy-900" : "text-white"}`} style={{ fontFamily: "var(--font-changa-one)" }}>
                            ScaleUp
                        </span>
                        <span className={`text-xl lg:text-2xl transition-colors duration-500 ${scrolled || !isDarkHeroPage ? "text-accent-500" : "text-accent-400"}`} style={{ fontFamily: "var(--font-changa-one)" }}>
                            .Go
                        </span>
                    </Link>

                    {/* Desktop Nav - Balanced Tracking */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group flex items-center gap-2 py-2 ${scrolled || !isDarkHeroPage ? "text-navy-800 hover:text-accent-500" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.href === "/market" && <ShoppingBag size={12} className="transition-transform duration-300 group-hover:scale-110" />}
                                {link.label}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent-500 transition-all duration-500 ease-out ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                            </Link>
                        ))}
                        <div className="flex items-center gap-3 ml-2">
                            <button
                                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 text-[9px] font-black uppercase tracking-widest ${scrolled
                                    ? "border-navy-100 text-navy-600 hover:bg-navy-50"
                                    : "border-white/20 text-white hover:bg-white/10"
                                    }`}
                            >
                                <Languages size={14} />
                                {language === "id" ? "ID" : "EN"}
                            </button>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-sm ${scrolled
                                    ? "bg-navy-900 text-white hover:bg-navy-950 hover:shadow-xl hover:shadow-navy-900/20"
                                    : "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/25"
                                    }`}
                            >
                                {t("nav.contact")}
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${scrolled ? "text-navy-900 hover:bg-navy-50" : "text-white hover:bg-white/10"}`}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Refined */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden bg-light-bg/98 backdrop-blur-2xl border-t border-light-border overflow-hidden mx-4 my-2 rounded-[2rem] shadow-2xl shadow-navy-900/10"
                    >
                        <div className="px-6 py-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-3 py-4 px-5 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all duration-200 ${pathname === link.href ? "bg-accent-50 text-accent-600" : "text-navy-800 hover:bg-navy-50"
                                        }`}
                                >
                                    {link.href === "/market" && <ShoppingBag size={14} className="text-accent-500" />}
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-3">
                                <button
                                    onClick={() => {
                                        setLanguage(language === "id" ? "en" : "id");
                                        setMobileOpen(false);
                                    }}
                                    className="flex items-center justify-center gap-3 w-full py-4.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl border border-accent-100"
                                >
                                    <Languages size={16} />
                                    Switch to {language === "id" ? "English" : "Indonesia"}
                                </button>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4.5 bg-navy-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl text-center hover:bg-navy-950 active:scale-[0.98] transition-all duration-200"
                                >
                                    {t("nav.contact")}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
