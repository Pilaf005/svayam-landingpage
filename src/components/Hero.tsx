"use client";

import React from "react";
import { HeroConsultationForm } from "@/components/HeroConsultationForm";

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <div id="main-content" className="w-full">
      {/* 1. Non-Sticky, Naturally Scrollable Blue Announcement Strip (#0067b8) */}
      <div className="pt-[56px] sm:pt-[60px] bg-[#0067b8] text-white border-b border-[#005da6]">
        <div className="max-w-[1300px] mx-auto py-3 sm:py-3.5 px-4 flex items-center justify-center text-center">
          <p className="text-[12px] sm:text-[13.5px] font-normal text-white leading-snug sm:leading-normal tracking-normal drop-shadow-xs">
            Don’t just outsource tasks. Gain a dedicated team that thinks, builds, and grows with you.
          </p>
        </div>
      </div>

      {/* 2. Hero Section Frame */}
      <section className="py-4 sm:py-6 px-2 sm:px-4 lg:px-6 bg-white">
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Framed Hero Image Container */}
          <div
            className="relative rounded-[10px] sm:rounded-[14px] overflow-hidden bg-cover bg-center bg-no-repeat min-h-[480px] lg:min-h-[540px] px-4 py-8 sm:px-8 sm:py-10 lg:pl-[60px] lg:pr-10 flex items-center border border-[#e5e7eb]"
            style={{
              backgroundImage: "url('/busi-hero.jpg')",
              backgroundPosition: "center",
            }}
          >
            {/* Progressive Shadow Overlay - Full coverage on mobile for legibility, horizontal fade on desktop */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.72) 20%, rgba(0, 0, 0, 0.50) 35%, rgba(0, 0, 0, 0.20) 48%, transparent 58%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none lg:hidden"
              style={{
                background: "rgba(0, 0, 0, 0.72)",
              }}
            />

            <div className="relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Core Value Proposition & Typography Hierarchy */}
                <div className="lg:col-span-7 text-left max-w-[640px]">
                  {/* 1. Eyebrow / Label */}
                  <div className="text-[14px] sm:text-[16px] font-medium text-white/95 mb-2.5 tracking-normal drop-shadow-sm">
                    Your Complete Business Outsourcing Partner
                  </div>

                  {/* 2. Main Headline with Fluid Scaling and Natural Wrapping */}
                  <h1 className="font-bold tracking-tight mb-4 drop-shadow-md">
                    <span className="text-gradient-brand hero-heading block pt-1 pb-0.5">
                      Build Your Business.
                    </span>
                    <span className="text-gradient-brand hero-heading block pt-0.5 pb-1">
                      We’ll Handle Everything Else.
                    </span>
                  </h1>

                  {/* 3. Compact Description Content */}
                  <p className="mb-6 text-[13.5px] sm:text-[14.5px] font-normal leading-[22px] sm:leading-[24px] text-[#e5e7eb] max-w-[540px] drop-shadow-sm">
                    Growing a business is hard—managing technology, marketing,
                    operations, and compliance shouldn’t be. At Svayam
                    Incarnation, we become an extension of your team with
                    end-to-end outsourcing solutions that help startups, SMEs,
                    and enterprises launch faster and scale with confidence.
                  </p>

                  {/* 4. Action Button - Explore Services Link */}
                  <div>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center px-6 py-3 border border-white text-white text-[13.5px] sm:text-[14px] font-medium bg-white/10 hover:bg-white hover:text-[#212529] transition-all rounded-[6px] shadow-sm active:scale-95 cursor-pointer min-h-[44px]"
                      aria-label="Explore Services"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>

                {/* Right Column: Transparent Frosted Glass Consultation Intake Form */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                  <HeroConsultationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
