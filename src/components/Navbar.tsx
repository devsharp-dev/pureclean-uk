"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Phone, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-teal-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              DBS Checked & £2M Insured UK Cleaners
            </span>
            <span>•</span>
            <span>Covering Greater London & Surrounding Counties</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>Customer Service: Mon–Sat 8:00am–6:00pm</span>
            <a
              href="tel:+442079460912"
              className="hover:text-white font-medium flex items-center transition"
            >
              <Phone className="w-3 h-3 mr-1" />
              020 7946 0912
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:bg-teal-700 transition">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                London <span className="text-teal-600">Homecare</span>
              </span>
              <p className="text-[10px] text-slate-500 font-medium -mt-1 tracking-wider uppercase">
                Premium UK Property Services
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+442079460912"
              className="text-xs font-semibold text-slate-700 flex items-center px-3 py-2 rounded-lg hover:bg-slate-100 transition"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
              020 7946 0912
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Book a Clean
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? "bg-teal-50 text-teal-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-3">
            <a
              href="tel:+442079460912"
              className="flex items-center justify-center space-x-2 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call 020 7946 0912</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-sm font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition"
            >
              Book a Clean
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
