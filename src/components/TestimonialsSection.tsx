"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "../data/contentData";
import { Star, ShieldCheck, Check, Sparkles, X } from "./Icons";

export default function TestimonialsSection() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [userRating, setUserRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    company: "",
    role: "",
    highlight: "",
    content: "",
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.name.trim() && reviewForm.content.trim()) {
      setSubmittedReview(true);
    }
  };

  const featured = TESTIMONIALS[0];

  return (
    <section id="testimonials" className="py-12 sm:py-16 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-300 bg-sky-100 text-sky-900 text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
            Words From Our <span className="text-sky-700">Valued Partners</span>
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
            Read verified feedback from founders and leaders who scaled their digital presence with Xntrova.
          </p>
        </div>

        {/* The ONLY 1 Featured Testimonial Card */}
        <div className="bg-slate-50 p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-md shadow-slate-200/50 mb-8 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-sky-600 p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-black text-base text-sky-700">
                  {featured.avatarText}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {featured.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {featured.role} •{" "}
                  <span className="text-sky-700 font-bold">{featured.company}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} size={15} />
                ))}
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold flex items-center gap-1">
                <ShieldCheck size={12} />
                {featured.platform}
              </span>
            </div>
          </div>

          <div className="py-5">
            <h4 className="text-base sm:text-lg font-black text-slate-950 mb-2">
              “{featured.highlight}”
            </h4>
            <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold italic">
              {featured.content}
            </p>
          </div>

          {/* Action Row: "Write your own" */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>100% Verified Client Endorsement</span>
            </div>

            {/* Write Your Own Review Button */}
            <button
              type="button"
              onClick={() => {
                setShowReviewModal(true);
                setSubmittedReview(false);
              }}
              className="px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Write Your Own Review</span>
            </button>
          </div>
        </div>

        {/* Modal: Write Your Own Review */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {submittedReview ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Check size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Review Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Thank you for your valuable feedback. Your review has been recorded.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold mb-2">
                      <Sparkles size={13} />
                      Share Your Experience
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Write Your Own Review
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Help other businesses understand what it's like partnering with Xntrova Technologies.
                    </p>
                  </div>

                  <form onSubmit={handleReviewSubmit} className="space-y-4 text-left">
                    {/* Star Rating Selector */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setUserRating(star)}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              size={24}
                              className={star <= userRating ? "text-amber-500 fill-amber-500" : "text-slate-300"}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                          placeholder="e.g. Rohan Mehra"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={reviewForm.company}
                          onChange={(e) => setReviewForm({ ...reviewForm, company: e.target.value })}
                          placeholder="e.g. Apex Health"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    {/* Review Headline */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Review Headline
                      </label>
                      <input
                        type="text"
                        value={reviewForm.highlight}
                        onChange={(e) => setReviewForm({ ...reviewForm, highlight: e.target.value })}
                        placeholder="e.g. Transformed our search rankings completely"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    {/* Review Content */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Feedback & Experience *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={reviewForm.content}
                        onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
                        placeholder="Write your honest feedback regarding strategy, deliverables, or growth results..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition-colors shadow-md shadow-sky-600/20"
                    >
                      Submit Review
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
