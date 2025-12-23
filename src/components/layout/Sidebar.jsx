import {
  LayoutDashboard, CreditCard as CardIcon, Wallet, FileText,
  Settings, LogOut, Activity
} from "lucide-react";

function Sidebar() {

  const navItems = [
    { icon: CardIcon, active: false },
    { icon: Wallet, active: false },
    { icon: Activity, active: false },
    { icon: FileText, active: false },
    { icon: Settings, active: false },
  ];

  return (
    <aside className="h-[85%] my-auto w-16 bg-white/3 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex flex-col items-center py-8 gap-8 shadow-2xl relative z-20">

      {/* Logo */}
      <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.4)]">
        <LayoutDashboard size={25} className="text-black" />
      </div>

      {/* Navigasyon menüsü */}
      <nav className="flex flex-col gap-15 w-full px-4">
        {navItems.map((item, i) => (
          <div key={i} className="relative group flex justify-center cursor-pointer">

            
            <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <item.icon
              size={23}
              className="text-gray-500 group-hover:text-yellow-400 transition-all duration-300 transform group-hover:scale-110 relative z-10"
            />
            
            {/* Aktif gösterge çubuğu */}
            {item.active && <div className="absolute -right-4 w-1 h-6 bg-yellow-400 rounded-l-full" />}
          </div>
        ))}
      </nav>

      {/* Çıkış butonu */}
      <div className="mt-auto group cursor-pointer">
        <div className="p-3 rounded-full hover:bg-red-500/10 transition-colors">
          <LogOut size={24} className="text-gray-600 group-hover:text-red-400 transition-colors" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;