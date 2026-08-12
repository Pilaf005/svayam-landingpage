'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBanner } from '@/components/StatsBanner';
import { ProblemSolution } from '@/components/ProblemSolution';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ProcessRoadmap } from '@/components/ProcessRoadmap';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { ConsultationModal } from '@/components/ConsultationModal';

export default function LandingPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#0067b8]/20 selection:text-[#0067b8]">
      {/* Header & Sticky Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Sections Flow */}
      <main className="flex-1">
        {/* 01 — HERO */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* STATS BANNER (Placed directly below Hero) */}
        <StatsBanner />

        {/* 02 — THE REALITY (Problem vs Solution) */}
        <ProblemSolution onOpenConsultation={() => handleOpenConsultation()} />

        {/* 03 — OUR SERVICES */}
        <ServicesShowcase
          onSelectService={(serviceName) => handleOpenConsultation(serviceName)}
        />

        {/* 04 — WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 05 — HOW WE WORK */}
        <ProcessRoadmap />

        {/* 06 — LET'S BUILD TOGETHER */}
        <CallToAction onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation Intake Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        preSelectedService={selectedServiceForModal}
      />
    </div>
  );
}
