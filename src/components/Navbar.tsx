"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isDarkPage = pathname === "/" || pathname === "/market";

    const navLinks = [
        { label: t("nav.why_digital"), href: isHome ? "#why-digital" : "/#why-digital", icon: null },
        { label: t("nav.services"), href: isHome ? "#services" : "/#services", icon: null },
        { label: t("nav.portfolio"), href: isHome ? "#portfolio" : "/#portfolio", icon: null },
        { label: t("nav.pricing"), href: isHome ? "#pricing" : "/#pricing", icon: null },
        { label: t("nav.market"), href: "/market", icon: ShoppingBag },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // On dark pages, always use white text. On scroll, use dark glass.
    const isDark = isDarkPage;

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "fixed" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[#01040D]/90 backdrop-blur-xl border-b border-white/[0.06]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 lg:h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span
                            className={`text-lg lg:text-xl tracking-tighter transition-colors duration-400 ${isDark ? "text-white" : "text-[#01040D]"}`}
                            style={{ fontFamily: "var(--font-changa-one)" }}
                        >
                            ScaleUp
                        </span>
                        <span
                            className="text-lg lg:text-xl text-accent-400 transition-colors duration-400"
                            style={{ fontFamily: "var(--font-changa-one)" }}
                        >
                            .Go
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 flex items-center gap-1.5 ${isDark
                                    ? "text-white/60 hover:text-white"
                                    : "text-[#01040D]/60 hover:text-[#01040D]"
                                    } ${pathname === link.href ? (isDark ? "text-white" : "text-[#01040D]") : ""}`}
                            >
                                {link.icon && <link.icon size={11} />}
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2 ml-2">
                            <button
                                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 border ${isDark
                                    ? "border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                                    : "border-black/[0.08] text-[#01040D]/50 hover:text-[#01040D] hover:bg-black/[0.04]"
                                    }`}
                            >
                                <Languages size={12} />
                                {language === "id" ? "ID" : "EN"}
                            </button>
                            <a
                                href="https://wa.me/628133341706"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-accent-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-accent-600 active:scale-[0.97] transition-all duration-300"
                            >
                                {t("nav.contact")}
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isDark ? "text-white hover:bg-white/[0.08]" : "text-[#01040D] hover:bg-black/[0.05]"}`}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden bg-[#01040D] border-t border-white/[0.06] overflow-hidden"
                    >
                        <div className="px-6 py-5 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-2.5 py-3 px-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-colors duration-200 ${pathname === link.href
                                        ? "bg-white/[0.08] text-white"
                                        : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                                        }`}
                                >
                                    {link.icon && <link.icon size={13} className="text-accent-400" />}
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-3 space-y-2">
                                <button
                                    onClick={() => { setLanguage(language === "id" ? "en" : "id"); setMobileOpen(false); }}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/[0.05] text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl border border-white/[0.08]"
                                >
                                    <Languages size={14} />
                                    Switch to {language === "id" ? "English" : "Indonesia"}
                                </button>
                                <a
                                    href="https://wa.me/628133341706"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-accent-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl text-center hover:bg-accent-600 active:scale-[0.98] transition-all duration-200"
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
