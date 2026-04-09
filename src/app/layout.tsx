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
  metadataBase: new URL("https://felipeaugustodev.com.br"),

  title: {
    default: "Desenvolvedor Web em Jundiaí | Criação de Sites Profissionais",
    template: "%s | Felipe Augusto",
  },

  description:
    "Criação de sites profissionais em Jundiaí, rápidos, responsivos e otimizados para Google. Aumente sua presença online e atraia mais clientes.",

  keywords: [
    "desenvolvedor web jundiaí",
    "criação de sites jundiaí",
    "sites profissionais",
    "freelancer web",
    "front-end",
    "SEO local",
  ],

  authors: [{ name: "Felipe Augusto", url: "https://felipeaugustodev.com.br" }],
  creator: "Felipe Augusto",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Criação de Sites em Jundiaí | Sites Profissionais e Rápidos",
    description:
      "Sites modernos, rápidos e otimizados para gerar clientes. Destaque sua empresa no Google.",
    url: "https://felipeaugustodev.com.br",
    siteName: "Felipe Augusto",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/SEO/criacao-sites-jundiai.webp",
        width: 1200,
        height: 630,
        alt: "Criação de sites em Jundiaí",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites em Jundiaí",
    description:
      "Sites rápidos e otimizados para gerar clientes todos os dias.",
    images: ["/images/SEO/criacao-sites-jundiai.webp"],
  },
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
