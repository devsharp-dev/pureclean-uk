"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "regular",
    bedrooms: "2",
    date: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate swift form processing
    setSubmitted(true);
  };

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
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>London &amp; UK Customer Enquiries</span>
          </div>
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
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Request an Instant Booking or Quote
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details and our team will confirm availability within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You, {formData.name || "Valued Client"}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your enquiry for{" "}
                    <span className="font-semibold text-teal-800">
                      {formData.service === "regular"
                        ? "Regular Home Cleaning"
                        : formData.service === "deep"
                        ? "Deep Cleaning"
                        : "End of Tenancy Cleaning"}
                    </span>{" "}
                    has been received. One of our London coordination managers will call or email you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        postcode: "",
                        service: "regular",
                        bedrooms: "2",
                        date: "",
                        notes: "",
                      });
                    }}
                    className="inline-flex items-center text-xs font-semibold text-teal-700 underline pt-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Select Service Required *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: "regular", name: "Regular Cleaning" },
                        { id: "deep", name: "Deep Spring Clean" },
                        { id: "tenancy", name: "End of Tenancy" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition ${
                            formData.service === item.id
                              ? "bg-teal-50 border-teal-600 text-teal-900 shadow-sm"
                              : "border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={item.id}
                            checked={formData.service === item.id}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="sr-only"
                          />
                          <span>{item.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Oliver Sinclair"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="oliver@example.co.uk"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Phone and Postcode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        UK Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 07700 900123"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        UK Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. WC2H 9JQ or SW3 4RB"
                        value={formData.postcode}
                        onChange={(e) =>
                          setFormData({ ...formData, postcode: e.target.value.toUpperCase() })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm uppercase focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Bedrooms & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Bedrooms
                      </label>
                      <select
                        value={formData.bedrooms}
                        onChange={(e) =>
                          setFormData({ ...formData, bedrooms: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      >
                        <option value="studio">Studio Flat</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                        <option value="5+">5+ Bedrooms / Townhouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  {/* Special requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Notes or Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We have two indoor cats; need key collection from concierge; oven clean required..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>Submit Cleaning Enquiry</span>
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Your details are held securely under UK GDPR &amp; Data Protection Act.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: UK Office Contact Cards & Coverage */}
          <div className="lg:col-span-5 space-y-6">
            {/* London Office Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Registered Headquarters
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  PureClean UK Office
                </h3>
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
                    <span>
                      71-75 Shelton Street<br />
                      Covent Garden<br />
                      London, WC2H 9JQ<br />
                      United Kingdom
                    </span>
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
                      href="tel:+442079460912"
                      className="text-teal-300 hover:text-white transition font-medium"
                    >
                      +44 (0) 20 7946 0912
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
                      href="mailto:enquiries@purecleanuk.co.uk"
                      className="text-teal-300 hover:text-white transition"
                    >
                      enquiries@purecleanuk.co.uk
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
                      Monday – Friday: 08:00 – 18:00 GMT<br />
                      Saturday: 09:00 – 16:00 GMT<br />
                      Sunday: Tenancy Turnovers &amp; Key Drops
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Active Service Coverage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We currently deploy fully insured domestic teams across all London postal areas (SW, W, NW, N, E, SE, EC, WC) as well as prime commuter belts in Surrey, Hertfordshire, and Berkshire.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px]">
                {["Central London", "Kensington & Chelsea", "Richmond", "Wimbledon", "Islington", "Camden", "Canary Wharf", "Surrey", "St Albans"].map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 rounded-md font-medium text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client FAQs Section */}
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
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 focus:outline-none"
                >
                  <span className="font-bold text-sm text-slate-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-600 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
