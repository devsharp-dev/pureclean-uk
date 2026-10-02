import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Enhanced DBS Checked</p>
              <p className="text-xs text-slate-400 mt-0.5">Every housekeeper is background vetted and police checked.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">£2,000,000 Insurance</p>
              <p className="text-xs text-slate-400 mt-0.5">Full public liability coverage for complete peace of mind.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Living Wage Employer</p>
              <p className="text-xs text-slate-400 mt-0.5">We proudly pay our staff fair London &amp; Real Living Wages.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">100% Satisfaction</p>
              <p className="text-xs text-slate-400 mt-0.5">Not thrilled? We return within 24–72 hours to re-clean free.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                London <span className="text-teal-400">Homecare</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Britain&apos;s trusted domestic and tenancy cleaning specialists. Delivering meticulous home hygiene, vetted professionals, and hotel-grade presentation to households across London.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>{siteConfig.legalName} • Registered in England &amp; Wales No. {siteConfig.companyNumber}</p>
              <p>VAT Registration: {siteConfig.vatNumber}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#regular" className="hover:text-teal-400 transition">
                  Regular Home Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#deep" className="hover:text-teal-400 transition">
                  Deep Spring Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#tenancy" className="hover:text-teal-400 transition">
                  End of Tenancy Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#calculator" className="hover:text-teal-400 transition">
                  Price Estimator
                </Link>
              </li>
              <li>
                <Link href="/#areas" className="hover:text-teal-400 transition">
                  Areas We Serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-teal-400 transition">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link href="/about#vetting" className="hover:text-teal-400 transition">
                  Vetting &amp; Security
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-teal-400 transition">
                  Eco Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-teal-400 transition">
                  Client FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* UK Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              London Office
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <address className="not-italic">
                  {siteConfig.address.streetAddress},<br />
                  {siteConfig.address.addressLocality}, {siteConfig.address.postalCode},<br />
                  United Kingdom
                </address>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`} className="hover:text-teal-400 transition">
                  {siteConfig.telephone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-400 transition">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.openingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and Sitemap link */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/sitemap.xml" className="hover:text-teal-400 transition">
              XML Sitemap
            </Link>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Sample Demonstration Website</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
