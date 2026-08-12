'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES } from '@/data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: preSelectedService || 'Complete Business Outsourcing (All-in-One)',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preSelectedService }));
    }
  }, [preSelectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[440px] rounded-[22px] p-6 sm:p-8 shadow-2xl text-left border border-white/25 overflow-hidden"
        style={{
          background: 'rgba(15, 23, 42, 0.20)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center text-white py-4">
            <div className="w-14 h-14 rounded-full bg-[#0067b8]/30 border border-[#0067b8] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 text-[#38bdf8]" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-2">Request Received!</h3>
            <p className="text-[13.5px] text-slate-200 leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Our executive strategy team will reach out to you within 24 hours at{' '}
              <span className="text-[#38bdf8] font-medium">{formData.email}</span> regarding{' '}
              <span className="text-white font-medium">{formData.serviceInterest}</span>.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-[8px] bg-[#0067b8] hover:bg-[#005da6] text-white text-[13.5px] font-semibold transition-all cursor-pointer shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <h2
              id="modal-title"
              className="text-[22px] sm:text-[24px] font-bold text-white leading-tight pr-8 drop-shadow-sm"
              style={{ color: '#ffffff' }}
            >
              Request Expert Consultation
            </h2>
            <p
              className="text-[13px] text-white/90 font-normal leading-snug mt-1.5 mb-6"
              style={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Fill in your details below to schedule an executive strategy session.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[13px] font-medium text-white mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alexander Wright"
                  className="w-full rounded-[8px] bg-white text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 transition-all shadow-xs"
                />
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-[13px] font-medium text-white mb-1.5">
                  Business Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alexander@company.com"
                  className="w-full rounded-[8px] bg-white text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 transition-all shadow-xs"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-[13px] font-medium text-white mb-1.5">
                  Phone / WhatsApp <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7000 000000"
                  className="w-full rounded-[8px] bg-white text-slate-900 placeholder:text-slate-400 px-3.5 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 transition-all shadow-xs"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-[13px] font-medium text-white mb-1.5">
                  Service Interest <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full rounded-[8px] bg-white text-slate-900 px-3.5 py-2.5 text-[14px] pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0067b8] border border-slate-200 cursor-pointer shadow-xs"
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
                className="w-full mt-2 py-3 px-4 rounded-[8px] bg-[#0067b8] hover:bg-[#005da6] active:bg-[#004e8c] text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer hover:shadow-lg active:scale-[0.99]"
              >
                <Send className="w-4 h-4 fill-white text-white" aria-hidden="true" />
                <span>Request Consultation Now</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
