"use client";

import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="absolute left-[-9999px] top-0 bg-brand-ink-dark text-white px-4 py-2 focus:left-0 z-50 rounded-br-brand-sm">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-brand-sand-50/92 backdrop-blur-md border-b border-brand-line">
        <div className="wrap">
          <div className="flex items-center justify-between min-h-[78px] py-2">
            
            <a href="/" className="inline-flex items-center gap-3 no-underline text-brand-ink-dark">
              <div className="flex flex-col line-height-[1.12]">
                <span className="font-display text-[1.16rem] font-semibold tracking-tight">Optimal Homecare</span>
                <span className="text-[0.7rem] tracking-wider uppercase font-semibold text-brand-clay-700">Compassionate Care. Local Heart.</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <a href="/" className="px-3 py-2 text-step-minus-1 font-medium text-brand-ink-soft no-underline hover:text-brand-ink-dark hover:bg-brand-sand-100 rounded-brand-sm">Home</a>
              <a href="/services" className="px-3 py-2 text-step-minus-1 font-medium text-brand-ink-soft no-underline hover:text-brand-ink-dark hover:bg-brand-sand-100 rounded-brand-sm">Our Services</a>
              <a href="/about" className="px-3 py-2 text-step-minus-1 font-medium text-brand-ink-soft no-underline hover:text-brand-ink-dark hover:bg-brand-sand-100 rounded-brand-sm">About Us</a>
              <a href="/contact" className="px-3 py-2 text-step-minus-1 font-medium text-brand-ink-soft no-underline hover:text-brand-ink-dark hover:bg-brand-sand-100 rounded-brand-sm">Contact</a>
            </nav>

            <div className="hidden md:flex items-center">
              <a href="tel:9045550100" className="inline-flex items-center justify-center min-h-[46px] px-5 py-2 border-2 border-transparent text-step-minus-1 font-semibold rounded-full text-white bg-brand-clay-600 hover:bg-brand-clay-700 shadow-brand-sm transition-all hover:-translate-y-0.5">
                📞 (904) 555-0100
              </a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center w-12 h-12 bg-white border border-brand-line rounded-brand-sm text-brand-ink-dark cursor-pointer font-bold"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle Navigation Menu</span>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-sand-50 border-t border-brand-line p-3 flex flex-col gap-1 shadow-brand-md">
            <a href="/" className="block p-3 text-[1.06rem] font-medium text-brand-ink-soft rounded-brand-sm hover:bg-brand-sand-100">Home</a>
            <a href="/services" className="block p-3 text-[1.06rem] font-medium text-brand-ink-soft rounded-brand-sm hover:bg-brand-sand-100">Our Services</a>
            <a href="/about" className="block p-3 text-[1.06rem] font-medium text-brand-ink-soft rounded-brand-sm hover:bg-brand-sand-100">About Us</a>
            <a href="/contact" className="block p-3 text-[1.06rem] font-medium text-brand-ink-soft rounded-brand-sm hover:bg-brand-sand-100">Contact</a>
            <a href="tel:9045550100" className="inline-flex items-center justify-center min-h-[52px] w-full mt-2 font-semibold bg-brand-clay-600 hover:bg-brand-clay-700 text-white rounded-full text-center">
              Call (904) 555-0100
            </a>
          </div>
        )}
      </header>
    </>
  );
}
