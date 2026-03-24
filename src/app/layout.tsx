import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://boomi-logistique.bj'),
  title: { default: "Boomi Logistique | La logistique sans stress au Bénin", template: "%s | Boomi Logistique" },
  description: "La logistique premium et sur-mesure au Bénin. Livraison inter-villes express (Cotonou, Parakou, Natitingou), stockage sécurisé et logistique événementielle.",
  keywords: ["Logistique Bénin", "Livraison Cotonou", "Expédition Bénin", "Boomi Logistique"],
  authors: [{ name: "Boomi Logistique" }],
  openGraph: { type: "website", locale: "fr_BJ", url: "https://boomi-logistique.bj", siteName: "Boomi Logistique" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-body bg-white text-brand-midnight">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "LogisticsService",
          "name": "Boomi Logistique", "url": "https://boomi-logistique.bj",
          "telephone": "+2290151505942",
          "address": { "@type": "PostalAddress", "streetAddress": "Agla, Vons de la Pharmacie Luli Luli", "addressLocality": "Cotonou", "addressCountry": "BJ" },
          "sameAs": ["https://www.facebook.com/boomi.africa"]
        }) }} />
        <Navbar />
        <main className="flex-grow flex flex-col relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
