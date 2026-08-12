'use client';

import React from 'react';
import Image from 'next/image';
import { WHY_CHOOSE_POINTS } from '@/data/content';
import {
  Sparkles, SearchCheck, Sliders, Users2, Infinity, Award,
  CheckCircle, Shield, Clock, UserCheck, Users,
} from 'lucide-react';

const TRUST_BADGES = [
  { icon: CheckCircle, label: 'Free Strategy Session' },
  { icon: Shield, label: 'No Long-Term Contracts' },
  { icon: UserCheck, label: 'Dedicated Point of Contact' },
  { icon: Clock, label: '4-Hour Response SLA' },
];

const getIcon = (iconName: string) => {
  const cls = 'w-5 h-5 text-[#535353]';
  switch (iconName) {
    case 'SearchCheck': return <SearchCheck className={cls} aria-hidden="true" />;
    case 'Sliders': return <Sliders className={cls} aria-hidden="true" />;
    case 'Users2': return <Users2 className={cls} aria-hidden="true" />;
    case 'Infinity': return <Infinity className={cls} aria-hidden="true" />;
    case 'Award': return <Award className={cls} aria-hidden="true" />;
    default: return <CheckCircle className={cls} aria-hidden="true" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="pill-token mb-3 sm:mb-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f8f9fa] border border-[#e5e7eb] text-[11.5px] sm:text-[12px] font-semibold text-[#212529]">
            <Sparkles className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
            <span>Why Choose Svayam Incarnation</span>
          </div>

          <h2 className="section-heading-42 font-semibold tracking-tight mb-4 max-w-3xl mx-auto text-[#131313]">
            We Don't Just Deliver Work.{' '}
            <span className="link-blue block sm:inline">We Become Part of Your Business.</span>
          </h2>

          <p className="text-[13.5px] sm:text-[15px] body-base leading-[22px] sm:leading-[26px] max-w-3xl mx-auto">
            When businesses work with Svayam Incarnation, they don't get a vendor. They get a dedicated
            cross-functional team of <strong style={{color: 'var(--color-text-primary)'}}>10+ specialists</strong> — developers, designers,
            marketers, consultants, and legal professionals — all working together with one shared goal:{' '}
            <strong style={{color: 'var(--color-text-primary)'}}>your sustainable growth.</strong>
          </p>
        </div>

        {/* ── 2-Column Split: Expanded Image Left / Compact Cards Right ── */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-14">

          {/* Left Column: Expanded Team Collaboration Image Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[500px] rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#e5e7eb] shadow-md group bg-[#f8f9fa]">
              <Image
                src="/team-collaboration.png"
                alt="Svayam multidisciplinary team collaborating on a client project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 p-3.5 sm:p-4 rounded-[10px] sm:rounded-[12px] bg-white/95 backdrop-blur-sm border border-white/40 shadow-sm">
                <div className="flex items-center gap-2 mb-0.5">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#535353]" aria-hidden="true" />
                  <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#0067b8]">
                    Integrated Execution Team
                  </span>
                </div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#212529]">
                  One synchronized team working directly with your leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Compact Cards Stacked Vertically */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
            {WHY_CHOOSE_POINTS.map((item) => (
              <div
                key={item.number}
                className="relative bg-[#f8f9fa] rounded-[12px] sm:rounded-[14px] border border-[#e5e7eb] p-3.5 sm:p-4.5 hover:border-[#0067b8] hover:bg-[#fafcff] transition-all duration-200 overflow-hidden group shadow-2xs"
              >
                {/* Large Background Watermark Number on Top Right */}
                <div
                  className="absolute right-3 sm:right-4 top-2 sm:top-3 text-[36px] sm:text-[44px] font-black text-[#e5e7eb]/70 leading-none select-none pointer-events-none group-hover:text-[#dce9f7] transition-colors duration-200"
                  aria-hidden="true"
                >
                  {item.number}
                </div>

                {/* Top Header Row: Icon + Title */}
                <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2 relative z-10 pr-10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] bg-[#f0f7ff] border border-[#cce5ff] text-[#535353] flex items-center justify-center shadow-2xs shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="heading-sm text-[14px] sm:text-[15px] font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description Paragraph */}
                <p className="body-sm text-[12.2px] sm:text-[12.8px] leading-[18px] sm:leading-[20px] relative z-10 pr-6 sm:pr-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Trust Guarantee Strip (2x2 Grid on Mobile, 4 Columns on Desktop) ── */}
        <div className="rounded-[12px] sm:rounded-[14px] border border-[#e5e7eb] bg-[#f8f9fa] p-3.5 sm:p-6">
          <p className="text-center text-[10.5px] sm:text-[11px] font-bold text-[#999999] uppercase tracking-widest mb-3 sm:mb-4">
            Our Service Guarantees
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-[8px] sm:rounded-[10px] border border-[#e5e7eb] px-2.5 py-2.5 sm:px-4 sm:py-3 shadow-2xs hover:border-[#0067b8]/40 transition-colors"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] bg-[#f0f7ff] border border-[#cce5ff] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0067b8]" aria-hidden="true" />
                </div>
                <span className="text-[11px] sm:text-[12.5px] font-semibold leading-snug text-[#131313]">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
