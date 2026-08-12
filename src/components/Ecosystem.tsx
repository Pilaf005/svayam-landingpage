'use client';

import React, { useState } from 'react';
import { ECOSYSTEM_MEMBERS } from '@/data/content';
import {
  Cpu,
  TrendingUp,
  Palette,
  Feather,
  Compass,
  ShieldCheck,
  Kanban,
  Bot,
  Cloud,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-4 h-4" aria-hidden="true" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" aria-hidden="true" />;
      case 'Palette':
        return <Palette className="w-4 h-4" aria-hidden="true" />;
      case 'Feather':
        return <Feather className="w-4 h-4" aria-hidden="true" />;
      case 'Compass':
        return <Compass className="w-4 h-4" aria-hidden="true" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" aria-hidden="true" />;
      case 'Kanban':
        return <Kanban className="w-4 h-4" aria-hidden="true" />;
      case 'Bot':
        return <Bot className="w-4 h-4" aria-hidden="true" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" aria-hidden="true" />;
      case 'Layers':
      default:
        return <Layers className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <section id="ecosystem" className="py-16 bg-white text-[#212529] border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="pill-token mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0067b8]" aria-hidden="true" />
            <span>Our Ecosystem</span>
          </div>

          <h2
            className="section-heading-42 font-bold tracking-tight mb-3"
            style={{ fontSize: '42px', lineHeight: '52px', color: 'var(--color-text-primary)' }}
          >
            Everything Your Business Needs.{' '}
            <span className="link-blue">One Trusted Partner.</span>
          </h2>

          <p className="body-sm text-[13px] sm:text-[14px] leading-[21px]">
            At Svayam Incarnation, we’ve built an ecosystem of professionals who collaborate daily —
            eliminating the complexity of managing multi-agency dependencies.
          </p>
        </div>

        {/* 10-Role Ecosystem Matrix */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {ECOSYSTEM_MEMBERS.map((member) => {
            const isHovered = activeMemberId === member.id;
            return (
              <div
                key={member.id}
                onMouseEnter={() => setActiveMemberId(member.id)}
                onMouseLeave={() => setActiveMemberId(null)}
                className={`p-4 rounded-[7px] transition-all duration-[300ms] border ${
                  isHovered
                    ? 'bg-[#f0f7ff] border-[#0067b8] shadow-[var(--shadow-1)]'
                    : 'bg-[#f8f9fa] border-[#e5e7eb] hover:border-[#0067b8]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-[3px] bg-[#0067b8] text-white">
                    {getIcon(member.iconName)}
                  </div>
                  <span className="text-[10.24px] font-semibold text-color-muted uppercase tracking-wider">
                    Pod
                  </span>
                </div>

                <h4 className="heading-sm text-[14px] font-bold mb-[2px]">
                  {member.title}
                </h4>
                <div className="text-[12px] font-medium text-[#0067b8] mb-1">
                  {member.role}
                </div>
                <p className="body-xs text-[11px] leading-[16px]">
                  {member.specialty}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-[7px] bg-[#f8f9fa] border border-[#e5e7eb] text-center max-w-2xl mx-auto">
          <p className="body-base text-[13px] mb-2">
            Instead of managing different vendors for every requirement, you gain access to one
            collaborative team that shares the same vision — <strong>your success.</strong>
          </p>
          <div className="text-[14px] font-bold text-[#0067b8]">
            All under one roof. All working toward one goal.
          </div>
        </div>
      </div>
    </section>
  );
};
