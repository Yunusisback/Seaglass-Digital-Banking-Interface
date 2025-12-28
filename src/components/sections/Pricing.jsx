import { CheckCircle2 } from 'lucide-react';
import { cardTiers } from '../../utils/constants';
import { useState } from 'react';

export default function Pricing() {
  const [active, setActive] = useState(null);

  return (
    <section className="pb-16 sm:pb-24 px-4">
      
      {/* Başlık */}
      <header className="text-center mb-14 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Size Özel Paketler
        </h2>
        <p className="mt-3 text-sm text-white/60">
          Bankacılık ihtiyaçlarınıza uygun şeffaf fiyatlandırma
        </p>
      </header>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
        {cardTiers.map((tier, index) => {
          const isActive = active === index;

          return (
            <article
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onTouchStart={() => setActive(index)}
              onTouchEnd={() => setTimeout(() => setActive(null), 150)}
              className={`
                relative rounded-3xl p-8 sm:p-10
                backdrop-blur-2xl border
                transition-all duration-300
                ${
                  tier.popular
                    ? "bg-white/15 border-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.4)] md:scale-105"
                    : "bg-white/8 border-white/20 hover:border-white/30 hover:bg-white/12"
                }
                ${isActive ? "-translate-y-2" : ""}
              `}
            >
              {/* Rozet */}
              {tier.popular && (
                <span className="
                  absolute -top-4 left-1/2 -translate-x-1/2
                  rounded-full px-5 py-1
                  text-[10px] font-semibold uppercase tracking-widest
                  bg-white text-black shadow-md
                ">
                  En Popüler
                </span>
              )}

              {/* Başlık */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-1">
                {tier.name}
              </h3>

              {/* Fiyat */}
              <div className="text-lg sm:text-xl font-medium text-white/90 mb-8">
                {tier.price}
              </div>

              {/* Özellikler */}
              <ul className="space-y-4 mb-10">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/85">
                    <CheckCircle2
                      size={18}
                      className="text-white/70 shrink-0"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Buton */}
              <button
                className={`
                  w-full rounded-2xl py-3.5
                  text-xs font-semibold uppercase tracking-wider
                  transition-all duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                  ${
                    tier.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black"
                  }
                `}
              >
                Paketi Seç
              </button>

              {/* Işık yansıması */}
              <span className="
                pointer-events-none absolute inset-0 rounded-3xl
                bg-linear-to-br from-white/20 to-transparent
                opacity-0 hover:opacity-100 transition-opacity
              " />
            </article>
          );
        })}
      </div>
    </section>
  );
}
