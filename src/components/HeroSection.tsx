"use client";

import React, { useState } from "react";
import { AGENCY_INFO } from "../data/contentData";
import { Sparkles, CheckCircle2, ShieldCheck, Star, WhatsApp, Send } from "./Icons";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "SEO (Search Engine Optimisation)",
    ownWords: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Helper function to remove emojis strictly
  const sanitizeWithoutEmojis = (str: string) => {
    return str
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF])/g,
        ""
      )
      .trim();
  };

  const getCleanWhatsappMessage = () => {
    const lines = [
      "Website Inquiry - Consultation:",
      `Name: ${sanitizeWithoutEmojis(formData.name)}`,
      formData.phone ? `Phone: ${sanitizeWithoutEmojis(formData.phone)}` : "",
      `Service: ${sanitizeWithoutEmojis(formData.service)}`,
      formData.ownWords ? `Requirement: ${sanitizeWithoutEmojis(formData.ownWords)}` : "",
    ];
    return lines.filter(Boolean).join("\n");
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please enter your name and phone / WhatsApp number.");
      return;
    }

    setErrorMessage("");
    setFormStatus("submitting");

    // 1. Save to MySQL Database via PHP backend
    try {
      await fetch("http://localhost/xntrova/submit_form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.ownWords,
        }),
      });
    } catch (err) {
      console.warn("DB save warning:", err);
    }

    // 2. Open WhatsApp
    const messageText = getCleanWhatsappMessage();
    const whatsappUrl = `https://wa.me/919142479986?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      setFormStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 200);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 bg-white border-b border-slate-200">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-100/50 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill with High-Contrast Text */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-bold mb-4 shadow-sm">
              <Sparkles size={14} className="text-sky-700" />
              <span>Premier Digital Marketing & Web Agency</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
              <span className="text-slate-700 font-bold hidden sm:inline">Delhi NCR</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.18] mb-4">
              Turn Digital Potential Into{" "}
              <span className="text-sky-700 block sm:inline">
                Compounding Revenue.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-6 max-w-xl font-semibold">
              We engineer high-ROI performance marketing, high-intent SEO, and ultra-fast web architectures for businesses ready to scale predictably with zero vanity metrics.
            </p>

            {/* Direct WhatsApp Consultation Button */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold transition-all shadow-sm"
              >
                <WhatsApp size={16} className="text-emerald-700" />
                <span>WhatsApp Chat</span>
              </a>
              <a
                href="#audit-form"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 text-xs sm:text-sm font-bold transition-all"
              >
                <span>Request Consultation</span>
              </a>
            </div>

            {/* Value checklist bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg mb-6 text-xs text-slate-900 font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                <span>Zero guesswork • 100% data transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                <span>Dedicated senior engineering & ad squad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                <span>Custom growth playbook in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                <span>Agile 2-week execution sprints</span>
              </div>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-4 border-t border-slate-200 w-full flex flex-wrap items-center gap-4 sm:gap-6 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} />
                  ))}
                </div>
                <span className="font-black text-slate-950">4.9/5 Rating</span>
                <span className="text-slate-600 font-semibold">(250+ Reviews)</span>
              </div>

              <div className="h-3.5 w-px bg-slate-300 hidden sm:block"></div>

              <div className="flex items-center gap-1.5 text-slate-800 font-extrabold">
                <ShieldCheck size={15} className="text-sky-700" />
                <span>Clutch Top B2B Agency • Google Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Lead Form Right On The Homepage */}
          <div id="audit-form" className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl border border-slate-300 shadow-xl shadow-slate-200/60 p-4 sm:p-5 relative">
              {formStatus === "success" ? (
                <div className="text-center py-6 px-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 mb-1">
                    Details Sent Successfully!
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4 font-semibold">
                    Thank you, <span className="text-slate-950 font-bold">{formData.name}</span>. Your inquiry has been directed to WhatsApp. A senior strategist from Xntrova will respond immediately.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus("idle");
                      setFormData({
                        name: "",
                        phone: "",
                        service: "SEO (Search Engine Optimisation)",
                        ownWords: "",
                      });
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  {/* Form Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3.5">
                    <div>
                      <h2 className="text-base sm:text-lg font-black text-slate-950">
                        Connect With Our Squad
                      </h2>
                      <p className="text-[11px] text-slate-600 font-semibold">
                        Direct consultation with our senior strategy team
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-black">
                      Free Consultation
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="mb-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSend} className="space-y-3">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[11px] font-bold text-slate-800 block mb-1">
                          Your Full Name <span className="text-sky-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-800 block mb-1">
                          Phone / WhatsApp <span className="text-sky-600">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 font-medium"
                        />
                      </div>
                    </div>

                    {/* Service Selector with "Write in your own words" option */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-800 block mb-1">
                        Primary Service Required
                      </label>
                      <select
                        id="service-select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500 font-medium"
                      >
                        <option value="SEO (Search Engine Optimisation)">SEO (Search Engine Optimisation)</option>
                        <option value="Performance Marketing (PPC & Meta Ads)">Performance Marketing (PPC & Meta Ads)</option>
                        <option value="Website & App Development">Website & App Development (Next.js / CMS)</option>
                        <option value="E-Commerce Growth Marketing">E-Commerce Growth Marketing</option>
                        <option value="Social Media Marketing">Social Media Marketing & Management</option>
                        <option value="Content Marketing & CRO">Content Marketing & CRO Optimization</option>
                        <option value="Write in your own words (Custom Requirement)">Write in your own words (Custom Requirement)</option>
                      </select>
                    </div>

                    {/* Write in your own words field */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-800 block mb-1">
                        Write in your own words
                      </label>
                      <textarea
                        id="own-words-input"
                        name="ownWords"
                        rows={2}
                        value={formData.ownWords}
                        onChange={handleChange}
                        placeholder="Write in your own words (e.g. goals, problems, custom request)..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 resize-none font-medium"
                      />
                    </div>

                    {/* Submit Button: Strictly "Send" without big phone number text */}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 disabled:opacity-60 cursor-pointer"
                    >
                      <WhatsApp size={16} />
                      <span>Send</span>
                    </button>

                    <div className="text-center text-[10px] text-slate-500 font-medium">
                      Direct WhatsApp response • 100% confidential
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
