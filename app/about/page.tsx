import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-brand-sand-50 py-12">
      <div className="wrap">
        
        {/* Editorial Introduction Block Banner */}
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <span className="eyebrow block font-bold tracking-widest text-[0.8rem] text-brand-clay-700 uppercase mb-2">About Us</span>
          <h1 className="text-step-4 font-display font-bold text-brand-ink-dark mb-4">Home is more than a place</h1>
          <p className="text-step-2 font-display text-brand-clay-700 leading-relaxed font-medium">
            It's comfort, identity and dignity. Our mission is to make staying home safer, easier and more joyful for every person we serve.
          </p>
        </div>

        {/* Agency Breakdown Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-step-3 font-display font-bold text-brand-ink-dark mb-4">A community-focused agency</h2>
            <p className="text-step-0 text-brand-ink-soft leading-relaxed max-w-[68ch]">
              Optimal Homecare Services is a community-focused home-care agency dedicated to serving families throughout Clay County, Florida. We provide person-centered, flexible and reliable in-home support for seniors, individuals recovering after hospital stays, and adults living with chronic conditions.
            </p>
            <p className="text-step-0 text-brand-ink-soft leading-relaxed max-w-[68ch]">
              We are local. Our caregivers live in the communities they serve — they know the neighbourhoods, the hospitals, and the families. That familiarity makes reliable scheduling and genuine continuity of care possible.
            </p>
          </div>
          
          <div id="mission" className="md:col-span-5 bg-white p-6 md:p-8 rounded-brand-md border border-brand-line border-t-5 border-t-brand-clay-600 shadow-brand-sm scroll-mt-28">
            <h3 className="text-[0.82rem] font-bold tracking-wider text-brand-clay-700 uppercase mb-3">Our Mission</h3>
            <p className="text-step-1 font-display font-semibold text-brand-ink-dark leading-snug mb-3">
              At Optimal Homecare Services LLC, our mission is to enhance quality of life and improve health outcomes through compassionate, high-quality skilled and supportive home care.
            </p>
            <p className="text-step-minus-1 text-brand-ink-soft leading-relaxed m-0">
              We provide individualized clinical and supportive services that empower clients to remain safe, independent and comfortable in their homes — while maintaining the highest standards of professionalism, integrity and respect.
            </p>
          </div>
        </div>

        {/* Guiding Commitments */}
        <div className="mb-20">
          <div className="text-center mb-10 max-w-[760px] mx-auto">
            <h2 className="text-step-3 font-display font-bold text-brand-ink-dark mb-2">What we stand for</h2>
            <p className="text-step-0 text-brand-ink-soft m-0">Commitments we hold ourselves to daily.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Local Caregivers", d: "People who understand Clay County communities, because they live here." },
              { t: "Personalized Care Plans", d: "Tailored to individual needs, built in the home, revisited as things change." },
              { t: "Consistent Communication", d: "With families and health providers, so nobody is left guessing." },
              { t: "Flexible Scheduling", d: "From a few hours a week to full-time support, adjusted as needs shift." },
              { t: "Screened Professionals", d: "Committed to safety and respect, verified before they ever enter your home." },
              { t: "Dignity, Always", d: "Care delivered the way we would want it delivered to our own families." }
            ].map((commit, i) => (
              <div key={i} className="bg-white p-6 rounded-brand-md border border-brand-line shadow-brand-sm">
                <h4 className="text-step-1 font-body font-bold text-brand-ink-dark mb-2">{commit.t}</h4>
                <p className="text-step-minus-1 text-brand-ink-soft m-0 leading-relaxed">{commit.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Safety Protocol Assurance Component */}
        <div id="safety" className="bg-brand-ink-dark text-white rounded-brand-lg p-8 md:p-12 scroll-mt-28 shadow-brand-lg">
          <div className="max-w-[760px] mx-auto text-center mb-10">
            <h2 className="text-step-3 font-display font-bold text-white mb-3">Trust is earned before the first visit</h2>
            <p className="text-step-0 text-white/80 m-0 leading-relaxed">
              All caregivers undergo background checks, training and ongoing supervision. We follow recognized care standards and maintain strict infection-control practices to protect our clients and their families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-step-minus-1">
            {[
              "Background checks on every caregiver, before placement",
              "Ongoing training and competency verification",
              "Active supervision by care coordinators, not just at intake",
              "Recognized care standards applied consistently",
              "Strict infection-control practices in every home"
            ].map((rule, idx) => (
              <div key={idx} className="bg-brand-ink-deep border border-brand-ink-soft p-5 rounded-brand-md flex items-start gap-3">
                <span className="text-brand-clay-500 font-bold text-step-1 leading-none">✓</span>
                <span className="text-white/90 leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
