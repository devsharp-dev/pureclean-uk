import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calculator,
  UserCheck,
  CalendarDays,
} from "lucide-react";
import PriceEstimator from "@/components/PriceEstimator";
import { siteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Cleaning Services in London | Regular, Deep & End of Tenancy",
  description:
    "Explore professional home cleaning services in London. Reliable regular domestic housekeeping, restorative deep spring cleaning, and guaranteed end of tenancy cleaning.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Home Cleaning Services in London | London Homecare",
    description:
      "Explore professional home cleaning services in London: regular domestic cleaning, restorative deep cleans, and guaranteed tenancy turnovers.",
    url: `${siteUrl}/services`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Services Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive UK Cleaning Packages</span>
          </div>

          {/* Exact H1 required by prompt */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Home Cleaning Services in London
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From flexible recurring domestic housekeeping to thorough deep cleans and landlord-approved end of tenancy sanitisation. Every visit is backed by our British quality standard.
          </p>

          {/* Quick jump anchor links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#regular"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700 transition"
            >
              1. Regular Home Cleaning
            </a>
            <a
              href="#deep"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700 transition"
            >
              2. Deep Cleaning
            </a>
            <a
              href="#tenancy"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700 transition"
            >
              3. End of Tenancy Cleaning
            </a>
            <a
              href="#calculator"
              className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-xs sm:text-sm font-semibold text-white transition flex items-center"
            >
              <Calculator className="w-3.5 h-3.5 mr-1.5" />
              Estimate Price
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Service 1: Regular Home Cleaning (H2) */}
        <section id="regular" className="scroll-mt-24">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional cleaner performing regular domestic cleaning tasks in a London home"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    Weekly or Fortnightly
                  </div>
                </div>
                {/* Micro trust badge */}
                <div className="absolute -bottom-4 right-4 bg-white p-3.5 rounded-xl shadow-md border border-slate-200 hidden sm:flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm">
                    1:1
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800">Same Dedicated Cleaner</p>
                    <p className="text-slate-500">Every single visit</p>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">
                    Service Option 01
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Regular Home Cleaning
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Consistent, bespoke domestic care so you never have to worry about housework again.
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Our regular home cleaning service is crafted around your personal schedule and preferences. We pair you with a vetted, permanent cleaner who gets to know your home, ensuring your spaces remain spotless, orderly, and hygienic week in, week out.
                </p>

                {/* Who it is suitable for & When needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Who It&apos;s Suitable For</span>
                    </div>
                    <p className="text-slate-600">
                      Busy professionals, growing families, and homeowners seeking predictable, high-standard weekly or fortnightly domestic upkeep.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <CalendarDays className="w-3.5 h-3.5 text-teal-600" />
                      <span>When You Need It</span>
                    </div>
                    <p className="text-slate-600">
                      Ideal for maintaining continuous cleanliness, keeping kitchens and bathrooms hygienic, and reclaiming your weekends.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    What is included in each regular visit:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Dusting all surfaces &amp; ornaments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Vacuuming carpets &amp; mopping hard floors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Bathroom sanitisation, taps &amp; showers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Kitchen worktops, hob, sink &amp; splashbacks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Emptying bins &amp; refreshing bin liners</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Bed making &amp; optional linen change</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Standard UK Rate:</span>
                    <div className="text-xl font-bold text-slate-900">
                      £18.50 <span className="text-xs font-normal text-slate-600">/ hour (minimum 2 hours)</span>
                    </div>
                  </div>
                  <Link
                    href="/contact?service=regular"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    <span>Book Regular Home Cleaning</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Deep Cleaning (H2) */}
        <section id="deep" className="scroll-mt-24">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text side */}
              <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">
                    Service Option 02
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Deep Cleaning
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Intensive restorative hygiene for periodic rejuvenation or special occasions.
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Deep cleaning tackles grime, grease, and built-up lime scale that routine weekly cleaning cannot touch. Recommended once or twice per year, before family gatherings, or after home renovations to bring every corner back to pristine showcase condition.
                </p>

                {/* Who it is suitable for & When needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Who It&apos;s Suitable For</span>
                    </div>
                    <p className="text-slate-600">
                      Properties that haven&apos;t had intensive cleaning for several months, post-renovation spaces, or households preparing for festive hosting.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <CalendarDays className="w-3.5 h-3.5 text-teal-600" />
                      <span>When You Need It</span>
                    </div>
                    <p className="text-slate-600">
                      Ideal for spring resets, seasonal renewals, after construction work, or prior to putting a property on the sales market.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Comprehensive deep clean scope includes:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Intensive bathroom lime scale eradication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Tile grout scrub &amp; soap scum removal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Skirting boards, door frames &amp; radiators</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Behind and underneath movable furniture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Internal window glass, sills &amp; ledges</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Degreasing kitchen extractor hood exterior</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Fixed Package Prices:</span>
                    <div className="text-xl font-bold text-slate-900">
                      From £145 <span className="text-xs font-normal text-slate-600">(all supplies &amp; equipment provided)</span>
                    </div>
                  </div>
                  <Link
                    href="/contact?service=deep"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    <span>Request Deep Cleaning</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-6 relative order-1 lg:order-2">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
                    alt="Pristine bathroom and tile surface after an intensive deep cleaning treatment"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    Top-to-Bottom Overhaul
                  </div>
                </div>
                {/* Micro badge */}
                <div className="absolute -bottom-4 left-4 bg-white p-3.5 rounded-xl shadow-md border border-slate-200 hidden sm:flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm">
                    PRO
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800">Eco-Friendly Solutions</p>
                    <p className="text-slate-500">Cruelty-free &amp; Pet-safe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: End of Tenancy Cleaning (H2) */}
        <section id="tenancy" className="scroll-mt-24">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="Clean and empty London rental property ready for check-out inventory inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    Deposit Refund Guaranteed
                  </div>
                </div>
                {/* Micro trust badge */}
                <div className="absolute -bottom-4 right-4 bg-white p-3.5 rounded-xl shadow-md border border-slate-200 hidden sm:flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm">
                    72h
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-800">Free Re-clean Guarantee</p>
                    <p className="text-slate-500">Estate agent check-out approved</p>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">
                    Service Option 03
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    End of Tenancy Cleaning
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Designed specifically for tenants, landlords, and letting agents to secure deposit returns.
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Moving out in the UK is stressful enough. Our tenancy turnover package rigorously adheres to official inventory agency checklists (ARLA &amp; TDS standards). If the inventory clerk points out any discrepancies within 72 hours, our team returns free of charge.
                </p>

                {/* Who it is suitable for & When needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Who It&apos;s Suitable For</span>
                    </div>
                    <p className="text-slate-600">
                      Tenants vacating rented accommodation, private landlords preparing for new tenants, and estate agents requiring turn-key handover.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-slate-900">
                      <CalendarDays className="w-3.5 h-3.5 text-teal-600" />
                      <span>When You Need It</span>
                    </div>
                    <p className="text-slate-600">
                      At tenancy conclusion before the official inventory check-out inspection, ensuring 100% deposit return compliance.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Tenancy package key inclusions:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Deep oven dip-tank degreasing included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Inside &amp; outside all cupboards and drawers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Fridge/freezer defrost &amp; sanitisation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Washing machine filter &amp; detergent tray</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Carpets vacuumed &amp; hard floors buffed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Official itemised invoice for deposit release</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Starting Package:</span>
                    <div className="text-xl font-bold text-slate-900">
                      From £180 <span className="text-xs font-normal text-slate-600">(studio / 1 bedroom)</span>
                    </div>
                  </div>
                  <Link
                    href="/contact?service=tenancy"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    <span>Book End of Tenancy Cleaning</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Instant Price Estimator Section */}
        <PriceEstimator />
      </div>
    </div>
  );
}
