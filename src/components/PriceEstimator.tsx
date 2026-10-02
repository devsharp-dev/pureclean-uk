"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, Clock, ArrowRight } from "lucide-react";

export default function PriceEstimator() {
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
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Service Type
              </span>
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
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Clean Frequency
                </span>
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
                <label htmlFor="estimator-bedrooms" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Bedrooms: {bedrooms}
                </label>
                <div className="flex items-center space-x-2" id="estimator-bedrooms">
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
                      aria-label={`${num} bedrooms`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="estimator-bathrooms" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Bathrooms: {bathrooms}
                </label>
                <div className="flex items-center space-x-2" id="estimator-bathrooms">
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
                      aria-label={`${num} bathrooms`}
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
                Sample rate guide. No payment required upfront.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
