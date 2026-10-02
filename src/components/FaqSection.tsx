"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need to supply cleaning products and equipment?",
      a: "For Regular Home Cleaning, most clients prefer our cleaners to use their domestic vacuum and preferred supplies to avoid allergen mixing, though we can provide an eco-kit on request. For Deep Cleaning and End of Tenancy Cleaning, our teams bring complete professional gear, steamers, and eco-certified chemicals at no extra charge.",
    },
    {
      q: "Do I need to be at home while the cleaner works?",
      a: "Not at all. Over 70% of our regular clients are at work while we clean. You can provide access via a key safe, concierges, or hand over keys to our secure double-blind key management system.",
    },
    {
      q: "Are your cleaners insured and DBS checked?",
      a: "Yes. Every single team member is vetted, has their UK right to work verified, and holds an enhanced DBS criminal background certificate. We also carry £2,000,000 public liability insurance for total protection.",
    },
    {
      q: "How does the End of Tenancy 72-hour guarantee work?",
      a: "If your letting agent, landlord, or independent inventory clerk flags any item on the check-out report within 72 hours, we send our cleaners back to re-clean the flagged areas completely free of charge.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major UK debit/credit cards, Direct Debit via GoCardless, and BACS bank transfers. You are only invoiced after the service is successfully carried out.",
    },
  ];

  return (
    <section id="faq" className="mt-24 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
          Got Questions?
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center space-x-4 focus:outline-none"
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-bold text-sm text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-teal-600 shrink-0 transition-transform ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            {openFaq === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
