import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PureClean UK | Premium Home, Deep & End of Tenancy Cleaning Services",
  description:
    "Trusted UK domestic cleaning services across London and surrounding areas. Enhanced DBS-checked cleaners, £2M public liability insurance, and 100% guarantee on regular home cleaning, deep spring cleans, and end of tenancy handovers.",
  keywords: [
    "UK home cleaning",
    "London domestic cleaners",
    "regular home cleaning UK",
    "deep cleaning London",
    "end of tenancy cleaning guarantee",
    "vetted UK cleaners",
    "tenancy deposit cleaning",
  ],
  authors: [{ name: "PureClean Services Ltd" }],
  openGraph: {
    title: "PureClean UK | Professional Domestic & Tenancy Cleaners",
    description: "Spotless homes, trusted cleaners, British standards of care.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
