import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, UserPlus, CreditCard, ShieldCheck } from 'lucide-react';



const applySteps = [
  { step: "01", title: "Başvuru Formu", description: "Sadece birkaç dakikanızı ayırarak online formumuzu doldurun.", icon: <UserPlus className="text-cyan-400" size={24} /> },
  { step: "02", title: "Anında Onay", description: "Gelişmiş algoritmalarımızla başvurunuz saniyeler içinde değerlendirilir.", icon: <ShieldCheck className="text-cyan-400" size={24} /> },
  { step: "03", title: "Dijital Kart", description: "Onay sonrası dijital kartınız anında kullanıma hazır hale gelir.", icon: <CreditCard className="text-cyan-400" size={24} /> }
];

export default function Steps() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* Arkaplan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-75 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Başlık Grubu */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200/80">Hızlı Süreç</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter italic">
            Nasıl <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Başvurulur?</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto font-light">
            Sıra beklemeden, tamamen dijital süreçlerle kartınız saniyeler içinde cebinizde.
          </p>
        </div>

        {/* Adımlar Konteynırı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Masaüstü Bağlantı Çizgisi */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent -translate-y-12" />

          {applySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Kart Tasarımı */}
              <div className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/8 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:-translate-y-2">
                
                {/* Adım Numarası */}
                <div className="absolute -top-6 left-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-40 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-2xl bg-cyan-500 text-black font-black flex items-center justify-center text-xl shadow-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* İçerik */}
                <div className="mt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white tracking-tight italic group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Mobilde Alt Ok - masaüstünde Yan Ok */}
                {index < 2 && (
                  <>
                    {/* Masaüstü Ok */}
                    <div className="hidden md:flex absolute top-1/2 -right-10 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 rounded-full bg-[#0a0f1d] border border-white/10 text-cyan-400 shadow-lg group-hover:border-cyan-500/50">
                      <ArrowRight size={16} />
                    </div>
                    
                    {/* Mobil Ok */}
                    <div className="md:hidden flex justify-center mt-6">
                      <ChevronDown size={24} className="text-cyan-500/50 animate-bounce" />
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}