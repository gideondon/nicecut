const PHONE_NUMBER = "+59996666104";
const WHATSAPP_URL = `https://wa.me/59996666104`;

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
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-300 group">
            <div className="text-4xl mb-5 text-gold">📞</div>
            <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-3">
              Bel Ons
            </h3>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="font-body text-gray-300 hover:text-gold transition-colors text-lg"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-300 group">
            <div className="text-4xl mb-5 text-gold">💬</div>
            <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-3">
              WhatsApp
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-gray-300 hover:text-gold transition-colors text-base"
            >
              Stuur een bericht
            </a>
          </div>

          {/* Location */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center hover:border-gold/40 transition-all duration-300">
            <div className="text-4xl mb-5 text-gold">📍</div>
            <h3 className="font-display text-lg font-semibold text-white tracking-wide uppercase mb-3">
              Locatie
            </h3>
            <p className="font-body text-gray-400 text-base leading-relaxed">
              Curaçao
            </p>
          </div>
        </div>

        {/* Opening hours */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 sm:p-12">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide text-center mb-10">
            Openingstijden
          </h3>
          <p className="text-center font-body text-gray-300 text-base">
            Skohe bo orario den e agenda.
          </p>
        </div>
      </div>
    </section>
  );
}
