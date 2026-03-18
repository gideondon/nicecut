"use client";

// Vervang dit met jouw Setmore booking page URL
// Te vinden in: Setmore dashboard → Apps & Integrations → Booking Page → "Share your booking page"
// Formaat: "https://my.setmore.com/bookingpage/JOUW_ACCOUNT_KEY"
const SETMORE_IFRAME_URL = "https://verlondonker.setmore.com/verlon";

export default function Booking() {
  return (
    <section id="booking" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-display text-gold tracking-[0.4em] text-sm uppercase mb-4">
            Klaar voor jouw look?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-6">
            Boek jouw{" "}
            <span className="text-gold">Afspraak</span>
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-body text-gray-400 text-base max-w-lg mx-auto">
            Kies jouw service, dag en tijdslot — direct hieronder. Geen app nodig.
          </p>
        </div>

        {/* Setmore iframe embed */}
        <div className="relative rounded-2xl overflow-hidden border border-dark-border shadow-2xl shadow-black/50">
          {/* Top gold bar */}
          <div className="h-1 bg-gold-gradient" />

          {/* iframe container */}
          <div className="bg-dark-card">
            <iframe
              src={SETMORE_IFRAME_URL}
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="yes"
              title="Nice Cut Barbershop – Online Booking"
              className="w-full"
              style={{ minHeight: "750px" }}
            />
          </div>
        </div>

        {/* Fallback link */}
        <p className="text-center font-body text-gray-500 text-sm mt-6">
          Werkt het formulier niet?{" "}
          <a
            href={SETMORE_IFRAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light underline transition-colors"
          >
            Open het in een nieuw tabblad
          </a>
        </p>
      </div>
    </section>
  );
}
