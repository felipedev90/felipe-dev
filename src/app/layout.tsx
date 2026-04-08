import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import "../app/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: "800",
  variable: "--font-barlow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Augusto | Desenvolvedor Web",
  description:
    "Desenvolvimento web profissional com Next.js, TypeScript e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
