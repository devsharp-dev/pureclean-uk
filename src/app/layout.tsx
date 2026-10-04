import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "London Homecare | Professional Home Cleaning Services in London",
    template: "%s | London Homecare",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    title: "London Homecare | Professional Home Cleaning Services in London",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Homecare | Professional Home Cleaning Services in London",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white font-sans">
        <JsonLd />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
