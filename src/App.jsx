import { Wallet, Activity, Target, Plus } from "lucide-react";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";
import StatCard from "./components/StatCard";
import CreditCard from "./components/CreditCard";
import GlassCard from "./components/cards/GlassCard";
import QuickActions from "./components/dashboard/QuickActions";
import SavingsGoal from "./components/dashboard/SavingsGoal";
import TransactionList from "./components/dashboard/TransactionList";
import MarketOverview from "./components/dashboard/MarketOverview";
import { mockTransactions } from "./utils/constants";

// Grafik verileri
const chartData = {
  totalBalance: [{ val: 20 }, { val: 45 }, { val: 30 }, { val: 55 }, { val: 40 }, { val: 65 }, { val: 50 }],
  monthlyProfit: [{ val: 40 }, { val: 25 }, { val: 35 }, { val: 15 }, { val: 30 }, { val: 20 }, { val: 35 }],
  investments: [{ val: 10 }, { val: 60 }, { val: 30 }, { val: 70 }, { val: 40 }, { val: 80 }, { val: 60 }]
};

function App() {
  return (
    <Layout>

      {/* Sol dashboard */}
      <div className="flex-2 flex flex-col gap-6 overflow-y-auto pr-4 custom-scrollbar">
        <Header />

        {/* Üst istatistik kartları */}
        <div className="grid grid-cols-3 gap-6 min-h-50">
          <StatCard title="Total Balance" value="$124,563" trend={12.5} data={chartData.totalBalance} icon={Wallet} />
          <StatCard title="Monthly Profit" value="$8,340" trend={-2.4} data={chartData.monthlyProfit} icon={Activity} color="#ef4444" />
          <StatCard title="Investments" value="$42,500" trend={8.1} data={chartData.investments} icon={Target} color="#3b82f6" />
        </div>

        {/* Orta bölüm */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 min-h-100">
          <div className="flex flex-col gap-6">

            {/* Hızlı transfer */}
            <GlassCard>
              <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-4">Quick Transfer</h3>
              <QuickActions />
            </GlassCard>

            {/* Tasarruf hedefi */}
            <SavingsGoal />
          </div>

          {/* İşlem listesi */}
          <TransactionList transactions={mockTransactions} />
        </div>
      </div>

      {/*  kartlar ve detaylar */}
      <aside className="w-95 flex flex-col gap-6 overflow-y-auto pr-4 custom-scrollbar">

        {/* Başlık */}
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">My Cards</h3>
          <Plus size={20} className="text-yellow-400 cursor-pointer hover:rotate-90 transition-transform" />
        </div>

        {/* Kredi kartı */}
        <CreditCard />

        {/* Piyasa özeti */}
        <MarketOverview />

        {/* Varlık ekleme butonu */}
        <button className="w-full py-4 rounded-2xl bg-linear-to-r from-yellow-400 to-yellow-500 text-black font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all hover:-translate-y-1">
          Add New Asset
        </button>
      </aside>
    </Layout>
  );
}

export default App;