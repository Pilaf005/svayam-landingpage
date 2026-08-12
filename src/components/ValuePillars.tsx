'use client';

import React from 'react';
import { VALUE_PILLARS, CORE_TRIAD } from '@/data/content';
import {
  Users,
  CheckCircle2,
  Workflow,
  Target,
} from 'lucide-react';

export const ValuePillars: React.FC = () => {
  return (
    <section id="who-we-are" className="py-16 bg-[#f8f9fa] border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="pill-token mb-3">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Who We Are & What We Believe</span>
          </div>

          <h2
            className="section-heading-42 font-bold text-[#212529] tracking-tight mb-3"
            style={{ fontSize: '42px', lineHeight: '52px' }}
          >
            Great Businesses Aren’t Built by One Person.{' '}
            <span className="text-[#0067b8]">They’re Built by the Right Team.</span>
          </h2>

          <p className="text-[14px] text-[#414141] leading-[21px]">
            Every successful enterprise relies on specialized talent across systems, operations, marketing,
            and compliance working in synchronization.
          </p>
        </div>

        {/* Narrative & Mindset Checklist Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left: Narrative Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-[7px] bg-[#f8f9fa] border border-[#e5e7eb]">
              <h3 className="text-[16px] font-bold text-[#212529] mb-3">
                We believe there’s a better way.
              </h3>
              <p className="text-[#414141] text-[13px] leading-[20px] mb-3">
                Most businesses spend months trying to recruit and align internal departments, or hire
                disparate agencies that lack cohesive direction.
              </p>
              <p className="text-[#212529] text-[13px] leading-[20px] font-medium">
                With Svayam Incarnation, you gain an integrated execution team that{' '}
                <strong className="text-[#0067b8]">thinks, plans, builds, and scales with you.</strong>
              </p>
            </div>
          </div>

          {/* Right: The 3 Core Mindsets */}
          <div className="lg:col-span-6 space-y-[8px]">
            {VALUE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[7px] bg-white border border-[#e5e7eb] shadow-[var(--shadow-1)] flex items-start gap-[10px]"
              >
                <div className="w-7 h-7 rounded-[3px] bg-[#f0f7ff] text-[#0067b8] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#212529] mb-[2px]">
                    {pillar.title}
                  </h4>
                  <p className="text-[12px] text-[#414141] leading-[18px]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 3 Core Pillars (Triad) */}
        <div className="grid md:grid-cols-3 gap-4">
          {CORE_TRIAD.map((triad, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[7px] bg-white border border-[#e5e7eb] shadow-[var(--shadow-1)] text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-[3px] bg-[#f0f7ff] text-[#0067b8] flex items-center justify-center">
                {idx === 0 && <Users className="w-5 h-5" aria-hidden="true" />}
                {idx === 1 && <Workflow className="w-5 h-5" aria-hidden="true" />}
                {idx === 2 && <Target className="w-5 h-5" aria-hidden="true" />}
              </div>
              <h4 className="text-[14.4px] font-bold text-[#212529] mb-1">
                {triad.title}
              </h4>
              <p className="text-[12.8px] text-[#414141] leading-[19px]">
                {triad.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-8 text-center">
          <p className="text-[12px] font-bold text-[#0067b8] uppercase tracking-wider">
            — Helping your business grow sustainably —
          </p>
        </div>
      </div>
    </section>
  );
};
