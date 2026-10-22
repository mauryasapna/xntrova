"use client";

import React from "react";
import { STATS, AGENCY_INFO } from "../data/contentData";
import { Lightbulb, Compass, BarChart3, TrendingUp, MapPin, ArrowRight } from "./Icons";

export default function AboutSection() {
  const pillars = [
    {
      icon: <Lightbulb size={22} className="text-sky-600" />,
      title: "Creative Ideas",
      desc: "Fresh thinking and modern visual aesthetics that craft unforgettable brand stories and hook high-intent buyers.",
    },
    {
      icon: <Compass size={22} className="text-cyan-600" />,
      title: "Strategic Planning",
      desc: "Forensic competitor benchmarking, customer journey analysis, and conversion roadmaps tailored to your unit economics.",
    },
    {
      icon: <BarChart3 size={22} className="text-emerald-600" />,
      title: "Data-Driven Decisions",
      desc: "Every campaign allocation, UX change, and code deployment is validated by statistical data, attribution, and CAC targets.",
    },
    {
      icon: <TrendingUp size={22} className="text-amber-600" />,
      title: "Measurable Results",
      desc: "We prioritize actual revenue, qualified sales pipeline, and bottom-line profit over vanity impressions and empty clicks.",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden bg-white">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
              About Xntrova Technologies
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              Driven By Ideas. <br />
              <span className="text-sky-700">Focused on Results.</span>
            </h2>

            <div className="space-y-3 text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
              <p>
                At Xntrova, we believe that true digital excellence requires more than just marketing campaigns or website code—it demands a seamless fusion of both.
              </p>
              <p className="text-xs sm:text-sm text-slate-900 border-l-3 border-sky-600 pl-3.5 py-1 font-bold">
                Standing as one of the most trusted digital marketing and technology agencies in Delhi NCR, our mission is to eliminate guesswork. We partner with visionary founders and marketing leaders to engineer predictable business performance.
              </p>
            </div>

            {/* Headquarters Location Pill */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-6 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Agency Headquarters</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{AGENCY_INFO.address}</p>
                </div>
              </div>
              <span className="hidden sm:inline-flex text-[10px] font-bold text-sky-800 px-2 py-0.5 rounded-full bg-sky-100 border border-sky-200">
                Dwarka Hub
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#audit-form"
                className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs sm:text-sm hover:bg-sky-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Partner With Us</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#services"
                className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 font-semibold text-xs sm:text-sm transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars & Live Metric Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Performance Overview Banner Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 mt-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Compounding Performance Metrics
                </span>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified Outcomes
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {STATS.map((stat, i) => (
                  <div key={i} className="p-2">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 block mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
