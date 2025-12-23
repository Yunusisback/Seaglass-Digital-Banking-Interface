import { motion } from "framer-motion";
import { MoreHorizontal, ArrowUpRight, ArrowDownLeft, Activity, TrendingUp } from "lucide-react";
import GlassCard from "../cards/GlassCard";

function TransactionList({ transactions }) {

  const iconMap = {
    ArrowUpRight,
    ArrowDownLeft,
    Activity,
    TrendingUp
  };

  return (
    <GlassCard className="h-full flex flex-col">

      {/* Başlık ve ayarlar butonu */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-white tracking-tight">Recent Activity</h3>
        <button className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* İşlem listesi */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
        {transactions.map((tx, i) => {
          const IconComponent = iconMap[tx.icon] || Activity;

          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              key={i}
              className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
            >
              {/* İkon ve işlem detayları */}

              <div className="flex items-center gap-4">

                {/* İşlem ikonu */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 ${tx.type === 'income' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  <IconComponent size={20} />
                </div>

                {/* İşlem bilgileri */}
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">{tx.name}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{tx.date}</p>
                </div>
              </div>

              {/* Tutar */}
              <span className={`text-sm font-bold tracking-tight ${tx.type === 'income' ? 'text-green-400' : 'text-white'}`}>
                {tx.type === 'income' ? '+' : '-'}${tx.amount}
              </span>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}

export default TransactionList;