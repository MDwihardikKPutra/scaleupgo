"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-20 lg:pt-0">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-0">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-accent-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                            Web Agency for Success
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            Scale Up
                            <br />
                            Your Business,
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                                Go Digital.
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl font-medium"
                        >
                            Ubah followers jadi pembeli. Stop cara manual, biarkan website
                            bekerja <span className="font-bold text-white/90 underline underline-offset-4 decoration-accent-500/50">24 jam</span> untuk bisnis Anda.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-10 flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20ScaleUp.Go,%20saya%20ingin%20buat%20website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-black text-sm rounded-2xl hover:bg-accent-600 hover:shadow-2xl hover:shadow-accent-500/30 transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                Buat Website Sekarang
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-bold text-sm rounded-2xl border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
                            >
                                Lihat Layanan
                            </a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-12 flex flex-wrap items-center gap-8"
                        >
                            <div className="flex items-center gap-2.5 group">
                                <div className="w-9 h-9 rounded-xl bg-accent-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={16} className="text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xs uppercase tracking-wider">50+ Website</p>
                                    <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase">Selesai Dibuat</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 group">
                                <div className="w-9 h-9 rounded-xl bg-accent-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={16} className="text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xs uppercase tracking-wider">Trusted Agency</p>
                                    <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase">Client Nasional</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Laptop Frame */}
                                <div className="w-[480px] h-[300px] bg-dark-surface rounded-3xl p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10">
                                    <div className="w-full h-full bg-dark-card rounded-2xl overflow-hidden relative border border-white/5">
                                        <div className="flex items-center gap-1.5 px-4 py-2 bg-dark-bg/50 backdrop-blur-md border-b border-white/5">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-red-400/40" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
                                                <div className="w-2 h-2 rounded-full bg-green-400/40" />
                                            </div>
                                            <div className="ml-3 flex-1 h-5 bg-dark-surface/50 border border-white/5 rounded-md flex items-center px-2">
                                                <span className="text-[9px] text-white/20 font-medium tracking-tight">www.scaleup-go.com</span>
                                            </div>
                                        </div>
                                        <div className="p-5 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="h-3 w-20 bg-white/5 rounded-full" />
                                                <div className="flex gap-2">
                                                    <div className="h-2 w-8 bg-white/5 rounded-full" />
                                                    <div className="h-2 w-8 bg-white/5 rounded-full" />
                                                </div>
                                            </div>
                                            <div className="h-28 bg-accent-500/5 rounded-xl border border-accent-500/10 flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-7 h-7 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-2">
                                                        <Monitor size={12} className="text-accent-400" />
                                                    </div>
                                                    <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">Scale Up</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="h-16 bg-white/5 rounded-xl" />
                                                <div className="h-16 bg-white/5 rounded-xl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Base */}
                                <div className="w-[520px] h-4 bg-dark-surface/80 rounded-b-2xl mx-auto -mt-0.5 border-x border-b border-white/10 blur-[0.5px]" />
                            </motion.div>

                            {/* Phone Mockup */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                className="absolute -bottom-10 -right-8 hidden xl:block"
                            >
                                <div className="w-[120px] h-[220px] bg-dark-surface rounded-[2rem] p-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] border border-white/10">
                                    <div className="w-full h-full bg-dark-card rounded-[1.75rem] overflow-hidden relative border border-white/5">
                                        <div className="flex justify-center pt-2">
                                            <div className="w-12 h-1.5 bg-dark-bg rounded-full" />
                                        </div>
                                        <div className="p-3 space-y-3 mt-1">
                                            <div className="h-16 bg-accent-500/5 rounded-lg border border-accent-500/10" />
                                            <div className="space-y-1.5">
                                                <div className="h-6 bg-white/5 rounded-md" />
                                                <div className="h-6 bg-white/5 rounded-md" />
                                                <div className="h-5 bg-accent-500/10 rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-8 -left-8 px-5 py-2.5 bg-dark-card/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-green-500/10 rounded-full flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-wider">New Order</p>
                                        <p className="text-[9px] font-bold text-white/40 tracking-tight">Dashboard</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-4 -left-12 px-5 py-2.5 bg-dark-card/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-accent-500/10 rounded-full flex items-center justify-center">
                                        <span className="text-accent-400 text-[10px] font-black tracking-tighter">24H</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-wider">Live Site</p>
                                        <p className="text-[9px] font-bold text-white/40 tracking-tight">Online</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
