import VoucherCard from "./VoucherCard";
interface VoucherCardListsProps {
  vouchers: {
    id: number;
    name: string;
    discount: string;
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
    type: string;
  }[];
}
export default function VoucherCardLists({ vouchers }: VoucherCardListsProps) {
  return (
    <div className="flex flex-col gap-y-2">
      {vouchers.length > 0 ? (
        vouchers.map((item, i) => <VoucherCard key={i} data={item} />)
      ) : (
        <div className="text-center">
          <h3 className="font-semibold capitalize text-muted-foreground">
            Tidak ada voucher yang sesuai
          </h3>
        </div>
      )}
    </div>
  );
}
