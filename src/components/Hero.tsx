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
      <div className="pt-[54px] bg-[#0067b8] text-white border-b border-[#005da6]">
        <div className="max-w-[1300px] mx-auto py-2.5 px-4 flex items-center justify-center text-center">
          <p className="text-[12.5px] sm:text-[13.5px] font-normal text-white tracking-normal drop-shadow-xs">
            Don’t just outsource tasks. Gain a dedicated team that thinks,
            builds, and grows with you.
          </p>
        </div>
      </div>

      {/* 2. Hero Section Frame */}
      <section className="py-[22px] px-2 sm:px-3 bg-white">
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Framed Hero Image Container */}
          <div
            className="relative rounded-[8px] sm:rounded-[12px] overflow-hidden bg-cover bg-center bg-no-repeat min-h-[540px] lg:min-h-[540px] pl-6 sm:pl-10 lg:pl-[64px] pr-6 sm:pr-8 lg:pr-8 py-6 sm:py-8 flex items-center border border-[#e5e7eb]"
            style={{
              backgroundImage: "url('/busi-hero.jpg')",
              backgroundPosition: "center",
            }}
          >
            {/* Progressive Shadow Overlay Strictly on the Text Side (80% Opacity) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.68) 15%, rgba(0, 0, 0, 0.48) 30%, rgba(0, 0, 0, 0.24) 42%, rgba(0, 0, 0, 0.08) 50%, transparent 56%, transparent 100%)",
              }}
            />

            <div className="relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Core Value Proposition & Typography Hierarchy */}
                <div className="lg:col-span-7 text-left max-w-[640px]">
                  {/* 1. Eyebrow / Label - 16px and Title Case */}
                  <div className="text-[16px] font-normal text-white mb-3 tracking-normal drop-shadow-sm">
                    Your Complete Business Outsourcing Partner
                  </div>

                  {/* 2. Main Headline Strictly in Exactly Two Lines */}
                  <h1 className="font-bold tracking-tight mb-4 drop-shadow-md">
                    <span
                      className="text-gradient-brand block pt-1 pb-1 whitespace-nowrap"
                      style={{
                        fontSize: "clamp(28px, 3.2vw, 42px)",
                        lineHeight: "1.25",
                      }}
                    >
                      Build Your Business.
                    </span>
                    <span
                      className="text-gradient-brand block pt-1 pb-1 whitespace-nowrap"
                      style={{
                        fontSize: "clamp(26px, 2.9vw, 42px)",
                        lineHeight: "1.25",
                      }}
                    >
                      We’ll Handle Everything Else.
                    </span>
                  </h1>

                  {/* 3. Compact Description Content (Option A) */}
                  <p className="mb-6 text-[14px] font-normal leading-[22px] text-[#e5e7eb] max-w-[540px] drop-shadow-sm">
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
                      className="inline-flex items-center px-5 py-2.5 border border-white text-white text-[13.5px] font-normal bg-transparent hover:bg-white hover:text-[#212529] transition-colors rounded-[1px] shadow-sm active:scale-95 cursor-pointer"
                      aria-label="Explore Services"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>

                {/* Right Column: Transparent Frosted Glass Consultation Intake Form */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
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
