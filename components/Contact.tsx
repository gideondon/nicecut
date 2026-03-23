const PHONE_NUMBER = "+59996666104";
const WHATSAPP_URL = `https://wa.me/59996666104`;
const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=12.17095,-68.95475`;

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
<h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Kontakto
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="bg-dark-card border border-dark-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-300 group block"
          >
            <div className="text-4xl mb-5 text-gold">📞</div>
            <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-3">
              Bel Nos
            </h3>
            <span className="font-body text-gray-300 group-hover:text-gold transition-colors text-lg">
              {PHONE_NUMBER}
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card border border-dark-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-300 group block"
          >
            <div className="text-4xl mb-5 text-gold">💬</div>
            <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-3">
              WhatsApp
            </h3>
            <span className="font-body text-gray-300 group-hover:text-gold transition-colors text-base">
              Manda un mensahe
            </span>
          </a>

          {/* Location */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card border border-dark-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-300 group block"
          >
            <div className="text-4xl mb-5 text-gold">📍</div>
            <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-3">
              Adrès
            </h3>
            <span className="font-body text-gray-400 group-hover:text-gold transition-colors text-base leading-relaxed">
              Curaçao
            </span>
          </a>
        </div>

        {/* Opening hours */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 sm:p-12">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide text-center mb-10">
            Orario
          </h3>
          <p className="text-center font-body text-gray-300 text-base">
            Skohe bo orario den e agenda.
          </p>
        </div>
      </div>
    </section>
  );
}
