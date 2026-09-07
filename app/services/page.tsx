import React from 'react';

export default function ServicesPage() {
  const serviceCards = [
    { id: "skilled", title: "Skilled Homecare", desc: "Clinical care delivered in the home by licensed professionals, coordinated with your physician.", items: ["Nursing care and assessments", "Wound care management", "Medication administration and teaching", "IV therapy monitoring", "Catheter care and management", "Disease management education (Diabetes, Cardiac, Respiratory)"], isClay: false },
    { id: "personal", title: "Personal Care", desc: "Respectful, hands-on help with the daily tasks that keep dignity and independence intact.", items: ["Bathing, grooming and hygiene", "Dressing and mobility assistance", "Fall-prevention support"], isClay: true },
    { id: "daily", title: "Daily Living & Homemaking", desc: "Keeping the household running so home stays comfortable and safe.", items: ["Meal preparation", "Light housekeeping and laundry", "Grocery shopping and errands"], isClay: false },
    { id: "companionship", title: "Companionship", desc: "Isolation affects health as much as any diagnosis. Company matters.", items: ["Conversation and social support", "Recreational activities and hobbies", "Appointment accompaniment"], isClay: false },
    { id: "recovery", title: "Post-Hospital / Recovery Support", desc: "The weeks after discharge are when readmission risk is highest. We help you through them.", items: ["Medication reminders", "Monitoring for changes in condition", "Assistance with rest, mobility and routines"], isClay: false },
    { id: "respite", title: "Respite Care", desc: "Family caregivers need rest too. Taking a break is not giving up.", items: ["Short-term relief for family caregivers", "Flexible daytime, evening and weekend coverage"], isClay: false }
  ];

  return (
    <div className="bg-brand-sand-50 py-12">
      <div className="wrap">
        
        {/* Banner Section Head */}
        <div className="max-w-[760px] mx-auto text-center mb-12">
          <span className="eyebrow block font-bold tracking-widest text-[0.8rem] text-brand-clay-700 uppercase mb-2">Our Services</span>
          <h1 className="text-step-4 font-display font-bold text-brand-ink-dark mb-4">Skilled and everyday care from one trusted team</h1>
          <p className="text-step-1 text-brand-ink-soft leading-relaxed">We offer skilled nursing care and home health services designed to meet clients where they are and support daily life with comfort and compassion.</p>
        </div>

        {/* Thick Vertical Accent Service Listing Stack */}
        <div className="space-y-6 mb-20 max-w-[900px] mx-auto">
          {serviceCards.map((srv) => (
            <div 
              id={srv.id} 
              key={srv.id} 
              className={`bg-white rounded-brand-md p-6 md:p-8 border border-brand-line border-l-5 shadow-brand-sm scroll-mt-28 ${
                srv.isClay ? 'border-l-brand-clay-600' : 'border-l-brand-ink-deep'
              }`}
            >
              <h3 className="text-step-2 font-display font-bold text-brand-ink-dark mb-2">{srv.title}</h3>
              <p className="text-step-0 text-brand-ink-soft mb-6 leading-relaxed max-w-[68ch]">{srv.desc}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0">
                {srv.items.map((item, idx) => (
                  <li key={idx} className="relative pl-8 text-step-minus-1 text-brand-ink-soft leading-snug">
                    <span className={`absolute left-0 top-[0.25em] w-4 h-4 rounded-full flex items-center justify-center font-bold text-[0.7rem] text-white ${
                      srv.isClay ? 'bg-brand-clay-600' : 'bg-brand-ink-deep'
                    }`}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* High-Contrast Segment Section Card Component */}
        <div id="whoweserve" className="bg-brand-sand-100 border border-brand-line rounded-brand-lg p-8 md:p-12 scroll-mt-28">
          <h2 className="text-step-3 font-display font-bold text-brand-ink-dark text-center mb-8 max-w-[62ch] mx-auto">
            If any of these sound like your situation, we can help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { h: "Seniors wishing to age in place", p: "Staying home should not mean managing alone." },
              { h: "Adults recovering from surgery", p: "Extra support through the weeks that matter most." },
              { h: "Individuals with mobility challenges", p: "Practical help that reduces fall risk and restores confidence." },
              { h: "People managing chronic conditions", p: "Consistent monitoring and education, coordinated with your doctor." },
              { h: "Families needing reliable caregiver support", p: "Dependable coverage you can actually plan around." }
            ].map((situ, idx) => (
              <div key={idx} className="bg-white p-6 rounded-brand-md border border-brand-line shadow-brand-sm">
                <h4 className="text-step-0 font-body font-bold text-brand-ink-dark mb-2">{situ.h}</h4>
                <p className="text-step-minus-1 text-brand-ink-soft m-0 leading-relaxed">{situ.p}</p>
              </div>
            ))}
            
            <div className="bg-brand-clay-600 text-white p-6 rounded-brand-md flex flex-col justify-between shadow-brand-sm">
              <div>
                <h4 className="text-step-0 font-body font-bold text-white mb-2">Not sure where you fit?</h4>
                <p className="text-step-minus-1 text-white/90 m-0 leading-relaxed">Call us. A short conversation usually makes the answer clear — and it costs nothing.</p>
              </div>
              <a href="tel:9045550100" className="mt-4 block text-center font-bold text-step-minus-1 tracking-wider uppercase underline text-white hover:text-brand-sand-50">
                Call (904) 555-0100
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
