import Image from "next/image";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      {/* Top gold line */}
      <div className="h-0.5 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/50">
                <Image
                  src="/logo.jpeg"
                  alt="Nice Cut Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-white font-semibold tracking-wide leading-none">
                  NICE CUT
                </p>
                <p className="font-display text-gold text-xs tracking-widest">
                  BARBERSHOP
                </p>
              </div>
            </div>
            <p className="font-body text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium barbershop op Curaçao. Precisie. Stijl. Karakter.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase text-sm mb-5">
              Navigatie
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Servisio", href: "#services" },
                { label: "Galeria", href: "#gallery" },
                { label: "Asprak", href: "#booking" },
                { label: "Kontakto", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-gray-500 hover:text-gold transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase text-sm mb-5">
              Kontakto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+59996666104"
                  className="font-body text-gray-500 hover:text-gold transition-colors text-sm"
                >
                  +599 666 6104
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/59996666104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gray-500 hover:text-gold transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="font-body text-gray-500 text-sm">
                  Curaçao
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-gray-600 text-xs">
            © {currentYear} Nice Cut Barbershop. Alle rechten voorbehouden.
          </p>
          <a
            href="#booking"
            className="font-display tracking-widest text-xs uppercase bg-gold/10 hover:bg-gold hover:text-dark text-gold border border-gold/30 px-6 py-2.5 rounded transition-all duration-200"
          >
            Boek Nu
          </a>
        </div>
      </div>
    </footer>
  );
}
