'use client';

import React from 'react';
import { SvayamLogo } from './SvayamLogo';
import { FOOTER_SECTIONS } from '@/data/content';
import { ArrowUp, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#212529] pt-16 pb-10 border-t border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#e5e7eb]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <SvayamLogo size="md" theme="light" />
            <p className="text-[13px] text-[#414141] max-w-sm leading-[20px]">
              Complete Business Outsourcing Partner. We become an extension of your organization by
              providing structured technology, marketing, branding, legal, and operational solutions.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="btn-primary text-[12px] py-[6px]"
                aria-label="Start Project Discussion"
              >
                <span>Start Project Discussion</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#212529]">
                {section.title}
              </h4>
              <ul className="space-y-[6px]" aria-label={section.title}>
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-[12px] text-[#414141] hover:text-[#0067b8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#999999]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Svayam Incarnation. All rights reserved.</span>
            <span>·</span>
            <a
              href="https://www.svayam.in/"
              className="text-[#0067b8] hover:underline transition-colors"
            >
              https://www.svayam.in/
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-[4px] px-[8px] py-[4px] rounded-[3px] bg-[#f0f7ff] hover:bg-[#e0effe] text-[#0067b8] text-[11px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8]"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
