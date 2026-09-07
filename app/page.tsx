import React from 'react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Textured Responsive Hero Layout Frame */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-sand-50 via-brand-sand-50 to-brand-sand-100 border-b border-brand-line py-12 md:py-24">
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="eyebrow inline-block font-bold tracking-widest text-[0.8rem] text-brand-clay-700 uppercase mb-2">
                Serving Clay County & Northeast Florida
              </span>
              <h1 className="text-step-4 font-display font-bold text-brand-ink-dark leading-tight mb-4">
                Safe, dependable care — <span className="text-brand-clay-600 block sm:inline">right at home.</span>
              </h1>
              <p className="text-step-1 text-brand-ink-soft max-w-[46ch] mx-auto lg:mx-0 mb-6 leading-relaxed">
                In-home care for seniors and adults across Clay County and neighboring counties. We help you or your loved one live comfortably, confidently and independently at home.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="tel:9045550100" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 font-semibold text-white bg-brand-clay-600 hover:bg-brand-clay-700 rounded-full shadow-brand-sm transition-all hover:-translate-y-0.5">
                  Call (904) 555-0100
                </a>
                <a href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 font-semibold text-brand-ink-dark bg-white border-2 border-brand-line hover:bg-brand-sand-100 rounded-full transition-all hover:-translate-y-0.5">
                  Request a consultation
                </a>
              </div>
            </div>

            {/* Graphic Media Placeholder Box */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[6/5] bg-brand-sand-100 rounded-brand-lg border-6 border-white shadow-brand-lg bg-[radial-gradient(closest-side_at_36%_30%,rgba(200,122,81,0.1),transparent_100%)]">
                <div className="absolute -bottom-[14px] -right-[14px] w-[58%] h-[58%] border-2 border-brand-clay-500 rounded-brand-lg opacity-35 z-[-1]" />
              </div>
            </div>

          </div>

          {/* Core Trust Indicators Strip */}
          <div className="flex flex-wrap gap-4 md:gap-10 justify-center lg:justify-start pt-4 mt-8 border-t border-brand-line text-step-minus-1 font-semibold text-brand-ink-soft">
            <div className="flex items-center gap-2"><span className="text-brand-clay-600">✓</span> Background-checked caregivers</div>
            <div className="flex items-center gap-2"><span className="text-brand-clay-600">✓</span> Care scheduling 24/7</div>
            <div className="flex items-center gap-2"><span className="text-brand-clay-600">✓</span> Locally owned & operated</div>
          </div>
        </div>
      </section>

      {/* Main Core Value Features Section Grid */}
      <section className="py-16">
        <div className="wrap">
          <div className="text-center mb-12 max-w-[760px] mx-auto">
            <h2 className="text-step-3 font-display font-bold text-brand-ink-dark mb-3">Care built around the person, not the schedule</h2>
            <p className="text-brand-ink-soft text-step-0">We believe home is more than a place — it's comfort, identity and dignity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Local Caregivers", text: "Our team lives and works here. They know Clay County communities, the hospitals, and the roads between them." },
              { title: "Personalized Care Plans", text: "Every plan is built in the home, around real routines and preferences — then adjusted whenever needs change." },
              { title: "Consistent Communication", text: "Families and health providers stay informed. No wondering whether the visit happened or how it went." },
              { title: "Flexible Scheduling", text: "From a few hours a week to full-time support, including evenings and weekends." },
              { title: "Trusted, Screened Professionals", text: "Background checks, training and ongoing supervision for every caregiver, without exception." },
              { title: "Skilled & Supportive Care", text: "Nursing services and everyday support from one team, so care doesn't fragment as needs grow." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-brand-md border border-brand-line shadow-brand-sm hover:shadow-brand-md transition-all">
                <h3 className="text-step-1 font-bold text-brand-ink-dark mb-2 flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-clay-600 mr-2.5 inline-block"></span>
                  {item.title}
                </h3>
                <p className="text-step-minus-1 text-brand-ink-soft leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
