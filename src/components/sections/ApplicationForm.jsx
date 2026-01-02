import { useState, useRef, useEffect, memo, useCallback, useMemo } from 'react';
import GlassCard from "../cards/GlassCard";
import { Sparkles, User, Mail, Phone, Send, ChevronDown, ShieldCheck, CreditCard } from "lucide-react";

const cardOptions = [
  { value: "classic", label: "Classic Kart", color: "from-gray-400 to-gray-600" },
  { value: "gold", label: "Gold Privilege", color: "from-yellow-400 to-yellow-600" },
  { value: "platinum", label: "Platinum Elite", color: "from-slate-300 to-slate-500" }
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    tcNo: "",
    email: "",
    phone: "",
    cardType: "gold"
  });

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dışarı tıklama
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Form değişim yönetimi
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    let finalValue = value;

    // T.C. No ve Telefon için sadece rakam izni ve uzunluk sınırı
    if (name === "tcNo" || name === "phone") {
      finalValue = value.replace(/\D/g, ""); 
      
      if (name === "tcNo") {
        finalValue = finalValue.slice(0, 11);
      }
      if (name === "phone") {
        finalValue = finalValue.slice(0, 11); 
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  }, []);

  // Seçili kartı bulma 
  const selectedOption = useMemo(() => 
    cardOptions.find(opt => opt.value === formData.cardType), 
    [formData.cardType]
  );

  return (
    <GlassCard className="w-full max-w-5xl p-6 md:p-10 border border-white/10 bg-gray-900/30 backdrop-blur-xl shadow-[0_0_100px_-20px_rgba(34,211,238,0.1)] rounded-3xl relative z-10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 border-b border-white/10 pb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg">
              <Sparkles size={24} className="text-cyan-400" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">Hemen Başvur</h2>
            <div className="flex items-center gap-2 mt-1">
              <ShieldCheck size={12} className="text-emerald-400" />
              <p className="text-[11px] text-gray-300 font-medium tracking-wide uppercase">Güvenli Altyapı</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${selectedOption.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
          <span className="text-xs text-white/90 font-medium">{selectedOption.label} Seçildi</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8 relative z-10 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Ad Soyad" name="fullName" icon={<User size={18} />} value={formData.fullName} onChange={handleChange} />
          <InputField label="T.C. No" name="tcNo" icon={<CreditCard size={18} />} value={formData.tcNo} onChange={handleChange} />
          <InputField label="E-posta" name="email" icon={<Mail size={18} />} value={formData.email} onChange={handleChange} type="email" />
          <InputField label="Telefon" name="phone" icon={<Phone size={18} />} value={formData.phone} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-white/5 items-center">

          {/* Kart Seçimi  */}
          <div className="md:col-span-1 relative z-50" ref={dropdownRef}>
            <span className="block text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-widest pl-1">Kart Tercihi</span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-full cursor-pointer px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white font-medium flex items-center justify-between hover:bg-white/10 transition-all ${isOpen ? 'ring-1 ring-cyan-400 border-cyan-400/50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-linear-to-r ${selectedOption.color}`} />
                  <span>{selectedOption.label}</span>
                </div>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {isOpen && (
                <div className="absolute bottom-full mb-2 w-full rounded-xl bg-gray-950/95 border border-white/20 shadow-2xl overflow-hidden z-60 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
                  {cardOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => { setFormData(prev => ({ ...prev, cardType: option.value })); setIsOpen(false); }}
                      className={`w-full cursor-pointer px-4 py-3 flex items-center gap-3 text-sm transition-colors ${formData.cardType === option.value ? 'bg-white/10 text-white font-semibold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                      <div className={`w-3 h-3 rounded-sm bg-linear-to-br ${option.color}`} />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Gönder Butonu */}
          <div className="md:col-span-3">
            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-full group cursor-pointer shadow-[0_4px_20px_-5px_rgba(6,182,212,0.4)] active:scale-[0.98] transition-all duration-200"
            >
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
              <div className="relative px-6 py-4 flex items-center justify-center gap-3">
                <span className="font-bold text-white tracking-widest uppercase text-sm">Başvuruyu Tamamla</span>
                <Send size={18} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </form>
    </GlassCard>
  );
}


const InputField = memo(({ label, name, value, icon, onChange, type = "text" }) => {
  const [isFocused, setIsFocused] = useState(false);

 
  const isNumeric = name === "tcNo" || name === "phone";

  const labelClasses = `absolute left-3 transition-all duration-300 pointer-events-none z-20 ${
    isFocused || value
      ? '-top-2.5 text-[10px] text-cyan-300 bg-gray-900 px-2 rounded-full border border-cyan-500/30'
      : 'top-3.5 text-sm text-gray-200'
  }`;

  return (
    <div className="relative group">
      <label className={labelClasses}>{label}</label>
      <div className={`relative transition-all duration-300 rounded-xl overflow-hidden ${isFocused ? 'shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]' : ''}`}>
        <input
          type={type}
          name={name}
          value={value}
          inputMode={isNumeric ? "numeric" : "text"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-4 pr-10 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:bg-black/20 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all font-medium"
          onChange={onChange}
          required
        />
        <div className={`absolute right-4 top-3.5 transition-colors duration-300 ${isFocused ? 'text-cyan-400' : 'text-gray-200'}`}>
          {icon}
        </div>
      </div>
    </div>
  );
});