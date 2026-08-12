'use client';

import React, { useState } from 'react';
import { Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/data/content';

export const HeroConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Technology Solutions',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className="w-full max-w-[420px] rounded-[20px] p-7 sm:p-8 shadow-2xl text-center text-white border border-white/25"
        style={{
          background: 'rgba(15, 23, 42, 0.20)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="w-12 h-12 rounded-full bg-[#0067b8]/30 border border-[#0067b8] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6 text-[#38bdf8]" />
        </div>
        <h3 className="text-[20px] font-bold text-white mb-2">Request Received!</h3>
        <p className="text-[13px] text-slate-200 leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Our executive strategy team will reach out to you within 24 hours at{' '}
          <span className="text-[#38bdf8] font-medium">{formData.email}</span>.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              serviceInterest: 'Technology Solutions',
            });
          }}
          className="px-5 py-2 rounded-[8px] bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium border border-white/30 transition-colors cursor-pointer"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-full sm:max-w-[420px] rounded-[16px] sm:rounded-[20px] p-5 sm:p-7 shadow-2xl text-left border border-white/25"
      style={{
        background: 'rgba(15, 23, 42, 0.35)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Form Header */}
      <h2
        className="text-[19px] sm:text-[22px] font-bold text-white leading-tight drop-shadow-sm"
        style={{ color: '#ffffff' }}
      >
        Request Expert Consultation
      </h2>
      <p
        className="text-[12.5px] sm:text-[13px] text-white/90 font-normal leading-snug mt-1.5 mb-4 sm:mb-5"
        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
      >
        Fill in your details below to schedule an executive strategy session.
      </p>

      {/* Interactive Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-[12.5px] sm:text-[13px] font-medium text-white mb-1">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Alexander Wright"
            className="w-full rounded-[8px] bg-white text-slate-900 placeholder:text-slate-400 px-3.5 py-3 sm:py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 transition-all shadow-xs"
          />
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-[12.5px] sm:text-[13px] font-medium text-white mb-1">
            Business Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alexander@company.com"
            className="w-full rounded-[8px] bg-white text-slate-900 placeholder:text-slate-400 px-3.5 py-3 sm:py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 transition-all shadow-xs"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-[12.5px] sm:text-[13px] font-medium text-white mb-1">
            Phone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+44 7000 000000"
            className="w-full rounded-[8px] bg-white text-slate-900 placeholder:text-slate-400 px-3.5 py-3 sm:py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 transition-all shadow-xs"
          />
        </div>

        {/* Service Interest Dropdown with Official Svayam Incarnation Offerings */}
        <div>
          <label className="block text-[12.5px] sm:text-[13px] font-medium text-white mb-1">
            Service Interest <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              className="w-full rounded-[8px] bg-white text-slate-900 px-3.5 py-3 sm:py-2.5 text-[14px] pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 cursor-pointer shadow-xs"
            >
              <option value="Complete Business Outsourcing (All-in-One)">
                Complete Business Outsourcing (All-in-One)
              </option>
              {SERVICES.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
            </select>
            <ChevronDown
              className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Submit CTA Button */}
        <button
          type="submit"
          className="w-full mt-2 min-h-[48px] py-3 px-4 rounded-[8px] bg-[#0067b8] hover:bg-[#005da6] active:bg-[#004e8c] text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:shadow-lg active:scale-[0.99]"
        >
          <Send className="w-4 h-4 fill-white text-white" aria-hidden="true" />
          <span>Request Consultation Now</span>
        </button>
      </form>
    </div>
  );
};
