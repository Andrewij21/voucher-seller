import { Settings } from "lucide-react";
import Dashboard from "./_home_components/dashboard/Dashboard";
import Menu from "./_home_components/menu/Menu";
import Statistics from "./_home_components/statistics/Statistics";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <section className="max-w-screen-sm min-h-screen mx-auto">
      <nav className=" py-2 px-4 flex justify-between items-center bg-red-700 text-white">
        <h1 className="font-bold capitalize text-2xl">Muatparts</h1>
        <Settings />
      </nav>
      <div className="px-2">
        <Dashboard />
        <Statistics />
        <Menu />
      </div>
      <BottomBar />
    </section>
  );
}
