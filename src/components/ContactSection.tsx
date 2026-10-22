"use client";

import React, { useState } from "react";
import { AGENCY_INFO } from "../data/contentData";
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, WhatsApp } from "./Icons";

export default function ContactSection() {
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
      "Website Inquiry - Contact Form:",
      `Name: ${sanitizeWithoutEmojis(formData.name)}`,
      formData.phone ? `Phone: ${sanitizeWithoutEmojis(formData.phone)}` : "",
      `Service: ${sanitizeWithoutEmojis(formData.service)}`,
      formData.ownWords ? `Requirement: ${sanitizeWithoutEmojis(formData.ownWords)}` : "",
    ];

    return lines.filter(Boolean).join("\n");
  };

  const handleSendToWhatsApp = async (e: React.FormEvent) => {
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
    <section id="contact" className="py-12 sm:py-16 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                Get In Touch
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
                Let’s Engineer Your <br />
                <span className="text-sky-700">Next Growth Chapter</span>
              </h2>

              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed mb-6 font-semibold">
                Ready to turn your website into a high-converting growth engine? Claim your complimentary 40-point audit or speak directly with our senior agency leads.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3 mb-6">
                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md flex items-center gap-3.5 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                    <WhatsApp size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">
                      Direct WhatsApp Chat
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {AGENCY_INFO.whatsappDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${AGENCY_INFO.phoneRaw}`}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-sky-500 hover:shadow-md flex items-center gap-3.5 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">Call Direct</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {AGENCY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-sky-500 hover:shadow-md flex items-center gap-3.5 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">Email Inquiries</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {AGENCY_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider block font-bold">Delhi NCR Headquarters</span>
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-800 block mt-0.5">
                      {AGENCY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee Box */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-sm">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Clock size={14} />
              </div>
              <div className="text-[11px]">
                <span className="font-bold text-slate-900 block">Rapid Response SLA</span>
                <span className="text-slate-500 font-medium">Our senior strategists reply within 2 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card with Direct WhatsApp Submission */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-300 shadow-xl shadow-slate-200/60 relative">
              {formStatus === "success" ? (
                <div className="text-center py-8 px-2">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    Inquiry Ready & Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-medium">
                    Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Your details have been sent to WhatsApp. A senior strategist from Xntrova will assist you immediately.
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
                    className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        Connect With Our Senior Team
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Fill in your details below to directly connect with us on WhatsApp.
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
                      Direct WhatsApp
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="mb-3 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSendToWhatsApp} className="space-y-3">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
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
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Phone / WhatsApp Number <span className="text-sky-600">*</span>
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
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Primary Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-sky-500 font-medium"
                      >
                        <option value="SEO (Search Engine Optimisation)">SEO (Search Engine Optimisation)</option>
                        <option value="Performance Marketing (PPC & Meta Ads)">Performance Marketing (PPC & Meta Ads)</option>
                        <option value="Web & App Development">Web & App Development (Next.js / CMS)</option>
                        <option value="E-Commerce Growth">E-Commerce Growth & Scaling</option>
                        <option value="Social Media Marketing">Social Media Marketing & Management</option>
                        <option value="Content & CRO Optimization">Content & CRO Optimization</option>
                        <option value="Write in your own words (Custom Requirement)">Write in your own words (Custom Requirement)</option>
                      </select>
                    </div>

                    {/* Write in your own words field */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Write in your own words
                      </label>
                      <textarea
                        name="ownWords"
                        rows={2}
                        value={formData.ownWords}
                        onChange={handleChange}
                        placeholder="Write in your own words (e.g. goals, hurdles, custom needs)..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 resize-none font-medium"
                      />
                    </div>

                    {/* Primary Submit Button: Strictly "Send" without big number */}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 disabled:opacity-60 cursor-pointer"
                    >
                      <WhatsApp size={16} />
                      <span>Send</span>
                    </button>

                    <div className="pt-1 text-center flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-medium">
                      <ShieldCheck size={13} className="text-emerald-600" />
                      <span>Direct WhatsApp connection • 100% confidential</span>
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
