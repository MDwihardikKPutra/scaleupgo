"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
    id: {
        // Navbar
        "nav.services": "Layanan",
        "nav.portfolio": "Portofolio",
        "nav.pricing": "Harga",
        "nav.faq": "FAQ",
        "nav.contact": "Hubungi Kami",

        // Hero
        "hero.agency": "Web Agency untuk Kesuksesan",
        "hero.title1": "Scale Up",
        "hero.title2": "Bisnis Anda,",
        "hero.title3": "Go Digital.",
        "hero.desc": "Ubah followers jadi pembeli. Stop cara manual, biarkan website bekerja 24 jam untuk bisnis Anda.",
        "hero.cta": "Buat Website Sekarang",
        "hero.secondary": "Lihat Layanan",
        "hero.trust1": "50+ Website",
        "hero.sub1": "Selesai Dibuat",
        "hero.trust2": "Trusted Agency",
        "hero.sub2": "Klien Nasional",

        // Services
        "services.label": "Layanan Kami",
        "services.title1": "Solusi Website untuk",
        "services.title2": "Setiap Kebutuhan",
        "services.desc": "Pilih jenis website yang paling sesuai dengan tujuan strategis bisnis Anda.",
        "services.view_pricing": "Lihat Harga",
        "services.desc1": "Website satu halaman yang dirancang khusus untuk mengubah pengunjung menjadi leads atau pembeli dengan psikologi penjualan.",
        "services.desc2": "Website profesional untuk membangun kredibilitas bisnis Anda di mata klien dan investor dengan desain corporate yang elegan.",

        // Why Choose Us
        "why.label": "Kenapa ScaleUp.Go?",
        "why.title1": "Bukan Sekedar",
        "why.title2": "Buat Website",
        "why.desc": "Kami memastikan website Anda benar-benar bekerja sebagai mesin penjualan.",
        "why.desc1": "Visual yang estetik dan modern untuk membangun kesan pertama yang tak terlupakan bagi pengunjung anda.",
        "why.desc2": "Kami membangun website dengan strategi psikologi marketing untuk mengubah traffic menjadi profit.",
        "why.desc3": "Kami tidak hanya membuat website, tapi menjadi partner digital yang selalu siap membantu bisnis anda.",

        // Portfolio
        "portfolio.label": "Showcase Karya",
        "portfolio.title": "Portofolio",
        "portfolio.desc": "Beberapa proyek pilihan yang sudah kami selesaikan dengan standar kualitas premium.",
        "portfolio.desc1": "Website company profile premium untuk perusahaan energi offshore dengan desain corporate modern, animasi dinamis, dan halaman sustainability.",
        "portfolio.desc2": "Website premium untuk coffee shop & brewery dengan desain modern, layout estetik, dan navigasi yang halus.",
        "portfolio.desc3": "Landing page eksklusif untuk brand fashion dengan layout estetik, galeri koleksi premium, dan navigasi yang halus.",

        // Pricing
        "pricing.label": "Pilihan Paket",
        "pricing.title1": "Harga",
        "pricing.title2": "Transparan",
        "pricing.desc": "Pilih paket investasi yang paling sesuai dengan target pertumbuhan bisnis Anda.",
        "pricing.desc1": "Cocok untuk promosi produk, campaign iklan, atau event spesifik.",
        "pricing.desc2": "Website profesional untuk branding dan kredibilitas bisnis Anda.",
        "pricing.desc3": "Solusi lengkap untuk jualan online dengan katalog & sistem order.",
        "pricing.starting": "Mulai Dari",
        "pricing.period": "proyek",
        "pricing.cta": "Pesan Sekarang",
        "pricing.popular": "Paling Populer",

        // FAQ
        "faq.label": "FAQ Pelanggan",
        "faq.title1": "Yang Sering",
        "faq.title2": "Ditanyakan",
        "faq.desc": "Segari hal yang perlu Anda ketahui sebelum memulai transformasi digital bersama kami.",
        "faq.q1": "Berapa lama proses pembuatan website?",
        "faq.a1": "Untuk landing page sekitar 3-5 hari kerja, company profile 5-10 hari kerja, dan toko online 10-14 hari kerja. Timeline bisa lebih cepat tergantung kesiapan konten dari klien.",
        "faq.q2": "Apakah saya bisa request desain custom?",
        "faq.a2": "Tentu! Semua desain kami custom sesuai brand dan kebutuhan bisnis Anda. Kami akan diskusi detail sebelum mulai desain.",
        "faq.q3": "Apakah sudah termasuk hosting dan domain?",
        "faq.a3": "Ya! Semua paket sudah termasuk gratis domain .com dan hosting untuk 1 tahun pertama. Perpanjangan selanjutnya dengan harga normal.",
        "faq.q4": "Bagaimana jika saya ingin ada perubahan setelah website jadi?",
        "faq.a4": "Setiap paket sudah termasuk free revisi. Jika ada perubahan di luar scope, kami akan diskusikan biaya tambahan yang transparan.",
        "faq.q5": "Apakah website bisa diakses di HP?",
        "faq.a5": "100%! Semua website yang kami buat fully responsive — tampil sempurna di desktop, tablet, maupun smartphone.",

        // FinalCTA
        "cta.label": "Gratis Konsultasi",
        "cta.title1": "Siap Bawa Bisnis Anda",
        "cta.title2": "ke Level Selanjutnya?",
        "cta.desc": "Konsultasikan kebutuhan website Anda secara gratis. Kami akan bantu carikan solusi digital terbaik untuk Scale Up bisnis Anda.",
        "cta.wa": "Chat via WhatsApp",
        "cta.pricing": "Lihat Paket Harga",
        "cta.rights": "© 2026 ScaleUp.Go — Hak cipta dilindungi.",

        // Footer
        "footer.tagline": "Scale Up Your Business, Go Digital.",
        "footer.rights": "© 2026 ScaleUp.Go — Hak cipta dilindungi.",
    },
    en: {
        // Navbar
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.pricing": "Pricing",
        "nav.faq": "FAQ",
        "nav.contact": "Contact Us",

        // Hero
        "hero.agency": "Web Agency for Success",
        "hero.title1": "Scale Up",
        "hero.title2": "Your Business,",
        "hero.title3": "Go Digital.",
        "hero.desc": "Turn followers into buyers. Stop doing it manually, let the website work 24 hours for your business.",
        "hero.cta": "Create Website Now",
        "hero.secondary": "See Services",
        "hero.trust1": "50+ Websites",
        "hero.sub1": "Successfully Created",
        "hero.trust2": "Trusted Agency",
        "hero.sub2": "National Clients",

        // Services
        "services.label": "Our Services",
        "services.title1": "Website Solutions for",
        "services.title2": "Every Need",
        "services.desc": "Choose the type of website that best suits your business's strategic goals.",
        "services.view_pricing": "View Pricing",
        "services.desc1": "Single-page website specifically designed to turn visitors into leads or buyers using sales psychology.",
        "services.desc2": "Professional website to build business credibility for clients and investors with elegant corporate design.",

        // Why Choose Us
        "why.label": "Why ScaleUp.Go?",
        "why.title1": "Not Just",
        "why.title2": "Building Websites",
        "why.desc": "We ensure your website truly works as a sales machine.",
        "why.desc1": "Aesthetic and modern visuals to build an unforgettable first impression for your visitors.",
        "why.desc2": "We build websites with marketing psychology strategies to turn traffic into profit.",
        "why.desc3": "We don't just create websites, we become a digital partner always ready to help your business.",

        // Portfolio
        "portfolio.label": "Work Showcase",
        "portfolio.title": "Portfolio",
        "portfolio.desc": "Some selected projects we have completed with premium quality standards.",
        "portfolio.desc1": "Premium company profile website for offshore energy company with modern corporate design, dynamic animations, and sustainability page.",
        "portfolio.desc2": "Premium website for coffee shop & brewery with modern design, aesthetic layout, and smooth navigation.",
        "portfolio.desc3": "Exclusive landing page for fashion brands with aesthetic layout, premium collection gallery, and smooth navigation.",

        // Pricing
        "pricing.label": "Package Options",
        "pricing.title1": "Transparent",
        "pricing.title2": "Pricing",
        "pricing.desc": "Choose the investment package that best suits your business growth targets.",
        "pricing.desc1": "Suitable for product promotion, advertising campaigns, or specific events.",
        "pricing.desc2": "Professional website for branding and business credibility.",
        "pricing.desc3": "Complete online sales solution with catalog & order system.",
        "pricing.starting": "Starting From",
        "pricing.period": "project",
        "pricing.cta": "Order Now",
        "pricing.popular": "Most Popular",

        // FAQ
        "faq.label": "Customer FAQ",
        "faq.title1": "Frequently",
        "faq.title2": "Asked Questions",
        "faq.desc": "Everything you need to know before starting your digital transformation with us.",
        "faq.q1": "How long does the website creation process take?",
        "faq.a1": "For landing pages about 3-5 business days, company profile 5-10 business days, and online shops 10-14 business days. The timeline can be faster depending on the client's content readiness.",
        "faq.q2": "Can I request a custom design?",
        "faq.a2": "Of course! All our designs are custom according to your brand and business needs. We will discuss the details before starting the design.",
        "faq.q3": "Are hosting and domain included?",
        "faq.a3": "Yes! All packages include free .com domain and hosting for the first year. Subsequent renewals at normal prices.",
        "faq.q4": "What if I want changes after the website is finished?",
        "faq.a4": "Each package includes free revisions. If there are changes outside the scope, we will discuss transparent additional costs.",
        "faq.q5": "Is the website accessible on mobile?",
        "faq.a5": "100%! All websites we create are fully responsive — appearing perfectly on desktop, tablet, and smartphone.",

        // FinalCTA
        "cta.label": "Free Consultation",
        "cta.title1": "Ready to Take Your Business",
        "cta.title2": "to the Next Level?",
        "cta.desc": "Consult your website needs for free. We will help find the best digital solution to Scale Up your business.",
        "cta.wa": "Chat via WhatsApp",
        "cta.pricing": "View Pricing Packages",
        "cta.rights": "© 2026 ScaleUp.Go — All rights reserved.",

        // Footer
        "footer.tagline": "Scale Up Your Business, Go Digital.",
        "footer.rights": "© 2026 ScaleUp.Go — All rights reserved.",
    },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("id");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "id" || savedLang === "en")) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
