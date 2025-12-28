import { useState, useRef, useEffect } from 'react';
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
  const [focusedField, setFocusedField] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    if (e.target.name === "tcNo") {
      const value = e.target.value.replace(/\D/g, "").slice(0, 11);
      setFormData({ ...formData, [e.target.name]: value });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedOption = cardOptions.find(opt => opt.value === formData.cardType);

  const handleOptionClick = (value) => {
    setFormData({ ...formData, cardType: value });
    setIsOpen(false);
  };

  return (
    <GlassCard className="w-full max-w-5xl p-6 md:p-10 border border-white/10 bg-gray-900/30 backdrop-blur-xl shadow-[0_0_100px_-20px_rgba(34,211,238,0.1)] rounded-3xl relative z-10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 border-b border-white/10 pb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative p-3 rounded-xl bg-white/5 border border-white/10 shadow-lg">
              <Sparkles size={24} className="text-cyan-400" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">Hemen Başvur</h2>
            <div className="flex items-center gap-2 mt-1">
              <ShieldCheck size={12} className="text-emerald-400" />
              <p className="text-[11px] text-gray-300 font-medium tracking-wide">GÜVENLİ BANKACILIK ALTYAPISI</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${selectedOption.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`}></div>
          <span className="text-xs text-white/90 font-medium">{selectedOption.label} Seçildi</span>
        </div>
      </div>

      {/* form */}
      <form className="flex flex-col gap-8 relative z-10 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Ad Soyad */}
          <InputField
            label="Ad Soyad"
            name="fullName"
            icon={<User size={18} />}
            value={formData.fullName}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            onChange={handleChange}
          />

          {/* T.C. */}
          <InputField
            label="T.C. Kimlik Numarası"
            name="tcNo"
            icon={<CreditCard size={18} />}
            value={formData.tcNo}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            onChange={handleChange}
          />

          {/* E-posta */}
          <InputField
            label="E-posta Adresi"
            name="email"
            icon={<Mail size={18} />}
            value={formData.email}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            onChange={handleChange}
          />

          {/* Telefon */}
          <InputField
            label="Telefon Numarası"
            name="phone"
            icon={<Phone size={18} />}
            value={formData.phone}
            focusedField={focusedField}
            setFocusedField={setFocusedField}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-white/5 items-center">

          {/* Kart Seçimi */}
          <div className="md:col-span-1 relative z-50" ref={dropdownRef}>
            <span className="block text-[10px] font-bold text-gray-400 uppercase mb-2 tracking-widest pl-1">Kart Tercihi</span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-full cursor-pointer px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white font-medium flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all ${isOpen ? 'ring-1 ring-cyan-400 border-cyan-400/50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-linear-to-r ${selectedOption.color}`}></div>
                  <span>{selectedOption.label}</span>
                </div>
                <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {isOpen && (
                <div className="absolute bottom-full mb-2 w-full rounded-md bg-[#0a0a0a]/95 border border-white/20 shadow-md overflow-hidden z-50 backdrop-blur-sm">
                  <div className="p-0">
                    {cardOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleOptionClick(option.value)}
                        className={`w-full cursor-pointer px-4 py-2 flex items-center gap-3 text-sm transition-colors ${formData.cardType === option.value
                            ? 'bg-white/10 text-white font-semibold'
                            : 'text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        <div className={`w-3 h-3 rounded-sm border border-white/20 bg-linear-to-br ${option.color} opacity-80 group-hover:opacity-100 transition-opacity shadow-sm`}></div>
                        <span>{option.label}</span>
                        {formData.cardType === option.value && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Başvuruyu Tamamla Buton */}
          <div className="md:col-span-3">
            <button
              type="button"
              onClick={handleSubmit}
              className="relative w-full overflow-hidden rounded-full group cursor-pointer shadow-[0_4px_20px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_8px_30px_-5px_rgba(6,182,212,0.6)] transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:scale-[1.02]"></div>
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative px-6 py-4 flex items-center justify-center gap-3 bg-transparent transition-transform active:scale-[0.98]">
                <span className="font-bold text-white tracking-widest uppercase text-sm">Başvuruyu Tamamla</span>
                <Send size={18} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </form>
    </GlassCard>
  );
}


function InputField({ label, name, value, icon, focusedField, setFocusedField, onChange }) {
  return (
    <div className="relative group">
      <label className={`absolute left-3 transition-all duration-300 pointer-events-none z-20 ${focusedField === name || value
          ? '-top-2.5 text-[10px] text-cyan-300 bg-gray-900/80 px-2 rounded-full border border-cyan-500/30'
          : 'top-3.5 text-sm text-gray-200'
        }`}>
        {label}
      </label>
      <div className={`relative transition-all duration-300 rounded-xl overflow-hidden ${focusedField === name ? 'shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]' : ''}`}>
        <input
          type={name === 'email' ? 'email' : 'text'}
          name={name}
          value={value}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          className="w-full pl-4 pr-10 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:bg-black/20 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all font-medium"
          onChange={onChange}
          required
        />
        <div className="absolute right-4 top-3.5 text-gray-200 transition-colors duration-300">{icon}</div>
      </div>
    </div>
  );
}
