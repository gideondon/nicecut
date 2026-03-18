"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const photos = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/photo-${i + 1}.jpeg`,
  alt: `Nice Cut Barbershop werk ${i + 1}`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goNext = () =>
    setSelected((s) => (s === null ? null : s === photos.length ? 1 : s + 1));
  const goPrev = () =>
    setSelected((s) => (s === null ? null : s === 1 ? photos.length : s - 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.4em] text-sm uppercase mb-4">
            Nos trabou
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Galeria
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="font-body text-gray-400 mt-6 max-w-lg mx-auto text-base">
            Un bista riba nos servisio.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg border border-dark-border hover:border-gold/50 transition-all duration-300"
              onClick={() => setSelected(photo.id)}
            >
              <div className="relative w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={80}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-gold text-3xl">⊕</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#booking"
            className="font-display tracking-widest text-sm uppercase border-2 border-gold text-gold hover:bg-gold hover:text-dark font-bold px-10 py-4 rounded inline-block transition-all duration-200"
          >
            Traha bo sita
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white text-2xl hover:text-gold transition-colors bg-black/50 rounded-full"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          {/* Previous */}
          <button
            className="absolute left-2 sm:left-6 z-10 w-12 h-12 flex items-center justify-center text-white text-4xl hover:text-gold transition-colors bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>

          <div
            className="relative max-w-3xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/photo-${selected}.jpeg`}
              alt={`Nice Cut werk ${selected}`}
              width={900}
              height={900}
              className="object-contain max-h-[85vh] w-full rounded-lg"
              quality={90}
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-2 sm:right-6 z-10 w-12 h-12 flex items-center justify-center text-white text-4xl hover:text-gold transition-colors bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-gray-400 text-sm tracking-widest">
            {selected} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}
