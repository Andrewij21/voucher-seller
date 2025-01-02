import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardCardBody {
  title: string;
  amount: string;
  stats: number;
}

export default function StatisticsCard({
  title,
  amount,
  stats,
}: DashboardCardBody) {
  return (
    <Card className="min-w-[200px]">
      <CardHeader className="py-4 space-y-2">
        <CardDescription className="text-primary ">{title}</CardDescription>
        <CardTitle className="">{amount}</CardTitle>
        <CardDescription className="">
          <span
            className={`${
              stats > 20 ? "text-green-400" : "text-red-400"
            } mr-1 font-semibold`}
          >
            {stats > 20 ? "+" : "-"}
            {stats}
          </span>
          dari 30 hari terakhir
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
