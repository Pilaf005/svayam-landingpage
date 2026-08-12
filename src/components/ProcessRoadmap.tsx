'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PROCESS_STEPS } from '@/data/content';
import {
  Compass, Map, Layout, Terminal, Rocket, LineChart,
  CheckCircle2, Workflow, ChevronLeft, ChevronRight,
} from 'lucide-react';

const PHASE_TIMEFRAMES: Record<number, string> = {
  1: 'Week 1 – 2',
  2: 'Week 2 – 3',
  3: 'Week 3 – 5',
  4: 'Week 5 – 12',
  5: 'Week 12 – 13',
  6: 'Ongoing',
};

const PHASE_COLORS: Record<number, string> = {
  1: 'bg-[#e8f4ff] text-[#0067b8] border-[#b8d9f5]',
  2: 'bg-[#e6f7f0] text-[#107c41] border-[#9dd5b7]',
  3: 'bg-[#fff3e0] text-[#c15000] border-[#ffc97a]',
  4: 'bg-[#f0eeff] text-[#6a3fd4] border-[#c5b6f0]',
  5: 'bg-[#fff0f0] text-[#c0392b] border-[#f5b7b1]',
  6: 'bg-[#f8f9fa] text-[#414141] border-[#d1d5db]',
};

export const ProcessRoadmap: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const cardWidth = scrollContainerRef.current.clientWidth / 3;
      const index = Math.round(scrollLeft / (cardWidth > 0 ? cardWidth : 360));
      setActiveIndex(Math.min(Math.max(index, 0), PROCESS_STEPS.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollState);
      checkScrollState();
      return () => el.removeEventListener('scroll', checkScrollState);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToStep = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const stepWidth = scrollWidth / PROCESS_STEPS.length;
      scrollContainerRef.current.scrollTo({ left: index * stepWidth, behavior: 'smooth' });
    }
  };

  const getStepIcon = (iconName: string) => {
    const cls = 'w-5 h-5 text-[#535353]';
    switch (iconName) {
      case 'Compass': return <Compass className={cls} aria-hidden="true" />;
      case 'Map': return <Map className={cls} aria-hidden="true" />;
      case 'Layout': return <Layout className={cls} aria-hidden="true" />;
      case 'Terminal': return <Terminal className={cls} aria-hidden="true" />;
      case 'Rocket': return <Rocket className={cls} aria-hidden="true" />;
      case 'LineChart':
      default: return <LineChart className={cls} aria-hidden="true" />;
    }
  };

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 bg-[#f8f9fa] border-b border-[#e5e7eb]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="pill-token mb-3 sm:mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e5e7eb] text-[11.5px] sm:text-[12px] font-semibold text-[#212529]">
            <Workflow className="w-3.5 h-3.5 text-[#535353]" aria-hidden="true" />
            <span>How We Work</span>
          </div>

          <h2 className="section-heading-42 font-semibold tracking-tight mb-4 max-w-3xl mx-auto text-[#131313]">
            From First Call to Full Growth.{' '}
            <span className="link-blue block sm:inline">Here's Exactly How We Work.</span>
          </h2>

          <p className="text-[13.5px] sm:text-[15px] body-base leading-[22px] sm:leading-[26px] max-w-2xl mx-auto">
            No black boxes. No mystery. You always know what's happening, what's next, and who's
            responsible. Here's our structured 6-phase process — with clear timelines at every step.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1"
          style={{ scrollSnapType: 'x mandatory' }}
          role="region"
          aria-label="How We Work Process Steps"
          tabIndex={0}
        >
          {PROCESS_STEPS.map((step) => {
            const timeframe = PHASE_TIMEFRAMES[step.number];
            const colorClass = PHASE_COLORS[step.number];
            return (
              <div
                key={step.number}
                className="card-token p-5 sm:p-6 flex flex-col justify-between shrink-0 snap-start w-[82vw] max-w-[320px] sm:max-w-none sm:w-[340px] lg:w-[calc((100%-2.5rem)/3)] hover:border-[#0067b8] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  {/* Top Header Row: Icon + Title on Left, Phase Number on Right */}
                  <div className="flex items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] bg-[#f0f7ff] border border-[#cce5ff] text-[#535353] flex items-center justify-center shadow-2xs shrink-0">
                        {getStepIcon(step.iconName)}
                      </div>
                      <h3 className="heading-md text-[15.5px] sm:text-[17px] font-semibold leading-tight">{step.title}</h3>
                    </div>

                    <span className="text-[10.5px] sm:text-[11px] font-bold text-[#0067b8] uppercase tracking-wider shrink-0 bg-[#f0f7ff] px-2 sm:px-2.5 py-1 rounded-full border border-[#cce5ff]">
                      {step.step}
                    </span>
                  </div>

                  <p className="body-sm text-[12.5px] sm:text-[13px] leading-[19px] sm:leading-[20px] mb-4 sm:mb-5">{step.description}</p>
                </div>

                {/* Deliverables */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#e5e7eb] space-y-2">
                  <div className="text-[10.5px] sm:text-[11px] font-bold text-[#414141] uppercase tracking-wider mb-1.5 sm:mb-2">
                    Key Outcomes & Deliverables
                  </div>
                  <ul className="space-y-1.5" aria-label={`${step.title} Outcomes`}>
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-[#131313]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#535353] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls (Visible on Desktop only, hidden on mobile) */}
        <div className="mt-8 hidden md:flex items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
              canScrollLeft
                ? 'bg-white border-[#e5e7eb] hover:border-[#0067b8] text-[#212529] hover:text-[#0067b8] shadow-xs active:scale-95'
                : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll to previous steps"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => scrollToStep(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-[#0067b8]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Jump to step ${idx + 1}: ${step.title}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
              canScrollRight
                ? 'bg-white border-[#e5e7eb] hover:border-[#0067b8] text-[#212529] hover:text-[#0067b8] shadow-xs active:scale-95'
                : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
            }`}
            aria-label="Scroll to next steps"
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
