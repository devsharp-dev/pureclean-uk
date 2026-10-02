"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Calculator,
} from "lucide-react";

export default function ServicesPage() {
  // State for the interactive Price Estimator
  const [selectedService, setSelectedService] = useState<"regular" | "deep" | "tenancy">("regular");
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [frequency, setFrequency] = useState<"weekly" | "fortnightly" | "one-off">("weekly");

  // Calculate rough estimates in GBP
  const calculateEstimate = () => {
    if (selectedService === "regular") {
      const baseHours = Math.max(2, bedrooms * 0.75 + bathrooms * 0.75);
      const roundedHours = Math.round(baseHours * 2) / 2;
      const hourlyRate = frequency === "weekly" ? 18.5 : 19.5;
      return {
        hours: `${roundedHours} hrs / visit`,
        price: `£${(roundedHours * hourlyRate).toFixed(2)}`,
        note: `Billed per clean (${frequency})`,
      };
    } else if (selectedService === "deep") {
      const base = 120 + bedrooms * 30 + bathrooms * 25;
      return {
        hours: `${Math.round(bedrooms * 1.5 + bathrooms * 1.2 + 2)} - ${Math.round(bedrooms * 1.5 + bathrooms * 1.2 + 4)} hrs total`,
        price: `£${base}`,
        note: "One-off comprehensive overhaul",
      };
    } else {
      // Tenancy
      const base = 160 + bedrooms * 40 + bathrooms * 30;
      return {
        hours: "Full day / guaranteed pass",
        price: `£${base}`,
        note: "Includes oven clean & 72hr inventory guarantee",
      };
    }
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Services Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive UK Cleaning Packages</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Specialist Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From flexible recurring domestic housekeeping to thorough deep cleans and landlord-approved end of tenancy sanitisation. Every visit is backed by our UK quality standard.
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
        {/* Service 1: Regular Home Cleaning */}
        <section id="regular" className="scroll-mt-24">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                    alt="Regular Home Cleaning London"
                    fill
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

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    What is included in each regular visit:
                  </h4>
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
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    <span>Book Regular Clean</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Deep Cleaning */}
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
                    Deep Spring Cleaning
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Intensive restorative hygiene for periodic rejuvenation or special occasions.
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Deep cleaning tackles grime, grease, and built-up lime scale that routine weekly cleaning cannot touch. Recommended once or twice per year, before family gatherings, or after home renovations to bring every corner back to pristine showcase condition.
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Comprehensive deep clean scope includes:
                  </h4>
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
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    <span>Request Deep Clean</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-6 relative order-1 lg:order-2">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
                    alt="Deep Cleaning Services UK"
                    fill
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

        {/* Service 3: End of Tenancy Cleaning */}
        <section id="tenancy" className="scroll-mt-24">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                    alt="End of Tenancy Cleaning London UK"
                    fill
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

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Tenancy package key inclusions:
                  </h4>
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
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    <span>Book Tenancy Clean</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Instant Price Estimator Section */}
        <section id="calculator" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-700">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold border border-teal-500/20">
                <Calculator className="w-3.5 h-3.5" />
                <span>Transparent British Pricing</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Instant Price &amp; Time Estimator
              </h2>
              <p className="text-sm text-slate-300">
                Configure your home size and service below to see an immediate guideline estimate in GBP.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
              {/* Form controls */}
              <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700 space-y-6">
                {/* 1. Service Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    1. Select Service Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "regular" as const, label: "Regular Clean" },
                      { id: "deep" as const, label: "Deep Clean" },
                      { id: "tenancy" as const, label: "Tenancy Clean" },
                    ].map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setSelectedService(svc.id)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-semibold transition border text-center ${
                          selectedService === svc.id
                            ? "bg-teal-600 text-white border-teal-500 shadow-md"
                            : "bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700"
                        }`}
                      >
                        {svc.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Frequency (only if regular) */}
                {selectedService === "regular" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      2. Clean Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "weekly" as const, label: "Weekly (£18.50/hr)" },
                        { id: "fortnightly" as const, label: "Fortnightly (£19.50/hr)" },
                      ].map((freq) => (
                        <button
                          key={freq.id}
                          type="button"
                          onClick={() => setFrequency(freq.id)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium transition border ${
                            frequency === freq.id
                              ? "bg-teal-500/20 text-teal-300 border-teal-500"
                              : "bg-slate-700/40 text-slate-300 border-slate-600"
                          }`}
                        >
                          {freq.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bedrooms & Bathrooms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Bedrooms: {bedrooms}
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setBedrooms(num)}
                          className={`w-10 h-10 rounded-lg text-xs font-bold border transition ${
                            bedrooms === num
                              ? "bg-teal-600 text-white border-teal-500"
                              : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Bathrooms: {bathrooms}
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setBathrooms(num)}
                          className={`w-10 h-10 rounded-lg text-xs font-bold border transition ${
                            bathrooms === num
                              ? "bg-teal-600 text-white border-teal-500"
                              : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate Output Box */}
              <div className="lg:col-span-5 bg-gradient-to-b from-teal-900/60 to-slate-900/80 p-8 rounded-2xl border border-teal-500/30 text-center flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-teal-400">
                    Estimated Guide
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
                    {estimate.price}
                  </div>
                  <p className="text-xs text-teal-200 mt-1">{estimate.note}</p>
                  <div className="mt-4 inline-flex items-center text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                    <span>Duration: {estimate.hours}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/contact?service=${selectedService}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`}
                    className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-lg transition"
                  >
                    <span>Proceed with this Estimate</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                  <p className="text-[11px] text-slate-400">
                    No credit card required upfront. Free cancellation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
