"use client";

import React, { useState } from "react";
import { SERVICES, TECH_TOOLS } from "../data/contentData";
import {
  Search,
  Target,
  Code,
  ShoppingBag,
  Share2,
  BarChart3,
  Check,
  ArrowRight,
  Sparkles,
} from "./Icons";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "marketing" | "technology" | "growth">("all");

  const filteredServices = activeCategory === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <Search size={18} className="text-sky-700" />;
      case "target":
        return <Target size={18} className="text-cyan-700" />;
      case "code":
        return <Code size={18} className="text-emerald-700" />;
      case "shopping-bag":
        return <ShoppingBag size={18} className="text-amber-700" />;
      case "share2":
        return <Share2 size={18} className="text-purple-700" />;
      case "bar-chart3":
        return <BarChart3 size={18} className="text-rose-700" />;
      default:
        return <Sparkles size={18} className="text-sky-700" />;
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    const serviceSelect = document.getElementById("service-select") as HTMLSelectElement | null;
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase().slice(0, 10))) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
    const auditForm = document.getElementById("audit-form");
    if (auditForm) {
      auditForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            Our Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
            Full-Funnel Marketing &{" "}
            <span className="text-sky-700">Bespoke Web Technology</span>
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
            We don’t sell siloed tactics. We design unified growth engines where high-intent traffic, frictionless web experience, and rigorous conversion optimization multiply each other.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 p-1.5 rounded-xl bg-white border border-slate-300 max-w-lg mx-auto shadow-sm">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-800 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              All Capabilities
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("marketing")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === "marketing"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-800 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              Digital Marketing & SEO
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("technology")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === "technology"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-800 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              Web Tech & Apps
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("growth")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === "growth"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-800 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              Growth & E-Commerce
            </button>
          </div>
        </div>

        {/* Services Bento Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-300 hover:border-sky-500 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 overflow-hidden"
            >
              <div>
                {/* Photo Header */}
                <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Icon Badge Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 border border-slate-200 shadow-sm flex items-center justify-center backdrop-blur-sm">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Card Content with bold, high-contrast readable text */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-black text-slate-950 mb-1.5 group-hover:text-sky-700 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-200">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-900">
                        <div className="w-4 h-4 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center shrink-0 mt-0.5 text-sky-700 font-bold">
                          <Check size={10} />
                        </div>
                        <span className="leading-snug font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech tags & Action button */}
              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="flex flex-wrap gap-1 mb-3.5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectService(service.title)}
                  className="w-full py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 group/btn shadow-sm"
                >
                  <span>Explore Service & Scope</span>
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tools We Work With Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-950">
                Enterprise Tech Stack & Analytics Ecosystem
              </h3>
              <p className="text-[11px] text-slate-700 font-semibold mt-0.5">
                Modern tools we leverage for performance marketing, tracking, and web development
              </p>
            </div>
            <span className="text-xs text-sky-800 font-black">100% Certified Practitioners</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 shadow-sm flex items-center gap-1.5 hover:border-sky-500 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                <span className="text-xs font-bold text-slate-950">{tool.name}</span>
                <span className="text-[10px] text-slate-600 font-mono">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
