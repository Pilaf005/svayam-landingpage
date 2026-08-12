'use client';

import React from 'react';
import { HERO_CONTENT } from '@/data/content';

export const StatsBanner: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] border-y border-[#e5e7eb] py-4 sm:py-5 shadow-2xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center divide-y-0 md:divide-x divide-[#e5e7eb]">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center flex flex-col items-center justify-center py-1 sm:py-0"
            >
              <div className="text-[24px] sm:text-[30px] lg:text-[32px] font-bold tracking-tight leading-none mb-1 text-[#131313]">
                {stat.value}
              </div>
              <div className="body-sm text-[12px] sm:text-[13px] font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
