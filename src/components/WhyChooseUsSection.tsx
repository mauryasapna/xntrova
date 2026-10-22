"use client";

import React from "react";
import { KEY_BENEFITS } from "../data/contentData";
import {
  ShieldCheck,
  Eye,
  Users,
  Cpu,
  Zap,
  Award,
  CheckCircle2,
  ArrowRight,
} from "./Icons";

export default function WhyChooseUsSection() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "shield-check":
        return <ShieldCheck size={22} className="text-emerald-600" />;
      case "eye":
        return <Eye size={22} className="text-sky-600" />;
      case "users":
        return <Users size={22} className="text-cyan-600" />;
      case "cpu":
        return <Cpu size={22} className="text-indigo-600" />;
      case "zap":
        return <Zap size={22} className="text-amber-600" />;
      case "award":
        return <Award size={22} className="text-rose-600" />;
      default:
        return <Zap size={22} className="text-sky-600" />;
    }
  };

  const comparison = [
    {
      feature: "Strategy & Scope",
      legacy: "Generic one-size-fits-all packages",
      xntrova: "Custom revenue architecture based on your CAC",
    },
    {
      feature: "Talent Assigned",
      legacy: "Junior interns or outsourced accounts",
      xntrova: "Dedicated Senior Specialists & Tech Leads",
    },
    {
      feature: "Reporting & Access",
      legacy: "Vague monthly PDFs with vanity metrics",
      xntrova: "24/7 Live Looker Studio Dashboards + Slack access",
    },
    {
      feature: "Web Architecture",
      legacy: "Bloated off-the-shelf templates with poor speed",
      xntrova: "Custom Next.js & Headless, 99+ Core Web Vitals",
    },
    {
      feature: "Sprint Velocity",
      legacy: "Slow turnaround times and bureaucracy",
      xntrova: "Agile 2-week testing and deployment sprints",
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            The Xntrova Difference
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
            Why Fast-Scaling Businesses{" "}
            <span className="text-sky-700">Choose Xntrova</span>
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
            We operate as an agile, high-conviction growth squad embedded directly into your business. No fluff, no vanity metrics—only compounding revenue.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {KEY_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-sky-400 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-50 transition-all">
                    {getIcon(benefit.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Standard SLA Guarantee</span>
                <span className="text-emerald-700 font-bold">Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              How We Compare Against Legacy Agencies
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear accountability and modern standards you should expect from your growth partner.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-600 bg-slate-100/70">
                  <th className="py-3.5 px-4 font-bold w-1/4">Key Capability</th>
                  <th className="py-3.5 px-4 font-semibold w-1/3 text-slate-500">Typical Legacy Agency</th>
                  <th className="py-3.5 px-4 font-extrabold text-sky-800 w-1/3 bg-sky-100/60 border-l border-sky-200">
                    Xntrova Technologies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>{row.legacy}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-800 font-semibold bg-sky-50/40 border-l border-sky-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span className="text-slate-900 font-bold">{row.xntrova}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600 font-medium">
              Ready to experience modern agency performance with zero lock-in risks?
            </span>
            <a
              href="#audit-form"
              className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Request Free Growth Audit</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
