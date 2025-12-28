import {
  Hotel,
  Plane,
  Utensils,
  Ship,
  Palmtree,
  Umbrella
} from "lucide-react";
import { useState } from "react";

function Sponsors() {
  const [active, setActive] = useState(null);

  const sponsors = [
    { 
      name: "Oteller", 
      icon: Hotel,
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.4)"
    },
    { 
      name: "Havayolları", 
      icon: Plane,
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    { 
      name: "Restoranlar", 
      icon: Utensils,
      gradient: "from-orange-500 to-red-500",
      glowColor: "rgba(249, 115, 22, 0.4)"
    },
    { 
      name: "Kruvaziyerler", 
      icon: Ship,
      gradient: "from-teal-500 to-emerald-500",
      glowColor: "rgba(20, 184, 166, 0.4)"
    },
    { 
      name: "Tatil Köyleri", 
      icon: Palmtree,
      gradient: "from-green-500 to-lime-500",
      glowColor: "rgba(34, 197, 94, 0.4)"
    },
    { 
      name: "Plaj Kulüpleri", 
      icon: Umbrella,
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "rgba(6, 182, 212, 0.4)"
    }
  ];

  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Başlık */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-xl">
            <p className="text-cyan-400 font-black tracking-[0.25em] text-[10px] sm:text-xs uppercase">Premium Partnerler</p>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
            Anlaşmalı Kurumsal Partnerler
          </h3>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto">
            Güvenilir markalarla özel bankacılık anlaşmaları
          </p>
        </header>

        {/* Kart Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {sponsors.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === index;

            return (
              <button
                key={index}
                onTouchStart={() => setActive(index)}
                onTouchEnd={() => setTimeout(() => setActive(null), 150)}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className="group cursor-pointer relative flex flex-col items-center justify-center gap-4 rounded-3xl p-6 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 hover:scale-105"
                style={{
                  boxShadow: isActive ? `0 20px 60px ${item.glowColor}` : 'none'
                }}
              >
                {/* Arka Plan Cam */}
                <div className={`
                  absolute inset-0 rounded-3xl backdrop-blur-2xl border transition-all duration-500
                  ${isActive ? 'bg-white/20 border-white/40' : 'bg-white/5 border-white/20 group-hover:bg-white/10 group-hover:border-white/30'}
                `}></div>

                {/*  Işıltılı Arka Plan */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-linear-to-br ${item.gradient} opacity-0 transition-all duration-500 blur-xl
                  ${isActive ? 'opacity-40' : 'group-hover:opacity-20'}
                `}></div>

                <div className="relative z-10 flex flex-col items-center gap-4">

                  {/*  İkon Kutusu */}
                  <div className={`
                    relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden
                    ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                  `}>
                    {/* Arka Plan */}
                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Cam Katman */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20"></div>
                    
                    {/* İkon */}
                    <Icon
                      size={36}
                      strokeWidth={2}
                      className={`
                        relative z-10 transition-all duration-500
                        ${isActive ? 'text-white scale-110' : 'text-white/90 group-hover:text-white'}
                      `}
                      style={{
                        filter: isActive ? `drop-shadow(0 0 12px ${item.glowColor})` : 'none'
                      }}
                    />

                    {/* Parıltı Efekti */}
                    <div className={`
                      absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    `}></div>
                  </div>

                  {/* Yazı */}
                  <span className={`
                    text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 text-center
                    ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}
                  `}>
                    {item.name}
                  </span>
                </div>

                {/* Alt  Çizgi */}
                <div 
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-linear-to-r ${item.gradient} rounded-full opacity-0 transition-opacity duration-500
                    ${isActive ? 'opacity-100' : 'group-hover:opacity-70'}
                  `}
                ></div>

                {/* Üst Işık Yansıması */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-white/20 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </button>
            );
          })}
        </div>

        {/* Alt Bilgi */}
        <footer className="text-center pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 tracking-wide">
            © 2025 SeaGlass Bank • Tüm hakları saklıdır
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Sponsors;