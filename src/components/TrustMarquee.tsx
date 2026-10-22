"use client";

import React from "react";
import { TRUST_CLIENTS } from "../data/contentData";
import { Award, Star } from "./Icons";

export default function TrustMarquee() {
  const platforms = [
    { name: "Clutch", rating: "4.9 / 5.0", reviews: "Top B2B Agency", badge: "Leader" },
    { name: "Google Reviews", rating: "4.9 / 5.0", reviews: "250+ Verified Reviews", badge: "Top Rated" },
    { name: "Trustpilot", rating: "4.8 / 5.0", reviews: "Excellent Standing", badge: "Verified" },
    { name: "GoodFirms", rating: "4.9 / 5.0", reviews: "Top Digital Agency", badge: "Certified" },
    { name: "DesignRush", rating: "Top Agency", reviews: "Global Excellence", badge: "Accredited" },
  ];

  const half = Math.ceil(TRUST_CLIENTS.length / 2);
  const row1 = TRUST_CLIENTS.slice(0, half);
  const row2 = TRUST_CLIENTS.slice(half);

  return (
    <section className="py-10 border-b border-slate-200 bg-slate-50 relative overflow-hidden">
      {/* Platform Ratings Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-sky-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Industry Accreditations & Verified Client Ratings
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {platforms.map((p, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs">
                <span className="font-bold text-slate-900">{p.name}</span>
                <span className="flex items-center text-amber-500 font-bold gap-0.5">
                  <Star size={11} />
                  {p.rating}
                </span>
                <span className="text-slate-500 hidden md:inline">({p.badge})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Logos Infinite Marquee - Dual Direction */}
      <div className="relative w-full overflow-hidden space-y-3">
        {/* Gradient fade on left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right */}
        <div className="flex items-center animate-marquee-reverse space-x-4 sm:space-x-6 py-1">
          {[...row1, ...row1, ...row1, ...row1].map((client, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all shrink-0 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-sky-600 group-hover:bg-sky-500 transition-colors"></div>
              <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex items-center animate-marquee space-x-4 sm:space-x-6 py-1">
          {[...row2, ...row2, ...row2, ...row2].map((client, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all shrink-0 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-emerald-500 transition-colors"></div>
              <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
