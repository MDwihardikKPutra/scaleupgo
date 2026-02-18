"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <>
            {/* CTA Section */}
            <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-800/50 rounded-full blur-3xl" />
                </div>

                <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                            className="w-16 h-16 bg-accent-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        >
                            <MessageCircle className="text-accent-400" size={28} />
                        </motion.div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            Siap Scale Up
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                                Bisnis Anda?
                            </span>
                        </h2>
                        <p className="mt-4 text-lg text-navy-300 max-w-xl mx-auto">
                            Konsultasikan kebutuhan website Anda secara gratis. Tim kami siap membantu Anda go digital.
                        </p>

                        <motion.a
                            href="https://wa.me/6281234567890?text=Halo%20ScaleUp.Go,%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="inline-flex items-center gap-3 mt-8 px-10 py-5 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#20BD5A] hover:shadow-xl hover:shadow-[#25D366]/30 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hubungi Kami via WhatsApp
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-navy-950 py-8 border-t border-navy-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Image
                            src="/ScaleUp.GO.png"
                            alt="ScaleUp.GO"
                            width={100}
                            height={25}
                            className="h-5 w-auto brightness-0 invert"
                        />
                        <p className="text-navy-400 text-sm">
                            &copy; 2026 ScaleUp.Go. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#services" className="text-sm text-navy-400 hover:text-white transition-colors">
                                Services
                            </a>
                            <a href="#pricing" className="text-sm text-navy-400 hover:text-white transition-colors">
                                Pricing
                            </a>
                            <a href="#faq" className="text-sm text-navy-400 hover:text-white transition-colors">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
