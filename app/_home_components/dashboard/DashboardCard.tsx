import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardCardBody {
  title: string;
  amount: string;
}

export default function DashboardCard({ title, amount }: DashboardCardBody) {
  return (
    <Card className="border-red-600 border-2 overflow-clip">
      <CardHeader className="text-center p-0">
        <CardTitle className="text-red-600 py-2 capitalize">{title}</CardTitle>
        <CardDescription className="font-bold text-white bg-red-700 py-4 text-2xl">
          {amount}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
