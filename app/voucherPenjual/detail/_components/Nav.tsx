import { Separator } from "@radix-ui/react-separator";
import { ChevronLeft } from "lucide-react";
import StepIndicator from "./StepperIndicator";
import Link from "next/link";

interface NavProps {
  step: number;
}

export default function Nav({ step }: NavProps) {
  return (
    <nav className="py-2 px-4 flex flex-col justify-between items-start bg-red-700 text-white space-y-4">
      <div className="flex gap-x-2 items-center">
        <Link href="/voucherPenjual/aktif">
          <ChevronLeft className="h-8 w-8 bg-white text-red-700 rounded-full" />
        </Link>
        <h1 className="font-bold capitalize text-xl">Detail voucher</h1>
      </div>
      <Separator />
      <div className="flex justify-between w-full items-center">
        <p className="font-semibold text-lg">
          {step === 1 ? "Daftar Voucher" : "Daftar Pesanan"}
        </p>
        <StepIndicator step={step} />
      </div>
    </nav>
  );
}
