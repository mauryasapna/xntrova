"use client";

import React, { useState } from "react";
import { PROCESS_STEPS } from "../data/contentData";
import { Check, Clock, Sparkles, ArrowRight } from "./Icons";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 lg:py-28 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            Proven Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            A Transparent 4-Step Engine <br />
            <span className="text-gradient-cyan">Built For Compounding Growth</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We operate through disciplined agile sprints. From day 1, you know exactly what is being tested, deployed, and delivered with measurable milestones.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {PROCESS_STEPS.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                activeStep === idx
                  ? "bg-white border-sky-500 shadow-lg shadow-sky-500/10"
                  : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
              }`}
            >
              {activeStep === idx && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-sky-600" />
              )}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-black font-mono ${activeStep === idx ? "text-sky-600" : "text-slate-400"}`}>
                  PHASE {s.step}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                  <Clock size={10} />
                  {s.duration}
                </span>
              </div>
              <h3 className={`text-sm sm:text-base font-bold ${activeStep === idx ? "text-slate-900" : "text-slate-600"}`}>
                {s.title.split("&")[0].trim()}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Deep Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-black text-sky-600 font-mono">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Phase {activeStep + 1} Roadmap
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Deliverables Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  Phase Deliverables & Milestones
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROCESS_STEPS[activeStep].deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                        <Check size={12} />
                      </div>
                      <span className="font-semibold">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#audit-form"
                  className="px-6 py-3 rounded-xl bg-sky-600 text-white font-bold text-xs sm:text-sm hover:bg-sky-700 transition-all flex items-center gap-2 shadow-md shadow-sky-600/20"
                >
                  <span>Start Phase 01 Audit Free</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Process Infographic Box */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500">STATUS: ACTIVE SPRINT</span>
                  <span className="text-xs text-emerald-700 font-extrabold">100% TRANSPARENCY</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center text-slate-700">
                    <span>Target Timeline</span>
                    <span className="text-sky-700 font-bold">{PROCESS_STEPS[activeStep].duration}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center text-slate-700">
                    <span>Squad Allocation</span>
                    <span className="text-emerald-700 font-bold">Senior Dedicated</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between items-center text-slate-700">
                    <span>Client Review Cadence</span>
                    <span className="text-slate-900 font-bold">Bi-Weekly Sync + Live Dashboard</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-snug">
                  * All sprints are backed by clear acceptance criteria and non-disclosure data protection protocols.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
