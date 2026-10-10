import type { Metadata } from "next";
import { Kumbh_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/data/content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
});

const kumbh = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Luxury Wedding Planning in Jaipur`,
    template: `%s · ${site.name}`,
  },
  description:
    "Based in Jaipur, Neha’s Evento crafts luxury weddings, bespoke celebrations and unforgettable guest experiences with elegance, precision and heart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${kumbh.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          <main className="relative z-0 min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
