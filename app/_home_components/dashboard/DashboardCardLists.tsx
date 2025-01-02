import DashboardCard from "./DashboardCard";

export default function DashboardCardLists() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-2">
      <DashboardCard title="Pesanan Baru" amount="10" />
      <DashboardCard title="pembatalan" amount="10" />
      <DashboardCard title="pengembalian" amount="10" />
      <DashboardCard title="penilaian perlu dibalas" amount="10" />
    </div>
  );
}
