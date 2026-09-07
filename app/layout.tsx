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
        <footer className="bg-brand-ink-dark text-white/70 py-12 text-step-minus-1 border-t border-brand-line">
          <div className="wrap">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
              
              <div className="space-y-4">
                <div className="text-white font-display text-[1.1rem] font-semibold">Optimal Homecare</div>
                <p className="text-white/70 max-w-[280px]">Skilled nursing and non-medical in-home care for seniors and adults across Clay County, Florida.</p>
              </div>

              <div>
                <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-wider mb-4">Our Services</h4>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  <li><a href="/services#skilled" className="text-white/80 no-underline hover:text-white hover:underline">Skilled Homecare</a></li>
                  <li><a href="/services#personal" className="text-white/80 no-underline hover:text-white hover:underline">Personal Care</a></li>
                  <li><a href="/services#daily" className="text-white/80 no-underline hover:text-white hover:underline">Daily Living & Homemaking</a></li>
                  <li><a href="/services#companionship" className="text-white/80 no-underline hover:text-white hover:underline">Companionship</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-wider mb-4">Company</h4>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  <li><a href="/about" className="text-white/80 no-underline hover:text-white hover:underline">About Us</a></li>
                  <li><a href="/about#mission" className="text-white/80 no-underline hover:text-white hover:underline">Our Mission</a></li>
                  <li><a href="/about#safety" className="text-white/80 no-underline hover:text-white hover:underline">Commitment to Safety</a></li>
                  <li><a href="/contact" className="text-white/80 no-underline hover:text-white hover:underline">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-[0.82rem] font-bold uppercase tracking-wider mb-4">Get In Touch</h4>
                <ul className="space-y-3 list-none p-0 m-0">
                  <li className="text-white font-semibold text-[1.05rem]">
                    📞 <a href="tel:9045550100" className="hover:underline hover:text-white">(904) 555-0100</a>
                  </li>
                  <li className="break-all">✉️ info@optimalhomecareservices.com</li>
                  <li>📍 Clay County, Florida</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.88rem]">
              <div className="text-center md:text-left text-white/50 space-y-1 max-w-[76ch]">
                <p>&copy; 2026 Optimal Homecare Services LLC. All rights reserved.</p>
                <p>Optimal Homecare Services LLC is an equal-opportunity provider and employer.</p>
              </div>
              <div className="bg-brand-ink/50 text-white/90 px-3 py-1.5 rounded font-mono border border-brand-ink-soft/40 tracking-wider">
                Florida AHCA Licence #[ADD LICENCE NUMBER]
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Mobile Sticky Footer Call Button */}
        <div className="block md:hidden fixed left-0 right-0 bottom-0 z-50 px-4 py-3 bg-brand-sand-50/96 backdrop-blur-md border-t border-brand-line shadow-brand-md">
          <a href="tel:9045550100" className="flex items-center justify-center min-h-[52px] w-full text-step-0 font-bold bg-brand-clay-600 text-white rounded-full no-underline shadow-brand-sm">
            📞 Call Now: (904) 555-0100
          </a>
        </div>

      </body>
    </html>
  );
}
