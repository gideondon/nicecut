import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gallery/photo-4.jpeg"
          alt="Nice Cut Barbershop"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-transparent to-dark/70" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-gold shadow-2xl shadow-gold/30">
            <Image
              src="/logo.jpeg"
              alt="Nice Cut Barbershop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-2">
          NICE
          <span className="gold-shimmer"> CUT</span>
        </h1>
        <p className="font-display text-2xl sm:text-3xl tracking-[0.5em] text-gray-300 uppercase mb-8">
          Barbershop
        </p>

        {/* Description */}
        <p className="font-body text-gray-300 text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed">

        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="font-display tracking-widest text-sm uppercase bg-gold hover:bg-gold-light text-dark font-bold px-10 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Traha bo sita
          </a>
          <a
            href="#gallery"
            className="font-display tracking-widest text-sm uppercase border border-gold/50 hover:border-gold text-white hover:text-gold px-10 py-4 rounded transition-all duration-200 w-full sm:w-auto"
          >
            Potret
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 sm:gap-20 mt-20">
          {[
            { value: "100%", label: "Servisio" },
            { value: "5★", label: "Kalidat" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="font-body text-xs text-gray-400 tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
