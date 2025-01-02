import DashboardCardLists from "./StatisticsCardLists";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Statistics() {
  return (
    <div id="dashboard" className="py-4 space-y-4">
      <div>
        <h1 className="font-bold">Statistik merchantmu</h1>
      </div>
      <DashboardCardLists />
      <div className="flex justify-end">
        <Button variant="link" className="space-x-1 font-bold w-fit">
          Lihat selengkapnya <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
