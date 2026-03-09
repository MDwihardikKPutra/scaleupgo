"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EASE, VIEWPORT } from "@/lib/motion";

export default function FAQ() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, VIEWPORT);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { question: t("faq.q1"), answer: t("faq.a1") },
        { question: t("faq.q2"), answer: t("faq.a2") },
        { question: t("faq.q3"), answer: t("faq.a3") },
        { question: t("faq.q4"), answer: t("faq.a4") },
        { question: t("faq.q5"), answer: t("faq.a5") },
    ];

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-20 bg-white border-t border-black/[0.06]">
            <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="text-center mb-12"
                >
                    <span className="text-accent-600 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                        {t("faq.label")}
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#01040D] tracking-[-0.03em]">
                        {t("faq.title1")}{" "}
                        <span className="text-accent-600 italic font-light">{t("faq.title2")}</span>
                    </h2>
                    <p className="mt-4 text-[#01040D]/50 text-base sm:text-lg max-w-xl mx-auto">
                        {t("faq.desc")}
                    </p>
                </motion.div>

                {/* Accordion */}
                <div className="space-y-2">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 8 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, ease: EASE, delay: 0.06 * i }}
                                className={`rounded-xl border overflow-hidden transition-colors duration-300 ${isOpen
                                    ? "border-accent-200 bg-accent-50/30"
                                    : "border-black/[0.07] bg-white hover:border-black/[0.12]"
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className={`text-sm font-semibold transition-colors ${isOpen ? "text-accent-600" : "text-[#01040D]"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${isOpen ? "bg-accent-500 text-white rotate-180" : "bg-black/[0.04] text-slate-400"
                                        }`}>
                                        <ChevronDown size={15} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: EASE }}
                                        >
                                            <div className="px-6 pb-5">
                                                <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
