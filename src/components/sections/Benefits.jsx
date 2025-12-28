import { Waves, Hotel, UtensilsCrossed, Plane, Sailboat, Crown } from 'lucide-react';

const benefits = [
  {
    icon: 'Hotel',
    title: 'Otel Konaklamaları',
    description: 'Dünya çapında lüks otellerde özel indirimler ve ücretsiz oda yükseltmeleri'
  },
  {
    icon: 'Waves',
    title: 'Plaj Kulüpleri',
    description: 'Seçili plaj kulüplerinde VIP erişim ve özel hizmetler'
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Restoran İndirimleri',
    description: 'Premium restoranlarda %30\'a varan indirimler ve öncelikli rezervasyon'
  },
  {
    icon: 'Plane',
    title: 'Havayolu Avantajları',
    description: 'Lounge erişimi ve bilet rezervasyonlarında özel fiyatlar'
  },
  {
    icon: 'Sailboat',
    title: 'Yat Turları',
    description: 'Özel yat turlarında indirimler ve VIP deneyimler'
  },
  {
    icon: 'Crown',
    title: 'VIP Etkinlikler',
    description: 'Özel etkinliklere davetler ve premium deneyimler'
  }
];

const IconMap = { Hotel, Waves, UtensilsCrossed, Plane, Sailboat, Crown };

export default function Benefits() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-xl">
            <p className="text-cyan-400 font-black tracking-[0.25em] text-[10px] sm:text-xs uppercase">SeaGlass Özel Avantajlar</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
            Ayrıcalıklar Dünyası
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
            Premium kartınızla hayatınızı lüks ve konforla doldurun
          </p>
        </div>

        {/* Avantajlar  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const IconComp = IconMap[benefit.icon] || Waves;
            return (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.3)]"
              >
                {/*  Katman */}
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                
                {/* Işıltı Efekti */}
                <div className="absolute -inset-px bg-linear-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                
                <div className="relative z-10">

                  {/* İkon Kutusu */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 to-transparent rounded-2xl"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <IconComp 
                        className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" 
                        size={28} 
                      />
                    </div>
                  </div>

                  {/* İçerik */}
                  <h3 className="text-xl sm:text-2xl font-black mb-3 text-white group-hover:text-cyan-50 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Alt  Çizgi */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}