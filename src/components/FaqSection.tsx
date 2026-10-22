"use client";

import React, { useState } from "react";
import { FAQS } from "../data/contentData";
import { ChevronDown, MessageSquare, ArrowRight } from "./Icons";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
            Everything You Need To Know <br />
            <span className="text-sky-700">Before Partnering With Us</span>
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
            Transparent answers regarding deliverables, onboarding sprint timelines, reporting cadence, and engagement models.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-sky-500 shadow-md shadow-sky-500/10"
                    : "bg-white border-slate-300 hover:border-slate-400"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono font-black text-sky-800 px-2 py-0.5 rounded bg-sky-100">
                      0{index + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-slate-950 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-sky-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
              <MessageSquare size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a custom question or specific inquiry?</h4>
              <p className="text-xs text-slate-500">Our senior digital strategists answer within 2 business hours.</p>
            </div>
          </div>
          <a
            href="#audit-form"
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-sky-600 text-slate-800 hover:text-white font-bold text-xs border border-slate-200 hover:border-sky-600 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
