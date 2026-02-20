"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
                    <a href="#" className="flex items-center group">
                        <span className={`text-xl lg:text-2xl tracking-tighter transition-colors duration-500 ${scrolled ? "text-navy-900" : "text-white"}`} style={{ fontFamily: "var(--font-changa-one)" }}>
                            ScaleUp
                        </span>
                        <span className={`text-xl lg:text-2xl transition-colors duration-500 ${scrolled ? "text-accent-500" : "text-accent-400"}`} style={{ fontFamily: "var(--font-changa-one)" }}>
                            .Go
                        </span>
                    </a>

                    {/* Desktop Nav - Balanced Tracking */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 relative group ${scrolled ? "text-navy-800 hover:text-accent-500" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full`} />
                            </a>
                        ))}
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`ml-2 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transform hover:-translate-y-0.5 transition-all duration-300 ${scrolled
                                    ? "bg-navy-900 text-white hover:bg-navy-950 hover:shadow-xl hover:shadow-navy-900/20"
                                    : "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/25"
                                }`}
                        >
                            Contact Us
                        </a>
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
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-4 px-5 text-[10px] font-black uppercase tracking-[0.2em] text-navy-800 hover:text-accent-600 hover:bg-accent-50 rounded-2xl transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4.5 bg-navy-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl text-center hover:bg-navy-950 active:scale-[0.98] transition-all duration-200"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
