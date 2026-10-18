import React from 'react';
import Header from './Header';
import './globals.css';

export const metadata = {
  title: "Optimal Homecare Services | Clay County, FL",
  description: "Compassionate, high-quality skilled nursing and non-medical in-home care for seniors and adults across Clay County, Florida.",
};

export default function RootLayout({ children } : LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        
        <Header />

        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>

        {/* Deep, Premium Warm Charcoal Footer */}
        <footer className="bg-brand-ink-dark border-t border-brand-line py-12 text-step-minus-1 text-white/70">
          <div className="wrap">
            <div className="grid grid-cols-1 gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.5fr]">

              {/* Brand */}
              <div className="space-y-4">
                <div className="font-display text-[1.1rem] font-semibold text-white">
                  Optimal Homecare
                </div>
                <p className="max-w-[280px] text-white/70">Homemaker and companion services for everyday living.</p>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-4 text-[0.82rem] font-bold uppercase tracking-wider text-white">Our Services</h4>
                <ul className="m-0 list-none space-y-2.5 p-0">
                  <li>
                    <a href="/services#skilled" className="text-white/80 no-underline hover:text-white hover:underline">Homemaker services</a>
                  </li>
                  <li>
                    <a href="/services#companionship" className="text-white/80 no-underline hover:text-white hover:underline">Companionship</a>
                  </li>
                  <li>
                    <a href="/services#personal" className="text-white/80 no-underline hover:text-white hover:underline">Limitations</a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="mb-4 text-[0.82rem] font-bold uppercase tracking-wider text-white">Company</h4>
                <ul className="m-0 list-none space-y-2.5 p-0">
                  <li>
                    <a href="/about" className="text-white/80 no-underline hover:text-white hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="/about#mission" className="text-white/80 no-underline hover:text-white hover:underline">Our Mission</a>
                  </li>
                  <li>
                    <a href="/about#safety" className="text-white/80 no-underline hover:text-white hover:underline">Commitment to Safety</a>
                  </li>
                  <li>
                    <a href="/contact" className="text-white/80 no-underline hover:text-white hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="min-w-0">
                <h4 className="mb-4 text-[0.82rem] font-bold uppercase tracking-wider text-white">Get In Touch</h4>
                <ul className="m-0 list-none space-y-3 p-0">
                  <li className="whitespace-nowrap text-[1.05rem] font-semibold text-white"><span aria-hidden="true">📞</span>{" "}
                    <a href="tel:9048726116" className="hover:text-white hover:underline">(904) 872-6116</a>
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap">
                    <span aria-hidden="true">✉️</span>
                    <a href="mailto:info@optimalhomecareservices.com" className="text-[1.05rem] tracking-tight hover:text-white hover:underline">info@optimalhomecareservices.com</a>
                  </li>
                  <li className="whitespace-nowrap"><span aria-hidden="true">📍</span>{" "}Clay County, Florida</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[0.88rem] md:flex-row">
              <div className="max-w-[76ch] space-y-1 text-center text-white/50 md:text-left">
                <p>&copy; 2026 Optimal Homecare Services LLC. All rights reserved.</p>
                <p>Optimal Homecare Services LLC is an equal-opportunity provider and employer.</p>
              </div>
              <div className="rounded border border-brand-ink-soft/40 bg-brand-ink/50 px-3 py-1.5 font-mono tracking-wider text-white/90">
                Florida AHCA Licence #[ADD LICENCE NUMBER]
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Mobile Sticky Footer Call Button */}
        <div className="block md:hidden fixed left-0 right-0 bottom-0 z-50 px-4 py-3 bg-brand-sand-50/96 backdrop-blur-md border-t border-brand-line shadow-brand-md">
          <a href="tel:9048726116" className="flex items-center justify-center min-h-[52px] w-full text-step-0 font-bold bg-brand-clay-600 text-white rounded-full no-underline shadow-brand-sm">
            📞 Call Now: (904) 872-6116
          </a>
        </div>

      </body>
    </html>
  );
}
