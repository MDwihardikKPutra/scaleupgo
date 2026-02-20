"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="relative overflow-hidden">
            {/* CTA Section */}
            <div className="bg-dark-bg py-24 sm:py-32 relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[120px]" />
                </div>

                <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <MessageCircle size={14} className="animate-bounce" />
                            Gratis Konsultasi
                        </div>

                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
                            Siap Bawa Bisnis Anda{" "}
                            <span className="text-accent-400">ke Level Selanjutnya?</span>
                        </h2>

                        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed px-4">
                            Konsultasikan kebutuhan website Anda secara gratis. Kami akan bantu carikan solusi digital terbaik untuk Scale Up bisnis Anda.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-4">
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20ScaleUp.Go,%20saya%20ingin%20buat%20website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-950 font-black text-sm rounded-2xl hover:bg-accent-50 hover:shadow-2xl hover:shadow-black/20 transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                Chat via WhatsApp
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold text-sm rounded-2xl border border-white/20 backdrop-blur-md hover:bg-white/20 transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                Lihat Paket Harga
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Standardized */}
            <footer className="bg-white border-t border-light-border py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <div className="flex items-center gap-1.5">
                                <span className="text-2xl text-navy-900 font-bold" style={{ fontFamily: "var(--font-changa-one)" }}>
                                    ScaleUp
                                </span>
                                <span className="text-2xl text-accent-500 font-bold" style={{ fontFamily: "var(--font-changa-one)" }}>
                                    .Go
                                </span>
                            </div>
                            <p className="text-navy-400 text-xs font-bold tracking-tight text-center md:text-left">
                                Scale Up Your Business, Go Digital.
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-6">
                            <div className="flex items-center gap-8">
                                {["Services", "Portfolio", "Pricing", "FAQ"].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-600 hover:text-accent-500 transition-colors"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                            <p className="text-navy-300 text-[9px] font-black tracking-[0.3em] uppercase mt-2">
                                © 2026 ScaleUp.Go — All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}
