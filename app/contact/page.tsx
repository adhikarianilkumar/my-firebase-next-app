import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-brand-sand-50 py-12">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Sidebar Block Card */}
          <div className="lg:col-span-4 bg-white p-6 md:p-8 rounded-brand-md border border-brand-line shadow-brand-md flex flex-col justify-between min-h-[500px]">
            <div>
              <h1 className="text-step-3 font-display font-bold text-brand-ink-dark mb-4">Start care with a team that puts you first</h1>
              <p className="text-step-minus-1 text-brand-ink-soft mb-8 leading-relaxed">Call us for a free, no-pressure conversation about what would help most. There is no obligation and no cost — we would rather talk it through than have you guess.</p>
              
              <div className="space-y-6">
                <div className="pb-4 border-b border-brand-line">
                  <span className="block text-[0.78rem] font-bold tracking-wider text-brand-muted uppercase mb-1">Phone Number</span>
                  <a href="tel:9045550100" className="text-step-2 font-bold text-brand-clay-600 hover:text-brand-clay-700 hover:underline transition-colors">(904) 555-0100</a>
                  <p className="text-step-minus-1 text-brand-muted m-0 mt-1">The fastest way to reach us.</p>
                </div>
                
                <div className="pb-4 border-b border-brand-line">
                  <span className="block text-[0.78rem] font-bold tracking-wider text-brand-muted uppercase mb-1">Email Address</span>
                  <a href="mailto:info@optimalhomecareservices.com" className="text-step-0 font-semibold text-brand-ink-dark break-all hover:text-brand-clay-600 transition-colors">info@optimalhomecareservices.com</a>
                  <p className="text-step-minus-1 text-brand-muted m-0 mt-1">We reply within one business day.</p>
                </div>

                <div>
                  <span className="block text-[0.78rem] font-bold tracking-wider text-brand-muted uppercase mb-1">Service Hours</span>
                  <p className="text-step-0 font-semibold text-brand-ink-dark m-0">Care scheduling 24/7</p>
                  <p className="text-step-minus-1 text-brand-muted m-0 mt-1">Office hours customizable to your needs.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-brand-line text-step-minus-1 text-brand-ink-soft italic leading-relaxed">
              Your comfort, dignity and independence come first. One phone call is all it takes to get started.
            </div>
          </div>

          {/* Interactive Steps Process Target Layout */}
          <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded-brand-md border border-brand-line shadow-brand-sm">
            <h2 className="text-step-2 font-display font-bold text-brand-ink-dark mb-6">Our Care Process</h2>
            
            {/* Visual counter line connection path */}
            <div className="relative border-l-2 border-brand-line pl-8 ml-4 space-y-8">
              {[
                { s: "Consultation", d: "A free phone conversation to understand needs and answer questions." },
                { s: "In-Home Assessment", d: "A care coordinator meets in the home and builds a personalized care plan." },
                { s: "Caregiver Match", d: "We pair clients with trained caregivers whose skills and personality fit their needs." },
                { s: "Care Begins", d: "Services are delivered with respect, reliability and compassion." },
                { s: "Ongoing Support", d: "We maintain communication and make adjustments whenever needs change." }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Absolute Counter Circle Badge */}
                  <span className="absolute -left-[45px] top-0 flex items-center justify-center bg-brand-ink-deep text-white font-display text-step-0 font-semibold rounded-full w-[26px] h-[26px] ring-4 ring-white">
                    {idx + 1}
                  </span>
                  <h3 className="text-step-0 font-body font-bold text-brand-ink-dark mb-1">{step.s}</h3>
                  <p className="text-step-minus-1 text-brand-ink-soft max-w-[62ch] m-0 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>

            {/* Structured Coverage Boundaries Area Tags */}
            <div className="mt-12 pt-8 border-t border-brand-line">
              <h3 className="text-[0.78rem] font-bold tracking-wider text-brand-muted uppercase mb-4">We proudly serve all of Clay County, Florida:</h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {["Fleming Island", "Orange Park", "Middleburg", "Green Cove Springs", "Keystone Heights", "Penney Farms", "& surrounding communities"].map((item, i) => (
                  <li key={i} className="m-0 bg-brand-sand-100 border border-brand-line px-4 py-1.5 rounded-full text-step-minus-1 font-semibold text-brand-ink-dark shadow-brand-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
