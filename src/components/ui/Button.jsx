import { motion } from "framer-motion";

function Button({ children, variant = "primary", size = "md", className = "", ...props }) {

  const baseStyles = "relative overflow-hidden font-black uppercase tracking-wider rounded-xl md:rounded-2xl transition-all duration-300 border flex items-center justify-center gap-2 touch-manipulation active:scale-95";
  
  const variants = {
    primary: "bg-linear-to-r from-cyan-500 to-blue-600 text-white border-white/20 shadow-[0_10px_20px_rgba(6,182,212,0.3)] active:shadow-[0_0_30px_rgba(6,182,212,0.5)] md:hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] md:hover:-translate-y-1",
    secondary: "bg-white/10 backdrop-blur-md text-white border-white/20 active:bg-white/20 active:border-white/40 md:hover:bg-white/20 md:hover:border-white/40 shadow-lg",
    outline: "bg-transparent text-white border-white/30 active:bg-white/10 active:border-white/60 md:hover:bg-white/10 md:hover:border-white/60"
  };
  

  const sizes = {
    sm: "px-4 py-2 text-[10px] md:text-xs",
    md: "px-6 py-3.5 md:py-3 text-xs md:text-sm",
    lg: "px-8 py-4.5 md:py-4 text-sm md:text-base"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
 
      <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

export default Button;