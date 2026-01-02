import { useState, useEffect } from "react";
import { User, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AnaSayfa", href: "#home" },
    { name: "Avantajlar", href: "#benefits" },
    { name: "Kartlar", href: "#cards" },
    { name: "İletişim", href: "#contact" },
  ];

  const navContainerClasses = `relative transition-all duration-500 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl flex items-center justify-between py-2 px-4 ${
    scrolled 
      ? "bg-cyan-950/60 border-cyan-500/40 md:px-6" 
      : "bg-white/5 border-white/10 md:px-8"
  }`;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-500 px-3 md:px-8 ${scrolled ? "py-2" : "py-4 md:py-6"}`}>
        <div className="max-w-7xl mx-auto">
          <div className={navContainerClasses}>
            
            {/* Üst Kenar Işığı */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0 cursor-default">
              <img
                src="/seaglogo.png"
                alt="SeaGlass Logo"
                className={`transition-all duration-500 object-contain ${scrolled ? "h-8 md:h-10" : "h-10 md:h-14"}`}
              />
            </div>

            {/* Masaüstü Navigasyon */}
            <div className="hidden lg:flex items-center gap-8 bg-white/5 rounded-full px-6 py-2 border border-white/5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-[10px] font-black uppercase tracking-widest text-cyan-50/80 hover:text-white transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full shadow-[0_0_8px_#00ffff]" />
                </a>
              ))}
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex items-center gap-2 md:gap-3">
              <button className="btn-secondary hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all active:scale-95 shadow-lg cursor-pointer">
                <User size={14} className="text-cyan-300" />
                <span>Giriş Yap</span>
              </button>

              <button className="relative group overflow-hidden px-6 md:px-7 py-2.5 md:py-3.5 bg-white/10 md:bg-white rounded-full border border-white/20 md:border-0 transition-all active:scale-95 shadow-lg md:shadow-[0_0_20px_rgba(255,255,255,0.2)] shrink-0 cursor-pointer">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="relative z-10 flex items-center gap-1.5 text-white md:text-cyan-950 md:group-hover:text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-colors duration-300">
                  <span className="leading-tight">Müşteri Ol</span>
                  <ChevronRight size={12} className="hidden md:block" />
                </span>
              </button>

              {/* Mobil Menü Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 active:bg-cyan-500/20 transition-all cursor-pointer"
              >
                {isMobileMenuOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobil Menü Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 bg-black/80 backdrop-blur-xl lg:hidden flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-cyan-950/60 border border-cyan-500/30 rounded-[3rem] p-8 relative overflow-hidden text-center shadow-2xl"
            >
              <img src="/seaglogo.png" alt="Logo" className="h-12 mx-auto mb-8" />
              <div className="flex flex-col gap-4">
                {navLinks.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-white hover:text-cyan-400 py-3 border-b border-white/5 cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <button className="w-full py-4 rounded-2xl bg-white text-cyan-950 font-black uppercase text-xs shadow-lg hover:bg-cyan-50 transition-colors active:scale-95 cursor-pointer">
                  Giriş Yap
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-2xl bg-white/5 text-white border border-white/10 font-bold uppercase text-[10px] hover:bg-white/10 transition-colors active:scale-95 cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;