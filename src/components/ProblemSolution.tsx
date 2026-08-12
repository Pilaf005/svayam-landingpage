'use client';

import React from 'react';
import { COMPARISON_POINTS } from '@/data/content';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Quote,
  Zap,
} from 'lucide-react';

interface ProblemSolutionProps {
  onOpenConsultation?: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="the-reality" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─────────────── BEAT 1: Empathy Header & Hook ─────────────── */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">

          {/* Responsive Heading */}
          <h2 className="section-heading-42 font-semibold tracking-tight mb-4 max-w-5xl mx-auto text-[#131313]">
            <span className="block">Growing Businesses Don't Need More Vendors.</span>
            <span className="block link-blue">They Need Better Collaboration.</span>
          </h2>

          {/* Subheading */}
          <p className="text-[14.5px] sm:text-[16px] body-base leading-[23px] sm:leading-[26px] mb-6 sm:mb-8 max-w-3xl mx-auto">
            You hired the right people. You're paying good money. Yet progress is still painfully slow.
            That's not a talent problem — it's a coordination problem quietly costing you momentum every day.
          </p>

          {/* Premium Quote Banner */}
          <div className="relative bg-white border border-[#e5e7eb] rounded-[14px] sm:rounded-[16px] p-4.5 sm:p-6 shadow-sm max-w-2xl mx-auto text-left flex items-start gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f8f9fa] border border-[#e5e7eb] flex items-center justify-center shrink-0 text-[#535353]">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#535353]" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-[14px] sm:text-[15.5px] font-medium leading-relaxed italic text-[#131313]">
                "Everyone is busy. Nothing gets done. Not because people aren't working —
                <span className="link-blue not-italic font-bold"> but because nobody is working together."</span>
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────── BEAT 2: Side-by-Side Comparison Matrix ─────────────── */}
        <div className="mb-10 sm:mb-14">
          <div className="relative grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">

            {/* Left Column: Fragmented Multi-Vendor Trap */}
            <div className="bg-[#f8f9fa] border border-[#e5e7eb] rounded-[14px] sm:rounded-[16px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-[#e5e7eb]">
                  <div className="w-8 h-8 rounded-full bg-[#e5e7eb] flex items-center justify-center text-[#333333]">
                    <XCircle className="w-5 h-5 text-[#333333]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-muted-new uppercase tracking-wider block">
                      The Old Way
                    </span>
                    <h3 className="heading-sm text-[15.5px] sm:text-[16px] font-semibold text-[#333333]">
                      Fragmented Multi-Vendor Trap
                    </h3>
                  </div>
                </div>

                {/* Pain Points */}
                <div className="space-y-3.5 sm:space-y-4">
                  {COMPARISON_POINTS.map((point) => (
                    <div
                      key={point.id}
                      className="bg-white rounded-[10px] p-3.5 sm:p-4 border border-[#e5e7eb] flex items-start gap-3 shadow-2xs"
                    >
                      <XCircle className="w-4 h-4 text-[#535353] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="body-sm text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                        {point.vendorPain}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Status */}
              <div className="mt-6 pt-4 border-t border-[#e5e7eb] text-center">
                <span className="text-[11px] font-bold text-muted-new uppercase tracking-wider">
                  Result: High Overhead · Slow Execution · Fragmented Accountability
                </span>
              </div>
            </div>

            {/* Right Column: Svayam Unified Model (Elevated Winner Card) */}
            <div className="bg-gradient-to-b from-[#f0f7ff] via-white to-[#f0f7ff] border-2 border-[#0067b8]/40 rounded-[14px] sm:rounded-[16px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-md relative group">
              {/* Winner Badge */}
              <div className="absolute -top-3.5 right-4 sm:right-6 bg-[#0067b8] text-white text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider px-3 sm:px-3.5 py-1 rounded-full shadow-xs">
                Recommended Model
              </div>

              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-[#cce5ff]">
                  <div className="w-8 h-8 rounded-full bg-[#107c41]/10 flex items-center justify-center text-[#107c41]">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-eyebrow uppercase tracking-wider block">
                      The Modern Way
                    </span>
                    <h3 className="heading-sm text-[15.5px] sm:text-[16px] font-semibold text-[#131313]">
                      The Svayam Unified Model
                    </h3>
                  </div>
                </div>

                {/* Gain Items */}
                <div className="space-y-3.5 sm:space-y-4">
                  {COMPARISON_POINTS.map((point) => (
                    <div
                      key={point.id}
                      className="bg-white rounded-[10px] p-3.5 sm:p-4 border border-[#cce5ff] flex items-start gap-3 shadow-2xs group-hover:border-[#0067b8]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#107c41] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="body-sm text-[13px] sm:text-[13.5px] font-medium leading-[20px] sm:leading-[21px]">
                        {point.svayamGain}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Status */}
              <div className="mt-6 pt-4 border-t border-[#cce5ff] text-center">
                <span className="text-[11px] font-bold text-[#107c41] uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-[#107c41]" aria-hidden="true" />
                  Result: 3x Acceleration · Single Point of Alignment · Scalable Growth
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ─────────────── BEAT 3: Resolution Hero Banner ─────────────── */}
        <div
          className="relative rounded-[14px] sm:rounded-[20px] overflow-hidden min-h-[200px] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-[#e5e7eb] bg-cover bg-center"
          style={{
            backgroundImage: "url('/resolution-banner.png')",
            backgroundPosition: 'center',
          }}
        >
          {/* Reduced Opacity Shadow Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.55) 40%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.2) 100%)',
            }}
          />

          {/* Content Layout */}
          <div className="relative z-10 text-left space-y-3 max-w-5xl w-full">
            {/* 1st Line: Heading */}
            <div className="text-[20px] sm:text-[23px] lg:text-[25px] font-bold !text-white leading-tight">
              Experience True Unified Execution with Svayam Incarnation.
            </div>

            {/* 2nd Line: Content */}
            <p className="text-[13.5px] sm:text-[15px] font-medium !text-white/95 leading-relaxed">
              One dedicated ecosystem. One unified team. All working toward a single goal — your sustainable growth.
            </p>

            {/* 3rd Line: CTA Button (Opens Consultation Modal) */}
            <div className="pt-1">
              <button
                onClick={onOpenConsultation}
                className="btn-primary !bg-white !text-[#0067b8] hover:!bg-[#f0f7ff] font-bold text-[13.5px] sm:text-[14px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-[8px] sm:rounded-[10px] shadow-xs active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto min-h-[44px]"
                aria-label="Schedule a Free Strategy Call"
              >
                <span>Schedule a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
