import { Menu, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">

        {/* Navbar Ana Gövde */}
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-4 md:px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="pointer-events-none select-none">
              <img 
                src="/seaglogo.png" 
                alt="SeaGlass Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Nav linkleri  */}
            <div className="hidden md:flex items-center gap-10">
              {['AnaSayfa', 'Avantajlar', 'Kartlar', 'İletişim'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] font-bold uppercase tracking-widest text-white/80 hover:text-cyan-800 transition-all duration-300 active:text-cyan-600"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Sağ Taraf  */}
            <div className="flex items-center gap-2 md:gap-3">
              
              {/*  Hesabım Butonu */}
              <button className="cursor-pointer hidden md:flex items-center gap-2 px-5 py-2.5 bg-black/50 hover:bg-black/70 active:bg-black/70 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/10 hover:border-cyan-400/50 active:border-cyan-400/50 transition-all duration-500 backdrop-blur-2xl group shadow-xl active:scale-95">
                <User 
                  size={20} 
                  className="text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.9)] group-hover:scale-110 group-active:scale-110 transition-transform" 
                />
                <span className="group-hover:text-cyan-300 group-active:text-cyan-300 transition-colors">Hesabım</span>
              </button>

              {/*Profil İkonu */}
              <div className="md:hidden w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 cursor-pointer active:scale-90 active:bg-black/60 transition-all touch-manipulation">
                <User size={20} className="text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
              </div>

              {/*  Menü */}
              <button className="md:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 active:bg-white/10 active:scale-90 transition-all touch-manipulation">
                <Menu size={20} className="text-white" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;