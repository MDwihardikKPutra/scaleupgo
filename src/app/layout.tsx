import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Changa_One } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleupgo.solutions"),
  title: {
    default: "ScaleUp.Go — Scale Up Your Business, Go Digital",
    template: "%s | ScaleUp.Go",
  },
  description:
    "Ubah followers jadi pembeli. Stop cara manual, biarkan website bekerja 24 jam untuk bisnis Anda. Jasa pembuatan website profesional untuk UMKM.",
  keywords: [
    "jasa pembuatan website",
    "landing page",
    "toko online",
    "UMKM digital",
    "ScaleUp.Go",
    "digital marketing indonesia",
  ],
  authors: [{ name: "ScaleUp.Go Team" }],
  creator: "ScaleUp.Go",
  publisher: "ScaleUp.Go",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ScaleUp.Go — Scale Up Your Business, Go Digital",
    description: "Jasa pembuatan website profesional untuk UMKM. Ubah followers jadi pembeli.",
    url: "https://scaleupgo.solutions",
    siteName: "ScaleUp.Go",
    images: [
      {
        url: "/ScaleUp.GO.png",
        width: 1200,
        height: 630,
        alt: "ScaleUp.Go Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleUp.Go — Scale Up Your Business, Go Digital",
    description: "Jasa pembuatan website profesional untuk UMKM. Ubah followers jadi pembeli.",
    images: ["/ScaleUp.GO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ScaleUp.Go",
    "image": "https://scaleupgo.solutions/ScaleUp.GO.png",
    "@id": "https://scaleupgo.solutions",
    "url": "https://scaleupgo.solutions",
    "telephone": "+6281234567890", // Example, user should update
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Digital Office Park",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "sameAs": [
      "https://www.instagram.com/scaleup.go",
      "https://www.facebook.com/scaleupgo",
    ],
    "description": "Jasa pembuatan website profesional untuk UMKM. Ubah followers jadi pembeli.",
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${changaOne.variable} antialiased font-sans`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
