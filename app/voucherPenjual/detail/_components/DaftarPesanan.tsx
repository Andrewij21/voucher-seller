"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DaftarPesanan({ prev }: { prev: () => void }) {
  return (
    <div>
      {" "}
      <div className="flex gap-x-2">
        <Button
          onClick={prev}
          className="bg-white text-blue-500 w-full border-blue-500 border hover:bg-slate-200 rounded-full"
        >
          Sebelumnya
        </Button>
        <Button
          className="rounded-full bg-blue-500 text-white w-full hover:bg-blue-700"
          asChild
        >
          <Link href="/voucherPenjual/aktif">Kembali ke List</Link>
        </Button>
      </div>
    </div>
  );
}
