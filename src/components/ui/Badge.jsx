function Badge({ children, variant = "default", className = "" }) {
  const variants = {
 
    default: "bg-white/10 text-white border-white/30",
    
 
    discount: "bg-orange-500/20 text-orange-200 border-orange-400/40 shadow-orange-500/10",
    
   
    popular: "bg-blue-500/20 text-blue-100 border-blue-400/40 shadow-blue-500/10",
    
 
    success: "bg-emerald-500/20 text-emerald-100 border-emerald-400/40 shadow-emerald-500/10"
  };

  return (
    <span className={`
      inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em]
      backdrop-blur-md border shadow-xl transition-all duration-300
      hover:scale-105 hover:bg-white/5 cursor-default select-none
      ${variants[variant]}
      ${className}
    `}>

      <span className="w-1 h-1 rounded-full bg-white/40 mr-2 animate-pulse" />
      {children}
    </span>
  );
}

export default Badge;