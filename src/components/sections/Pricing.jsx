import { CheckCircle2 } from 'lucide-react';
import { cardTiers } from '../../utils/constants';

export default function Pricing() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Arka Plan Süsü */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Başlık */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Şeffaf Avantajlar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-4">
            Size Özel <span className="text-white/40 font-light">Üyelik Paketleri</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto font-medium">
            Sınır tanımayan bankacılık deneyimi için ihtiyacınıza uygun kristal netliğinde paketler.
          </p>
        </header>

        {/* Kartlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {cardTiers.map((tier, index) => (
            <article
              key={index}
              className={`
                group relative rounded-[2.5rem] p-10 
                backdrop-blur-md border transition-all duration-300
                ${tier.popular 
                  ? "bg-cyan-500/10 border-cyan-400/40 shadow-xl z-20 md:scale-105" 
                  : "bg-white/3 border-white/10 hover:border-white/25 z-10"
                }
              `}
            >
              {/* Popüler rozeti */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[9px] font-black uppercase tracking-[0.2em] px-6 py-1.5 rounded-full">
                  En Popüler
                </div>
              )}

              {/* Başlık ve Fiyat */}
              <div className="mb-8 border-b border-white/10 pb-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white italic">{tier.price}</span>
                  {tier.price !== "Ücretsiz" && <span className="text-white/30 text-xs uppercase font-bold tracking-widest">/ay</span>}
                </div>
              </div>

              {/* Özellikler */}
              <ul className="space-y-5 mb-10">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <CheckCircle2
                      size={16}
                      className={`mt-0.5 shrink-0 transition-colors ${tier.popular ? "text-cyan-400" : "text-white/30 group-hover:text-white"}`}
                    />
                    <span className="text-[13px] text-white/70 leading-tight font-medium">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Aksiyon Butonu */}
              <button
                className={`
                  w-full rounded-2xl py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer
                  ${tier.popular 
                    ? "bg-cyan-400 text-black hover:bg-white" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"
                  }
                `}
              >
                Paketi Seç
              </button>

             
              <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}