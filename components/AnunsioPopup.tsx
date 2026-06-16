"use client";

import { useState, useEffect } from "react";

export default function AnunsioPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 150);
    return () => clearTimeout(timer);
  }, []);

  if (!open && open !== false) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 transition-all duration-300 ${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="relative bg-[#002D72]/95 backdrop-blur-sm border border-[#009FE3]/50 rounded-2xl p-6 text-center shadow-2xl overflow-hidden">
        {/* Decoratieve blauwe gloed */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#009FE3]/10 to-transparent pointer-events-none" />

        {/* Vlag sterren */}
        <div className="flex justify-center gap-2 mb-3">
          <span className="text-white text-lg">★</span>
          <span className="text-white text-sm mt-1">★</span>
        </div>

        <p className="font-display text-xs font-bold text-[#009FE3] uppercase tracking-[0.3em] mb-2">
          WK 2026 · Blue Wave
        </p>

        <h2 className="font-display text-2xl font-bold text-white uppercase leading-tight mb-1">
          Un pueblo,
        </h2>
        <h2 className="font-display text-2xl font-bold text-[#F5C400] uppercase leading-tight mb-4">
          un kurason!
        </h2>

        <div className="h-px bg-[#009FE3]/40 mx-auto mb-4" />

        <p className="font-body text-[#009FE3] text-sm font-medium leading-relaxed mb-5">
          Kòrsou ta ku boso! 🏝️⚽
        </p>

        <button
          onClick={() => setOpen(false)}
          className="bg-[#009FE3] text-white font-display font-bold uppercase tracking-wide px-6 py-2 rounded-lg hover:bg-[#0080C0] transition-colors text-sm"
        >
          Vamos Kòrsou! 🔵
        </button>
      </div>
    </div>
  );
}
