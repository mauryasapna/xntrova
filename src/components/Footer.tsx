"use client";

import React, { useState } from "react";
import { AGENCY_INFO } from "../data/contentData";
import { Phone, Mail, MapPin, ArrowRight, Check, Star, WhatsApp } from "./Icons";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 p-0.5 shadow-lg shadow-sky-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-sky-400 group-hover:text-white transition-colors">
                  X
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  XNTROVA
                  <span className="text-xs px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-medium">
                    TECH
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Digital & Web Engineering
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              India’s premier B2B digital marketing and technology agency. Delivering high-ROAS performance advertising, authoritative SEO, and custom high-converting web applications.
            </p>

            {/* Social & WhatsApp Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-400 text-emerald-400 text-xs font-bold transition-all"
                aria-label="WhatsApp"
              >
                <WhatsApp size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5 Rating</span>
              <span className="text-slate-500">across Clutch & Google</span>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Capabilities & Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Performance Marketing & Paid PPC
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Web & Custom App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  E-Commerce Growth Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Social Media Marketing (SMM)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Conversion Rate Optimization (CRO)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Xntrova
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-sky-400 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Growth Newsletter & Contact
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get our monthly breakdown of high-performing marketing playbooks and technical conversion tests.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              {subscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <Check size={14} />
                  <span>Subscribed to Xntrova Insights!</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-sky-400">
                  <input
                    type="email"
                    required
                    placeholder="Enter work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-1.5 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors shrink-0"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </form>

            <div className="pt-3 border-t border-white/[0.06] space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-sky-400 shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <WhatsApp size={14} className="text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-300 font-semibold"
                >
                  WhatsApp: {AGENCY_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-sky-400 shrink-0" />
                <a href={`tel:${AGENCY_INFO.phoneRaw}`} className="hover:text-white">
                  Phone: {AGENCY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-sky-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white">
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {AGENCY_INFO.name}. All rights reserved. Registered Digital Marketing & Tech Agency in Delhi NCR.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
