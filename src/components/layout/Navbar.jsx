import { User, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-1000 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-3xl border border-white/30 rounded-2xl px-4 md:px-6 py-3.5 md:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,255,255,0.1)_inset]">

            
            <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-black/10 rounded-2xl pointer-events-none"></div>
            
            <div className="relative flex items-center justify-between gap-2">
              
              {/* Logo */}
              <div className="pointer-events-none select-none shrink-0">
                <img
                  src="/seaglogo.png"
                  alt="SeaGlass Logo"
                  className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]"
                />
              </div>

              {/* Navigasyon Bağlantıları */}
              <div className="hidden md:flex items-center gap-10">
                {['AnaSayfa', 'Avantajlar', 'Kartlar', 'İletişim'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-[13px] font-bold uppercase tracking-widest text-white/90 hover:text-white transition-all duration-300 active:text-cyan-400 group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                  </a>
                ))}
              </div>

              {/* Sağ Taraf Butonları */}
              <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
                
                {/* Müşteri Ol */}
                <button className="cursor-pointer relative overflow-hidden flex items-center justify-center whitespace-nowrap px-3 md:px-5 py-2 md:py-2.5 bg-linear-to-br from-cyan-500/90 to-blue-600/90 text-white text-[9px] md:text-[10px] font-black uppercase tracking-wide md:tracking-[0.2em] rounded-lg md:rounded-xl border border-white/40 transition-all duration-300 shadow-[0_4px_20px_rgba(6,182,212,0.4),0_1px_4px_rgba(255,255,255,0.2)_inset] active:shadow-[0_2px_12px_rgba(6,182,212,0.5),0_2px_6px_rgba(255,255,255,0.3)_inset] touch-manipulation group active:scale-95">
                  <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity"></div>
                  <span className="relative z-10">Müşteri Ol</span>
                </button>

                {/* Giriş Yap - pc */}
                <button className="cursor-pointer hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/20 hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 backdrop-blur-2xl group shadow-[0_4px_16px_rgba(255,255,255,0.2)] active:scale-95">
                  <User
                    size={20}
                    className="text-gray-700 group-hover:scale-110 group-active:scale-110 transition-transform"
                  />
                  <span>Giriş Yap</span>
                </button>

                {/* Mobil Menü Butonu */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden w-9 h-9 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 active:bg-white/20 transition-all touch-manipulation shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.1),0_1px_3px_rgba(255,255,255,0.1)_inset]"
                >
                  {isMobileMenuOpen ? (
                    <X size={18} className="text-white" />
                  ) : (
                    <Menu size={18} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobil Menü */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay fixed inset-0 z-999 bg-black/50 backdrop-blur-md md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="mobile-menu-content fixed top-24 left-4 right-4 bg-white/10 backdrop-blur-3xl border border-white/30 rounded-2xl p-6 shadow-[0_20px_64px_rgba(0,0,0,0.3),0_2px_8px_rgba(255,255,255,0.1)_inset]"
            onClick={(e) => e.stopPropagation()}
          >
        
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-black/10 rounded-2xl pointer-events-none"></div>
            
            <div className="relative">

              {/* Mobil Navigasyon Bağlantıları */}
              <div className="flex flex-col gap-4 mb-6">
                {['AnaSayfa', 'Avantajlar', 'Kartlar', 'İletişim'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-bold uppercase tracking-wider text-white/90 active:text-cyan-400 transition-all py-3 px-4 rounded-xl bg-white/5 active:bg-white/15 border border-white/20 active:border-white/40 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.1),0_1px_3px_rgba(255,255,255,0.05)_inset] active:shadow-[0_4px_16px_rgba(0,0,0,0.15),0_2px_6px_rgba(255,255,255,0.1)_inset]"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobil Giriş Yap Butonu */}
              <button 
                className="cursor-pointer w-full flex items-center justify-center gap-3 px-5 py-3.5 bg-white/10 active:bg-white/20 text-white text-sm font-black uppercase tracking-[0.2em] rounded-xl border border-white/30 active:border-cyan-400/60 transition-all backdrop-blur-2xl shadow-[0_4px_16px_rgba(0,0,0,0.15),0_1px_4px_rgba(255,255,255,0.1)_inset] active:shadow-[0_6px_24px_rgba(0,0,0,0.2),0_2px_6px_rgba(255,255,255,0.15)_inset] touch-manipulation active:scale-98"
              >
                <User size={20} className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                <span>Giriş Yap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;