"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                id="contact-name"
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
              <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                id="contact-email"
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
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                UK Contact Number *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="e.g. 020 7946 0912 or 07700 900123"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="contact-postcode" className="block text-xs font-semibold text-slate-700 mb-1">
                London / UK Postcode *
              </label>
              <input
                id="contact-postcode"
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
              <label htmlFor="contact-bedrooms" className="block text-xs font-semibold text-slate-700 mb-1">
                Property Size / Bedrooms
              </label>
              <select
                id="contact-bedrooms"
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
              <label htmlFor="contact-date" className="block text-xs font-semibold text-slate-700 mb-1">
                Target Date
              </label>
              <input
                id="contact-date"
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
            <label htmlFor="contact-notes" className="block text-xs font-semibold text-slate-700 mb-1">
              Notes or Special Requirements (Optional)
            </label>
            <textarea
              id="contact-notes"
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
  );
}
