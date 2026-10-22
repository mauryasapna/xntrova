import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrustMarquee from "../components/TrustMarquee";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-sky-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <TrustMarquee />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
        <ContactSection />
      </main>

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
