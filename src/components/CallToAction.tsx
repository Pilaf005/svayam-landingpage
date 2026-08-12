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
    <section id="cta" className="py-20 bg-white text-[#212529] border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Column: Expanded Consultation Image (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[460px] rounded-[16px] overflow-hidden border border-[#e5e7eb] shadow-md group bg-white">
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
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[12px] bg-white/95 backdrop-blur-sm border border-white/40 shadow-sm">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider mb-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
                  <span className="text-[#0067b8]">Executive Consultation</span>
                </div>
                <div className="text-[13px] font-semibold text-[#212529]">
                  Direct access to senior tech & growth strategists.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact CTA Content & Controls (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              {/* Pill Tag */}
              <div className="pill-token mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e5e7eb] text-[12px] font-semibold text-[#212529] w-fit shadow-2xs">
                <HeartHandshake className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
                <span>Let's Build Together</span>
              </div>

              {/* Headline */}
              <h2
                className="font-semibold tracking-tight mb-3"
                style={{ fontSize: '38px', lineHeight: '48px', color: 'var(--color-text-primary)' }}
              >
                Ready to Stop Managing Vendors{' '}
                <span className="link-blue">and Start Actually Growing?</span>
              </h2>

              <p className="text-[15px] body-base leading-[25px] mb-5">
                We limit intake to <strong style={{color: 'var(--color-text-primary)'}}>4 new client partnerships per month</strong> —
                so every business gets our complete focus and our very best work.{' '}
                <span className="link-blue font-semibold">Spots fill fast.</span>
              </p>

              {/* Trust Badges Row */}
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {TRUST_BADGES.map(({ icon: Icon, title, subtitle }) => (
                  <div
                    key={title}
                    className="bg-white rounded-[10px] border border-[#e5e7eb] p-3 flex flex-col justify-between shadow-2xs hover:border-[#0067b8] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-[6px] bg-[#f0f7ff] border border-[#cce5ff] flex items-center justify-center mb-1.5 shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#0067b8]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold leading-tight" style={{color: 'var(--color-text-primary)'}}>{title}</div>
                      <div className="body-xs text-[10.5px] mt-0.5">{subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons & Social Proof Line */}
            <div>
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary w-full sm:w-auto text-[13.5px] px-6 py-2.5 shadow-xs active:scale-95 transition-all"
                  aria-label="Let's Build Together - Book Consultation"
                >
                  <span>Let's Build Together</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="btn-secondary w-full sm:w-auto text-[13.5px] px-6 py-2.5 shadow-xs active:scale-95 transition-all"
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
