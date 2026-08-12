'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, ArrowRight, HeartHandshake, CheckCircle2, Users, Clock } from 'lucide-react';

interface CallToActionProps {
  onOpenConsultation: () => void;
}

const TRUST_BADGES = [
  {
    icon: CheckCircle2,
    title: 'Free 30-Min Strategy Session',
    subtitle: 'Zero commitment required',
  },
  {
    icon: Users,
    title: 'Dedicated Team Within 72 Hours',
    subtitle: 'Briefed, aligned, and ready',
  },
  {
    icon: Clock,
    title: 'No Long-Term Lock-In',
    subtitle: 'Stay because results speak',
  },
];

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20 bg-white text-[#212529] border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* Left Column: Expanded Consultation Image (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[460px] rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#e5e7eb] shadow-md group bg-white">
              <Image
                src="/expert-consultation.png"
                alt="Svayam senior business consultant discussing strategy with client"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 p-3.5 sm:p-4 rounded-[10px] sm:rounded-[12px] bg-white/95 backdrop-blur-sm border border-white/40 shadow-sm">
                <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
                  <span className="text-[#0067b8]">Executive Consultation</span>
                </div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-[#212529]">
                  Direct access to senior tech & growth strategists.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact CTA Content & Controls (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Pill Tag */}
              <div className="pill-token mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e5e7eb] text-[11.5px] sm:text-[12px] font-semibold text-[#212529] w-fit shadow-2xs">
                <HeartHandshake className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
                <span>Let's Build Together</span>
              </div>

              {/* Headline */}
              <h2 className="cta-heading font-semibold tracking-tight mb-3 text-[#131313]">
                Ready to Stop Managing Vendors{' '}
                <span className="link-blue block sm:inline">and Start Actually Growing?</span>
              </h2>

              <p className="text-[13.5px] sm:text-[15px] body-base leading-[22px] sm:leading-[25px] mb-4 sm:mb-5">
                We limit intake to <strong style={{color: 'var(--color-text-primary)'}}>4 new client partnerships per month</strong> —
                so every business gets our complete focus and our very best work.{' '}
                <span className="link-blue font-semibold">Spots fill fast.</span>
              </p>

              {/* Trust Badges Row (Compact row alignment on mobile, stacked on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                {TRUST_BADGES.map(({ icon: Icon, title, subtitle }) => (
                  <div
                    key={title}
                    className="bg-white rounded-[10px] border border-[#e5e7eb] p-2.5 sm:p-3 flex flex-row sm:flex-col items-center sm:items-start justify-start sm:justify-between gap-3 sm:gap-1.5 shadow-2xs hover:border-[#0067b8]/40 transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-7 sm:h-7 rounded-[6px] bg-[#f0f7ff] border border-[#cce5ff] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#0067b8]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[12px] font-bold leading-tight text-[#131313]">{title}</div>
                      <div className="body-xs text-[11px] sm:text-[10.5px] mt-0.5 text-[#666666]">{subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons & Social Proof Line */}
            <div>
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 mb-3">
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary w-full sm:w-auto text-[13.5px] px-6 py-3 min-h-[44px] shadow-xs active:scale-95 transition-all"
                  aria-label="Let's Build Together - Book Consultation"
                >
                  <span>Let's Build Together</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="btn-secondary w-full sm:w-auto text-[13.5px] px-6 py-3 min-h-[44px] shadow-xs active:scale-95 transition-all"
                  aria-label="Schedule a Free Consultation"
                >
                  <Calendar className="w-4 h-4 text-[#0067b8]" aria-hidden="true" />
                  <span>Schedule a Free Consultation</span>
                </button>
              </div>

              {/* Social Proof Micro-line */}
              <p className="text-[11.5px] text-muted-new">
                Trusted by <span className="font-semibold" style={{color: 'var(--color-text-inverse)'}}>50+ businesses</span> across 9 industries.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
