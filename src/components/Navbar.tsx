"use client";

import React, { useState, useEffect } from "react";
import { AGENCY_INFO, SERVICES } from "../data/contentData";
import { Phone, Mail, Globe, Menu, X, ArrowRight, Sparkles, ChevronDown, WhatsApp } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 text-xs text-slate-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-sky-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              Accepting New Growth Sprints for Q1/Q2
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-slate-700">
              <span className="text-amber-500 font-bold">★ 4.9/5</span> Clutch & Google Verified Agency
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              <WhatsApp size={15} className="text-emerald-600" />
              <span>WhatsApp: {AGENCY_INFO.whatsappDisplay}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-sky-700 font-medium transition-colors"
            >
              <Phone size={14} className="text-sky-600" />
              <span>{AGENCY_INFO.phone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Globe size={14} className="text-sky-600" />
              <span>Delhi NCR HQ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md shadow-slate-100 py-3.5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 p-0.5 shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-lg text-sky-600 group-hover:text-sky-700 transition-colors">
                X
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                XNTROVA
                <span className="text-xs px-1.5 py-0.5 rounded bg-sky-100 text-sky-700 border border-sky-200 font-bold">
                  TECH
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                Digital & Web Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#about"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
            >
              About
            </a>

            {/* Services with Hover/Click dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all flex items-center gap-1"
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesDropdownOpen ? "rotate-180 text-sky-600" : ""}`} />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="p-3 rounded-2xl shadow-xl border border-slate-200 bg-white">
                    <div className="text-xs font-bold text-slate-500 px-3 py-1.5 uppercase tracking-wider">
                      Core Agency Services
                    </div>
                    <div className="divide-y divide-slate-100">
                      {SERVICES.map((srv) => (
                        <a
                          key={srv.id}
                          href="#services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex flex-col p-2.5 rounded-xl hover:bg-sky-50 transition-colors group"
                        >
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-sky-700 flex items-center justify-between">
                            {srv.title.split("(")[0].trim()}
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-sky-600" />
                          </span>
                          <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {srv.shortDesc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#why-choose-us"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
            >
              Why Us
            </a>

            <a
              href="#testimonials"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* WhatsApp Header Button */}
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center gap-1.5"
            >
              <WhatsApp size={15} className="text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#audit-form"
              className="px-4 py-2 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-700 transition-all shadow-sm flex items-center gap-1.5"
            >
              <Sparkles size={14} />
              <span>Claim Free Audit</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600"
              aria-label="WhatsApp"
            >
              <WhatsApp size={18} />
            </a>
            <a
              href="#audit-form"
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors"
            >
              Free Audit
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-18 px-5 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-sky-700 font-bold mb-2">
              Navigation
            </div>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-between"
              >
                About Xntrova
                <ArrowRight size={14} className="text-sky-600" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-between"
              >
                Services & Solutions
                <ArrowRight size={14} className="text-sky-600" />
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-between"
              >
                Why Choose Us
                <ArrowRight size={14} className="text-sky-600" />
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-between"
              >
                Client Reviews
                <ArrowRight size={14} className="text-sky-600" />
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-between"
              >
                Frequently Asked Questions
                <ArrowRight size={14} className="text-sky-600" />
              </a>
            </nav>

            <div className="pt-3 space-y-2">
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsApp size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#audit-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 text-white font-bold text-xs sm:text-sm text-center block shadow-sm"
              >
                Claim Free Audit
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-sky-600" />
              <a href={`tel:${AGENCY_INFO.phoneRaw}`}>{AGENCY_INFO.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-sky-600" />
              <a href={`mailto:${AGENCY_INFO.email}`}>{AGENCY_INFO.email}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
