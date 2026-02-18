"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Berapa lama pengerjaannya?",
        answer:
            "Untuk Landing Page biasanya 3-5 hari kerja, Company Profile 7-10 hari kerja, dan Toko Online 14-21 hari kerja. Timeline bisa lebih cepat atau lebih lama tergantung kompleksitas dan kecepatan feedback dari Anda.",
    },
    {
        question: "Apakah dapat domain .com?",
        answer:
            "Ya! Semua paket sudah termasuk gratis domain .com untuk 1 tahun pertama. Anda bebas memilih nama domain yang tersedia sesuai nama bisnis Anda.",
    },
    {
        question: "Saya gaptek, apakah dibantu?",
        answer:
            "Tentu saja! Konsep kami adalah Terima Beres. Anda hanya perlu menyampaikan kebutuhan dan konten, kami yang mengerjakan semuanya. Setelah website jadi, kami juga sediakan panduan penggunaan dan support.",
    },
    {
        question: "Apakah bisa request desain custom?",
        answer:
            "Bisa banget! Kami akan membuatkan desain sesuai identitas brand Anda. Warna, layout, font, semuanya bisa disesuaikan.",
    },
    {
        question: "Bagaimana sistem pembayarannya?",
        answer:
            "Pembayaran dilakukan dengan sistem 50% di awal sebagai DP, dan 50% sisanya setelah website selesai dan Anda puas dengan hasilnya.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="faq" className="py-20 sm:py-28 bg-[#F8F9FA] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/50 to-transparent" />
            <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-500 text-sm font-semibold rounded-full mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
                        Pertanyaan yang{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">
                            Sering Ditanyakan
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 ${openIndex === i
                                        ? "bg-white shadow-lg shadow-navy-900/5 border border-navy-100"
                                        : "bg-white/60 hover:bg-white border border-transparent hover:border-navy-100"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className={`text-base sm:text-lg font-semibold transition-colors ${openIndex === i ? "text-navy-900" : "text-navy-700"}`}>
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === i ? "bg-accent-400 text-white" : "bg-navy-100 text-navy-400"}`}
                                    >
                                        <ChevronDown size={16} />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-navy-500 leading-relaxed text-sm sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
