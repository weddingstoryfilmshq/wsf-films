import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "WSF",
  description: "Luxury Wedding Photography & Cinematic Films",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f5f0]">
        <SmoothScroll />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}