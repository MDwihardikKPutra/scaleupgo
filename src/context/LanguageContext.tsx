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
        "nav.why_digital": "Why Digital",
        "nav.portfolio": "Portofolio",
        "nav.pricing": "Investasi",
        "nav.faq": "FAQ",
        "nav.contact": "Hubungi Kami",

        // Hero
        "hero.agency": "Digital Partner Bisnis Indonesia",
        "hero.title1": "Scale Up",
        "hero.title2": "Bisnis Anda,",
        "hero.title3": "Go Digital.",
        "hero.desc": "Bisnis yang tidak hadir secara digital, tidak akan terlihat. Kami bantu Anda hadir online, tampil profesional, dan tumbuh lebih cepat.",
        "hero.cta": "Mulai Sekarang",
        "hero.secondary": "Lihat Layanan",
        "hero.trust1": "50+ Klien",
        "hero.sub1": "Puas & Berkembang",
        "hero.trust2": "Digital Partner",
        "hero.sub2": "Terpercaya",

        // Services
        "services.label": "Solusi",
        "services.title1": "Tiga Cara untuk",
        "services.title2": "Go Digital",
        "services.desc": "Setiap bisnis punya kebutuhan berbeda. Kami siapkan solusi yang pas.",
        "services.view_pricing": "Lihat Harga",
        "services.type1": "Landing Page",
        "services.type2": "Company Profile",
        "services.type3": "Toko Online",
        "services.desc1": "Satu halaman, satu tujuan: konversi. Dirancang khusus agar pengunjung langsung jadi pembeli — bukan sekedar singgah.",
        "services.desc2": "Kesan pertama menentukan segalanya. Tampil profesional di depan klien, investor, dan mitra bisnis dengan identitas digital yang kuat.",
        "services.desc3": "Buka toko 24 jam tanpa perlu jaga. Katalog produk, manajemen stok, dan checkout via WhatsApp — semua dalam satu sistem.",
        "services.tagline1": "High Conversion",
        "services.tagline2": "Brand Identity",
        "services.tagline3": "E-commerce",
        "services.feat1_1": "Sales Focus",
        "services.feat1_2": "Mobile First",
        "services.feat1_3": "Fast Load",
        "services.feat2_1": "Professional",
        "services.feat2_2": "SEO Ready",
        "services.feat2_3": "Multi-Page",
        "services.feat3_1": "Catalog System",
        "services.feat3_2": "Stock Management",
        "services.feat3_3": "WA Checkout",

        // Why Choose Us
        "why.label": "Kenapa Kami?",
        "why.title1": "Kami Bukan Sekadar",
        "why.title2": "Jasa Website",
        "why.desc": "Kami adalah partner pertumbuhan digital Anda — dari desain hingga strategi.",
        "why.desc1": "Desain yang bukan sekadar cantik, tapi dirancang untuk membuat pengunjung percaya dan mengambil tindakan.",
        "why.desc2": "Setiap elemen dibangun dengan logika konversi. Website Anda bukan sekadar pajangan — ini mesin bisnis.",
        "why.desc3": "Kami tersedia setelah website live. Konsultasi, update, dan support — karena bisnis Anda tidak berhenti di hari peluncuran.",
        "why.val1_title": "Desain Berbasis Data",
        "why.val1_sub": "Bukan Sekadar Estetik",
        "why.val2_title": "Fokus Konversi",
        "why.val2_sub": "Traffic → Profit",
        "why.val3_title": "Partner Jangka Panjang",
        "why.val3_sub": "Bukan Vendor Satu Kali",

        // Portfolio
        // Portfolio
        "portfolio.label": "Showcase Portofolio",
        "portfolio.title": "Portofolio",
        "portfolio.desc": "Beberapa proyek pilihan yang sudah kami selesaikan dengan standar kualitas premium.",
        "portfolio.desc1": "Website company profile premium untuk perusahaan energi offshore dengan desain korporat modern, animasi dinamis, dan halaman sustainability.",
        "portfolio.desc2": "Website premium untuk coffee shop & brewery dengan desain modern, layout estetik, dan navigasi yang halus.",
        "portfolio.desc3": "Landing page eksklusif untuk brand fashion dengan layout estetik, galeri koleksi premium, dan navigasi yang halus.",
        "portfolio.dummy_title": "Proyek Placeholder",
        "portfolio.dummy_desc": "Template website premium ini sedang dalam tahap pengembangan dan akan segera tersedia.",
        "portfolio.tag_corp": "Korporat",
        "portfolio.tag_anim": "Animasi",
        "portfolio.tag_multi": "Multi-Halaman",
        "portfolio.tag_coffee": "Coffee Shop",
        "portfolio.tag_prem": "Premium",
        "portfolio.tag_resp": "Responsif",
        "portfolio.tag_fashion": "Fashion",
        "portfolio.tag_visual": "Visual",

        // Pricing
        "pricing.label": "Investasi Digital",
        "pricing.title1": "Harga Jelas,",
        "pricing.title2": "Tanpa Kejutan",
        "pricing.desc": "Bukan sekadar pengeluaran — ini modal untuk tumbuh. Pilih paket yang sesuai dengan skala bisnis Anda sekarang.",
        "pricing.desc1": "Ideal untuk campaign, promosi produk, atau bisnis yang baru mulai go digital.",
        "pricing.desc2": "Bangun kepercayaan klien dan investor dengan identitas digital yang solid dan profesional.",
        "pricing.desc3": "Buat toko yang buka terus — lengkap dengan sistem order, stok, dan checkout otomatis.",
        "pricing.starting": "Mulai Dari",
        "pricing.period": "proyek",
        "pricing.cta": "Hubungi Kami",
        "pricing.popular": "Paling Populer",
        "pricing.feat_lp1": "1 Halaman Responsive",
        "pricing.feat_lp2": "Desain Custom Modern",
        "pricing.feat_lp3": "Optimasi Kecepatan",
        "pricing.feat_lp4": "Integrasi WhatsApp",
        "pricing.feat_lp5": "Formulir Kontak",
        "pricing.feat_lp6": "Gratis Domain .com",
        "pricing.feat_lp7": "Gratis Revisi 2x",
        "pricing.feat_cp1": "3-5 Halaman Responsive",
        "pricing.feat_cp2": "Desain Custom Premium",
        "pricing.feat_cp3": "Optimasi SEO On-Page",
        "pricing.feat_cp4": "Integrasi Google Maps",
        "pricing.feat_cp5": "Blog / Berita",
        "pricing.feat_cp6": "Tombol Chat WhatsApp",
        "pricing.feat_cp7": "Gratis Domain .com",
        "pricing.feat_cp8": "Gratis Revisi 3x",
        "pricing.feat_to1": "Jumlah Produk Tidak Terbatas",
        "pricing.feat_to2": "Katalog Produk Dinamis",
        "pricing.feat_to3": "Keranjang & Checkout",
        "pricing.feat_to4": "WhatsApp Auto-Order",
        "pricing.feat_to5": "Dashboard Admin",
        "pricing.feat_to6": "Gratis Domain .com",
        "pricing.feat_to7": "Gratis Revisi 5x",

        // FAQ
        "faq.label": "Yang Perlu Anda Tahu",
        "faq.title1": "Pertanyaan yang",
        "faq.title2": "Sering Ditanyakan",
        "faq.desc": "Sebelum mulai, ini hal-hal yang paling sering ditanyakan klien kami.",
        "faq.q1": "Berapa lama website saya jadi?",
        "faq.a1": "Landing page: 3–5 hari kerja. Company Profile: 5–10 hari. Toko Online: 10–14 hari. Timeline bisa lebih cepat jika konten dari klien sudah siap.",
        "faq.q2": "Bisa request desain sesuai brand saya?",
        "faq.a2": "Wajib. Semua desain kami 100% custom sesuai identitas visual bisnis Anda — bukan template instan. Kami diskusi dulu sebelum mulai.",
        "faq.q3": "Hosting dan domain sudah termasuk?",
        "faq.a3": "Ya, sudah. Semua paket include domain .com dan hosting selama 1 tahun pertama. Tahun berikutnya dengan biaya perpanjangan standar.",
        "faq.q4": "Kalau ada revisi setelah website jadi?",
        "faq.a4": "Tiap paket sudah include free revisi. Perubahan di luar scope akan didiskusikan secara terbuka dan transparan — tidak ada biaya tersembunyi.",
        "faq.q5": "Website bisa diakses dari HP?",
        "faq.a5": "100%. Semua website kami dibangun mobile-first — tampil sempurna di HP, tablet, maupun desktop tanpa kompromi.",

        // Problem & Solution
        "ps.label": "Why Digital",
        "ps.title1": "Bisnis Offline Saja",
        "ps.title2": "Tidak Cukup Lagi",
        "ps.desc": "Pelanggan Anda sudah online. Pertanyaannya: apakah Anda juga ada di sana?",
        "ps.bad_label": "Tanpa Website",
        "ps.good_label": "Dengan Website ScaleUp",
        "ps.p1": "Susah dijangkau — pelanggan baru tidak tahu Anda ada.",
        "ps.p2": "Tidak terlihat profesional di mata klien & investor.",
        "ps.p3": "Kehilangan penjualan karena tidak bisa diakses 24/7.",
        "ps.s1": "Bisnis Anda ditemukan oleh ribuan calon pelanggan online.",
        "ps.s2": "Tampil kredibel dan profesional di setiap platform.",
        "ps.s3": "Terima pesanan & calon pelanggan otomatis — bahkan saat tidur.",
        "ps.cta": "Siap mulai perjalanan digitalmu?",
        "ps.btn": "Konsultasi Gratis Sekarang",

        // FinalCTA
        "cta.label": "Mulai Hari Ini",
        "cta.title1": "Bisnis Anda Layak",
        "cta.title2": "Tampil Digital.",
        "cta.desc": "Satu langkah kecil hari ini bisa jadi lompatan besar bisnis Anda. Konsultasi gratis, tanpa komitmen.",
        "cta.wa": "Chat WhatsApp Sekarang",
        "cta.wa_message": "Halo ScaleUp.Go, saya tertarik untuk buat website bisnis saya. Bisa konsultasi dulu?",
        "cta.pricing": "Lihat Paket Harga",
        "cta.rights": "© 2026 ScaleUp.Go — Hak cipta dilindungi.",

        // Market
        "nav.market": "Market",
        "market.label": "Premium Templates",
        "market.title": "Marketplace",
        "market.desc": "Pilih template website premium yang siap pakai untuk mempercepat pertumbuhan bisnis Anda.",
        "market.search": "Cari template...",
        "market.filter_all": "Semua",
        "market.buy": "Beli Sekarang",
        "market.price_label": "Harga Investasi",

        // Footer
        "footer.tagline": "Scale Up Your Business, Go Digital.",
        "footer.rights": "© 2026 ScaleUp.Go — Hak cipta dilindungi.",
    },
    en: {
        // Navbar
        "nav.services": "Solutions",
        "nav.why_digital": "Why Digital",
        "nav.portfolio": "Work",
        "nav.pricing": "Pricing",
        "nav.faq": "FAQ",
        "nav.contact": "Contact Us",
        "nav.market": "Market",

        // Hero
        "hero.agency": "Digital Growth Partner for Indonesian Businesses",
        "hero.title1": "Scale Up",
        "hero.title2": "Your Business,",
        "hero.title3": "Go Digital.",
        "hero.desc": "Businesses that aren't online aren't visible. We help you show up, look professional, and grow faster.",
        "hero.cta": "Start Now",
        "hero.secondary": "See Services",
        "hero.trust1": "50+ Clients",
        "hero.sub1": "Happy & Growing",
        "hero.trust2": "Digital Partner",
        "hero.sub2": "You Can Trust",

        // Services
        "services.label": "Pick Your Path",
        "services.title1": "Three Ways to",
        "services.title2": "Go Digital",
        "services.desc": "Every business is different. We've got the right solution for each.",
        "services.view_pricing": "View Pricing",
        "services.type1": "Landing Page",
        "services.type2": "Company Profile",
        "services.type3": "Online Store",
        "services.desc1": "One page, one goal: conversion. Built to turn visitors into buyers — not just browsers.",
        "services.desc2": "First impressions are everything. Look credible and professional in front of clients, investors, and partners.",
        "services.desc3": "A store that never closes. Product catalog, stock management, and WhatsApp checkout — all in one system.",
        "services.tagline1": "High Conversion",
        "services.tagline2": "Brand Identity",
        "services.tagline3": "E-commerce",
        "services.feat1_1": "Sales Focus",
        "services.feat1_2": "Mobile First",
        "services.feat1_3": "Fast Load",
        "services.feat2_1": "Professional",
        "services.feat2_2": "SEO Ready",
        "services.feat2_3": "Multi-Page",
        "services.feat3_1": "Catalog System",
        "services.feat3_2": "Stock Management",
        "services.feat3_3": "WA Checkout",

        // Why Choose Us
        "why.label": "Why Us?",
        "why.title1": "We're Not Just",
        "why.title2": "a Web Agency",
        "why.desc": "We are your digital growth partner — from design to strategy.",
        "why.desc1": "Design that doesn't just look good — it's built to make visitors trust you and take action.",
        "why.desc2": "Every element is built with conversion logic. Your website isn't art — it's a business machine.",
        "why.desc3": "We're here after your website goes live. Consults, updates, support — because your business doesn't stop at launch day.",
        "why.val1_title": "Data-Driven Design",
        "why.val1_sub": "Not Just Aesthetics",
        "why.val2_title": "Conversion-First",
        "why.val2_sub": "Traffic → Profit",
        "why.val3_title": "Long-Term Partner",
        "why.val3_sub": "Not a One-Time Vendor",

        // Portfolio
        "portfolio.label": "Work Showcase",
        "portfolio.title": "Portfolio",
        "portfolio.desc": "Some selected projects we have completed with premium quality standards.",
        "portfolio.desc1": "Premium company profile website for offshore energy company with modern corporate design, dynamic animations, and sustainability page.",
        "portfolio.desc2": "Premium website for coffee shop & brewery with modern design, aesthetic layout, and smooth navigation.",
        "portfolio.desc3": "Exclusive landing page for fashion brands with aesthetic layout, premium collection gallery, and smooth navigation.",
        "portfolio.dummy_title": "Project Placeholder",
        "portfolio.dummy_desc": "This premium website template is currently under development and will be available soon.",
        "portfolio.tag_corp": "Corporate",
        "portfolio.tag_anim": "Animation",
        "portfolio.tag_multi": "Multi-Page",
        "portfolio.tag_coffee": "Coffee Shop",
        "portfolio.tag_prem": "Premium",
        "portfolio.tag_resp": "Responsive",
        "portfolio.tag_fashion": "Fashion",
        "portfolio.tag_visual": "Visual",

        // Market
        "market.label": "Premium Templates",
        "market.title": "Marketplace",
        "market.desc": "Choose a ready-to-use premium website template to accelerate your business growth.",
        "market.search": "Search templates...",
        "market.filter_all": "All",
        "market.buy": "Buy Now",
        "market.price_label": "Investment Price",

        // Pricing
        "pricing.label": "Digital Investment",
        "pricing.title1": "Clear Pricing,",
        "pricing.title2": "No Surprises",
        "pricing.desc": "Not a cost — it's an investment. Pick the package that fits where your business is right now.",
        "pricing.desc1": "Great for campaigns, product launches, or businesses just starting to go digital.",
        "pricing.desc2": "Build trust with clients and investors through a solid, professional digital identity.",
        "pricing.desc3": "A store that stays open — with order management, inventory, and automated checkout.",
        "pricing.starting": "Starting From",
        "pricing.period": "project",
        "pricing.cta": "Get in Touch",
        "pricing.popular": "Most Popular",
        "pricing.feat_lp1": "1 Responsive Page",
        "pricing.feat_lp2": "Modern Custom Design",
        "pricing.feat_lp3": "Speed Optimization",
        "pricing.feat_lp4": "WhatsApp Integration",
        "pricing.feat_lp5": "Contact Form",
        "pricing.feat_lp6": "Free .com Domain",
        "pricing.feat_lp7": "Free Revision 2x",
        "pricing.feat_cp1": "3-5 Responsive Pages",
        "pricing.feat_cp2": "Premium Custom Design",
        "pricing.feat_cp3": "SEO On-Page Optimization",
        "pricing.feat_cp4": "Google Maps Integration",
        "pricing.feat_cp5": "Blog / News",
        "pricing.feat_cp6": "WhatsApp Chat Widget",
        "pricing.feat_cp7": "Free .com Domain",
        "pricing.feat_cp8": "Free Revision 3x",
        "pricing.feat_to1": "Unlimited Products",
        "pricing.feat_to2": "Dynamic Product Catalog",
        "pricing.feat_to3": "Cart & Checkout",
        "pricing.feat_to4": "WhatsApp Auto-Order",
        "pricing.feat_to5": "Admin Dashboard",
        "pricing.feat_to6": "Free .com Domain",
        "pricing.feat_to7": "Free Revision 5x",

        // FAQ
        "faq.label": "What You Should Know",
        "faq.title1": "Frequently",
        "faq.title2": "Asked Questions",
        "faq.desc": "The most common questions our clients ask before getting started.",
        "faq.q1": "How long does it take to build my website?",
        "faq.a1": "Landing page: 3–5 business days. Company Profile: 5–10 days. Online Store: 10–14 days. Timelines can move faster if your content is ready.",
        "faq.q2": "Can I get a design that matches my brand?",
        "faq.a2": "Always. Every design is 100% custom built around your brand identity — not an off-the-shelf template. We discuss everything before we start.",
        "faq.q3": "Are hosting and domain included?",
        "faq.a3": "Yes. All packages include a free .com domain and hosting for the first year. Renewals after that are at standard market rates.",
        "faq.q4": "What if I need changes after the website is done?",
        "faq.a4": "Every package includes free revisions. Changes outside the scope are discussed openly and transparently — no hidden fees.",
        "faq.q5": "Does the website work on mobile?",
        "faq.a5": "100%. All our websites are built mobile-first — looking sharp on phones, tablets, and desktops without compromise.",

        // Problem & Solution
        "ps.label": "Why Digital",
        "ps.title1": "Being Offline Only",
        "ps.title2": "Is No Longer Enough",
        "ps.desc": "Your customers are already online. The question is: are you there too?",
        "ps.bad_label": "Without a Website",
        "ps.good_label": "With ScaleUp Website",
        "ps.p1": "Hard to find — new customers don't know you exist.",
        "ps.p2": "Doesn't look professional to clients & investors.",
        "ps.p3": "Losing sales because you can't be reached 24/7.",
        "ps.s1": "Your business gets discovered by thousands of potential customers online.",
        "ps.s2": "Look credible and professional across every platform.",
        "ps.s3": "Receive orders & leads automatically — even while you sleep.",
        "ps.cta": "Ready to start your digital journey?",
        "ps.btn": "Free Consultation Now",

        // FinalCTA
        "cta.label": "Start Today",
        "cta.title1": "Your Business Deserves",
        "cta.title2": "to Go Digital.",
        "cta.desc": "One small step today could be your biggest business leap. Free consultation, no commitment.",
        "cta.wa": "Chat on WhatsApp Now",
        "cta.wa_message": "Hi ScaleUp.Go, I'm interested in building a website for my business. Can we have a quick consultation?",
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
