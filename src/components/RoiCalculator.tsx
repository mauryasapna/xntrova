"use client";

import React, { useState } from "react";
import { Sliders, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from "./Icons";

export default function RoiCalculator() {
  const [budget, setBudget] = useState<number>(150000); // 1.5 Lakhs INR
  const [traffic, setTraffic] = useState<number>(20000);
  const [objective, setObjective] = useState<string>("b2b");

  // Dynamic calculations
  let roasMultiplier = 4.2;
  let convRate = 0.035;

  if (objective === "ecommerce") {
    roasMultiplier = 4.8;
    convRate = 0.038;
  } else if (objective === "seo") {
    roasMultiplier = 5.4;
    convRate = 0.042;
  } else if (objective === "tech") {
    roasMultiplier = 3.9;
    convRate = 0.045;
  }

  const estimatedPipeline = Math.round(budget * roasMultiplier);
  const projectedLeads = Math.round((traffic * convRate) + (budget / 450));
  const estimatedReach = Math.round((budget / 12) * 10);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleApplyEstimate = () => {
    const budgetSelect = document.getElementById("budget-select") as HTMLSelectElement | null;
    if (budgetSelect) {
      if (budget < 75000) budgetSelect.value = "under-50k";
      else if (budget <= 200000) budgetSelect.value = "50k-150k";
      else if (budget <= 500000) budgetSelect.value = "150k-500k";
      else budgetSelect.value = "above-500k";
    }

    const messageArea = document.getElementById("message-input") as HTMLTextAreaElement | null;
    if (messageArea) {
      messageArea.value = `Target Objective: ${objective.toUpperCase()} | Budget: ${formatCurrency(budget)}/month | Target Pipeline: ${formatCurrency(estimatedPipeline)}`;
    }

    const auditForm = document.getElementById("audit-form");
    if (auditForm) {
      auditForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
              Interactive Estimator
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Project Your Digital <br />
              <span className="text-gradient-cyan">ROI & Pipeline Impact</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Adjust your monthly budget and business goals to see projected customer inquiries, high-intent reach, and expected pipeline growth based on our empirical portfolio benchmarks.
            </p>

            {/* Input 1: Target Objective */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2.5">
                Primary Business Objective
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "b2b", label: "B2B Lead Gen" },
                  { id: "ecommerce", label: "DTC E-Commerce" },
                  { id: "seo", label: "Organic SEO" },
                  { id: "tech", label: "Web App Re-platform" },
                ].map((obj) => (
                  <button
                    key={obj.id}
                    type="button"
                    onClick={() => setObjective(obj.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      objective === obj.id
                        ? "bg-sky-50 border-sky-600 text-sky-800 shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {obj.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Budget Slider */}
            <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Monthly Digital Budget</span>
                <span className="text-base font-black text-sky-700 font-mono">
                  {formatCurrency(budget)}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono font-medium">
                <span>₹50,000</span>
                <span>₹5,00,000</span>
                <span>₹10,00,000+</span>
              </div>
            </div>

            {/* Input 3: Traffic Slider */}
            <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Current Monthly Traffic</span>
                <span className="text-base font-black text-slate-900 font-mono">
                  {traffic.toLocaleString()} Visits
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="2000"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono font-medium">
                <span>2k Visits</span>
                <span>50k Visits</span>
                <span>100k+ Visits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Projected Results Card */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/80 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Estimated 90-Day Compounded Yield
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold">
                  {roasMultiplier}x Projected ROAS
                </span>
              </div>

              {/* Main Stat: Estimated Pipeline */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1 font-bold">
                  Projected Monthly Pipeline Impact
                </span>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 text-gradient-cyan">
                  {formatCurrency(estimatedPipeline)}
                </div>
                <span className="text-xs text-emerald-700 block mt-1 font-bold">
                  + Est. {Math.round((roasMultiplier - 1) * 100)}% Net Growth Potential
                </span>
              </div>

              {/* Secondary Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1 font-semibold">Projected Inbound Leads</span>
                  <span className="text-2xl font-black text-slate-900 block">{projectedLeads}+</span>
                  <span className="text-[10px] text-slate-500">High-intent qualified opportunities</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1 font-semibold">Targeted Market Reach</span>
                  <span className="text-2xl font-black text-slate-900 block">{(estimatedReach / 1000).toFixed(0)}k+</span>
                  <span className="text-[10px] text-slate-500">Targeted impressions in Delhi & global</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Includes multi-channel creative production & technical testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>24/7 Live Looker Studio attribution tracking</span>
                </div>
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={handleApplyEstimate}
                className="w-full py-3.5 px-6 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-600/20"
              >
                <span>Claim This Growth Plan</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
