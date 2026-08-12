'use client';

import React, { useState, useEffect } from 'react';
import { SvayamLogo } from './SvayamLogo';
import { NAV_LINKS } from '@/data/content';
import {
  Menu,
  X,
  ChevronLeft,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  Building2,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#333333] text-white border-b border-[#414141] transition-all duration-300">
        <div className={`max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'h-[52px]' : 'h-[56px] sm:h-[60px]'} flex items-center`}>
          <nav className="flex items-center justify-between w-full" aria-label="Main Navigation">
            {/* Brand Logo with Dark Theme */}
            <a
              href="https://www.svayam.in/"
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8] rounded-[3px] shrink-0"
              aria-label="Svayam Incarnation Homepage"
            >
              <SvayamLogo size="md" theme="dark" />
            </a>

            {/* Right-Aligned Navigation Links & Action CTA */}
            <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-[4px] mr-1">
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

              {/* Book Consultation Button (Visible on Desktop only, hidden on mobile) */}
              <div className="hidden lg:block shrink-0">
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary whitespace-nowrap text-[13px] px-3.5 py-2 shadow-xs"
                  aria-label="Book Free Consultation"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-[4px] text-[#e5e7eb] hover:text-white hover:bg-[#414141] border border-[#555555] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0067b8] flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Exact Reference Styled Full-Screen Mobile Menu Drawer ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white text-[#131313] flex flex-col animate-in fade-in slide-in-from-right duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* 1. Header Bar with Back '< Menu' Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb] bg-white sticky top-0 z-10 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-[17px] font-semibold text-[#131313] hover:text-[#0067b8] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <ChevronLeft className="w-5 h-5 text-[#131313]" />
              <span>Menu</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-[#f8f9fa] border border-[#e5e7eb] flex items-center justify-center text-[#535353] hover:text-[#131313] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* 2. Scrollable Body Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4 text-left space-y-4">
            {/* Accordion 1: Core Services */}
            <div className="border-b border-[#f1f5f9] pb-3">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between py-2 text-[16px] font-semibold text-[#131313] hover:text-[#0067b8] transition-colors cursor-pointer text-left"
                aria-expanded={expandedSection === 'services'}
              >
                <span>Core Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#535353] transition-transform duration-200 ${
                    expandedSection === 'services' ? 'rotate-180 text-[#0067b8]' : ''
                  }`}
                />
              </button>
              {expandedSection === 'services' && (
                <div className="pl-3 pt-2 pb-1 space-y-2.5 border-l-2 border-[#0067b8]/20 mt-1">
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Technology Solutions</a>
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Digital Marketing & SEO</a>
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Branding & UI/UX Design</a>
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">AI & Workflow Automation</a>
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Legal & Business Compliance</a>
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Dedicated On-Demand Teams</a>
                </div>
              )}
            </div>

            {/* Accordion 2: Industries */}
            <div className="border-b border-[#f1f5f9] pb-3">
              <button
                onClick={() => toggleSection('industries')}
                className="w-full flex items-center justify-between py-2 text-[16px] font-semibold text-[#131313] hover:text-[#0067b8] transition-colors cursor-pointer text-left"
                aria-expanded={expandedSection === 'industries'}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#535353] transition-transform duration-200 ${
                    expandedSection === 'industries' ? 'rotate-180 text-[#0067b8]' : ''
                  }`}
                />
              </button>
              {expandedSection === 'industries' && (
                <div className="pl-3 pt-2 pb-1 space-y-2.5 border-l-2 border-[#0067b8]/20 mt-1">
                  <a href="#industries" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Startups & Scaleups</a>
                  <a href="#industries" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Small & Medium Businesses</a>
                  <a href="#industries" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Healthcare & HealthTech</a>
                  <a href="#industries" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">EdTech & Education</a>
                  <a href="#industries" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Retail & E-Commerce</a>
                  <a href="#industries" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Enterprise Systems</a>
                </div>
              )}
            </div>

            {/* Accordion 3: Company */}
            <div className="border-b border-[#f1f5f9] pb-3">
              <button
                onClick={() => toggleSection('company')}
                className="w-full flex items-center justify-between py-2 text-[16px] font-semibold text-[#131313] hover:text-[#0067b8] transition-colors cursor-pointer text-left"
                aria-expanded={expandedSection === 'company'}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#535353] transition-transform duration-200 ${
                    expandedSection === 'company' ? 'rotate-180 text-[#0067b8]' : ''
                  }`}
                />
              </button>
              {expandedSection === 'company' && (
                <div className="pl-3 pt-2 pb-1 space-y-2.5 border-l-2 border-[#0067b8]/20 mt-1">
                  <a href="#who-we-are" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Who We Are</a>
                  <a href="#process" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Our Collaborative Process</a>
                  <a href="#why-choose-us" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Why Svayam Incarnation</a>
                  <a href="#services" onClick={handleLinkClick} className="block text-[13.5px] text-[#555555] hover:text-[#0067b8]">Education & Workshops</a>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="space-y-3 pt-1">
              <a href="#" onClick={handleLinkClick} className="block text-[15.5px] font-medium text-[#131313] hover:text-[#0067b8]">Terms of use</a>
              <a href="#" onClick={handleLinkClick} className="block text-[15.5px] font-medium text-[#131313] hover:text-[#0067b8]">Privacy</a>
              <a href="#" onClick={handleLinkClick} className="block text-[15.5px] font-medium text-[#131313] hover:text-[#0067b8]">Refund Policy</a>
            </div>

            <hr className="border-[#e5e7eb] my-4" />

            {/* Social Links List (LinkedIn, Instagram, X/Twitter, Facebook) */}
            <div className="space-y-3.5">
              <a href="#" className="flex items-center gap-3 text-[14.5px] font-medium text-[#131313] hover:text-[#0067b8] transition-colors">
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-[14.5px] font-medium text-[#131313] hover:text-[#0067b8] transition-colors">
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-[14.5px] font-medium text-[#131313] hover:text-[#0067b8] transition-colors">
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-[14.5px] font-medium text-[#131313] hover:text-[#0067b8] transition-colors">
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>

            <hr className="border-[#e5e7eb] my-4" />

            {/* London, UK Office Card */}
            <div className="space-y-2">
              <h4 className="text-[17px] font-bold text-[#131313]">London, UK</h4>
              <div className="space-y-1 text-[13px] text-[#131313]">
                <div className="font-semibold text-[#131313]">Svayam Incarnation Ltd.</div>
                <div>
                  Call : <a href="tel:+447425114220" className="text-[#0067b8] hover:underline font-medium">+44 742511 4220</a>
                </div>
                <div>
                  Email : <a href="mailto:support@svayam.uk" className="text-[#0067b8] hover:underline font-medium">support@svayam.uk</a>
                </div>
                <div className="text-[#666666]">
                  Address : 124 City Road, London EC1V 2NX, United Kingdom
                </div>
              </div>
            </div>

            <hr className="border-[#e5e7eb] my-4" />

            {/* Gurugram, India Office Card */}
            <div className="space-y-2">
              <h4 className="text-[17px] font-bold text-[#131313]">Gurugram, India</h4>
              <div className="space-y-1 text-[13px] text-[#131313]">
                <div className="font-semibold text-[#131313]">Svayam Incarnation Pvt. Ltd.</div>
                <div>
                  Call : <a href="tel:+918818000205" className="text-[#0067b8] hover:underline font-medium">+91 88 18000 205</a>
                </div>
                <div>
                  Email : <a href="mailto:support@svayam.in" className="text-[#0067b8] hover:underline font-medium">support@svayam.in</a>
                </div>
                <div className="text-[#666666]">
                  Address : Ground floor, DLF Cyber City, DLF Phase 3, Gurugram, Haryana 122002
                </div>
              </div>
            </div>

            <hr className="border-[#e5e7eb] my-4" />

            {/* Action CTA Button */}
            <div className="pt-1 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full btn-primary min-h-[46px] py-3 text-[14px] flex items-center justify-center gap-2 rounded-[8px] shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center text-[12px] text-[#888888] pb-6 pt-2">
              © {new Date().getFullYear()} Svayam Incarnation. All rights reserved.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
