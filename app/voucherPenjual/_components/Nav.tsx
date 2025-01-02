"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav className=" py-2 px-4 bg-red-600 text-white">
      <div className="flex gap-x-2">
        <ChevronLeft className="h-8 w-8 bg-white text-red-700 rounded-full" />
        <h1 className="font-bold capitalize text-2xl mb-4">Voucher penjual</h1>
      </div>
      <div className="flex justify-evenly items-center gap-x-2">
        {/* Aktif Button */}
        <Button
          asChild
          className={`w-full bg-transparent shadow-none hover:bg-transparent hover:text-white ${
            pathName === "/voucherPenjual/aktif"
              ? "border-b-2 border-white"
              : ""
          } rounded-none`}
        >
          <Link
            href="/voucherPenjual/aktif"
            className="font-bold text-white hover:decoration-transparent"
          >
            Aktif
          </Link>
        </Button>

        <Separator orientation="vertical" className="border-white border h-7" />

        {/* Riwayat Button */}
        <Button
          asChild
          className={`w-full bg-transparent shadow-none hover:bg-transparent hover:text-white hover:border-b-2 border-white ${
            pathName === "/voucherPenjual/riwayat"
              ? "border-b-2 border-white"
              : ""
          } rounded-none`}
        >
          <Link
            href="/voucherPenjual/riwayat"
            className="font-bold text-white hover:decoration-transparent"
          >
            Riwayat
          </Link>
        </Button>
      </div>
    </nav>
  );
}
