import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CELLS from 'vanta/dist/vanta.cells.min'
import CreditCardShowcase from './components/cards/CreditCardShowcase' 
import Badge from './components/ui/Badge'

function App() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {

 
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CELLS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x0e9393,
          color2: 0x35f2e4,
          speed: 0.80,
        })
      )
    }
  
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (

    <div 
      ref={vantaRef} 
      className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-black overflow-hidden"
    >
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        
        {/*Rozetler */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge variant="popular">Premium Access</Badge>
          <Badge variant="discount">%20 İndirim</Badge>
          <Badge variant="success">SeaCard Özel</Badge>
        </div>

        {/* Orta Kısım */}
        <div className="w-full max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <CreditCardShowcase />
        </div>

        {/* Alt Kısım */}
        <div className="mt-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            SeaCard Platinum
          </h1>
          <p className="text-cyan-300 opacity-70 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold leading-relaxed">
            Geleceğin Tatil Ayrıcalıkları Dünyası
          </p>
        </div>

      </div>

    </div>
  )
}

export default App