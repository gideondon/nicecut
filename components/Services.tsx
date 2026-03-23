const categories = [
  {
    title: "Kabayero",
    subtitle: "Mannen",
    icon: "✂",
    services: [
      { name: "Pela wèch den banda so (sin barba)", price: "XCG 23", duration: "20 min" },
      { name: "Pela pa kabayero", price: "XCG 25", duration: "20 min" },
      { name: "Pela pa kabayero i drecha of kita Barba", price: "XCG 25", duration: "25 min" },
      { name: "Pela pa kabayero 60+", price: "XCG 20", duration: "20 min" },
      { name: "Pela pa kabayero i drecha barba i produkto", price: "XCG 30", duration: "35 min" },
      { name: "Feita rant so of Barba so", price: "XCG 13", duration: "10 min" },
      { name: "Feita rant i Barba", price: "XCG 15", duration: "10 min" },
    ],
  },
  {
    title: "Damas",
    subtitle: "Vrouwen",
    icon: "◉",
    services: [
      { name: "Pela pa Damas (plain)", price: "XCG 25", duration: "20 min" },
      { name: "Pela pa Damas i wenkbrauw", price: "XCG 28", duration: "25 min" },
      { name: "Pela pa Damas ku Figura / Strepi", price: "XCG 30", duration: "25 min" },
      { name: "Pela wèch pa hende kabei largu/drèt", price: "XCG 20", duration: "20 min" },
      { name: "Feita rant so pa Damas", price: "XCG 13", duration: "10 min" },
      { name: "Feita rant i wenkbrauw pa damas", price: "XCG 15", duration: "10 min" },
    ],
  },
  {
    title: "Mucha",
    subtitle: "Kinderen t/m 12 jaar",
    icon: "👦",
    services: [
      { name: "Feita rant so pa mucha te ku 12aña", price: "XCG 10", duration: "10 min" },
      { name: "Pela wèch pa mucha te ku 12 aña (den banda so sin figura)", price: "XCG 18", duration: "20 min" },
      { name: "Pela pa mucha te ku 12 aña", price: "XCG 20", duration: "20 min" },
      { name: "Pela pa mucha ku design", price: "XCG 23", duration: "25 min" },
    ],
  },
  {
    title: "Otro",
    subtitle: "Overig",
    icon: "★",
    services: [
      { name: "Feita Wenkbrauw", price: "XCG 8", duration: "5 min" },
      { name: "Pela riba fecha nan di dia liber of orario straño", price: "XCG 35", duration: "20 min" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-gold tracking-[0.4em] text-sm uppercase mb-4">
            ESAKI TA
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
            Nos servisionan
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="font-body text-gray-400 mt-6 max-w-lg mx-auto text-base leading-relaxed">
            Tur nos kliente nan nos ta trata ku respet i servisio ta na prome luga. Serka nos kalidat ta sigura.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 px-8 py-5 border-b border-dark-border bg-dark-surface">
                <span className="text-2xl text-gold">{cat.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide leading-none">
                    {cat.title}
                  </h3>
                  <p className="font-body text-xs text-gray-500 mt-0.5">{cat.subtitle}</p>
                </div>
              </div>

              {/* Service rows */}
              <div className="px-8 py-4 divide-y divide-dark-border">
                {cat.services.map((service) => (
                  <div key={service.name} className="flex items-center justify-between py-3 gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-gray-300 text-sm leading-snug">
                        {service.name}
                      </p>
                      <p className="font-body text-xs text-gray-600 mt-0.5">{service.duration}</p>
                    </div>
                    <span className="font-display text-gold font-semibold text-sm whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Book CTA */}
        <div className="text-center mt-14">
          <a
            href="#booking"
            className="font-display tracking-widest text-sm uppercase bg-gold hover:bg-gold-light text-dark font-bold px-10 py-4 rounded inline-block transition-all duration-200 hover:shadow-lg hover:shadow-gold/30"
          >
            Traha bo sita
          </a>
        </div>
      </div>
    </section>
  );
}
