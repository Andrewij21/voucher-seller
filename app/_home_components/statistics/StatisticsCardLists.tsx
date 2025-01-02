import DashboardCard from "./StatisticsCard";

export default function StatisticsCardLists() {
  return (
    <div className="flex overflow-x-auto gap-4 mb-2">
      <DashboardCard
        title="Potensi penjualan"
        amount="Rp.18.500.000"
        stats={30}
      />
      <DashboardCard title="Produk dilihat" amount="20" stats={16} />
      <DashboardCard title="Produk terjual" amount="2" stats={100} />
    </div>
  );
}
