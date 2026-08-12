'use client';

import React, { useState } from 'react';
import { INDUSTRIES } from '@/data/content';
import {
  Rocket,
  Building2,
  Landmark,
  HeartPulse,
  GraduationCap,
  Home,
  ShoppingBag,
  Factory,
  Briefcase,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface IndustriesProps {
  onSelectIndustry: (industryName: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const displayedIndustries = isExpanded ? INDUSTRIES : INDUSTRIES.slice(0, 3);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-4 h-4" aria-hidden="true" />;
      case 'Building2':
        return <Building2 className="w-4 h-4" aria-hidden="true" />;
      case 'Landmark':
        return <Landmark className="w-4 h-4" aria-hidden="true" />;
      case 'HeartPulse':
        return <HeartPulse className="w-4 h-4" aria-hidden="true" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4" aria-hidden="true" />;
      case 'Home':
        return <Home className="w-4 h-4" aria-hidden="true" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4" aria-hidden="true" />;
      case 'Factory':
        return <Factory className="w-4 h-4" aria-hidden="true" />;
      case 'Briefcase':
      default:
        return <Briefcase className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section id="industries" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="pill-token mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#0067b8]" aria-hidden="true" />
            <span>Industries We Serve</span>
          </div>

          <h2 className="section-heading-42 font-bold text-[#212529] tracking-tight mb-3">
            Every Industry Has Unique Challenges.{' '}
            <span className="text-[#0067b8] block sm:inline">Our Approach Is Never One-Size-Fits-All.</span>
          </h2>

          <p className="text-[13.5px] sm:text-[14px] text-[#414141] leading-[21px]">
            From early-stage startups to regulated healthcare and enterprise ecosystems,
            we adapt workflows and staffing to your sector’s compliance and speed expectations.
          </p>
        </div>

        {/* 9-Industry Grid — 1st Row by default (3 items) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedIndustries.map((industry) => (
            <div
              key={industry.id}
              className="card-token p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-[3px] bg-[#f0f7ff] text-[#0067b8] flex items-center justify-center">
                    {getIndustryIcon(industry.iconName)}
                  </div>
                  <span className="text-[10.24px] font-bold px-[6px] py-[2px] rounded-[3px] bg-[#e5e7eb] text-[#414141]">
                    {industry.badge}
                  </span>
                </div>

                <h3 className="text-[14.4px] font-bold text-[#212529] mb-1">
                  {industry.name}
                </h3>
                <p className="text-[12px] text-[#414141] leading-[18px] mb-4">
                  {industry.description}
                </p>

                {/* Key Solutions Pills */}
                <div className="flex flex-wrap gap-[4px] mb-4">
                  {industry.solutions.map((sol, idx) => (
                    <span
                      key={idx}
                      className="text-[10.24px] font-medium px-[6px] py-[2px] rounded-[3px] bg-[#f8f9fa] text-[#414141] border border-[#e5e7eb]"
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectIndustry(industry.name)}
                className="text-[12px] font-bold text-[#0067b8] hover:text-[#005da6] inline-flex items-center gap-[4px] pt-3 border-t border-[#e5e7eb] text-left transition-colors cursor-pointer"
                aria-label={`Discuss solutions for ${industry.name}`}
              >
                <span>Discuss {industry.name} Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>

        {/* View More / Show Less Toggle Button */}
        {INDUSTRIES.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2.5 rounded-[4px] bg-white border border-[#0067b8] text-[#0067b8] hover:bg-[#0067b8] hover:text-white transition-all duration-200 font-semibold text-[13.5px] inline-flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Show less industries' : 'View more industries'}
            >
              <span>{isExpanded ? 'Show Less' : `View More Industries (${INDUSTRIES.length - 3} more)`}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
