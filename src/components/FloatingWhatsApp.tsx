"use client";

import React from "react";
import { AGENCY_INFO } from "../data/contentData";
import { WhatsApp } from "./Icons";

export default function FloatingWhatsApp() {
  const cleanMessage = "Hello Xntrova Technologies, I would like to inquire about your digital marketing and web services.";
  const whatsappUrl = `https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(cleanMessage)}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip / Label */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold shadow-lg border border-slate-200 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with Xntrova on WhatsApp"
      >
        <WhatsApp size={28} />
      </a>
    </aside>
  );
}
