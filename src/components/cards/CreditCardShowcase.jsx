import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Wifi } from "lucide-react";

function CreditCardShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
 
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);


  const labelClass = "text-[6px] sm:text-[7px] md:text-[8px] text-white/50 uppercase tracking-widest mb-0.5 sm:mb-1";
  const valueClass = "text-[9px] sm:text-[10px] md:text-xs text-white font-semibold uppercase tracking-wider";

  return (
    <div className="w-full -mr-1 max-w-sm sm:max-w-md mx-auto px-4 sm:px-0 group">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={2500}
        trackOnWindow={isMobile}
        glareEnable={!isMobile}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        className="rounded-3xl sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-active:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="relative aspect-[1.586/1] w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          
          {/* Arkaplan Katmanları */}
          <div className="absolute inset-0 backdrop-blur-[20px] bg-white/5 z-0" />
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-blue-600/15 z-0" />

          <div className="relative z-10 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between select-none">
            
            {/* Üst Kısım */}
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">ꜱᴇᴀɢʟᴀꜱꜱ</h3>
              <div className="opacity-90 rotate-90">
                <Wifi size={28} className="text-white sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={2.5} />
              </div>
            </div>

            {/* Çip */}
            <div className="flex items-center justify-start mt-1 sm:mt-2 md:-mt-6">
              <div className="w-11 h-9 sm:w-14 sm:h-11 md:w-16 md:h-12 rounded-md sm:rounded-lg bg-linear-to-br from-yellow-200 via-yellow-500 to-amber-600 p-px relative overflow-hidden shadow-inner">
                <div className="w-full h-full border border-black/20 rounded-md sm:rounded-lg relative">
                  <div className="absolute top-0 left-1/2 w-px h-full bg-black/20" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-black/20" />
                  <div className="absolute inset-1.5 sm:inset-2 border border-black/10 rounded-sm sm:rounded-md" />
                </div>
              </div>
            </div>

            {/* Alt Kısım bilgiler */}
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="text-base sm:text-xl md:text-2xl font-mono text-white font-medium tracking-wider sm:tracking-widest md:tracking-[0.15em] drop-shadow-lg">
                6524 9578 9576 9508
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8">
                  <div>
                    <p className={labelClass}>Kart Sahibi</p>
                    <p className={valueClass}>EMMA TAKUREEA</p>
                  </div>
                  <div>
                    <p className={labelClass}>VALID THRU</p>
                    <p className={valueClass}>12 / 28</p>
                  </div>
                </div>

                <div className="relative">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black italic text-white/60 tracking-tighter select-none">
                    VISA
                  </span>
                  <div className="absolute -inset-1 bg-white/5 blur-xl rounded-full group-active:bg-white/10 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Dinamik Efektler-*/}
          <div className="absolute inset-0 rounded-3xl sm:rounded-[2.5rem] border-2 border-white/15 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700 pointer-events-none" />

        </div>
      </Tilt>
    </div>
  );
}

export default CreditCardShowcase;