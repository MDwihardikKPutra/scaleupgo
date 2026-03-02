"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
    const { t } = useLanguage();

    const faqs = [
        { question: t("faq.q1"), answer: t("faq.a1") },
        { question: t("faq.q2"), answer: t("faq.a2") },
        { question: t("faq.q3"), answer: t("faq.a3") },
        { question: t("faq.q4"), answer: t("faq.a4") },
        { question: t("faq.q5"), answer: t("faq.a5") },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

    return (
        <section id="faq" className="py-20 bg-white border-t border-black/[0.06]">
            <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease }}
                    className="text-center mb-12"
                >
                    <span className="text-accent-600 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                        {t("faq.label")}
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#01040D] tracking-[-0.03em] whitespace-nowrap">
                        {t("faq.title1")}{" "}
                        <span className="text-accent-600 italic font-light">{t("faq.title2")}</span>
                    </h2>
                    <p className="mt-4 text-[#01040D]/50 text-base max-w-xl mx-auto">
                        {t("faq.desc")}
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease, delay: 0.06 * i }}
                            className={`rounded-xl border overflow-hidden transition-colors duration-300 ${openIndex === i
                                ? "border-accent-200 bg-accent-50/30"
                                : "border-black/[0.07] bg-white hover:border-black/[0.12]"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className={`text-sm font-semibold transition-colors ${openIndex === i ? "text-accent-600" : "text-[#01040D]"}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${openIndex === i ? "bg-accent-500 text-white rotate-180" : "bg-black/[0.04] text-slate-400"}`}>
                                    <ChevronDown size={15} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease }}
                                    >
                                        <div className="px-6 pb-5">
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
