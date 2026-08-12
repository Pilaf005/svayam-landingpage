'use client';

import React from 'react';
import { FOOTER_SECTIONS } from '@/data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#131313] pt-14 pb-10 border-t border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Exact 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
          
          {/* Columns 1, 2, 3: Business, Community, Company */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-[14px] font-semibold text-[#131313] tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-[7px]" aria-label={section.title}>
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-[12px] font-normal text-[#888888] hover:text-[#0067b8] hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: London, UK Office */}
          <div className="space-y-4">
            <h4 className="text-[14px] font-semibold text-[#131313] tracking-wide">
              London, UK
            </h4>
            <div className="text-[12px] space-y-[4px]">
              <div className="font-semibold text-[#131313] mb-[6px]">Svayam Incarnation Ltd.</div>
              <div className="text-[#131313]">
                Call : <a href="tel:+447425114220" className="text-[#0067b8] hover:underline">+44 742511 4220</a>
              </div>
              <div className="text-[#131313]">
                Email : <a href="mailto:support@svayam.uk" className="text-[#0067b8] hover:underline">support@svayam.uk</a>
              </div>
              <p className="text-[#131313] leading-[18px]">
                Address : <span className="text-[#888888]">124 City Road, London EC1V 2NX, United Kingdom</span>
              </p>
            </div>
          </div>

          {/* Column 5: Gurugram, India Office */}
          <div className="space-y-4">
            <h4 className="text-[14px] font-semibold text-[#131313] tracking-wide">
              Gurugram, India
            </h4>
            <div className="text-[12px] space-y-[4px]">
              <div className="font-semibold text-[#131313] mb-[6px]">Svayam Incarnation Pvt. Ltd.</div>
              <div className="text-[#131313]">
                Call : <a href="tel:+918818000205" className="text-[#0067b8] hover:underline">+91 88 18000 205</a>
              </div>
              <div className="text-[#131313]">
                Email : <a href="mailto:support@svayam.in" className="text-[#0067b8] hover:underline">support@svayam.in</a>
              </div>
              <p className="text-[#131313] leading-[18px]">
                Address : <span className="text-[#888888]">Ground floor, DLF Cyber City, DLF Phase 3, Gurugram, Haryana 122002</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Utility, Copyright & Social Icons Row */}
        <div className="pt-6 border-t border-[#e5e7eb] flex flex-col items-center gap-2">
          
          {/* Centered Legal Links */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-[#888888] font-normal">
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Refund Policy</a>
          </div>

          {/* Centered Copyright */}
          <div className="text-[11px] text-[#999999] font-normal">
            © {new Date().getFullYear()} Svayam Incarnation. All rights reserved.
          </div>

          {/* Centered Social Icons */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <a href="#" className="text-[#999999] hover:text-[#0067b8] transition-colors" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-[#999999] hover:text-[#0067b8] transition-colors" aria-label="Instagram">
              <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-[#999999] hover:text-[#0067b8] transition-colors" aria-label="Twitter">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-[#999999] hover:text-[#0067b8] transition-colors" aria-label="Facebook">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
