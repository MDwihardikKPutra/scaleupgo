import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Changa_One } from "next/font/google";
import "./globals.css";

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
  title: "ScaleUp.Go — Scale Up Your Business, Go Digital",
  description:
    "Ubah followers jadi pembeli. Stop cara manual, biarkan website bekerja 24 jam untuk bisnis Anda. Jasa pembuatan website profesional untuk UMKM.",
  keywords: [
    "jasa pembuatan website",
    "landing page",
    "toko online",
    "UMKM digital",
    "ScaleUp.Go",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${changaOne.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
