import { 
  Hotel, Plane, Utensils, Ship, Palmtree, Umbrella 
} from "lucide-react";


const sponsors = [
  { name: "Lüks Oteller", icon: Hotel },
  { name: "Havayolları", icon: Plane },
  { name: "Restoranlar", icon: Utensils },
  { name: "Kruvaziyer", icon: Ship },
  { name: "Tatil Köyleri", icon: Palmtree },
  { name: "Beach Club", icon: Umbrella }
];

export default function Sponsors() {
  return (
    <section className="relative w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Grubu*/}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Kurumsal Ekosistem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
              Premium <span className="text-white/60 font-light">Partnerlerimiz</span>
            </h2>
          </div>
          <p className="text-white/80 text-sm max-w-70 font-medium leading-relaxed">
            Dünya genelinde 500+ lüks marka ile SeaGlass kullanıcılarına özel %40'a varan geri ödeme.
          </p>
        </div>

        {/* Sponsor Grid  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-cyan-300 rounded-[2.5rem] overflow-hidden backdrop-blur-md">
          {sponsors.map((item, index) => (
            <div
              key={index}
              className="group relative border-[0.5px] border-white/10 p-12 flex flex-col items-center justify-center gap-6 transition-colors duration-300 cursor-pointer overflow-hidden hover:bg-cyan-500/20"
            >
              {/* Kart Arkaplanı */}
              <div className="absolute inset-0 bg-white/2" />
              
              {/* Üst Çizgi */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* İkon */}
              <div className="relative z-10">
                <item.icon 
                  size={35} 
                  strokeWidth={1.5} 
                  className="text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300" 
                />
              </div>

              {/* İsim */}
              <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">
                {item.name}
              </span>

              {/* Arka plan */}
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}