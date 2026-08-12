'use client';

import React from 'react';
import { HERO_CONTENT } from '@/data/content';

export const StatsBanner: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] border-y border-[#e5e7eb] py-4 shadow-2xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center flex flex-col items-center justify-center ${
                idx !== 0 ? 'pt-4 md:pt-0' : ''
              }`}
            >
              <div className="text-[26px] sm:text-[32px] font-bold text-[#212529] tracking-tight leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-[12.5px] sm:text-[13.5px] font-medium text-[#555555] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
