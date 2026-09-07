import React from 'react';

export default function NotFound() {
  return (
    <div className="bg-brand-sand-50 min-h-[65vh] flex items-center justify-center py-12">
      <div className="wrap max-w-[520px] text-center px-6 py-12 bg-white rounded-brand-md border border-brand-line shadow-brand-sm">
        
        {/* Soft, low-contrast neutral error code tracking your abstract layers */}
        <span className="font-display text-step-4 text-brand-sand-200 font-extrabold block mb-2 leading-none">
          404
        </span>
        
        <h1 className="text-step-2 font-display font-bold text-brand-ink-dark mb-3">
          We couldn't find that page
        </h1>
        
        <p className="text-step-minus-1 text-brand-ink-soft mb-8 leading-relaxed">
          The link may be out of date. Let's get you back on track — or just give us a call and we'll help directly.
        </p>
        
        {/* Large, safe tap targets for older hands */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center min-h-[52px] px-6 py-2.5 bg-brand-sand-100 hover:bg-brand-sand-200 text-brand-ink-dark font-semibold text-step-minus-1 rounded-full border border-brand-line transition-all"
          >
            Back to Home
          </a>
          <a 
            href="tel:9045550100" 
            className="inline-flex items-center justify-center min-h-[52px] px-6 py-2.5 bg-brand-clay-600 hover:bg-brand-clay-700 text-white font-semibold text-step-minus-1 rounded-full shadow-brand-sm transition-all hover:-translate-y-0.5"
          >
            📞 Call (904) 555-0100
          </a>
        </div>

      </div>
    </div>
  );
}
