import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Star,
  ArrowRight,
  CheckCircle2,
  Check,
  Clock,
  Award,
  MapPin,
} from "lucide-react";
import { siteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "London Homecare | Professional Home Cleaning Services in London",
  description:
    "Professional home cleaning services in London including regular home cleaning, deep cleaning and end of tenancy cleaning. Reliable, DBS-vetted housekeepers and £2M insurance.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "London Homecare | Professional Home Cleaning Services in London",
    description:
      "Reliable, DBS-vetted housekeepers providing regular home cleaning, deep cleaning and end of tenancy cleaning across London.",
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function HomePage() {
  const services = [
    {
      title: "Regular Home Cleaning",
      slug: "regular",
      tagline: "Weekly or Fortnightly Care",
      description:
        "Consistent, reliable domestic upkeep tailored to your family's routine. Keep your living rooms, kitchen, bedrooms, and bathrooms spotless every single week with a dedicated cleaner.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Professional housekeeper dusting and cleaning a modern living room",
      features: [
        "Dedicated cleaner matched to your home",
        "Dusting, vacuuming, mopping & surfaces",
        "Kitchen & bathroom sanitisation",
        "Optional laundry & bed linen change",
      ],
      priceGuide: "From £18.50 / hour",
    },
    {
      title: "Deep Cleaning",
      slug: "deep",
      tagline: "Top-to-Bottom Reset",
      description:
        "An intensive, restorative overhaul that eradicates hidden dust, lime scale, and stubborn grime from hard-to-reach spaces, tile grout, skirting boards, and appliances.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Intensive deep cleaning and sanitisation of kitchen tiles and work surfaces",
      features: [
        "Full kitchen degrease & lime scale removal",
        "Behind furniture & skirting boards scrub",
        "Tiles, grout & internal window glass",
        "Ideal for spring cleans & post-parties",
      ],
      priceGuide: "Fixed quotes from £145",
    },
    {
      title: "End of Tenancy Cleaning",
      slug: "tenancy",
      tagline: "100% Deposit Back Guarantee",
      description:
        "Rigorous tenancy turnover cleans conforming strictly to UK letting agent & inventory clerk checklists. Includes complete oven dip-tank degreasing and a 72-hour re-clean guarantee.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Spotless London apartment prepared for end of tenancy inventory inspection",
      features: [
        "Approved by top UK estate & letting agents",
        "Full professional oven dip-tank clean",
        "72-hour re-clean guarantee if clerk flags items",
        "Official itemised VAT invoice for deposit return",
      ],
      priceGuide: "From £180 for studio / 1-bed",
    },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Vetted & DBS Checked",
      description:
        "Every housekeeper undergoes identity verification, right-to-work checks, and strict criminal background screening.",
    },
    {
      icon: Award,
      title: "£2,000,000 Insured",
      description:
        "Full public liability insurance coverage gives you complete peace of mind while we care for your property.",
    },
    {
      icon: Clock,
      title: "Punctual & Consistent",
      description:
        "Arriving on time with structured cleaning checklists designed to uphold British domestic standards.",
    },
    {
      icon: Sparkles,
      title: "Eco-Friendly Supplies",
      description:
        "Non-toxic, cruelty-free cleaning solutions safe for children, pets, and delicate home surfaces.",
    },
  ];

  const testimonials = [
    {
      quote:
        "London Homecare has looked after our flat in Kensington for over a year now. Having the exact same cleaner visit every Tuesday has given us so much peace of mind.",
      author: "Charlotte H.",
      location: "Kensington, London",
      stars: 5,
    },
    {
      quote:
        "Booked their End of Tenancy clean when moving out of Richmond. The inventory clerk praised the condition and our deposit was released within 48 hours without a single deduction.",
      author: "Edward B.",
      location: "Richmond upon Thames",
      stars: 5,
    },
    {
      quote:
        "The deep spring clean was extraordinary. The grout in the master bathroom looked brand new and the oven was immaculate. Worth every penny.",
      author: "Siobhan M.",
      location: "St Albans, Hertfordshire",
      stars: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-20 lg:py-28">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Primary SEO H1 & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Premier UK Domestic &amp; Tenancy Cleaning</span>
              </div>

              {/* Exact SEO H1 communicating Home cleaning, Cleaning services, London */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  Professional Home Cleaning Services in London
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-200">
                  Spotless living, effortlessly managed.
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Reliable, DBS-vetted housekeepers providing regular home cleaning, deep cleaning and end of tenancy cleaning across London.
              </p>

              {/* Action Buttons with clear descriptive anchor text */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-teal-600 hover:bg-teal-500 shadow-lg shadow-teal-700/30 transition group"
                >
                  <span>Book a Clean Online</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition"
                >
                  <span>View Our 3 Services</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>DBS Background Checked</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>£2M Public Liability Cover</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Free Reschedule up to 24h</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with accessible descriptive alt text */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                    alt="Sunlit, impeccably maintained London townhouse living room"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-white text-xs font-bold">4.9 / 5.0</span>
                      </div>
                      <span className="text-xs text-teal-400 font-medium">1,200+ Verified UK Reviews</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      &quot;The most dependable cleaning service we have used in London.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section (H2) */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Tailored Cleaning Solutions
            </h2>
            <p className="text-base text-slate-600">
              Whether you need routine weekly housekeeping, a seasonal deep clean, or an inventory-certified tenancy handover, we have the specialized package for you.
            </p>
          </div>

          {/* Service Cards Grid (H3 for each service) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {service.tagline}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700 flex-grow">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-teal-600 mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                        Pricing Guide
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {service.priceGuide}
                      </span>
                    </div>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-teal-600 hover:text-teal-700 group-hover:underline"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-6 py-3 rounded-xl transition"
            >
              <span>Explore full service breakdowns &amp; instant price calculator</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section (H2) - Requirement 3 */}
      <section id="areas" className="py-16 bg-slate-50 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Geographic Coverage</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Home Cleaning Services Across London
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              London Homecare provides professional domestic cleaners, deep cleans, and end of tenancy handovers to private homes, flats, and rentals throughout Greater London and key commuter communities.
            </p>
          </div>

          {/* Clean structured grid of sample service areas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {siteConfig.areasServed.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-xs hover:border-teal-500 hover:shadow-sm transition"
              >
                <span className="text-xs font-semibold text-slate-800 block">
                  {area}
                </span>
                <span className="text-[10px] text-teal-600 font-medium">
                  Service Available
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            <p>
              Note: The above list represents example service coverage for this demonstration project. Need cleaning in your postcode?{" "}
              <Link
                href="/contact"
                className="text-teal-600 hover:text-teal-700 font-semibold underline"
              >
                Check postcode availability on our contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us (H2 & H3s) */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why British Homeowners Trust London Homecare
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              We eliminate the stress of hiring unverified cleaners. Professional standards, clear accountability, and complete property protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (H2) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Loved by Homeowners &amp; Tenants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3" aria-label={`${t.stars} out of 5 stars`}>
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{t.author}</span>
                  <span className="text-[11px] text-slate-500">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner (H2) */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready for a cleaner, fresher home?
            </h2>
            <p className="text-teal-100 text-sm max-w-xl">
              Get an instant quotation or book your domestic housekeeper online in under 60 seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-md transition"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+442079460912"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold border border-teal-500 transition"
            >
              Call 020 7946 0912
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
