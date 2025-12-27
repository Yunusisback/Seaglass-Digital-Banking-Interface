import { useState } from 'react';
import GlassCard from "../cards/GlassCard";
import Button from "../ui/Button";
import { Sparkles, User, Mail, Phone, Send, ChevronDown } from "lucide-react";

const cardOptions = [
  { value: "classic", label: "Classic" },
  { value: "gold", label: "Gold" },
  { value: "platinum", label: "Platinum" }
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardType: "gold"
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectedOption = cardOptions.find(opt => opt.value === formData.cardType);


  const handleOptionClick = (value) => {
    setFormData({ ...formData, cardType: value });
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop  */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-90 md:hidden bg-black/20"
          onMouseDown={() => setIsOpen(false)}
          onTouchStart={() => setIsOpen(false)}
        />
      )}

      <GlassCard className="w-full max-w-5xl p-4 sm:p-6 md:p-8 border-white/30 bg-black/60 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] relative z-50">
      
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 border-b border-white/20 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <Sparkles size={20} className="text-cyan-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white italic tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Hemen Başvur
              </h2>
              <p className="text-[10px] sm:text-[11px] text-cyan-400 uppercase tracking-[0.2em] font-black drop-shadow-sm">
                Hızlı Onay Sistemi
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          
          {/* Input alanları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative group">
              <User size={18} className="absolute left-3 top-[2.4rem] sm:top-10 text-cyan-400 z-10 pointer-events-none" />
              <label className="block text-[10px] sm:text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
                Ad Soyad
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Adınız Soyadınız"
                className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white placeholder-white/40 focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all font-bold shadow-inner active:border-cyan-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative group">
              <Mail size={18} className="absolute left-3 top-[2.4rem] sm:top-10 text-cyan-400 z-10 pointer-events-none" />
              <label className="block text-[10px] sm:text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
                E-posta
              </label>
              <input
                type="email"
                name="email"
                placeholder="ornek@mail.com"
                className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white placeholder-white/40 focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all font-bold shadow-inner active:border-cyan-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative group">
              <Phone size={18} className="absolute left-3 top-[2.4rem] sm:top-10 text-cyan-400 z-10 pointer-events-none" />
              <label className="block text-[10px] sm:text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="05xx..."
                className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white placeholder-white/40 focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all font-bold shadow-inner active:border-cyan-400"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-end border-t border-white/20 pt-6 sm:pt-8">
            <div className="md:col-span-1 relative z-100">
              <label className="block text-[10px] sm:text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
                Kart Tipi
              </label>

              <div className="relative">
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                  className="cursor-pointer w-full px-4 py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white font-bold flex items-center justify-between focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all shadow-inner active:bg-black/40 active:border-cyan-400 active:scale-98 z-100 relative touch-manipulation select-none"
                >
                  <span>{selectedOption.label}</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown menü  */}
                {isOpen && (
                  <div className="absolute top-full mt-2 w-full rounded-xl bg-black/95 border-2 border-white/20 shadow-2xl overflow-hidden z-110 backdrop-blur-xl">
                    {cardOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          handleOptionClick(option.value);
                        }}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          handleOptionClick(option.value);
                        }}
                        className={`cursor-pointer w-full px-4 py-3.5 text-left text-sm font-bold transition-all active:scale-98 touch-manipulation select-none ${
                          formData.cardType === option.value
                            ? 'bg-cyan-400/30 text-cyan-400 border-l-4 border-cyan-400'
                            : 'text-white active:bg-white/10'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-3">
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="relative w-full overflow-hidden rounded-xl bg-cyan-400 py-3.5 sm:py-4 font-black uppercase tracking-wider text-black transition-all duration-300 active:bg-cyan-300 active:shadow-[0_0_30px_10px_rgba(34,211,238,0.6)] active:scale-98 flex items-center justify-center gap-3 group touch-manipulation select-none cursor-pointer"
              >
                <span>BAŞVUR</span>
                <Send size={18} className="group-active:translate-x-1 transition-transform" />
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[0_0_40px_#22d3ee] transition-opacity duration-500 group-active:opacity-100" />
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-cyan-200 to-transparent -translate-x-full transition-transform duration-700 group-active:translate-x-full" />
              </button>
            </div>
          </div>
        </div>
      </GlassCard>
    </>
  );
}