"use client";

import React from "react";
import { AGENCY_INFO } from "../data/contentData";
import { Sparkles, Phone, ArrowRight, ShieldCheck, WhatsApp } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="py-10 sm:py-14 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-6 sm:p-10 overflow-hidden border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 shadow-lg">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sky-200/30 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-bold mb-4">
              <Sparkles size={14} className="text-sky-700" />
              <span>Complimentary 40-Point Growth Audit</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-slate-600 font-semibold">Zero Cost</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
              Ready to Outperform Your <br />
              <span className="text-sky-700">Competition in 2026?</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-6 max-w-xl mx-auto font-semibold">
              Stop guessing your marketing and web strategy. Partner with Xntrova to uncover hidden conversion leaks, high-intent search gaps, and high-ROAS campaign opportunities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="#audit-form"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs sm:text-sm hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
              >
                <span>Claim Free Audit</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsApp size={16} className="text-emerald-700" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={15} className="text-sky-600" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600 font-semibold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>100% Free & No Obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Delivered Within 48 Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Strict Non-Disclosure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
