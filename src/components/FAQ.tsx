"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
    const { t } = useLanguage();

    const faqs = [
        {
            question: t("faq.q1"),
            answer: t("faq.a1"),
        },
        {
            question: t("faq.q2"),
            answer: t("faq.a2"),
        },
        {
            question: t("faq.q3"),
            answer: t("faq.a3"),
        },
        {
            question: t("faq.q4"),
            answer: t("faq.a4"),
        },
        {
            question: t("faq.q5"),
            answer: t("faq.a5"),
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 sm:py-28 bg-light-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-border to-transparent" />

            <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Standardized */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                        {t("faq.label")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tighter mb-4">
                        {t("faq.title1")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                            {t("faq.title2")}
                        </span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base font-medium text-navy-500 max-w-2xl mx-auto leading-relaxed text-center">
                        {t("faq.desc")}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.05 * i }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full flex items-center justify-between p-6 sm:p-8 rounded-[2rem] transition-all duration-500 text-left border ${openIndex === i
                                    ? "bg-accent-50/50 border-accent-200 shadow-xl shadow-accent-500/[0.03]"
                                    : "bg-light-surface border-transparent hover:border-light-border hover:bg-white"
                                    }`}
                            >
                                <span className="text-sm sm:text-base font-bold text-navy-900 pr-6 leading-tight">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm border ${openIndex === i ? "bg-accent-500 border-accent-400 scale-110 rotate-180" : "bg-white border-light-border text-navy-400"
                                    }`}>
                                    <ChevronDown size={18} className={openIndex === i ? "text-white" : "currentColor"} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 sm:px-10 py-6 text-navy-500 text-sm sm:text-base leading-relaxed font-medium">
                                            {faq.answer}
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
