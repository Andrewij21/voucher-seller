import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket } from "lucide-react";

interface VoucherCardBody {
  id: number;
  name: string;
  discount: string;
  type: string;
  status: string;
  period: {
    start: string;
    end: string;
  };
  targetProduct: string;
  quota: {
    used: number;
    total: number;
  };
  targetVoucher: string;
}

export default function VoucherCard({ data }: { data: VoucherCardBody }) {
  return (
    <Card className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-md space-y-2">
      {/* Header */}
      <CardHeader className="p-0 flex flex-row items-center space-x-4">
        <div className="flex-shrink-0 rounded-lg bg-blue-100 p-2 items-center justify-center">
          <Ticket className="w-16 h-16" />
        </div>
        <div>
          <CardTitle className="text-lg capitalize">{data.name}</CardTitle>
          <CardDescription className="capitalize">
            {data.type} <span className="text-black">{data.discount}</span>
          </CardDescription>
          <Badge
            variant={data.status === "aktif" ? "success" : "warning"}
            className="mt-2 min-w-3.5 justify-center py-1 capitalize"
          >
            {data.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm font-medium text-muted-foreground">Periode</p>
        <p className="text-sm text-primary font-semibold">
          {data.period.start} s/d {data.period.end}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center p-0">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Produk</p>
          <p className="text-sm text-primary font-semibold">
            {data.targetProduct}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Kuota Terpakai
          </p>
          <p className="text-sm text-primary font-semibold">
            {data.quota.used}/{data.quota.total}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Target Voucher
          </p>
          <p className="text-sm text-primary font-semibold">
            {data.targetVoucher}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
