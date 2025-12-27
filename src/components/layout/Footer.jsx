import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { socialLinks } from '../../utils/constants';

const IconMap = { Instagram, Twitter, Facebook, Linkedin };

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl pt-16 pb-8 mt-20 md:mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo ve hakkında  */}
          <div className="space-y-6 text-center md:text-left">
            <img 
              src="/seaglogo.png" 
              alt="SeaGlass Logo" 
              className="h-16 md:h-20 w-auto object-contain mx-auto md:mx-0 md:-ml-14"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              SeaGlass ile geleceğin dijital bankacılık deneyimi. Para sorunu olmadan, indirimlerle unutulmaz tatiller sizin olsun!
            </p>
          </div>

          {/* Linkler */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-cyan-400">Kurumsal</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li className="active:text-cyan-400 md:hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider">Hakkımızda</li>
              <li className="active:text-cyan-400 md:hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider">Güvenlik</li>
              <li className="active:text-cyan-400 md:hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider">Sözleşmeler</li>
            </ul>
          </div>

          {/* Yardım */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-cyan-400">Destek</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li className="active:text-cyan-400 md:hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider">SSS</li>
              <li className="active:text-cyan-400 md:hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider">İletişim</li>
              <li className="active:text-cyan-400 md:hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider">Şubeler</li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 uppercase tracking-[0.2em] text-[10px] text-cyan-400">Bizi Takip Edin</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const IconComp = IconMap[social.icon];
                return (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center active:bg-cyan-400 active:text-black active:scale-110 md:hover:bg-cyan-400 md:hover:text-black md:hover:scale-110 transition-all duration-300 touch-manipulation"
                  >
                    {IconComp && <IconComp size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">
          © 2025 SeaGlass Digital Banking. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}