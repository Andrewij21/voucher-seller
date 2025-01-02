import DashboardCardLists from "./DashboardCardLists";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div id="dashboard" className="py-4 space-y-4">
      <div className="flex gap-x-2">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-bold text-4xl">Hi, Briko</h1>
          <h3 className="mb-2">
            <span className="font-bold mr-1">Aktivitas hari ini</span>
            yang perlu kamu pantau untuk meningkatkan performa toko
          </h3>
        </div>
      </div>
      <DashboardCardLists />
      <div className="flex justify-end">
        <Button variant="link" className="space-x-1 font-bold w-fit">
          Lihat riwayat penjualan <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
