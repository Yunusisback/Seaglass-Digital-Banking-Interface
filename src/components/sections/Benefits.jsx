import { Waves, Hotel, UtensilsCrossed, Plane, Sailboat, Crown } from 'lucide-react';
import { motion } from 'framer-motion';


const benefits = [
  { icon: Hotel, title: 'Otel Konaklamaları', description: 'Dünya çapında lüks otellerde özel indirimler ve ücretsiz oda yükseltmeleri.' },
  { icon: Waves, title: 'Plaj Kulüpleri', description: 'Seçili plaj kulüplerinde VIP erişim ve özel hizmetler.' },
  { icon: UtensilsCrossed, title: 'Restoran İndirimleri', description: 'Premium restoranlarda %30\'a varan indirimler ve öncelikli rezervasyon.' },
  { icon: Plane, title: 'Havayolu Avantajları', description: 'Lounge erişimi ve bilet rezervasyonlarında özel fiyatlar.' },
  { icon: Sailboat, title: 'Yat Turları', description: 'Özel yat turlarında indirimler ve VIP deneyimler.' },
  { icon: Crown, title: 'VIP Etkinlikler', description: 'Özel etkinliklere davetler ve premium deneyimler.' }
];

export default function Benefits() {
  return (
    <section className="relative px-6 py-24 overflow-hidden" id="benefits">
      <div className="max-w-7xl mx-auto">
        
        {/* Başlık Grubu:*/}
        <div className="max-w-3xl mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4"
          >
            Ayrıcalıklar
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-[0.9]">
            Hayatınızı <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Lüksle Donatın
            </span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mt-8 rounded-full" />
        </div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative cursor-default h-full"
    >
      {/* Kart Gövdesi*/}
      <div className="h-full p-8 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-cyan-500/40 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        
        {/* İkon*/}
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 text-cyan-400">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        {/* İçerik */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {benefit.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">
          {benefit.description}
        </p>

        {/* Sadece hoverda çıkan ince çizgi */}
        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};