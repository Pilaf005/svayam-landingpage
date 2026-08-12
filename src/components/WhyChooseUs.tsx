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
    <section id="why-choose-us" className="py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="pill-token mb-4 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f8f9fa] border border-[#e5e7eb] text-[12px] font-semibold text-[#212529]">
            <Sparkles className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
            <span>Why Choose Svayam Incarnation</span>
          </div>

          <h2
            className="font-semibold text-[#212529] tracking-tight mb-4 max-w-3xl mx-auto"
            style={{ fontSize: '42px', lineHeight: '52px' }}
          >
            We Don't Just Deliver Work.{' '}
            <span className="text-[#0067b8]">We Become Part of Your Business.</span>
          </h2>

          <p className="text-[15px] text-[#212529] leading-[26px] max-w-3xl mx-auto">
            When businesses work with Svayam Incarnation, they don't get a vendor. They get a dedicated
            cross-functional team of <strong className="text-[#212529]">10+ specialists</strong> — developers, designers,
            marketers, consultants, and legal professionals — all working together with one shared goal:{' '}
            <strong className="text-[#212529]">your sustainable growth.</strong>
          </p>
        </div>

        {/* ── 2-Column Split: Expanded Image Left / Compact Cards Right ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-14">

          {/* Left Column: Expanded Team Collaboration Image Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[460px] lg:min-h-[500px] rounded-[16px] overflow-hidden border border-[#e5e7eb] shadow-md group bg-[#f8f9fa]">
              <Image
                src="/team-collaboration.png"
                alt="Svayam multidisciplinary team collaborating on a client project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[12px] bg-white/95 backdrop-blur-sm border border-white/40 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#535353]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0067b8]">
                    Integrated Execution Team
                  </span>
                </div>
                <p className="text-[13px] font-semibold text-[#212529]">
                  One synchronized team working directly with your leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Compact Cards Stacked Vertically */}
          <div className="lg:col-span-6 space-y-3 flex flex-col justify-between">
            {WHY_CHOOSE_POINTS.map((item) => (
              <div
                key={item.number}
                className="relative bg-[#f8f9fa] rounded-[14px] border border-[#e5e7eb] p-4 sm:p-4.5 hover:border-[#0067b8] hover:bg-[#fafcff] transition-all duration-200 overflow-hidden group shadow-2xs"
              >
                {/* Large Background Watermark Number on Top Right */}
                <div
                  className="absolute right-4 top-3 text-[44px] font-black text-[#e5e7eb]/70 leading-none select-none pointer-events-none group-hover:text-[#dce9f7] transition-colors duration-200"
                  aria-hidden="true"
                >
                  {item.number}
                </div>

                {/* Top Header Row: Icon + Title */}
                <div className="flex items-center gap-2.5 mb-2 relative z-10 pr-10">
                  <div className="w-8 h-8 rounded-[6px] bg-[#f0f7ff] border border-[#cce5ff] text-[#535353] flex items-center justify-center shadow-2xs shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#212529] leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description Paragraph */}
                <p className="text-[12.8px] text-[#555555] leading-[20px] relative z-10 pr-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Trust Guarantee Strip ── */}
        <div className="rounded-[14px] border border-[#e5e7eb] bg-[#f8f9fa] p-6">
          <p className="text-center text-[11px] font-bold text-[#999999] uppercase tracking-widest mb-4">
            Our Service Guarantees
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white rounded-[8px] border border-[#e5e7eb] px-4 py-3 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-[6px] bg-[#f0f7ff] border border-[#cce5ff] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#0067b8]" aria-hidden="true" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#212529] leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
