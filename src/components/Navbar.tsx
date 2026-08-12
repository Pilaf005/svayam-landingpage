'use client';

import React, { useState, useEffect } from 'react';
import { SvayamLogo } from './SvayamLogo';
import { NAV_LINKS } from '@/data/content';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#333333] text-white border-b border-[#414141] transition-all duration-[300ms]">
      <div className={`max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[300ms] ${isScrolled ? 'py-[8px]' : 'py-[10px]'}`}>
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo with Dark Theme */}
          <a
            href="https://www.svayam.in/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8] rounded-[3px]"
            aria-label="Svayam Incarnation Homepage"
          >
            <SvayamLogo size="md" theme="dark" />
          </a>

          {/* Right-Aligned Navigation Links & Action CTA */}
          <div className="flex items-center gap-[8px] ml-auto">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-[4px] mr-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-[12px] py-[6px] text-[13px] font-medium text-[#e5e7eb] hover:text-[#ffffff] hover:bg-[#414141] rounded-[3px] transition-colors duration-[100ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Book Consultation Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-primary hidden sm:inline-flex"
              aria-label="Book Free Consultation"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-[6px] rounded-[3px] text-[#e5e7eb] hover:text-white hover:bg-[#414141] border border-[#414141] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#333333] border-b border-[#414141] shadow-[var(--shadow-1)] transition-all">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-[6px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-[10px] py-[8px] rounded-[3px] text-[14px] font-semibold text-[#ffffff] hover:text-[#ffffff] hover:bg-[#414141] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-[10px] border-t border-[#414141]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full btn-primary"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
