"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-navy-50/30 to-white pt-20">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-400/5 to-navy-600/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 border border-accent-200 rounded-full text-accent-600 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                            Web Development Agency for UMKM
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy-900 leading-[1.1] tracking-tight">
                            Scale Up
                            <br />
                            Your Business,
                            <br />
                            <span className="relative">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                                    Go Digital.
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="absolute bottom-2 left-0 h-3 bg-accent-400/15 -z-0"
                                />
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-6 text-lg sm:text-xl text-navy-600 leading-relaxed max-w-lg"
                        >
                            Ubah followers jadi pembeli. Stop cara manual, biarkan website
                            bekerja <span className="font-semibold text-navy-800">24 jam</span> untuk bisnis Anda.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="https://wa.me/6281234567890?text=Halo%20ScaleUp.Go,%20saya%20ingin%20buat%20website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-400 text-white font-bold text-base rounded-full hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-400/25 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Buat Website Sekarang
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 font-semibold text-base rounded-full border-2 border-navy-200 hover:border-navy-900 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Lihat Layanan
                            </a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="mt-10 flex items-center gap-6 text-sm text-navy-500"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                50+ Website Dibuat
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                UMKM Trusted
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Laptop Mockup */}
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Laptop Frame */}
                                <div className="w-[480px] h-[300px] bg-navy-900 rounded-2xl p-3 shadow-2xl shadow-navy-900/30">
                                    <div className="w-full h-full bg-gradient-to-br from-white to-navy-50 rounded-lg overflow-hidden relative">
                                        {/* Browser Chrome */}
                                        <div className="flex items-center gap-1.5 px-3 py-2 bg-navy-100/60">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                            <div className="ml-3 flex-1 h-5 bg-white rounded-md flex items-center px-2">
                                                <span className="text-[10px] text-navy-400">www.tokosaya.com</span>
                                            </div>
                                        </div>
                                        {/* Mock Content */}
                                        <div className="p-4 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <Monitor size={14} className="text-accent-400" />
                                                <div className="h-3 w-24 bg-navy-200 rounded" />
                                            </div>
                                            <div className="h-24 bg-gradient-to-r from-accent-400/20 to-navy-200/30 rounded-lg flex items-center justify-center">
                                                <span className="text-navy-400 text-xs font-medium">Hero Section</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="h-14 bg-navy-100 rounded-lg" />
                                                <div className="h-14 bg-navy-100 rounded-lg" />
                                                <div className="h-14 bg-navy-100 rounded-lg" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="h-8 bg-accent-400/20 rounded-lg" />
                                                <div className="h-8 bg-navy-100 rounded-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Laptop Base */}
                                <div className="w-[520px] h-4 bg-navy-800 rounded-b-xl mx-auto -mt-0.5 relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-navy-700 rounded-b" />
                                </div>
                            </motion.div>

                            {/* Phone Mockup */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-8 -right-8"
                            >
                                <div className="w-[120px] h-[220px] bg-navy-900 rounded-[20px] p-1.5 shadow-2xl shadow-navy-900/40">
                                    <div className="w-full h-full bg-gradient-to-br from-white to-navy-50 rounded-[14px] overflow-hidden relative">
                                        {/* Phone Notch */}
                                        <div className="flex justify-center pt-1.5">
                                            <div className="w-12 h-1.5 bg-navy-200 rounded-full" />
                                        </div>
                                        <div className="p-2 space-y-2 mt-1">
                                            <div className="flex items-center gap-1">
                                                <Smartphone size={8} className="text-accent-400" />
                                                <div className="h-2 w-10 bg-navy-200 rounded" />
                                            </div>
                                            <div className="h-12 bg-gradient-to-r from-accent-400/20 to-navy-200/30 rounded-md" />
                                            <div className="space-y-1.5">
                                                <div className="h-6 bg-navy-100 rounded-md" />
                                                <div className="h-6 bg-navy-100 rounded-md" />
                                                <div className="h-5 bg-accent-400/20 rounded-md" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -left-6 px-4 py-2 bg-white rounded-xl shadow-lg shadow-navy-900/10 border border-navy-100"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-navy-800">Order Baru!</p>
                                        <p className="text-[8px] text-navy-500">Rp 250.000</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-12 px-4 py-2 bg-white rounded-xl shadow-lg shadow-navy-900/10 border border-navy-100"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-accent-50 rounded-full flex items-center justify-center">
                                        <span className="text-accent-400 text-xs font-bold">24h</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-navy-800">Online 24 Jam</p>
                                        <p className="text-[8px] text-navy-500">Otomatis</p>
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
