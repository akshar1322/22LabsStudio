import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "22Labs Studio | Cinematic 3D & Digital Art",
  description: "High-end 3D art production studio built for AAA games and cinematic experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://22labs.studio",
    siteName: "22Labs Studio",
    images: ["/og-image.jpg"],
  },
};

import SmoothScroll from "@/app/components/SmoothScroll";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import NoiseOverlay from "@/app/components/ui/NoiseOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
        <SmoothScroll>
          <NoiseOverlay />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
