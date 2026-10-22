"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "../data/contentData";
import { ArrowUpRight, Check, TrendingUp, Sparkles } from "./Icons";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredStudies = selectedCategory === "all"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            Proven Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Real Work. Real Data. <br />
            <span className="text-gradient-cyan">Exceptional Business Growth.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every case study represents a deliberate, data-backed execution where our squad solved critical acquisition bottlenecks and delivered compounded returns.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto shadow-sm">
            {[
              { id: "all", label: "All Projects" },
              { id: "ecommerce", label: "E-Commerce DTC" },
              { id: "seo", label: "SEO & Topical Authority" },
              { id: "tech", label: "Web Apps & Modern Tech" },
              { id: "marketing", label: "Performance Paid Media" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-400 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
            >
              <div>
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-sky-800 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                      {study.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Client: <span className="text-slate-900 font-bold">{study.client}</span>
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-sky-600 group-hover:bg-sky-50 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center sm:text-left">
                      <span className="text-xs text-slate-500 block truncate font-medium">{metric.label}</span>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 block my-0.5 text-gradient-cyan">
                        {metric.value}
                      </span>
                      <span className="text-[10px] text-emerald-700 block font-bold">
                        {metric.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Strategy Deliverables Breakdown */}
                {expandedId === study.id && (
                  <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs space-y-2">
                    <span className="font-bold text-sky-900 block mb-2">Key Execution Milestones:</span>
                    {study.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-slate-700">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Tags & Toggle */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                  className="text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors"
                >
                  {expandedId === study.id ? "Show Less ↑" : "Strategy Details →"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Want similar results for your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We will conduct a tailored forensic audit of your market, competitors, and conversion gaps.
            </p>
          </div>
          <a
            href="#audit-form"
            className="px-6 py-3 rounded-xl bg-sky-600 text-white font-bold text-xs sm:text-sm hover:bg-sky-700 transition-all shadow-md shadow-sky-600/20 shrink-0"
          >
            Claim Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
