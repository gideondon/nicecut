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
      <div className="bg-dark-card/95 backdrop-blur-sm border border-gold/40 rounded-2xl p-6 text-center shadow-2xl">
        <h2 className="font-display text-lg font-bold text-gold uppercase tracking-wide mb-3">
          Anunsio Importante
        </h2>
        <div className="gold-divider mx-auto mb-4" />
        <p className="font-body text-gray-200 text-sm leading-relaxed mb-5">
          Pa pela riba dia di fiesta i/of orario despues di 20:00 lo tin gastu adishonal.
        </p>
        <button
          onClick={() => setOpen(false)}
          className="bg-gold text-dark-bg font-display font-bold uppercase tracking-wide px-6 py-2 rounded-lg hover:bg-gold/80 transition-colors text-sm"
        >
          OK, Komprendibel
        </button>
      </div>
    </div>
  );
}
