import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  CheckCircle,
  Building2,
  Leaf,
} from "lucide-react";
import { siteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About London Homecare | Trusted Domestic Cleaning Specialists in London",
  description:
    "Learn about London Homecare, our DBS-checked cleaners, £2M public liability insurance, living wage employment standards, and dedication to British domestic excellence.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About London Homecare | Trusted Domestic Cleaners in London",
    description:
      "Learn about London Homecare: London domestic cleaning with DBS-vetted housekeepers, £2M insurance, and living wages.",
    url: `${siteUrl}/about`,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
};

export default function AboutPage() {
  const vettingSteps = [
    {
      step: "01",
      title: "Right to Work & Identity Checks",
      desc: "Strict verification of UK passports, biometric residence permits, and proof of address before any applicant is considered.",
    },
    {
      step: "02",
      title: "Enhanced DBS Background Check",
      desc: "Every housekeeper undergoes thorough Disclosure and Barring Service (DBS) police screening for complete customer security.",
    },
    {
      step: "03",
      title: "Two Verified UK References",
      desc: "We speak directly with previous private homeowners or commercial supervisors to verify punctuality, character, and integrity.",
    },
    {
      step: "04",
      title: "Practical British Standard Induction",
      desc: "Comprehensive hands-on training covering surface care, lime scale treatment, hygiene cross-contamination protocols, and key safety.",
    },
  ];

  const team = [
    {
      name: "Alistair Finch",
      role: "Founder & Managing Director",
      bio: "Former hospitality manager with over 15 years in luxury hotel operations across London and the Home Counties.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Eleanor Vance",
      role: "Head of Vetting & Housekeeper Welfare",
      bio: "Dedicated to ensuring all cleaners receive living wages, ethical contracts, and continuous professional development.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Marcus Davies",
      role: "Quality Assurance & Tenancy Specialist",
      bio: "Certified by the British Institute of Cleaning Science (BICSc) with an exacting eye for inventory handover standards.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>British Domestic Excellence</span>
          </div>

          {/* Exact H1 for About Page */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About London Homecare
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            London Homecare was founded in the capital to restore true peace of mind to domestic housekeeping. We combine meticulous British standards, dignified living wages, and unmatched vetting rigor.
          </p>
        </div>
      </section>

      {/* Story & Mission Section (H2) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                Our Story &amp; Philosophy
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                A More Reliable, Ethical Approach to Cleaning
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  For decades, hiring domestic cleaners in the United Kingdom meant dealing with unreliable casual arrangements, high turnover, and unverified agencies operating behind automated booking apps with zero human accountability.
                </p>
                <p>
                  At London Homecare, we decided to build a cleaning service the proper way. We treat our housekeepers as respected professionals—paying the London Living Wage, offering pension schemes, and investing in ongoing training. In return, our clients enjoy unmatched punctuality, meticulous attention to detail, and a familiar, smiling face they can trust with their front door key.
                </p>
                <p>
                  Whether maintaining a period Victorian terrace in Richmond or preparing a luxury penthouse in Canary Wharf for tenant handover, our team delivers consistent hotel-calibre results.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="block text-2xl font-black text-teal-600">15k+</span>
                  <span className="text-xs text-slate-600">Cleans Completed</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="block text-2xl font-black text-teal-600">£2M</span>
                  <span className="text-xs text-slate-600">Public Insurance</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="block text-2xl font-black text-teal-600">4.9★</span>
                  <span className="text-xs text-slate-600">Average UK Score</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80"
                  alt="London Homecare professional housekeeper providing domestic cleaning service"
                  width={1000}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent text-white">
                  <p className="text-sm font-semibold">Living Wage Foundation Accredited</p>
                  <p className="text-xs text-slate-300">Proudly supporting ethical employment across England &amp; Wales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Process (H2 & H3s) */}
      <section id="vetting" className="py-20 bg-slate-100/80 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              Uncompromising Safety
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Stage Vetting Protocol
            </h2>
            <p className="text-sm text-slate-600">
              Only 1 in every 18 applicants qualifies to wear the London Homecare uniform. Here is how we safeguard your family and property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vettingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-teal-600/40 font-mono block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-teal-600">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core British Pillars (H2 & H3s) */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Standards &amp; Company Values
            </h2>
            <p className="text-sm text-slate-600">
              Built on transparency, rigorous property security, and verified environmental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Eco-Friendly Formulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritise plant-based, biodegradable, and low-allergen UK cleaning agents that deliver sparkling results without airborne chemical harshness or plastic micro-beads.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Key Holding &amp; Trust</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over 70% of our clients entrust us with house keys or digital lockbox codes. We utilize double-blind tagged key management ensuring full anonymity and absolute security.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">100% Quality Re-Clean Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If anything falls short of your expectations or letting agent inventory notes, report it within 24 to 72 hours and we will dispatch a team member to rectify it immediately without charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team (H2 & H3s) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              People Behind London Homecare
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Management Team
            </h2>
            <p className="text-sm text-slate-600">
              Passionate professionals dedicated to service reliability and cleaner welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={person.image}
                    alt={`${person.name} - ${person.role} at London Homecare`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg text-slate-900">{person.name}</h3>
                  <p className="text-xs font-semibold text-teal-600">{person.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official UK Company Credentials (H2) */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Official British Company Incorporation
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            {siteConfig.legalName} is a sample demonstration company incorporated under the Companies Act 2006 in England and Wales (Company Registration No. {siteConfig.companyNumber}). Registered Office: {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.postalCode}, United Kingdom. Registered with the Information Commissioner&apos;s Office (ICO) under the Data Protection Act 2018.
          </p>
        </div>
      </section>
    </div>
  );
}
