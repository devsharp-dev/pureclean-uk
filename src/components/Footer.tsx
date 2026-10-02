import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Award, HeartHandshake } from "lucide-react";

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
              <h4 className="text-white font-semibold text-sm">Enhanced DBS Checked</h4>
              <p className="text-xs text-slate-400 mt-0.5">Every housekeeper is background vetted and police checked.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">£2,000,000 Insurance</h4>
              <p className="text-xs text-slate-400 mt-0.5">Full public liability coverage for complete peace of mind.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Living Wage Employer</h4>
              <p className="text-xs text-slate-400 mt-0.5">We proudly pay our staff fair London & Real Living Wages.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">100% Satisfaction</h4>
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
                PureClean <span className="text-teal-400">UK</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Britain&apos;s trusted domestic and tenancy cleaning specialists. Delivering meticulous home hygiene, vetted professionals, and hotel-grade presentation to households across the UK.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>PureClean Services Ltd • Registered in England &amp; Wales No. 12948201</p>
              <p>VAT Registration: GB 384 1029 88</p>
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
                <Link href="/services" className="hover:text-teal-400 transition">
                  Compare Packages
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
                <span>
                  71-75 Shelton Street, Covent Garden,<br />
                  London, WC2H 9JQ,<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+442079460912" className="hover:text-teal-400 transition">
                  +44 (0) 20 7946 0912
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:enquiries@purecleanuk.co.uk" className="hover:text-teal-400 transition">
                  enquiries@purecleanuk.co.uk
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  Mon–Fri: 08:00 – 18:00 GMT<br />
                  Sat: 09:00 – 16:00 GMT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} PureClean Services Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
