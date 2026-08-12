'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICES } from '@/data/content';
import {
  Laptop, Megaphone, PenTool, Sparkles, Bot, BarChart3,
  FileCheck2, UserCheck, GraduationCap, CheckCircle2,
  ArrowRight, ChevronDown, ChevronUp,
  Rocket, Building2, Landmark, HeartPulse, ShoppingBag,
} from 'lucide-react';

interface ServicesShowcaseProps {
  onSelectService: (serviceName: string) => void;
}

const AUDIENCE_BADGES = [
  { label: 'Startups', icon: Rocket },
  { label: 'SMEs', icon: Building2 },
  { label: 'Enterprises', icon: Landmark },
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'E-Commerce', icon: ShoppingBag },
  { label: 'EdTech', icon: GraduationCap },
];

const SERVICE_IMAGES: Record<string, string> = {
  'tech-solutions': '/Technology Solutions.png',
  'digital-marketing': '/Digital Marketing.png',
  'content-creation': '/Content Creation.png',
  'branding-design': '/Branding & Creative Design.png',
  'ai-automation': '/AI & Automation.png',
  'business-consulting': '/Business Consulting.png',
  'legal-support': '/Legal & Business Support.png',
  'dedicated-teams': '/Dedicated Teams.png',
  'education-skills': '/Education & Skill Development.png',
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'tech', label: 'Tech & AI' },
    { id: 'marketing', label: 'Marketing & Brand' },
    { id: 'business', label: 'Strategy & Legal' },
    { id: 'teams', label: 'Teams & Training' },
  ];

  const getFilteredServices = () => {
    switch (activeCategory) {
      case 'tech': return SERVICES.filter((s) => ['tech-solutions', 'ai-automation'].includes(s.id));
      case 'marketing': return SERVICES.filter((s) => ['digital-marketing', 'content-creation', 'branding-design'].includes(s.id));
      case 'business': return SERVICES.filter((s) => ['business-consulting', 'legal-support'].includes(s.id));
      case 'teams': return SERVICES.filter((s) => ['dedicated-teams', 'education-skills'].includes(s.id));
      default: return SERVICES;
    }
  };

  const filteredServices = getFilteredServices();
  const displayedServices = isExpanded ? filteredServices : filteredServices.slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    const cls = 'w-5 h-5 text-[#535353]';
    switch (iconName) {
      case 'Laptop': return <Laptop className={cls} aria-hidden="true" />;
      case 'Megaphone': return <Megaphone className={cls} aria-hidden="true" />;
      case 'PenTool': return <PenTool className={cls} aria-hidden="true" />;
      case 'Sparkles': return <Sparkles className={cls} aria-hidden="true" />;
      case 'Bot': return <Bot className={cls} aria-hidden="true" />;
      case 'BarChart3': return <BarChart3 className={cls} aria-hidden="true" />;
      case 'FileCheck2': return <FileCheck2 className={cls} aria-hidden="true" />;
      case 'UserCheck': return <UserCheck className={cls} aria-hidden="true" />;
      case 'GraduationCap':
      default: return <GraduationCap className={cls} aria-hidden="true" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#f8f9fa] border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="pill-token mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f9fa] border border-[#e5e7eb] text-[12px] font-semibold" style={{color: 'var(--color-text-primary)'}}>
            <Sparkles className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
            <span>What We Do For You</span>
          </div>

          <h2
            className="font-semibold tracking-tight mb-4 max-w-4xl mx-auto"
            style={{ fontSize: '42px', lineHeight: '52px', color: 'var(--color-text-primary)' }}
          >
            10+ Capabilities. One Unified Team.{' '}
            <span className="link-blue">Stop Explaining Your Vision to Different Vendors.</span>
          </h2>

          <p className="text-[15px] body-base leading-[26px] max-w-3xl mx-auto">
            From technology and marketing to legal support and AI automation — one synchronized team handles everything your business needs.
            You stay focused on growth. <strong style={{color: 'var(--color-text-primary)'}}>We handle the rest.</strong>
          </p>
        </div>

        {/* ── Audience Badge Strip ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-[11px] font-bold text-muted-new uppercase tracking-widest mr-1">Built For:</span>
          {AUDIENCE_BADGES.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e5e7eb] text-[12px] font-medium hover:border-[#0067b8] hover:text-[#0067b8] transition-colors"
              style={{color: 'var(--color-text-primary)'}}
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-[4px] mb-10" role="tablist" aria-label="Service Categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => { setActiveCategory(cat.id); setIsExpanded(false); }}
              className={`px-[12px] py-[7px] rounded-full text-[12px] font-semibold transition-all duration-150 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0067b8] text-white shadow-sm'
                  : 'bg-white hover:bg-[#e5e7eb] border border-[#e5e7eb]'
              }`}
              style={activeCategory !== cat.id ? {color: 'var(--color-text-primary)'} : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => {
            const mockupImage = SERVICE_IMAGES[service.id];
            const displayedFeatures = service.features.slice(0, 4);

            return (
              <div
                key={service.id}
                className="bg-white rounded-[14px] border border-[#e5e7eb] overflow-hidden flex flex-col justify-between relative shadow-xs"
              >
                {/* Visual Thumbnail Header */}
                {mockupImage && (
                  <div className="relative w-full h-[155px] overflow-hidden bg-[#e5e7eb]">
                    <Image
                      src={mockupImage}
                      alt={`${service.title} deliverable mockup preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row: Icon + Title on 1 clean line */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-[8px] bg-[#f0f7ff] border border-[#cce5ff] text-[#535353] flex items-center justify-center shadow-2xs shrink-0">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <h3 className="heading-md text-[17px] font-semibold leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[11px] font-semibold text-eyebrow uppercase tracking-wider mb-2.5">{service.subtitle}</p>
                    <p className="body-sm text-[12.8px] leading-[20px] mb-4">{service.description}</p>

                    {/* Streamlined Capabilities */}
                    <ul className="space-y-[7px] pt-3 border-t border-[#e5e7eb]" aria-label={`${service.title} Features`}>
                      {displayedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[12.2px]" style={{color: 'var(--color-text-primary)'}}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#535353] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Row: Full-width Outlined Button */}
                  <div className="pt-4 border-t border-[#e5e7eb] mt-5">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full text-[13px] py-[9px] px-4 border border-[#0067b8] text-[#0067b8] hover:bg-[#f0f7ff] hover:border-[#005da6] bg-transparent rounded-[8px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 shadow-2xs"
                      aria-label={`Request Proposal for ${service.title}`}
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse */}
        {filteredServices.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2.5 rounded-full bg-white border border-[#0067b8] text-[#0067b8] hover:bg-[#0067b8] hover:text-white transition-all duration-200 font-semibold text-[13.5px] inline-flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Show less services' : 'View more services'}
            >
              <span>{isExpanded ? 'Show Less' : 'See All'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" aria-hidden="true" /> : <ChevronDown className="w-4 h-4" aria-hidden="true" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
