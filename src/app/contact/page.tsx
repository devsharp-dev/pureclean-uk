import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import { siteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact London Homecare | Book Cleaning Services in London",
  description:
    "Contact London Homecare for regular, deep, or end of tenancy cleaning across London. Request an instant quote, call 020 7946 0912, or reach our Covent Garden office.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact London Homecare | Book Cleaning Services in London",
    description:
      "Contact London Homecare: get an instant estimate or book regular, deep, or tenancy cleaning in London.",
    url: `${siteUrl}/contact`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>London &amp; UK Customer Enquiries</span>
          </div>

          {/* Exact H1 for Contact Page */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact &amp; Booking
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Get in touch for an immediate estimate, custom housekeeping schedule, or end-of-tenancy reservation. Our Covent Garden support team is at your disposal.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Booking Form Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: UK Office Contact Cards & Coverage */}
          <div className="lg:col-span-5 space-y-6">
            {/* London Office Card (H2) */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Registered Headquarters
                </span>
                <h2 className="text-xl font-bold mt-1 text-white">
                  London Homecare Office
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-teal-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider">
                      Physical Address
                    </strong>
                    <address className="not-italic text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {siteConfig.address.streetAddress}
                      <br />
                      {siteConfig.address.addressLocality}, {siteConfig.address.postalCode}
                      <br />
                      United Kingdom
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider">
                      Telephone
                    </strong>
                    <a
                      href={`tel:${siteConfig.telephone.replace(/\s+/g, "")}`}
                      className="text-teal-300 hover:text-white transition font-medium"
                    >
                      {siteConfig.telephone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-teal-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider">
                      Email
                    </strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-teal-300 hover:text-white transition"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-white/10 text-teal-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider">
                      Operating Hours
                    </strong>
                    <span className="text-xs">
                      {siteConfig.openingHours}
                      <br />
                      Sunday: Tenancy Turnovers &amp; Key Drops
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas Card (H2) */}
            <div id="areas" className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3 scroll-mt-24">
              <h2 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Active Service Coverage Across London
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                We deploy fully insured domestic teams across London postal areas as well as key commuter belts in Surrey, Hertfordshire, and Berkshire.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                {siteConfig.areasServed.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 rounded-md font-medium text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 pt-2 italic">
                * Note: Sample service coverage list for demonstration purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Client FAQs Section Component */}
        <FaqSection />
      </div>
    </div>
  );
}
